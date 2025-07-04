import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  fullName: string;
  email: string;
  mobileNumber: string;
  activities: string[];
  registrationDate: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
}

export interface RegisterData {
  fullName: string;
  email: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
  activities: string[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for existing session on app load
    const savedUser = localStorage.getItem('currentUser');
    const sessionToken = localStorage.getItem('sessionToken');
    
    if (savedUser && sessionToken) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const register = async (userData: RegisterData): Promise<boolean> => {
    try {
      // Get existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      
      // Check if user already exists
      const userExists = existingUsers.find((u: User) => u.email === userData.email);
      if (userExists) {
        throw new Error('User with this email already exists');
      }

      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        fullName: userData.fullName,
        email: userData.email,
        mobileNumber: userData.mobileNumber,
        activities: userData.activities,
        registrationDate: new Date().toISOString()
      };

      // Save user credentials (in real app, password should be hashed)
      const userCredentials = {
        email: userData.email,
        password: userData.password, // In production, this should be hashed
        userId: newUser.id
      };

      // Save to localStorage
      existingUsers.push(newUser);
      const existingCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]');
      existingCredentials.push(userCredentials);
      
      localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
      localStorage.setItem('userCredentials', JSON.stringify(existingCredentials));

      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Get user credentials
      const userCredentials = JSON.parse(localStorage.getItem('userCredentials') || '[]');
      const credential = userCredentials.find((c: any) => c.email === email && c.password === password);
      
      if (!credential) {
        return false;
      }

      // Get user data
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const userData = registeredUsers.find((u: User) => u.id === credential.userId);
      
      if (!userData) {
        return false;
      }

      // Set session
      const sessionToken = Date.now().toString();
      localStorage.setItem('sessionToken', sessionToken);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      
      setUser(userData);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('currentUser');
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateProfile = (userData: Partial<User>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...userData };
    
    // Update in localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const userIndex = registeredUsers.findIndex((u: User) => u.id === user.id);
    if (userIndex !== -1) {
      registeredUsers[userIndex] = updatedUser;
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
    
    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      login,
      register,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
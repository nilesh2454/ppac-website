import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Define the types
export interface Notification {
  id: number;
  title: string;
  date: string;
  description: string;
  isUrgent: boolean;
  file?: File | null;
  fileName?: string;
}

interface NotificationsContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  updateNotification: (notification: Notification) => void;
  deleteNotification: (id: number) => void;
}

// 2. Create mock data
const initialNotifications: Notification[] = [
  {
    id: 1,
    title: 'Pre-Placement Activity 2025',
    date: '2025-01-15',
    description: 'Comprehensive 5-phase placement preparation program',
    isUrgent: true,
  },
  {
    id: 2,
    title: 'Technical Workshop',
    date: '2025-01-10',
    description: 'Data Structures and Algorithms intensive session',
    isUrgent: false,
  },
  {
    id: 3,
    title: 'Company Visit: TCS',
    date: '2025-01-20',
    description: 'Campus recruitment drive for final year students',
    isUrgent: false,
  },
];

// 3. Create the context
const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

// 4. Create the provider component
export const NotificationsProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    setNotifications(prev => [
      ...prev,
      { ...notification, id: Date.now() } // Use timestamp for unique ID
    ]);
  };

  const updateNotification = (updatedNotification: Notification) => {
    setNotifications(prev =>
      prev.map(n => (n.id === updatedNotification.id ? updatedNotification : n))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <NotificationsContext.Provider value={{ notifications, addNotification, updateNotification, deleteNotification }}>
      {children}
    </NotificationsContext.Provider>
  );
};

// 5. Create a custom hook for easy access
export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationsProvider');
  }
  return context;
}; 
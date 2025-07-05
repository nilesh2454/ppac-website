import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
import mainlogo from '@/images/mainlogo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/activities', label: 'Activities' },
    { href: '/placement-info', label: 'Placement Info' },
    { href: '/companies', label: 'Companies' },
    { href: '/study-materials', label: 'Study Materials' },
    { href: '/leaderboard', label: 'Leaderboard' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/alumni', label: 'Alumni' },
    { href: '/notifications', label: 'Notifications' },
  ];

  const handleSwitchToRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <>
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
                <img src={mainlogo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg" />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold gradient-text">PPAC</h1>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-2 xl:space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                      location.pathname === item.href
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-2">
              {isAuthenticated ? (
                <Link to="/profile">
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{user?.fullName?.split(' ')[0] || 'Profile'}</span>
                  </Button>
                </Link>
              ) : (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsLoginOpen(true)}
                >
                  Login
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-screen overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t">
                {isAuthenticated ? (
                  <Link
                    to="/profile"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{user?.fullName || 'Profile'}</span>
                    </div>
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsLoginOpen(true);
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={handleSwitchToRegister}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  );
};

export default Navigation;
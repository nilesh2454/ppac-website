import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Bell, Book, Briefcase, Users, Image, LogOut } from 'lucide-react';

const navLinks = [
  { to: '/admin/dashboard', icon: Home, label: 'Dashboard' },
  { to: '/admin/notifications', icon: Bell, label: 'Notifications' },
  { to: '/admin/materials', icon: Book, label: 'Study Materials' },
  { to: '/admin/activities', icon: Briefcase, label: 'Activities' },
  { to: '/admin/alumni', icon: Users, label: 'Alumni' },
  { to: '/admin/gallery', icon: Image, label: 'Gallery' },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/admin/login');
  };

  const baseLinkClass = "flex items-center p-3 rounded-lg transition-colors";
  const activeLinkClass = "bg-blue-600 text-white";
  const inactiveLinkClass = "hover:bg-gray-700 hover:text-white";

  return (
    <aside className="w-64 bg-gray-800 text-gray-300 flex flex-col">
      <div className="p-6 text-center border-b border-gray-700">
        <h1 className="text-xl font-bold text-white">Admin Panel</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navLinks.map(link => (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) => 
              `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`
            }
          >
            <link.icon className="mr-3 h-5 w-5" />
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <Button
          variant="ghost"
          className="w-full justify-start text-left hover:bg-red-600 hover:text-white"
          onClick={handleLogout}
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar; 
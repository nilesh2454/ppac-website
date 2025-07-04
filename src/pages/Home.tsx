import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, Users, BookOpen, Award, UserPlus } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import RegisterModal from '@/components/auth/RegisterModal';
import LoginModal from '@/components/auth/LoginModal';

const Home = () => {
  const { isAuthenticated } = useAuth();
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const stats = [
    { icon: Users, label: 'Students Placed', value: '150+' },
    { icon: BookOpen, label: 'Training Programs', value: '25+' },
    { icon: Calendar, label: 'Mock Interviews', value: '200+' },
    { icon: Award, label: 'Top Companies', value: '50+' },
  ];

  const upcomingEvents = [
    {
      title: 'Pre-Placement Activity 2025',
      date: 'January 15, 2025',
      description: 'Comprehensive 5-phase placement preparation program',
      type: 'Major Event'
    },
    {
      title: 'Technical Workshop',
      date: 'January 10, 2025',
      description: 'Data Structures and Algorithms intensive session',
      type: 'Workshop'
    },
    {
      title: 'Company Visit: TCS',
      date: 'January 20, 2025',
      description: 'Campus recruitment drive for final year students',
      type: 'Recruitment'
    }
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
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center hero-pattern px-4 pt-8 sm:pt-12 pb-16 sm:pb-0">
          <div className="absolute inset-0 gradient-bg opacity-90"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold mb-2">Welcome To</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Pre-Placement Activity Club
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-blue-200 mb-6 sm:mb-8">
                School of Computer Sciences
              </p>
              <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
                Empowering students with comprehensive placement preparation, 
                industry connections, and career guidance for a successful professional journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                {!isAuthenticated && (
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
                    onClick={() => setIsRegisterOpen(true)}
                  >
                    <UserPlus className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Register Now
                  </Button>
                )}
                <Button 
                  asChild 
                  size="lg" 
                  className={`${!isAuthenticated ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-white text-blue-600 hover:bg-blue-50'} text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto`}
                >
                  <Link to="/activities">
                    Explore Activities <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
                >
                  <Link to="/placement-info">
                    Placement Info
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Floating Elements - Hidden on mobile */}
          <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full animate-float hidden sm:block"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full animate-float hidden sm:block" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-8 sm:right-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full animate-float hidden sm:block" style={{ animationDelay: '2s' }}></div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
                Our Impact
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
                Numbers that reflect our commitment to student success and industry partnerships
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="text-center animate-slide-in-right p-4"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
                Upcoming Events
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
                Stay updated with our latest activities and opportunities
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium w-fit">
                        {event.type}
                      </span>
                      <span className="text-gray-500 text-sm">{event.date}</span>
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-gray-900">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm sm:text-base">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link to="/notifications">
                  View All Notifications <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 sm:py-16 lg:py-20 gradient-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join our comprehensive placement preparation program and connect with top companies
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              {!isAuthenticated ? (
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto"
                  onClick={() => setIsRegisterOpen(true)}
                >
                  Get Started Today
                </Button>
              ) : (
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                  <Link to="/activities">
                    Get Started Today
                  </Link>
                </Button>
              )}
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 w-full sm:w-auto">
                <Link to="/alumni">
                  Connect with Alumni
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Modals */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={handleSwitchToRegister}
      />
    </>
  );
};

export default Home;
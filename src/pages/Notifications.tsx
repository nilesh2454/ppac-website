import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Calendar, Clock, Download, ExternalLink, Pin } from 'lucide-react';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('all');

  const notifications = [
    {
      id: 1,
      title: "Pre-Placement Activity 2025 Registration Open",
      description: "Registration for the comprehensive 5-phase placement preparation program is now open. Last date: January 10, 2025",
      type: "urgent",
      category: "placement",
      date: "2025-01-01",
      isPinned: true,
      hasAttachment: true,
      attachmentName: "PPA_2025_Registration_Form.pdf"
    },
    {
      id: 2,
      title: "TCS Campus Recruitment Drive",
      description: "Tata Consultancy Services will be conducting campus interviews on January 20, 2025. Eligible students must register by January 15.",
      type: "important",
      category: "recruitment",
      date: "2025-01-02",
      isPinned: true,
      hasAttachment: false,
      deadline: "January 15, 2025"
    },
    {
      id: 3,
      title: "Resume Building Workshop",
      description: "Learn how to craft an impressive resume that stands out to recruiters. Workshop on January 8, 2025, 2:00 PM in Seminar Hall.",
      type: "info",
      category: "workshop",
      date: "2025-01-03",
      isPinned: false,
      hasAttachment: true,
      attachmentName: "Resume_Template.docx"
    },
    {
      id: 4,
      title: "Mock Interview Sessions Schedule",
      description: "Mock interview sessions for final year students will be conducted from January 12-16, 2025. Time slots will be allotted based on registration.",
      type: "info",
      category: "interview",
      date: "2025-01-04",
      isPinned: false,
      hasAttachment: true,
      attachmentName: "Interview_Schedule.pdf"
    },
    {
      id: 5,
      title: "Technical Workshop: Data Structures & Algorithms",
      description: "Intensive DSA workshop by industry experts. Topics include trees, graphs, dynamic programming, and system design basics.",
      type: "info",
      category: "workshop",
      date: "2025-01-05",
      isPinned: false,
      hasAttachment: false,
      venue: "Computer Lab 1"
    },
    {
      id: 6,
      title: "Infosys Registration Deadline Extended",
      description: "Due to technical issues, the registration deadline for Infosys campus recruitment has been extended to January 18, 2025.",
      type: "update",
      category: "recruitment",
      date: "2025-01-06",
      isPinned: false,
      hasAttachment: false
    },
    {
      id: 7,
      title: "Alumni Interaction Session",
      description: "Interact with successful alumni from top companies. Learn about their journey and get career guidance. January 14, 2025.",
      type: "info",
      category: "guidance",
      date: "2025-01-07",
      isPinned: false,
      hasAttachment: false
    },
    {
      id: 8,
      title: "Study Material Upload Request",
      description: "Students are invited to submit their study materials, notes, and practice questions to help fellow students. All submissions will be reviewed.",
      type: "info",
      category: "academic",
      date: "2025-01-08",
      isPinned: false,
      hasAttachment: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'urgent': return 'bg-red-100 text-red-700';
      case 'important': return 'bg-orange-100 text-orange-700';
      case 'info': return 'bg-blue-100 text-blue-700';
      case 'update': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'urgent': return '🚨';
      case 'important': return '⚠️';
      case 'info': return 'ℹ️';
      case 'update': return '✅';
      default: return '📢';
    }
  };

  const filteredNotifications = activeTab === 'all' 
    ? notifications 
    : notifications.filter(notif => notif.category === activeTab);

  const categories = [
    { id: 'all', label: 'All Notifications', count: notifications.length },
    { id: 'placement', label: 'Placement', count: notifications.filter(n => n.category === 'placement').length },
    { id: 'recruitment', label: 'Recruitment', count: notifications.filter(n => n.category === 'recruitment').length },
    { id: 'workshop', label: 'Workshops', count: notifications.filter(n => n.category === 'workshop').length },
    { id: 'interview', label: 'Interviews', count: notifications.filter(n => n.category === 'interview').length }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Notifications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest announcements, deadlines, and opportunities
          </p>
        </div>

        {/* Quick Stats */}
        {/* Removed the four quick stats cards (Urgent, Important, Pinned, With Files) */}

        {/* Category Dropdown for Mobile */}
        <div className="block sm:hidden mb-4">
          <select
            value={activeTab}
            onChange={e => setActiveTab(e.target.value)}
            className="w-full p-2 border rounded-md text-base"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.label} ({category.count})
              </option>
            ))}
          </select>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Category Tabs for Desktop */}
          <TabsList className="hidden sm:grid w-full grid-cols-5 mb-8 overflow-x-auto whitespace-nowrap gap-2">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2 min-w-[140px] justify-center">
                <span>{category.label}</span>
                <Badge variant="secondary" className="ml-2">{category.count}</Badge>
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={activeTab}>
            <div className="space-y-6">
              {/* Pinned Notifications */}
              {filteredNotifications.filter(n => n.isPinned).length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold gradient-text mb-4 flex items-center gap-2">
                    <Pin className="h-5 w-5" />
                    Pinned Notifications
                  </h2>
                  <div className="space-y-4">
                    {filteredNotifications.filter(n => n.isPinned).map((notification) => (
                      <Card key={`pinned-${notification.id}`} className="border-2 border-blue-200 bg-blue-50/50">
                        <CardContent className="p-6">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-3">
                                <span className="text-2xl">{getTypeIcon(notification.type)}</span>
                                <Badge className={getTypeColor(notification.type)}>
                                  {notification.type.toUpperCase()}
                                </Badge>
                                <Badge variant="outline">{notification.category}</Badge>
                                {notification.isPinned && <Pin className="h-4 w-4 text-blue-600" />}
                              </div>
                              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 break-words">{notification.title}</h3>
                              <p className="text-gray-700 mb-4 break-words">{notification.description}</p>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{new Date(notification.date).toLocaleDateString()}</span>
                                </div>
                                {notification.deadline && (
                                  <div className="flex items-center gap-1 text-red-600">
                                    <Clock className="h-4 w-4" />
                                    <span>Deadline: {notification.deadline}</span>
                                  </div>
                                )}
                                {notification.venue && (
                                  <div className="flex items-center gap-1">
                                    <span>📍 {notification.venue}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            {notification.hasAttachment && (
                              <Button size="sm" variant="outline" className="mt-4 sm:mt-0 w-full sm:w-auto">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Regular Notifications */}
              <div>
                {filteredNotifications.filter(n => n.isPinned).length > 0 && (
                  <h2 className="text-xl font-semibold gradient-text mb-4 flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Recent Notifications
                  </h2>
                )}
                <div className="space-y-4">
                  {filteredNotifications.filter(n => !n.isPinned).map((notification) => (
                    <Card key={notification.id} className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              <span className="text-2xl">{getTypeIcon(notification.type)}</span>
                              <Badge className={getTypeColor(notification.type)}>
                                {notification.type.toUpperCase()}
                              </Badge>
                              <Badge variant="outline">{notification.category}</Badge>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 break-words">{notification.title}</h3>
                            <p className="text-gray-700 mb-4 break-words">{notification.description}</p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(notification.date).toLocaleDateString()}</span>
                              </div>
                              {notification.deadline && (
                                <div className="flex items-center gap-1 text-red-600">
                                  <Clock className="h-4 w-4" />
                                  <span>Deadline: {notification.deadline}</span>
                                </div>
                              )}
                              {notification.venue && (
                                <div className="flex items-center gap-1">
                                  <span>📍 {notification.venue}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          {notification.hasAttachment && (
                            <Button size="sm" variant="outline" className="mt-4 sm:mt-0 w-full sm:w-auto">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* No Results Message */}
              {filteredNotifications.length === 0 && (
                <div className="text-center py-10">
                  <Bell className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No notifications found</h3>
                  <p className="text-gray-500">There are no notifications in this category at the moment</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Subscribe Card */}
        <Card className="mt-16 gradient-bg text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Stay Updated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-blue-100 mb-6">
                Subscribe to receive notifications via email and never miss important updates about 
                placements, events, and opportunities.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Subscribe to Notifications
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* External Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <ExternalLink className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Placement Portal</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Access the university's placement portal for registration and updates
                  </p>
                  <Button variant="link" className="p-0">Visit Portal</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <ExternalLink className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Department Website</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Visit the School of Computer Sciences official website
                  </p>
                  <Button variant="link" className="p-0">Visit Website</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <ExternalLink className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Academic Calendar</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Access the university's academic calendar for important dates
                  </p>
                  <Button variant="link" className="p-0">View Calendar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

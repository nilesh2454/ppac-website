
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filterYear, setFilterYear] = useState('all');

  const activities = [
    {
      id: 1,
      title: "Pre-Placement Activity 2024",
      year: "2024",
      event: "Placement Drive",
      date: "March 15, 2024",
      participants: 120,
      images: [
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Group Discussion Round",
      year: "2024",
      event: "Communication Skills",
      date: "March 10, 2024",
      participants: 60,
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Technical Workshop",
      year: "2024",
      event: "Skill Development",
      date: "February 28, 2024",
      participants: 80,
      images: [
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Mock Interview Session",
      year: "2024",
      event: "Interview Preparation",
      date: "February 20, 2024",
      participants: 45,
      images: [
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Company Presentation - TCS",
      year: "2023",
      event: "Campus Recruitment",
      date: "December 15, 2023",
      participants: 150,
      images: [
        "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Alumni Interaction",
      year: "2023",
      event: "Career Guidance",
      date: "November 30, 2023",
      participants: 90,
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
      ]
    }
  ];

  const years = ['all', '2024', '2023', '2022'];
  
  const filteredActivities = filterYear === 'all' 
    ? activities 
    : activities.filter(activity => activity.year === filterYear);

  const openActivityGallery = (activity: any) => {
    setSelectedActivity(activity);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedActivity(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedActivity && currentImageIndex < selectedActivity.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const totalImages = filteredActivities.reduce((sum, activity) => sum + activity.images.length, 0);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing moments from our placement activities, workshops, and student achievements
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {years.map((year) => (
            <Button
              key={year}
              variant={filterYear === year ? "default" : "outline"}
              onClick={() => setFilterYear(year)}
              className="capitalize"
            >
              {year === 'all' ? 'All Years' : year}
            </Button>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{totalImages}</div>
              <div className="text-gray-600">Photos</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{filteredActivities.length}</div>
              <div className="text-gray-600">Activities</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Students Featured</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
              <div className="text-gray-600">Years Archive</div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity, index) => (
            <Card 
              key={activity.id} 
              className="card-hover cursor-pointer overflow-hidden"
              onClick={() => openActivityGallery(activity)}
            >
              <div className="relative">
                <img 
                  src={activity.images[0]} 
                  alt={activity.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-black/70 text-white">
                    {activity.year}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">
                    {activity.images.length} photos
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{activity.title}</h3>
                  <p className="text-white/90 text-sm">{activity.event}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{activity.participants} participants</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results message */}
        {filteredActivities.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No activities found for the selected year.</p>
          </div>
        )}

        {/* Activity Gallery Modal */}
        {selectedActivity && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 text-white">
                <div>
                  <h3 className="text-2xl font-bold">{selectedActivity.title}</h3>
                  <p className="text-white/80">{selectedActivity.event} • {selectedActivity.date}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-black/50 text-white hover:bg-black/70"
                  onClick={closeGallery}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Image Display */}
              <div className="flex-1 flex items-center justify-center relative">
                <img 
                  src={selectedActivity.images[currentImageIndex]} 
                  alt={`${selectedActivity.title} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
                
                {/* Navigation Arrows */}
                {selectedActivity.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute left-4 bg-black/50 text-white hover:bg-black/70"
                      onClick={prevImage}
                      disabled={currentImageIndex === 0}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-4 bg-black/50 text-white hover:bg-black/70"
                      onClick={nextImage}
                      disabled={currentImageIndex === selectedActivity.images.length - 1}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </>
                )}
              </div>

              {/* Image Counter */}
              <div className="text-center mt-4 text-white">
                <p>{currentImageIndex + 1} of {selectedActivity.images.length}</p>
              </div>

              {/* Thumbnails */}
              {selectedActivity.images.length > 1 && (
                <div className="flex justify-center space-x-2 mt-4 overflow-x-auto">
                  {selectedActivity.images.map((image: string, index: number) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-16 h-16 object-cover cursor-pointer rounded border-2 ${
                        index === currentImageIndex ? 'border-white' : 'border-transparent'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;

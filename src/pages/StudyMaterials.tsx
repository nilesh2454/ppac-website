
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, FileText, BookOpen, Video, Link as LinkIcon } from 'lucide-react';

const StudyMaterials = () => {
  const [activeCategory, setActiveCategory] = useState('aptitude');

  const materials = {
    aptitude: [
      {
        title: "Quantitative Aptitude - Complete Guide",
        type: "PDF",
        size: "2.3 MB",
        description: "Comprehensive guide covering all topics with practice questions",
        icon: FileText,
        downloadCount: 1250
      },
      {
        title: "Logical Reasoning Practice Set",
        type: "PDF",
        size: "1.8 MB",
        description: "500+ questions with detailed solutions",
        icon: FileText,
        downloadCount: 980
      },
      {
        title: "Verbal Ability Workbook",
        type: "PDF",
        size: "3.1 MB",
        description: "Grammar, vocabulary, and comprehension exercises",
        icon: BookOpen,
        downloadCount: 750
      },
      {
        title: "Aptitude Video Lectures",
        type: "Video Link",
        size: "YouTube Playlist",
        description: "30-hour comprehensive video series",
        icon: Video,
        downloadCount: 2100
      }
    ],
    technical: [
      {
        title: "Data Structures & Algorithms",
        type: "PDF",
        size: "5.2 MB",
        description: "Complete DSA guide with C++ and Java implementations",
        icon: FileText,
        downloadCount: 1800
      },
      {
        title: "Java Programming Complete Notes",
        type: "PDF",
        size: "4.7 MB",
        description: "From basics to advanced concepts with examples",
        icon: BookOpen,
        downloadCount: 1400
      },
      {
        title: "Database Management System",
        type: "PDF",
        size: "3.9 MB",
        description: "SQL queries, normalization, and DBMS concepts",
        icon: FileText,
        downloadCount: 1100
      },
      {
        title: "System Design Fundamentals",
        type: "PDF",
        size: "2.8 MB",
        description: "Scalability, load balancing, and architecture patterns",
        icon: BookOpen,
        downloadCount: 900
      },
      {
        title: "Coding Interview Practice",
        type: "External Link",
        size: "LeetCode",
        description: "Curated list of important coding problems",
        icon: LinkIcon,
        downloadCount: 3200
      }
    ],
    interview: [
      {
        title: "HR Interview Questions & Answers",
        type: "PDF",
        size: "1.5 MB",
        description: "200+ commonly asked HR questions with sample answers",
        icon: FileText,
        downloadCount: 2000
      },
      {
        title: "Technical Interview Guide",
        type: "PDF",
        size: "3.8 MB",
        description: "Core CS concepts and problem-solving approaches",
        icon: BookOpen,
        downloadCount: 1600
      },
      {
        title: "Group Discussion Topics",
        type: "PDF",
        size: "800 KB",
        description: "100+ GD topics with points to discuss",
        icon: FileText,
        downloadCount: 850
      },
      {
        title: "Mock Interview Videos",
        type: "Video Link",
        size: "YouTube Series",
        description: "Real interview scenarios and feedback",
        icon: Video,
        downloadCount: 1200
      }
    ]
  };

  const getIconComponent = (iconName: string) => {
    switch(iconName) {
      case 'FileText': return FileText;
      case 'BookOpen': return BookOpen;
      case 'Video': return Video;
      case 'LinkIcon': return LinkIcon;
      default: return FileText;
    }
  };

  const categories = [
    { id: 'aptitude', label: 'Aptitude', icon: BookOpen, count: materials.aptitude.length },
    { id: 'technical', label: 'Technical', icon: FileText, count: materials.technical.length },
    { id: 'interview', label: 'Interview Prep', icon: Video, count: materials.interview.length }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Study Materials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive collection of study resources for placement preparation
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Study Materials</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15K+</div>
              <div className="text-gray-600">Downloads</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Video Lectures</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Access</div>
            </CardContent>
          </Card>
        </div>

        {/* Materials Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2">
                  <IconComponent className="h-4 w-4" />
                  <span>{category.label}</span>
                  <Badge variant="secondary" className="ml-2">{category.count}</Badge>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(materials).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((material, index) => {
                  const IconComponent = material.icon;
                  return (
                    <Card key={index} className="card-hover">
                      <CardHeader>
                        <div className="flex items-start space-x-3">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg leading-tight">{material.title}</CardTitle>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge variant="outline">{material.type}</Badge>
                              <span className="text-sm text-gray-500">{material.size}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{material.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {material.downloadCount.toLocaleString()} downloads
                          </span>
                          <Button size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            {material.type.includes('Link') ? 'Visit' : 'Download'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Upload Section */}
        <Card className="mt-16 gradient-bg text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Contribute Study Materials</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-blue-100 mb-6">
                Have valuable study materials? Share them with your fellow students! 
                All submissions are reviewed by faculty before being made available.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Submit Materials
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Study Tips */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl gradient-text">Study Tips for Placement Success</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">📚 Preparation Strategy</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Start preparation at least 6 months before placements</li>
                  <li>• Focus on fundamentals before moving to advanced topics</li>
                  <li>• Practice coding problems daily</li>
                  <li>• Take regular mock tests</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">⏰ Time Management</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Allocate specific time slots for each subject</li>
                  <li>• Balance between theory and practical</li>
                  <li>• Take regular breaks to avoid burnout</li>
                  <li>• Review and revise consistently</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudyMaterials;


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, TrendingUp, Users, Target, FileText } from 'lucide-react';

const PlacementInfo = () => {
  const placementStats = [
    { year: '2023-24', placed: 145, companies: 48, highest: '₹18 LPA', average: '₹6.2 LPA' },
    { year: '2022-23', placed: 132, companies: 42, highest: '₹16 LPA', average: '₹5.8 LPA' },
    { year: '2021-22', placed: 118, companies: 38, highest: '₹14 LPA', average: '₹5.2 LPA' },
  ];

  const placementProcess = [
    {
      step: 1,
      title: "Pre-Placement Talk",
      description: "Company introduction and job profile presentation",
      duration: "30-45 minutes"
    },
    {
      step: 2,
      title: "Aptitude Test",
      description: "Quantitative, Logical, and Verbal reasoning assessment",
      duration: "60-90 minutes"
    },
    {
      step: 3,
      title: "Technical Round",
      description: "Programming, data structures, and domain-specific questions",
      duration: "45-60 minutes"
    },
    {
      step: 4,
      title: "HR Interview",
      description: "Behavioral questions and company culture fit assessment",
      duration: "20-30 minutes"
    },
    {
      step: 5,
      title: "Final Selection",
      description: "Results announcement and offer letter distribution",
      duration: "Same day or next day"
    }
  ];

  const resources = [
    { name: "Resume Template - Computer Science", type: "DOCX", size: "245 KB" },
    { name: "Aptitude Preparation Guide", type: "PDF", size: "1.2 MB" },
    { name: "Technical Interview Questions", type: "PDF", size: "890 KB" },
    { name: "Company-wise Placement Papers", type: "ZIP", size: "3.4 MB" },
    { name: "Mock Interview Guidelines", type: "PDF", size: "567 KB" },
  ];

  const tips = [
    {
      category: "Resume Building",
      points: [
        "Keep it concise and relevant (1-2 pages maximum)",
        "Highlight technical skills and project experience",
        "Include quantifiable achievements and metrics",
        "Use professional format and error-free language"
      ]
    },
    {
      category: "Technical Preparation",
      points: [
        "Master data structures and algorithms",
        "Practice coding on platforms like LeetCode, CodeChef",
        "Understand system design basics",
        "Stay updated with latest technology trends"
      ]
    },
    {
      category: "Interview Tips",
      points: [
        "Research the company thoroughly",
        "Prepare for behavioral questions (STAR method)",
        "Practice explaining your projects clearly",
        "Maintain confident body language and eye contact"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Placement Information
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guide to placement process, statistics, and preparation resources
          </p>
        </div>

        {/* Placement Statistics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Placement Statistics
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {placementStats.map((stat, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{stat.year}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Students Placed:</span>
                      <span className="font-bold text-green-600">{stat.placed}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Companies:</span>
                      <span className="font-bold text-blue-600">{stat.companies}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Highest Package:</span>
                      <span className="font-bold text-purple-600">{stat.highest}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Average Package:</span>
                      <span className="font-bold text-orange-600">{stat.average}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Placement Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Placement Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placementProcess.map((process, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {process.step}
                    </div>
                    <CardTitle className="text-lg">{process.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">{process.description}</p>
                  <p className="text-sm text-blue-600 font-medium">Duration: {process.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Downloadable Resources
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resources.map((resource, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">{resource.name}</p>
                        <p className="text-sm text-gray-600">{resource.type} • {resource.size}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preparation Tips */}
        <div>
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Preparation Tips
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">{tip.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tip.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementInfo;

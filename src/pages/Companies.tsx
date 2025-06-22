import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Download, MapPin, Users } from 'lucide-react';
import lemmaLogo from '@/images/lemma.png';
import rbisLogo from '@/images/rbis.png';
import pantherNailsLogo from '@/images/pantherNails.png';
import vasundharaLogo from '@/images/vasundhara.png';
const Companies = () => {
  const companies = [
    {
      name: "Lemma Technologies",
      logo: lemmaLogo,
      category: "IT Services",
      eligibility: "60% throughout, No backlogs",
      packages: "₹3.5-4.5 LPA",
      roles: ["Full Stack Developer","Software Developer", "System Engineer"],
      locations: ["Mumbai", "Pune", "Bangalore"],
      website: "https://lemmatechnologies.com/",
      visitDate: "August 17, 2025",
      status: "Upcoming"
    },
    {
      name: "RBIS Technologies Private Limited",
      logo: rbisLogo,
      category: "IT Services",
      eligibility: "60% throughout, No active backlogs",
      packages: "₹2-3 LPA",
      roles: [".NET Developer","Web Developer", "Full Stack Developer"],
      locations: ["Pune","Mumbai"],
      website: "https://rbistech.com/#/",
      visitDate: "August 26, 2025",
      status: "Upcoming"
    },
    {
      name: "Panther Nails Technologies PVT. LTD.",
      logo: pantherNailsLogo,
      category: "IT Services",
      eligibility: "60% throughout, Max 2 backlogs",
      packages: "₹3.5-6.5 LPA",
      roles: ["Web Developer","Android Developer", "Software Engineer"],
      locations: ["Pune", "Mumbai"],
      website: "https://panthernails.com/",
      visitDate: "September 6, 2025",
      status: "Upcoming"
    },
    {
      name: "Vasundhara Technologies PVT. LTD.",
      logo: vasundharaLogo,
      category: "IT Services",
      eligibility: "60% throughout, No backlogs",
      packages: "₹2-4 LPA",
      roles: ["DOT NET Developer", "Java Developer","Flutter Developer"],
      locations: ["Pune"],
      website: "https://vasundharasoftware.com/",
      visitDate: "Spetember 16, 2025",
      status: "Upcoming"
    },
    {
      name: "Tech Mahindra",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop&crop=center",
      category: "IT Services",
      eligibility: "60% throughout, Max 1 backlog",
      packages: "₹3.8-6 LPA",
      roles: ["Software Engineer", "Associate Software Engineer"],
      locations: ["Pune", "Bangalore", "Hyderabad"],
      website: "https://techmahindra.com",
      visitDate: "March 10, 2025",
      status: "Registration Open"
    },
    {
      name: "Persistent Systems",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=100&h=100&fit=crop&crop=center",
      category: "Software Product",
      eligibility: "65% throughout, No backlogs",
      packages: "₹5-9 LPA",
      roles: ["Software Engineer", "Associate Software Engineer"],
      locations: ["Pune", "Nagpur", "Goa"],
      website: "https://persistent.com",
      visitDate: "March 20, 2025",
      status: "Coming Soon"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Upcoming": return "bg-blue-100 text-blue-700";
      case "Registration Open": return "bg-green-100 text-green-700";
      case "Coming Soon": return "bg-yellow-100 text-yellow-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Hiring Companies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore opportunities with top companies visiting our campus for placements
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Total Companies</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">₹18 LPA</div>
              <div className="text-gray-600">Highest Package</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">₹6.2 LPA</div>
              <div className="text-gray-600">Average Package</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Placement Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        className="max-w-[85%] max-h-[85%] object-contain"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{company.name}</CardTitle>
                      <p className="text-gray-600">{company.category}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(company.status)}>
                    {company.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Eligibility */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Eligibility Criteria</h4>
                    <p className="text-gray-700 text-sm">{company.eligibility}</p>
                  </div>

                  {/* Package */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Package Range</h4>
                    <p className="text-green-600 font-bold">{company.packages}</p>
                  </div>

                  {/* Roles */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Job Roles</h4>
                    <div className="flex flex-wrap gap-2">
                      {company.roles.map((role, roleIndex) => (
                        <Badge key={roleIndex} variant="secondary">{role}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Locations */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Work Locations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {company.locations.map((location, locIndex) => (
                        <Badge key={locIndex} variant="outline">{location}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Visit Date */}
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>Campus Visit:</strong> {company.visitDate}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(company.website, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Website
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Test Syllabus
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Application Process */}
        <Card className="mt-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center gradient-text">How to Apply</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Check Eligibility</h4>
                <p className="text-gray-600 text-sm">Review company requirements and ensure you meet all criteria</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Register Online</h4>
                <p className="text-gray-600 text-sm">Complete the online registration form before the deadline</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Prepare</h4>
                <p className="text-gray-600 text-sm">Study the syllabus and prepare for the selection process</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-2">Attend Drive</h4>
                <p className="text-gray-600 text-sm">Participate in the campus placement drive on the scheduled date</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Companies;

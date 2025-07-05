import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Mail, ExternalLink, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Alumni = () => {
  const alumni = [
    {
      id: 1,
      name: "Priya Sharma",
      photo: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=150&h=150&fit=crop&crop=face",
      batch: "2023",
      currentRole: "Software Engineer",
      company: "Google",
      location: "Bangalore",
      linkedin: "https://linkedin.com/in/priya-sharma",
      email: "priya.sharma@gmail.com",
      package: "₹28 LPA",
      advice: "Focus on fundamentals of DSA and system design. Practice consistently and never give up!",
      achievements: ["Google Summer of Code", "Published Research Paper"]
    },
    {
      id: 2,
      name: "Rahul Patil",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      batch: "2023",
      currentRole: "Data Scientist",
      company: "Microsoft",
      location: "Hyderabad",
      linkedin: "https://linkedin.com/in/rahul-patil",
      email: "rahul.patil@outlook.com",
      package: "₹25 LPA",
      advice: "Machine learning and statistics are key. Build a strong portfolio with real projects.",
      achievements: ["Kaggle Expert", "Microsoft Certified"]
    },
    {
      id: 3,
      name: "Sneha Joshi",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      batch: "2022",
      currentRole: "Product Manager",
      company: "Amazon",
      location: "Mumbai",
      linkedin: "https://linkedin.com/in/sneha-joshi",
      email: "sneha.joshi@amazon.com",
      package: "₹30 LPA",
      advice: "Develop both technical and business acumen. Communication skills are as important as coding.",
      achievements: ["Launched 3 Products", "AWS Certified"]
    },
    {
      id: 4,
      name: "Amit Kumar",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      batch: "2022",
      currentRole: "Full Stack Developer",
      company: "Flipkart",
      location: "Bangalore",
      linkedin: "https://linkedin.com/in/amit-kumar",
      email: "amit.kumar@flipkart.com",
      package: "₹18 LPA",
      advice: "Build end-to-end projects. Understanding both frontend and backend gives you an edge.",
      achievements: ["Open Source Contributor", "Tech Lead"]
    },
    {
      id: 5,
      name: "Pooja Desai",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      batch: "2021",
      currentRole: "Senior Software Engineer",
      company: "Infosys",
      location: "Pune",
      linkedin: "https://linkedin.com/in/pooja-desai",
      email: "pooja.desai@infosys.com",
      package: "₹12 LPA",
      advice: "Start early and be consistent. Participate in coding competitions and hackathons.",
      achievements: ["Infosys Innovation Award", "Team Lead"]
    },
    {
      id: 6,
      name: "Vikram Singh",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      batch: "2021",
      currentRole: "DevOps Engineer",
      company: "TCS",
      location: "Chennai",
      linkedin: "https://linkedin.com/in/vikram-singh",
      email: "vikram.singh@tcs.com",
      package: "₹8 LPA",
      advice: "Learn cloud technologies and automation. DevOps is the future of software deployment.",
      achievements: ["AWS Solutions Architect", "Docker Expert"]
    }
  ];

  const stats = [
    { label: "Alumni Network", value: "500+", color: "text-blue-600" },
    { label: "Average Package", value: "₹8.5 LPA", color: "text-green-600" },
    { label: "Top Companies", value: "50+", color: "text-purple-600" },
    { label: "Success Rate", value: "95%", color: "text-orange-600" }
  ];

  // Split companies into two rows for animation
  const topRowCompanies = [
    "Google", "Microsoft", "Amazon", "Flipkart", "Infosys", "TCS"
  ];
  
  const bottomRowCompanies = [
    "Wipro", "Cognizant", "Accenture", "Capgemini", "Tech Mahindra", "HCL"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Alumni Network
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our successful graduates and learn from their journey
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Top Companies with Animation */}
        <Card className="mb-16 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-center gradient-text">Where Our Alumni Work</CardTitle>
          </CardHeader>
          <CardContent className="py-8">
            <div className="space-y-6">
              {/* Top Row - Moving Left to Right */}
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                  {/* First set of companies */}
                  {topRowCompanies.map((company, index) => (
                    <Badge 
                      key={`top-1-${index}`} 
                      variant="secondary" 
                      className="text-lg py-3 px-6 mx-3 bg-blue-50 text-blue-700 border border-blue-200 flex-shrink-0"
                    >
                      {company}
                    </Badge>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {topRowCompanies.map((company, index) => (
                    <Badge 
                      key={`top-2-${index}`} 
                      variant="secondary" 
                      className="text-lg py-3 px-6 mx-3 bg-blue-50 text-blue-700 border border-blue-200 flex-shrink-0"
                    >
                      {company}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Bottom Row - Moving Right to Left */}
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee-reverse whitespace-nowrap">
                  {/* First set of companies */}
                  {bottomRowCompanies.map((company, index) => (
                    <Badge 
                      key={`bottom-1-${index}`} 
                      variant="secondary" 
                      className="text-lg py-3 px-6 mx-3 bg-green-50 text-green-700 border border-green-200 flex-shrink-0"
                    >
                      {company}
                    </Badge>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {bottomRowCompanies.map((company, index) => (
                    <Badge 
                      key={`bottom-2-${index}`} 
                      variant="secondary" 
                      className="text-lg py-3 px-6 mx-3 bg-green-50 text-green-700 border border-green-200 flex-shrink-0"
                    >
                      {company}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((person) => (
            <Card key={person.id} className="card-hover">
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full">
                  <img 
                    src={person.photo} 
                    alt={person.name}
                    className="w-20 h-20 sm:w-16 sm:h-16 rounded-full object-cover mx-auto sm:mx-0"
                  />
                  <div className="text-center sm:text-left w-full">
                    <CardTitle className="text-lg sm:text-xl break-words">{person.name}</CardTitle>
                    <p className="text-gray-600">{person.currentRole}</p>
                    <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 mt-1">
                      <Badge variant="outline">{person.batch}</Badge>
                      <Badge className="bg-green-100 text-green-700">{person.package}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Company & Location */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center space-x-2 justify-center sm:justify-start">
                      <span className="font-semibold text-blue-600">{person.company}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600 justify-center sm:justify-end">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{person.location}</span>
                    </div>
                  </div>
                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Achievements</h4>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {person.achievements.map((achievement, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {/* Advice */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Advice for Juniors</h4>
                    <p className="text-gray-700 text-sm italic text-center sm:text-left">"{person.advice}"</p>
                  </div>
                  {/* Contact */}
                  <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full sm:flex-1"
                      onClick={() => window.open(person.linkedin, '_blank')}
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="w-full sm:w-auto"
                      onClick={() => window.open(`mailto:${person.email}`, '_blank')}
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action for Alumni */}
        <Card className="mt-16 gradient-bg text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Join Our Alumni Network</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-blue-100 mb-6">
                Are you a KBCNMU Computer Science graduate? Join our alumni network and help 
                guide the next generation of tech professionals!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                  <Link to="/register-alumni">
                    Register as Alumni
                  </Link>
                </Button>
                <Button size="lg" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600">
                  Share Your Story
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Stories Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl gradient-text">Recent Success Stories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">Priya Sharma (2023) - Placed at Google</p>
                <p className="text-gray-600 text-sm">
                  "The placement preparation at KBCNMU gave me the confidence to crack Google's interview. 
                  The mock interviews and technical training were instrumental in my success."
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold">Rahul Patil (2023) - Joined Microsoft as Data Scientist</p>
                <p className="text-gray-600 text-sm">
                  "The faculty's guidance and the comprehensive study materials helped me transition 
                  from a CS student to a data scientist at Microsoft."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Alumni;

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, BookOpen, MessageSquare, FileText } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      phase: "Technical & Aptitude Round",
      activity: "MCQ Test",
      duration: "45 mins",
      marks: 40,
      description: "Covers Programming Fundamentals (Java, C++, Python), DSA, Aptitude, SQL. MCQs + short answers.",
      icon: BookOpen,
      color: "bg-blue-500"
    },
    {
      phase: "Coding Round",
      activity: "Coding Test",
      duration: "1 hour",
      marks: 25,
      description: "Number Programs, Arrays, Strings, Data Structures (Searching, Sorting, Recursion)",
      icon: FileText,
      color: "bg-green-500"
    },
    {
      phase: "Communication Round",
      activity: "Group Discussion",
      duration: "1 hour",
      marks: 5,
      description: "3-5 members per group. Topics: Tech, Case Studies, Current Affairs. Assesses communication & analytical skills.",
      icon: MessageSquare,
      color: "bg-purple-500"
    },
    {
      phase: "Presentation Round",
      activity: "Presentation",
      duration: "1 hour",
      marks: 10,
      description: "Solo or group project, or AI tools topic. Judged on technical depth, clarity, presentation quality.",
      icon: Users,
      color: "bg-orange-500"
    },
    {
      phase: "Interview Round",
      activity: "Mock Interviews",
      duration: "20 mins/student",
      marks: 20,
      description: "Covers HR + Technical interview simulation with feedback",
      icon: Award,
      color: "bg-red-500"
    }
  ];

  const rules = [
    "Attendance mandatory for all phases",
    "No electronic devices during activities",
    "Maintain discipline or face action",
    "Punctuality is a must; late entries not allowed"
  ];

  const studentOrganizers = [
    "Vishal Sonone", "Nilesh Pawar", "Rohit Mahale", "Dipshri Patil", 
    "Chhaya Dhande", "Mukta Tathe", "Gayatri Patil", "Mayur Bande"
  ];

  const facultyMentors = [
    "Prof. Ajay S. Patil", "Dr. Snehalata Shirude", "Dr. Sandip Bhamare", 
    "Dr. Manisha Deshmukh", "Mrs. Shubhangi Sapkale"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Pre-Placement Activity 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive 5-phase placement preparation program designed to enhance 
            technical skills, communication abilities, and interview readiness.
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center gradient-text">Welcome to PPA 2025</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              Our Pre-Placement Activity is a meticulously designed program that prepares students 
              for the competitive world of campus placements. Through hands-on activities, mock interviews, 
              and comprehensive assessments, we ensure that every participant gains the confidence and 
              skills needed to excel in their career journey.
            </p>
          </CardContent>
        </Card>

        {/* Activity Breakdown */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Activity Breakdown & Evaluation
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 ${activity.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{activity.phase}</CardTitle>
                        <p className="text-gray-600">{activity.activity}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {activity.duration}
                      </Badge>
                      <Badge variant="secondary">
                        {activity.marks} Marks
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{activity.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why Participate */}
        <Card className="mb-12 gradient-bg text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Why Participate?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">🎯 Skill Enhancement</h4>
                <p className="text-blue-100">Develop technical and soft skills essential for placements</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">💼 Industry Exposure</h4>
                <p className="text-blue-100">Experience real-world interview scenarios and assessment patterns</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🤝 Networking</h4>
                <p className="text-blue-100">Connect with peers, faculty, and industry professionals</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🏆 Recognition</h4>
                <p className="text-blue-100">Top performers receive awards and special recognition</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rules and Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl gradient-text">Rules & Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl gradient-text">Rewards & Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-yellow-500" />
                  <span className="text-gray-700">Top 3 performers receive trophies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-blue-500" />
                  <span className="text-gray-700">Special recognition certificates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Priority consideration for placements</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Organizers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl gradient-text">Student Organizers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {studentOrganizers.map((organizer, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="font-medium text-gray-800">{organizer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl gradient-text">Faculty Mentors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {facultyMentors.map((mentor, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-800">{mentor}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Activities;

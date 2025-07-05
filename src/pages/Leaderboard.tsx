import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Medal, Award, Star, TrendingUp, Users, Target, Crown } from 'lucide-react';

const Leaderboard = () => {
  const [activeCategory, setActiveCategory] = useState('overall');

  // Mock leaderboard data
  const leaderboardData = {
    overall: [
      {
        rank: 1,
        name: "Priya Sharma",
        class: "MCA II Year",
        prnNumber: "2201234567",
        totalMarks: 98,
        activities: {
          "Technical & Aptitude": 38,
          "Coding Round": 24,
          "Group Discussion": 5,
          "Presentation": 10,
          "Mock Interview": 19
        },
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 2,
        name: "Rahul Patil",
        class: "MSc CS II Year",
        prnNumber: "2201234568",
        totalMarks: 95,
        activities: {
          "Technical & Aptitude": 37,
          "Coding Round": 23,
          "Group Discussion": 4,
          "Presentation": 9,
          "Mock Interview": 20
        },
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 3,
        name: "Sneha Joshi",
        class: "MCA I Year",
        prnNumber: "2301234569",
        totalMarks: 92,
        activities: {
          "Technical & Aptitude": 36,
          "Coding Round": 22,
          "Group Discussion": 5,
          "Presentation": 10,
          "Mock Interview": 18
        },
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 4,
        name: "Amit Kumar",
        class: "MSc IT II Year",
        prnNumber: "2201234570",
        totalMarks: 89,
        activities: {
          "Technical & Aptitude": 35,
          "Coding Round": 21,
          "Group Discussion": 4,
          "Presentation": 9,
          "Mock Interview": 19
        },
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 5,
        name: "Pooja Desai",
        class: "MCA II Year",
        prnNumber: "2201234571",
        totalMarks: 87,
        activities: {
          "Technical & Aptitude": 34,
          "Coding Round": 20,
          "Group Discussion": 5,
          "Presentation": 8,
          "Mock Interview": 18
        },
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 6,
        name: "Vikram Singh",
        class: "MSc CS I Year",
        prnNumber: "2301234572",
        totalMarks: 85,
        activities: {
          "Technical & Aptitude": 33,
          "Coding Round": 19,
          "Group Discussion": 4,
          "Presentation": 9,
          "Mock Interview": 18
        },
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 7,
        name: "Anita Reddy",
        class: "MSc IT I Year",
        prnNumber: "2301234573",
        totalMarks: 83,
        activities: {
          "Technical & Aptitude": 32,
          "Coding Round": 18,
          "Group Discussion": 5,
          "Presentation": 8,
          "Mock Interview": 18
        },
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 8,
        name: "Rohit Mehta",
        class: "MCA I Year",
        prnNumber: "2301234574",
        totalMarks: 81,
        activities: {
          "Technical & Aptitude": 31,
          "Coding Round": 17,
          "Group Discussion": 4,
          "Presentation": 9,
          "Mock Interview": 18
        },
        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 9,
        name: "Kavya Nair",
        class: "MSc CS II Year",
        prnNumber: "2201234575",
        totalMarks: 79,
        activities: {
          "Technical & Aptitude": 30,
          "Coding Round": 16,
          "Group Discussion": 5,
          "Presentation": 8,
          "Mock Interview": 18
        },
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 10,
        name: "Arjun Gupta",
        class: "MSc IT II Year",
        prnNumber: "2201234576",
        totalMarks: 77,
        activities: {
          "Technical & Aptitude": 29,
          "Coding Round": 15,
          "Group Discussion": 4,
          "Presentation": 9,
          "Mock Interview": 18
        },
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
      }
    ]
  };

  // Create category-specific leaderboards
  const technicalLeaderboard = [...leaderboardData.overall]
    .sort((a, b) => b.activities["Technical & Aptitude"] - a.activities["Technical & Aptitude"])
    .map((student, index) => ({ ...student, rank: index + 1 }));

  const codingLeaderboard = [...leaderboardData.overall]
    .sort((a, b) => b.activities["Coding Round"] - a.activities["Coding Round"])
    .map((student, index) => ({ ...student, rank: index + 1 }));

  const interviewLeaderboard = [...leaderboardData.overall]
    .sort((a, b) => b.activities["Mock Interview"] - a.activities["Mock Interview"])
    .map((student, index) => ({ ...student, rank: index + 1 }));

  const categories = [
    { 
      id: 'overall', 
      label: 'Overall', 
      icon: Trophy, 
      data: leaderboardData.overall,
      description: 'Combined scores from all activities'
    },
    { 
      id: 'technical', 
      label: 'Technical', 
      icon: Target, 
      data: technicalLeaderboard,
      description: 'Technical & Aptitude Round performance'
    },
    { 
      id: 'coding', 
      label: 'Coding', 
      icon: Award, 
      data: codingLeaderboard,
      description: 'Coding Round performance'
    },
    { 
      id: 'interview', 
      label: 'Interview', 
      icon: Users, 
      data: interviewLeaderboard,
      description: 'Mock Interview performance'
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2: return <Medal className="h-6 w-6 text-gray-400" />;
      case 3: return <Award className="h-6 w-6 text-amber-600" />;
      default: return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white';
      case 2: return 'bg-gradient-to-r from-gray-300 to-gray-500 text-white';
      case 3: return 'bg-gradient-to-r from-amber-400 to-amber-600 text-white';
      default: return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
    }
  };

  const currentCategory = categories.find(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            🏆 Leaderboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Top performers in our Pre-Placement Activity program
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">120</div>
              <div className="text-gray-600">Total Participants</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98</div>
              <div className="text-gray-600">Highest Score</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">76.5</div>
              <div className="text-gray-600">Average Score</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-600">Activities</div>
            </CardContent>
          </Card>
        </div>

        {/* Category Dropdown for Mobile */}
        <div className="block sm:hidden mb-4">
          <select
            value={activeCategory}
            onChange={e => setActiveCategory(e.target.value)}
            className="w-full p-2 border rounded-md text-base"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          {/* Category Tabs for Desktop */}
          <TabsList className="hidden sm:grid w-full grid-cols-4 mb-8 gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2 justify-center">
                  <IconComponent className="h-4 w-4" />
                  <span>{category.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value={activeCategory}>
            {/* Category Description */}
            <Card className="mb-8">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold gradient-text mb-2">
                  {currentCategory?.label} Leaderboard
                </h3>
                <p className="text-gray-600">{currentCategory?.description}</p>
              </CardContent>
            </Card>

            {/* Top 3 Podium */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {currentCategory?.data.slice(0, 3).map((student, index) => (
                <Card key={student.prnNumber} className={`card-hover ${student.rank === 1 ? 'ring-2 ring-yellow-400' : ''}`}>
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <img 
                        src={student.avatar} 
                        alt={student.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                      />
                      <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center ${getRankBadgeColor(student.rank)}`}>
                        <span className="text-sm font-bold">{student.rank}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{student.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{student.class}</p>
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      {getRankIcon(student.rank)}
                      <span className="text-2xl font-bold text-gray-900">
                        {activeCategory === 'overall' ? student.totalMarks : 
                         activeCategory === 'technical' ? student.activities["Technical & Aptitude"] :
                         activeCategory === 'coding' ? student.activities["Coding Round"] :
                         student.activities["Mock Interview"]}
                      </span>
                    </div>
                    <Badge className={getRankBadgeColor(student.rank)}>
                      {student.rank === 1 ? '🥇 Champion' : 
                       student.rank === 2 ? '🥈 Runner-up' : 
                       '🥉 Third Place'}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Full Leaderboard Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl gradient-text">Complete Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentCategory?.data.map((student, index) => (
                    <div 
                      key={student.prnNumber} 
                      className={`flex flex-col sm:flex-row items-center justify-between p-4 rounded-lg border transition-all hover:shadow-md ${
                        student.rank <= 3 ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200' : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center space-x-4 w-full sm:w-auto mb-4 sm:mb-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
                          {getRankIcon(student.rank)}
                        </div>
                        <img 
                          src={student.avatar} 
                          alt={student.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <div className="text-center sm:text-left">
                          <h3 className="font-semibold text-gray-900">{student.name}</h3>
                          <p className="text-gray-600 text-sm">{student.class}</p>
                          <p className="text-gray-500 text-xs">PRN: {student.prnNumber}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                        {/* Activity Breakdown for Overall */}
                        {activeCategory === 'overall' && (
                          <div className="flex flex-wrap justify-center gap-1">
                            {Object.entries(student.activities).map(([activity, marks]) => (
                              <Badge key={activity} variant="outline" className="text-xs">
                                {activity.split(' ')[0]}: {marks}
                              </Badge>
                            ))}
                          </div>
                        )}
                        
                        {/* Total Score */}
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">
                            {activeCategory === 'overall' ? student.totalMarks : 
                             activeCategory === 'technical' ? student.activities["Technical & Aptitude"] :
                             activeCategory === 'coding' ? student.activities["Coding Round"] :
                             student.activities["Mock Interview"]}
                          </div>
                          <div className="text-xs text-gray-500">
                            {activeCategory === 'overall' ? '/100' : 
                             activeCategory === 'technical' ? '/40' :
                             activeCategory === 'coding' ? '/25' :
                             '/20'}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Achievement Section */}
        <Card className="mt-16 gradient-bg text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-center">🎯 Achievement Unlocked!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-blue-100 mb-6">
                Congratulations to all participants! Your dedication and hard work in the 
                Pre-Placement Activity program is truly commendable.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Star className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                  <h4 className="font-semibold mb-1">Excellence</h4>
                  <p className="text-blue-100 text-sm">Top performers showing exceptional skills</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-300" />
                  <h4 className="font-semibold mb-1">Growth</h4>
                  <p className="text-blue-100 text-sm">Continuous improvement and learning</p>
                </div>
                <div className="text-center">
                  <Trophy className="h-8 w-8 mx-auto mb-2 text-orange-300" />
                  <h4 className="font-semibold mb-1">Success</h4>
                  <p className="text-blue-100 text-sm">Ready for placement opportunities</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;
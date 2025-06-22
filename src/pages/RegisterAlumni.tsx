
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Upload, User, Briefcase, GraduationCap } from 'lucide-react';

const RegisterAlumni = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    batch: '',
    currentRole: '',
    company: '',
    location: '',
    package: '',
    linkedin: '',
    photo: null,
    achievements: '',
    advice: '',
    willingToMentor: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Alumni registration data:', formData);
    // Here you would typically send the data to your backend
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const batches = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Register as Alumni
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our alumni network and help guide the next generation of computer science professionals
          </p>
        </div>

        {/* Registration Form */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-2xl text-center gradient-text flex items-center justify-center space-x-2">
              <GraduationCap className="h-8 w-8" />
              <span>Alumni Registration Form</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="batch">Graduation Batch *</Label>
                  <Select onValueChange={(value) => handleInputChange('batch', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your batch" />
                    </SelectTrigger>
                    <SelectContent>
                      {batches.map((batch) => (
                        <SelectItem key={batch} value={batch}>
                          {batch}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Professional Information */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Briefcase className="h-5 w-5" />
                  <span>Professional Information</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentRole">Current Role *</Label>
                    <Input
                      id="currentRole"
                      placeholder="e.g., Software Engineer"
                      value={formData.currentRole}
                      onChange={(e) => handleInputChange('currentRole', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      placeholder="e.g., Google, Microsoft"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="e.g., Bangalore, Mumbai"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="package">Package (LPA)</Label>
                    <Input
                      id="package"
                      placeholder="e.g., ₹12 LPA"
                      value={formData.package}
                      onChange={(e) => handleInputChange('package', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={formData.linkedin}
                  onChange={(e) => handleInputChange('linkedin', e.target.value)}
                />
              </div>

              {/* Photo Upload */}
              <div className="space-y-2">
                <Label htmlFor="photo">Profile Photo</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 2MB</p>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                <Label htmlFor="achievements">Key Achievements</Label>
                <Textarea
                  id="achievements"
                  placeholder="e.g., Published research papers, Patents, Awards, Certifications..."
                  rows={3}
                  value={formData.achievements}
                  onChange={(e) => handleInputChange('achievements', e.target.value)}
                />
              </div>

              {/* Advice */}
              <div className="space-y-2">
                <Label htmlFor="advice">Advice for Juniors</Label>
                <Textarea
                  id="advice"
                  placeholder="Share your wisdom and advice for current students..."
                  rows={4}
                  value={formData.advice}
                  onChange={(e) => handleInputChange('advice', e.target.value)}
                />
              </div>

              {/* Mentoring */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="mentor"
                  checked={formData.willingToMentor}
                  onChange={(e) => handleInputChange('willingToMentor', e.target.checked)}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="mentor">I'm willing to mentor current students</Label>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button type="submit" size="lg" className="w-full">
                  Register as Alumni
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl gradient-text">Why Join Our Alumni Network?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Network Building</h3>
                <p className="text-gray-600 text-sm">Connect with fellow alumni across different industries and locations</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Give Back</h3>
                <p className="text-gray-600 text-sm">Help current students with mentorship and career guidance</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Career Opportunities</h3>
                <p className="text-gray-600 text-sm">Share and discover job opportunities within the network</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterAlumni;

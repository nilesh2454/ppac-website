import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth, RegisterData } from '@/context/AuthContext';
import { Eye, EyeOff, User, Mail, Phone, Lock, CheckCircle, GraduationCap, Hash, Upload, FileText, X } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }: RegisterModalProps) => {
  const { register } = useAuth();
  const [formData, setFormData] = useState<RegisterData>({
    fullName: '',
    email: '',
    mobileNumber: '',
    class: '',
    prnNumber: '',
    resume: null,
    password: '',
    confirmPassword: '',
    activities: []
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const activities = [
    'Technical & Aptitude Round',
    'Coding Round',
    'Group Discussion',
    'Presentation Round',
    'Mock Interview Round',
    'Resume Building Workshop'
  ];

  const classOptions = [
    'MCA I Year',
    'MCA II Year',
    'MSc CS I Year',
    'MSc CS II Year',
    'MSc IT I Year',
    'MSc IT II Year'
  ];

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = 'Full name should contain only alphabets';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Mobile number validation
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number must be exactly 10 digits';
    }

    // Class validation
    if (!formData.class.trim()) {
      newErrors.class = 'Class selection is required';
    }

    // PRN number validation
    if (!formData.prnNumber.trim()) {
      newErrors.prnNumber = 'PRN number is required';
    } else if (!/^\d{10}$/.test(formData.prnNumber)) {
      newErrors.prnNumber = 'PRN number must be exactly 10 digits';
    }

    // Resume validation
    if (!formData.resume) {
      newErrors.resume = 'Resume upload is required';
    } else if (formData.resume.type !== 'application/pdf') {
      newErrors.resume = 'Only PDF files are allowed';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W])/.test(formData.password)) {
      newErrors.password = 'Password must include uppercase, lowercase, and number/special character';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Activities validation
    if (formData.activities.length === 0) {
      newErrors.activities = 'Please select at least one activity';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const success = await register(formData);
      if (success) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
          onSwitchToLogin();
          setFormData({
            fullName: '',
            email: '',
            mobileNumber: '',
            class: '',
            prnNumber: '',
            resume: null,
            password: '',
            confirmPassword: '',
            activities: []
          });
        }, 2000);
      } else {
        setErrors({ general: 'Registration failed. User may already exist.' });
      }
    } catch (err) {
      setErrors({ general: 'An error occurred during registration. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleActivityChange = (activity: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      activities: checked
        ? [...prev.activities, activity]
        : prev.activities.filter(a => a !== activity)
    }));
    if (errors.activities) {
      setErrors(prev => ({ ...prev, activities: '' }));
    }
  };

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf') {
        setFormData(prev => ({ ...prev, resume: file }));
        if (errors.resume) {
          setErrors(prev => ({ ...prev, resume: '' }));
        }
      } else {
        setErrors(prev => ({ ...prev, resume: 'Only PDF files are allowed' }));
      }
    }
  };

  const removeResume = () => {
    setFormData(prev => ({ ...prev, resume: null }));
    if (errors.resume) {
      setErrors(prev => ({ ...prev, resume: '' }));
    }
  };

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-600 mb-2">Registration Successful!</h2>
            <p className="text-gray-600">You can now login with your credentials.</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center gradient-text">Register Now</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 p-2 sm:p-0">
          {errors.general && (
            <Alert variant="destructive">
              <AlertDescription>{errors.general}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="pl-10"
                required
              />
            </div>
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="pl-10"
                required
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobileNumber">Mobile Number *</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="mobileNumber"
                type="tel"
                placeholder="Enter 10-digit mobile number"
                value={formData.mobileNumber}
                onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                className="pl-10"
                maxLength={10}
                required
              />
            </div>
            {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="class">Class *</Label>
            <div className="relative">
              <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Select
                value={formData.class}
                onValueChange={(value) => handleInputChange('class', value)}
                required
              >
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Select your class" />
                </SelectTrigger>
                <SelectContent>
                  {classOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {errors.class && <p className="text-red-500 text-sm">{errors.class}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="prnNumber">PRN Number *</Label>
            <div className="relative">
              <Hash className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="prnNumber"
                type="text"
                placeholder="Enter 10-digit PRN number"
                value={formData.prnNumber}
                onChange={(e) => handleInputChange('prnNumber', e.target.value)}
                className="pl-10"
                maxLength={10}
                required
              />
            </div>
            {errors.prnNumber && <p className="text-red-500 text-sm">{errors.prnNumber}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume">Resume Upload * (PDF only)</Label>
            {!formData.resume ? (
              <div className="relative">
                <Upload className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf"
                  onChange={handleResumeUpload}
                  className="pl-10 cursor-pointer"
                  required
                />
              </div>
            ) : (
              <div className="border-2 border-dashed border-green-300 bg-green-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium text-green-800">{formData.resume.name}</p>
                      <p className="text-xs text-green-600">{(formData.resume.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeResume}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
            {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password *</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="pl-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password *</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="pl-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>

          <div className="space-y-3">
            <Label>Activity Selection * (Select at least one)</Label>
            <div className="grid grid-cols-1 gap-3">
              {activities.map((activity) => (
                <div key={activity} className="flex items-center space-x-2">
                  <Checkbox
                    id={activity}
                    checked={formData.activities.includes(activity)}
                    onCheckedChange={(checked) => handleActivityChange(activity, checked as boolean)}
                  />
                  <Label htmlFor={activity} className="text-sm font-normal cursor-pointer">
                    {activity}
                  </Label>
                </div>
              ))}
            </div>
            {errors.activities && <p className="text-red-500 text-sm">{errors.activities}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Registering...' : 'Register'}
          </Button>

          <div className="text-center pt-4">
            <p className="text-sm text-gray-600">
              Already registered?{' '}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Login here
              </button>
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
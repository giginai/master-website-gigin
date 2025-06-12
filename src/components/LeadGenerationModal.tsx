
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Check, Mail, Phone, CheckCircle } from "lucide-react";

interface LeadGenerationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  serviceInterestedIn?: string;
}

const LeadGenerationModal = ({ isOpen, onClose }: LeadGenerationModalProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    emailAddress: '',
    phoneNumber: '',
    serviceInterestedIn: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company Name is required';
    }
    
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    }
    
    if (!formData.serviceInterestedIn) {
      newErrors.serviceInterestedIn = 'Please select a service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid = () => {
    return formData.fullName.trim() && 
           formData.companyName.trim() && 
           formData.emailAddress.trim() && 
           formData.phoneNumber.trim() && 
           formData.serviceInterestedIn &&
           /\S+@\S+\.\S+/.test(formData.emailAddress);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          companyName: '',
          emailAddress: '',
          phoneNumber: '',
          serviceInterestedIn: '',
          message: ''
        });
        onClose();
      }, 3000);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-md w-full p-0 overflow-hidden">
          <div className="bg-white p-8 text-center">
            <div className="mb-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You!
              </h2>
              <p className="text-gray-600">
                Your request has been submitted successfully. Our team will contact you shortly.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
        <div className="flex h-[600px]">
          {/* Left side - Background with content */}
          <div 
            className="flex-1 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: 'url(/lovable-uploads/aabac661-4393-418d-847f-8d74a313e0b3.png)'
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70"></div>
            
            <div className="relative z-10 p-8 text-white flex flex-col justify-center h-full">
              <div className="mb-6">
                <div className="flex items-center mb-6">
                  <img 
                    src="/lovable-uploads/890f5753-3ec6-48a4-80af-a5e0f26aefd0.png" 
                    alt="Company Logo" 
                    className="h-8 mr-3"
                  />
                </div>
                
                <h2 className="text-3xl font-bold mb-4 leading-tight">
                  Looking To Verify Backgrounds With<br />
                  Confidence?
                </h2>
                
                <p className="text-lg mb-6 text-white/90 leading-relaxed">
                  Join 150+ companies that trust us for fast, reliable, and compliant background checks.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white/90">Enterprise-grade access and flexibility</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white/90">Minimal effort with maximum visibility, with AI workflows</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white/90">Automated updates, no chasing vendors</span>
                  </div>
                </div>
                
                <div className="flex space-x-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-2 mx-auto">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs text-white/70 mb-1">Message us</p>
                    <p className="text-white font-medium text-sm">sales@gigin.ai</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-2 mx-auto">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs text-white/70 mb-1">Call us</p>
                    <p className="text-white font-medium text-sm">+91 7022604441</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Form */}
          <div className="flex-1 bg-white p-8 overflow-y-auto">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                Hire Smarter, Verify Faster
              </DialogTitle>
              <p className="text-gray-600">
                Background Checks Made Easy
              </p>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-1 block">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`w-full h-10 text-sm ${errors.fullName ? 'border-red-500' : ''}`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="companyName" className="text-sm font-medium text-gray-700 mb-1 block">
                  Company Name *
                </Label>
                <Input
                  id="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className={`w-full h-10 text-sm ${errors.companyName ? 'border-red-500' : ''}`}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="emailAddress" className="text-sm font-medium text-gray-700 mb-1 block">
                  Email Address *
                </Label>
                <Input
                  id="emailAddress"
                  type="email"
                  placeholder="Email Address"
                  value={formData.emailAddress}
                  onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                  className={`w-full h-10 text-sm ${errors.emailAddress ? 'border-red-500' : ''}`}
                />
                {errors.emailAddress && (
                  <p className="text-red-500 text-xs mt-1">{errors.emailAddress}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700 mb-1 block">
                  Phone Number *
                </Label>
                <Input
                  id="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className={`w-full h-10 text-sm ${errors.phoneNumber ? 'border-red-500' : ''}`}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="serviceInterestedIn" className="text-sm font-medium text-gray-700 mb-1 block">
                  Service Interested In *
                </Label>
                <Select onValueChange={(value) => handleInputChange('serviceInterestedIn', value)}>
                  <SelectTrigger className={`w-full h-10 text-sm ${errors.serviceInterestedIn ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Service Interested In" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="background-verification">Background Verification</SelectItem>
                    <SelectItem value="identity-verification">Identity Verification</SelectItem>
                    <SelectItem value="employment-verification">Employment Verification</SelectItem>
                    <SelectItem value="education-verification">Education Verification</SelectItem>
                    <SelectItem value="criminal-verification">Criminal Verification</SelectItem>
                    <SelectItem value="social-media-verification">Social Media Verification</SelectItem>
                  </SelectContent>
                </Select>
                {errors.serviceInterestedIn && (
                  <p className="text-red-500 text-xs mt-1">{errors.serviceInterestedIn}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1 block">
                  Message/Requirement Brief (Optional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Message/Requirement Brief"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full min-h-[80px] text-sm resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={!isFormValid()}
                className={`w-full h-10 text-sm font-medium rounded-lg transition-colors ${
                  isFormValid() 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadGenerationModal;

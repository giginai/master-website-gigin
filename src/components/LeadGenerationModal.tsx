
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
import { Check, Mail, Phone } from "lucide-react";

interface LeadGenerationModalProps {
  isOpen: boolean;
  onClose: () => void;
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-[90vh] p-0 overflow-hidden">
        <div className="flex h-full">
          {/* Left side - Purple background with content */}
          <div className="flex-1 bg-gradient-to-br from-purple-600 to-purple-800 p-12 text-white flex flex-col justify-center">
            <div className="mb-8">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-green-500 rounded mr-3 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold">Verifyin</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Looking To Verify Backgrounds With<br />
                Confidence?
              </h2>
              
              <p className="text-lg mb-8 text-purple-100 leading-relaxed">
                Join 150+ companies that trust us for fast, reliable, and compliant background<br />
                checks.
              </p>
              
              <div className="space-y-4 mb-12">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-purple-100">Enterprise-grade access and flexibility</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-purple-100">Minimal effort with maximum visibility, with AI workflows</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-purple-100">Automated updates, no chasing vendors</span>
                </div>
              </div>
              
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-700 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-purple-200 mb-1">Message us</p>
                  <p className="text-white font-medium">sales@gigin.ai</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-700 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-purple-200 mb-1">Call us</p>
                  <p className="text-white font-medium">+91 7022604441</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Form */}
          <div className="flex-1 bg-white p-12">
            <DialogHeader className="mb-8">
              <DialogTitle className="text-3xl font-bold text-gray-900 mb-2">
                Hire Smarter, Verify Faster
              </DialogTitle>
              <p className="text-gray-600 text-lg">
                Background Checks Made Easy
              </p>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 block">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full h-12 text-base"
                />
              </div>
              
              <div>
                <Label htmlFor="companyName" className="text-sm font-medium text-gray-700 mb-2 block">
                  Company Name
                </Label>
                <Input
                  id="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full h-12 text-base"
                />
              </div>
              
              <div>
                <Label htmlFor="emailAddress" className="text-sm font-medium text-gray-700 mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="emailAddress"
                  type="email"
                  placeholder="Email Address"
                  value={formData.emailAddress}
                  onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                  className="w-full h-12 text-base"
                />
              </div>
              
              <div>
                <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700 mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="w-full h-12 text-base"
                />
              </div>
              
              <div>
                <Label htmlFor="serviceInterestedIn" className="text-sm font-medium text-gray-700 mb-2 block">
                  Service Interested In
                </Label>
                <Select onValueChange={(value) => handleInputChange('serviceInterestedIn', value)}>
                  <SelectTrigger className="w-full h-12 text-base">
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
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                  Message/Requirement Brief
                </Label>
                <Textarea
                  id="message"
                  placeholder="Message/Requirement Brief"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full min-h-[120px] text-base resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium rounded-lg"
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

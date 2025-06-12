
import React from 'react';
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

interface FormData {
  fullName: string;
  companyName: string;
  emailAddress: string;
  phoneNumber: string;
  serviceInterestedIn: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  serviceInterestedIn?: string;
}

interface LeadFormFieldsProps {
  formData: FormData;
  errors: FormErrors;
  onInputChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isFormValid: boolean;
}

const LeadFormFields = ({ 
  formData, 
  errors, 
  onInputChange, 
  onSubmit, 
  isFormValid 
}: LeadFormFieldsProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-1 block">
          Full Name *
        </Label>
        <Input
          id="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) => onInputChange('fullName', e.target.value)}
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
          onChange={(e) => onInputChange('companyName', e.target.value)}
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
          onChange={(e) => onInputChange('emailAddress', e.target.value)}
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
          onChange={(e) => onInputChange('phoneNumber', e.target.value)}
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
        <Select onValueChange={(value) => onInputChange('serviceInterestedIn', value)}>
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
          onChange={(e) => onInputChange('message', e.target.value)}
          className="w-full min-h-[80px] text-sm resize-none"
        />
      </div>
      
      <Button 
        type="submit" 
        disabled={!isFormValid}
        className={`w-full h-10 text-sm font-medium rounded-lg transition-colors ${
          isFormValid 
            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Submit
      </Button>
    </form>
  );
};

export default LeadFormFields;

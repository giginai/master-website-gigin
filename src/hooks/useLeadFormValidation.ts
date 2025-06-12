
import { useState } from 'react';

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

export const useLeadFormValidation = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    emailAddress: '',
    phoneNumber: '',
    serviceInterestedIn: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

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

  const resetForm = () => {
    setFormData({
      fullName: '',
      companyName: '',
      emailAddress: '',
      phoneNumber: '',
      serviceInterestedIn: '',
      message: ''
    });
    setErrors({});
  };

  return {
    formData,
    errors,
    handleInputChange,
    validateForm,
    isFormValid,
    resetForm
  };
};


import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLeadFormValidation } from "@/hooks/useLeadFormValidation";
import LeadFormSuccessMessage from "./LeadFormSuccessMessage";
import LeadFormFields from "./LeadFormFields";
import LeadModalBackground from "./LeadModalBackground";

interface LeadGenerationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadGenerationModal = ({ isOpen, onClose }: LeadGenerationModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    formData,
    errors,
    handleInputChange,
    validateForm,
    isFormValid,
    resetForm
  } = useLeadFormValidation();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (validateForm()) {
    try {
      await fetch('https://hook.eu2.make.com/i5g47hgra5pewog02zg8wmuo12jlure6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        resetForm();
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Make Webhook Error:", error);
    }
  }
};



  const handleClose = () => {
    setIsSubmitted(false);
    resetForm();
    onClose();
  };

  if (isSubmitted) {
    return (
      <LeadFormSuccessMessage 
        isOpen={isOpen} 
        onClose={handleClose} 
      />
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
        <div className="flex h-[600px]">
          <LeadModalBackground />
          
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
            
            <LeadFormFields
              formData={formData}
              errors={errors}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
              isFormValid={isFormValid()}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadGenerationModal;

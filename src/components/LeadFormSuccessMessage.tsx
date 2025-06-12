
import React from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

interface LeadFormSuccessMessageProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadFormSuccessMessage = ({ isOpen, onClose }: LeadFormSuccessMessageProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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
};

export default LeadFormSuccessMessage;

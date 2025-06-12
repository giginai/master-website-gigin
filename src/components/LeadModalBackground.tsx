
import React from 'react';
import { Check, Mail, Phone } from "lucide-react";

const LeadModalBackground = () => {
  return (
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
  );
};

export default LeadModalBackground;


import React from 'react';
import SchemeCard, { Scheme } from './SchemeCard';

interface ResponseSectionProps {
  schemes: Scheme[];
  isLoading: boolean;
  language: string;
  responseMessage?: string;
}

const ResponseSection: React.FC<ResponseSectionProps> = ({ 
  schemes, 
  isLoading, 
  language,
  responseMessage 
}) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-6">
        <div className="w-12 h-12 rounded-full border-4 border-t-secondary border-primary animate-spin mb-4"></div>
        <p className="text-gray-600">Finding relevant schemes...</p>
      </div>
    );
  }

  if (schemes.length === 0 && !responseMessage) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {responseMessage && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 animate-fade-in">
          <p className="text-lg">{responseMessage}</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {schemes.map((scheme, index) => (
          <SchemeCard 
            key={scheme.name} 
            scheme={scheme} 
            language={language}
            animationDelay={index * 200}
          />
        ))}
      </div>
    </div>
  );
};

export default ResponseSection;

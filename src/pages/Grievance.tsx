
import React from 'react';
import Header from '@/components/Header';
import GrievanceForm from '@/components/GrievanceForm';

const Grievance = () => {
  return (
    <div className="min-h-screen bg-accent/30">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Scheme Grievance Portal
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Submit your concerns or complaints regarding any government scheme
          </p>
        </div>
        
        <GrievanceForm />
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="container max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p className="mb-2">सार्थी<span className="text-secondary">AI</span> - Your AI assistant for government schemes</p>
          <p className="text-sm">Built with ❤️ for hackathon - {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Grievance;

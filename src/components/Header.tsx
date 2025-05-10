
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/logo.svg"
            alt="SaarthiAI Logo"
            className="h-8 w-8"
            onError={(e) => {
              // Fallback if the logo doesn't exist
              e.currentTarget.style.display = 'none';
            }}
          />
          <h1 className="text-xl font-bold text-primary">
            सार्थी<span className="text-secondary">AI</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/grievance" className="text-gray-700 hover:text-primary transition-colors">
            File Grievance
          </Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-primary transition-colors">
            Scheme Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  currentLanguage, 
  onLanguageChange 
}) => {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'kn', name: 'ಕನ್ನಡ' }
  ];

  return (
    <div className="flex items-center justify-center space-x-2 mb-6">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`language-toggle text-sm font-medium ${
            currentLanguage === lang.code ? 'active' : 'bg-accent text-primary-dark'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;


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
    // { code: 'hi', name: 'हिंदी' },
    { code: 'kn', name: 'ಕನ್ನಡ' }
  ];

  return (
    <div className="flex items-center justify-center space-x-2 mb-6">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`px-4 py-2 rounded-md transition-colors ${currentLanguage === lang.code
              ? 'bg-primary text-white shadow-md'
              : 'bg-accent text-primary-dark hover:bg-accent/70'
            }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;

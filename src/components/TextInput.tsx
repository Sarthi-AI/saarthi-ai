
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TextInputProps {
  placeholder: string;
  onSubmit: (text: string) => void;
  buttonText: string;
}

const TextInput: React.FC<TextInputProps> = ({ 
  placeholder, 
  onSubmit,
  buttonText 
}) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSubmit(inputText.trim());
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-2xl">
      <div className="relative flex-1">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full p-3 pr-10 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder={placeholder}
        />
      </div>
      <Button 
        type="submit" 
        className="rounded-l-none"
        disabled={!inputText.trim()}
      >
        <Send size={18} className="mr-2" />
        {buttonText}
      </Button>
    </form>
  );
};

export default TextInput;

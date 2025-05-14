import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import LanguageSelector from '@/components/LanguageSelector';
import ResponseSection from '@/components/ResponseSection';
import { Scheme } from '@/components/SchemeCard';
import ChatBot from '@/components/ChatBot';

// Language messages for multilingual support
const messages = {
  en: {
    title: "Find the right government scheme for you",
    subtitle: "Ask about any government scheme by speaking or typing",
    instruction: "Press the microphone button and start speaking or type your question below",
    placeholder: "Type your question here...",
    searchButton: "Search",
    example1: "What schemes are available for women entrepreneurs?",
    example2: "I'm a farmer looking for subsidies for irrigation",
    example3: "Are there schemes for education loans?",
    embedUrl: "https://app.toughtongueai.com/embed/minimal/681edba37b6fcab35eb0da42?pulse=true&bg=blue-900&hidePoweredBy=true&transcribe=true&buttonStartLabel=Ask+Query&buttonStopLabel=Done",
    goToChat: "Go to Chat",
    goToAudio: "Go to Audio"
  },
  kn: {
    title: "ನಿಮಗೆ ಸರಿಯಾದ ಸರ್ಕಾರಿ ಯೋಜನೆಯನ್ನು ಹುಡುಕಿ",
    subtitle: "ಮಾತನಾಡುವ ಅಥವಾ ಟೈಪ್ ಮಾಡುವ ಮೂಲಕ ಯಾವುದೇ ಸರ್ಕಾರಿ ಯೋಜನೆಯ ಬಗ್ಗೆ ಕೇಳಿ",
    instruction: "ಮೈಕ್ರೋಫೋನ್ ಬಟನ್ ಒತ್ತಿ ಮತ್ತು ಮಾತನಾಡಲು ಪ್ರಾರಂಭಿಸಿ ಅಥವಾ ಕೆಳಗೆ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ",
    placeholder: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ...",
    searchButton: "ಹುಡುಕಿ",
    example1: "ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಯಾವ ಯೋಜನೆಗಳು ಲಭ್ಯವಿದೆ?",
    example2: "ನಾನು ನೀರಾವರಿಗಾಗಿ ಸಬ್ಸಿಡಿ ಹುಡುಕುತ್ತಿರುವ ರೈತ",
    example3: "ಶಿಕ್ಷಣ ಸಾಲಕ್ಕೆ ಯೋಜನೆಗಳಿವೆಯೇ?",
    embedUrl: "https://app.toughtongueai.com/embed/minimal/681edf157b6fcab35eb0da4b?pulse=true&bg=blue-900",
    goToChat: "Go to Chat",
    goToAudio: "Go to Audio(Kannada)"
  }
};

const Index = () => {
  const [language, setLanguage] = useState('en');
  const [embedUrl, setembedUrl] = useState(messages['en'].embedUrl);
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [showChatBot, setShowChatBot] = useState(false); // New state to toggle ChatBot view

  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    setembedUrl(messages[language as keyof typeof messages].embedUrl);
  }, [language]);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setSchemes([]);
    setResponseMessage('');
    setembedUrl(messages[lang as keyof typeof messages].embedUrl);
  };

  const toggleChatBot = () => {
    setShowChatBot(!showChatBot);
  };

  return (
    <div className="min-h-screen bg-accent/30">
      <Header />
      <main className="container max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            {messages[language as keyof typeof messages].title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {messages[language as keyof typeof messages].subtitle}
          </p>
        </div>

        <div className="flex flex-col items-center mb-8">
          <LanguageSelector
            currentLanguage={language}
            onLanguageChange={handleLanguageChange}
          />
        </div>

        {/* Go to Chat or Go to Audio Button */}
        <div className="text-center mb-8">
          <button
            onClick={toggleChatBot}
            className="px-4 py-2 bg-primary text-white rounded-md shadow-md hover:bg-primary-dark transition"
          >
            {showChatBot
              ? messages[language as keyof typeof messages].goToAudio
              : messages[language as keyof typeof messages].goToChat}
          </button>
        </div>

        {/* Conditional Rendering of ChatBot and Audio Chatbot */}
        <div className="transition-all duration-700 ease-in-out">
          {showChatBot ? (
            <ChatBot />
          ) : (
            <iframe
              key={embedUrl}
              src={embedUrl}
              height="700px"
              width={"80%"}
              allow="microphone"
              className="mx-auto"
            ></iframe>
          )}
        </div>

        <ResponseSection
          schemes={schemes}
          isLoading={isProcessing}
          language={language}
          responseMessage={responseMessage}
        />
      </main>

      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="container max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p className="mb-2">सार्थी<span className="text-secondary">AI</span> - Your AI assistant for government schemes</p>
          <p className="text-sm">Built with ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

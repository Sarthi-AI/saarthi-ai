
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import LanguageSelector from '@/components/LanguageSelector';
import MicrophoneButton from '@/components/MicrophoneButton';
import TranscriptDisplay from '@/components/TranscriptDisplay';
import ResponseSection from '@/components/ResponseSection';
import { sampleSchemes } from '@/data/sampleSchemes';
import { Scheme } from '@/components/SchemeCard';
import { toast } from '@/components/ui/use-toast';

// Language messages for multilingual support
const messages = {
  en: {
    title: "Find the right government scheme for you",
    subtitle: "Ask about any government scheme by speaking or typing",
    instruction: "Press the microphone button and start speaking",
    placeholder: "Type your question here...",
    searchButton: "Search",
    example1: "What schemes are available for women entrepreneurs?",
    example2: "I'm a farmer looking for subsidies for irrigation",
    example3: "Are there schemes for education loans?"
  },
  hi: {
    title: "आपके लिए सही सरकारी योजना खोजें",
    subtitle: "बोलकर या टाइप करके किसी भी सरकारी योजना के बारे में पूछें",
    instruction: "माइक्रोफोन बटन दबाएं और बोलना शुरू करें",
    placeholder: "अपना प्रश्न यहां लिखें...",
    searchButton: "खोजें",
    example1: "महिला उद्यमियों के लिए कौन सी योजनाएं उपलब्ध हैं?",
    example2: "मैं सिंचाई के लिए सब्सिडी की तलाश में एक किसान हूं",
    example3: "क्या शिक्षा ऋण के लिए योजनाएं हैं?"
  },
  kn: {
    title: "ನಿಮಗೆ ಸರಿಯಾದ ಸರ್ಕಾರಿ ಯೋಜನೆಯನ್ನು ಹುಡುಕಿ",
    subtitle: "ಮಾತನಾಡುವ ಅಥವಾ ಟೈಪ್ ಮಾಡುವ ಮೂಲಕ ಯಾವುದೇ ಸರ್ಕಾರಿ ಯೋಜನೆಯ ಬಗ್ಗೆ ಕೇಳಿ",
    instruction: "ಮೈಕ್ರೋಫೋನ್ ಬಟನ್ ಒತ್ತಿ ಮತ್ತು ಮಾತನಾಡಲು ಪ್ರಾರಂಭಿಸಿ",
    placeholder: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ...",
    searchButton: "ಹುಡುಕಿ",
    example1: "ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಯಾವ ಯೋಜನೆಗಳು ಲಭ್ಯವಿದೆ?",
    example2: "ನಾನು ನೀರಾವರಿಗಾಗಿ ಸಬ್ಸಿಡಿ ಹುಡುಕುತ್ತಿರುವ ರೈತ",
    example3: "ಶಿಕ್ಷಣ ಸಾಲಕ್ಕೆ ಯೋಜನೆಗಳಿವೆಯೇ?"
  }
};

const Index = () => {
  const [language, setLanguage] = useState('en');
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [responseMessage, setResponseMessage] = useState('');

  // Function to handle language change
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // Reset state when language changes
    setTranscript('');
    setSchemes([]);
    setResponseMessage('');
  };

  // Mock function to simulate voice recognition
  const startListening = () => {
    setIsListening(true);
    setTranscript('');
    setIsProcessing(true);
    
    // Simulate voice recognition (in a real app, use the Web Speech API)
    setTimeout(() => {
      const demoQueries = [
        "I need a loan to start a small business",
        "मुझे एक छोटा व्यापार शुरू करने के लिए ऋण की आवश्यकता है",
        "ನನಗೆ ಒಂದು ಚಿಕ್ಕ ವ್ಯಾಪಾರ ಪ್ರಾರಂಭಿಸಲು ಸಾಲ ಬೇಕು"
      ];
      
      // Select a demo query based on current language
      let index = 0;
      if (language === 'hi') index = 1;
      if (language === 'kn') index = 2;
      
      setTranscript(demoQueries[index]);
      setIsListening(false);
      
      // Process the query after a short delay
      setTimeout(() => {
        processQuery(demoQueries[index]);
      }, 1000);
    }, 2000);
  };

  // Function to stop listening
  const stopListening = () => {
    setIsListening(false);
  };

  // Function to process the query and find matching schemes
  const processQuery = (query: string) => {
    setIsProcessing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // For the demo, filter schemes based on some keywords in the query
      const lowerQuery = query.toLowerCase();
      
      let filteredSchemes = sampleSchemes;
      
      // Simple keyword matching (in a real app, use NLP/vector search)
      if (lowerQuery.includes("loan") || lowerQuery.includes("ऋण") || lowerQuery.includes("ಸಾಲ")) {
        filteredSchemes = sampleSchemes.filter(scheme => 
          scheme.category.includes("loan") || 
          scheme.description.toLowerCase().includes("loan") ||
          scheme.name.toLowerCase().includes("loan") ||
          scheme.name === "MUDRA Loan (Pradhan Mantri MUDRA Yojana)" ||
          scheme.name === "PMEGP (Prime Minister's Employment Generation Programme)"
        );
      } 
      else if (lowerQuery.includes("farmer") || lowerQuery.includes("agriculture") || 
               lowerQuery.includes("किसान") || lowerQuery.includes("ರೈತ")) {
        filteredSchemes = sampleSchemes.filter(scheme => 
          scheme.category.includes("agriculture") || 
          scheme.sector === "Agriculture"
        );
      }
      else if (lowerQuery.includes("pension") || lowerQuery.includes("elderly") || 
               lowerQuery.includes("पेंशन") || lowerQuery.includes("ಪಿಂಚಣಿ")) {
        filteredSchemes = sampleSchemes.filter(scheme => 
          scheme.category.includes("pension") || 
          scheme.name === "NSAP (National Social Assistance Programme)"
        );
      }
      
      // Limit to top 3 schemes
      filteredSchemes = filteredSchemes.slice(0, 3);
      
      setSchemes(filteredSchemes);
      
      // Generate a response message based on the language
      let message = "";
      if (language === "en") {
        message = `Based on your query, I found ${filteredSchemes.length} relevant schemes that might help you.`;
      } else if (language === "hi") {
        message = `आपकी पूछताछ के आधार पर, मुझे ${filteredSchemes.length} प्रासंगिक योजनाएं मिलीं जो आपकी मदद कर सकती हैं।`;
      } else if (language === "kn") {
        message = `ನಿಮ್ಮ ಪ್ರಶ್ನೆಯ ಆಧಾರದ ಮೇಲೆ, ನಾನು ${filteredSchemes.length} ಸಂಬಂಧಿತ ಯೋಜನೆಗಳನ್ನು ಕಂಡುಕೊಂಡಿದ್ದೇನೆ ಅವು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಬಹುದು.`;
      }
      
      setResponseMessage(message);
      setIsProcessing(false);
      
      toast({
        title: "Results found!",
        description: `Found ${filteredSchemes.length} schemes matching your query.`,
      });
    }, 3000);
  };

  // Function to handle example query clicks
  const handleExampleClick = (query: string) => {
    setTranscript(query);
    processQuery(query);
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
        
        <div className="flex flex-col items-center mb-12">
          <LanguageSelector 
            currentLanguage={language} 
            onLanguageChange={handleLanguageChange} 
          />
          
          <TranscriptDisplay 
            transcript={transcript} 
            isProcessing={isProcessing} 
          />
          
          <div className="flex flex-col items-center space-y-4">
            <MicrophoneButton 
              isListening={isListening} 
              onStartListening={startListening} 
              onStopListening={stopListening} 
            />
            <p className="text-sm text-gray-500">
              {isListening ? "Listening..." : messages[language as keyof typeof messages].instruction}
            </p>
          </div>
        </div>
        
        {/* Example queries section */}
        {!transcript && !isProcessing && (
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-center text-gray-500 mb-4">Try asking about:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                messages[language as keyof typeof messages].example1,
                messages[language as keyof typeof messages].example2,
                messages[language as keyof typeof messages].example3,
              ].map((example, index) => (
                <button
                  key={index}
                  className="bg-white p-3 rounded-lg text-left shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  onClick={() => handleExampleClick(example)}
                >
                  <p className="text-sm text-gray-700">{example}</p>
                </button>
              ))}
            </div>
          </div>
        )}
        
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
          <p className="text-sm">Built with ❤️ for hackathon - {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import LanguageSelector from '@/components/LanguageSelector';
import MicrophoneButton from '@/components/MicrophoneButton';
import TextInput from '@/components/TextInput';
import TranscriptDisplay from '@/components/TranscriptDisplay';
import ResponseSection from '@/components/ResponseSection';
import { sampleSchemes } from '@/data/sampleSchemes';
import { Scheme } from '@/components/SchemeCard';
import { toast } from '@/components/ui/use-toast';
import axios from "axios";

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
    example3: "Are there schemes for education loans?"
  },
  hi: {
    title: "आपके लिए सही सरकारी योजना खोजें",
    subtitle: "बोलकर या टाइप करके किसी भी सरकारी योजना के बारे में पूछें",
    instruction: "माइक्रोफोन बटन दबाएं और बोलना शुरू करें या नीचे अपना प्रश्न टाइप करें",
    placeholder: "अपना प्रश्न यहां लिखें...",
    searchButton: "खोजें",
    example1: "महिला उद्यमियों के लिए कौन सी योजनाएं उपलब्ध हैं?",
    example2: "मैं सिंचाई के लिए सब्सिडी की तलाश में एक किसान हूं",
    example3: "क्या शिक्षा ऋण के लिए योजनाएं हैं?"
  },
  kn: {
    title: "ನಿಮಗೆ ಸರಿಯಾದ ಸರ್ಕಾರಿ ಯೋಜನೆಯನ್ನು ಹುಡುಕಿ",
    subtitle: "ಮಾತನಾಡುವ ಅಥವಾ ಟೈಪ್ ಮಾಡುವ ಮೂಲಕ ಯಾವುದೇ ಸರ್ಕಾರಿ ಯೋಜನೆಯ ಬಗ್ಗೆ ಕೇಳಿ",
    instruction: "ಮೈಕ್ರೋಫೋನ್ ಬಟನ್ ಒತ್ತಿ ಮತ್ತು ಮಾತನಾಡಲು ಪ್ರಾರಂಭಿಸಿ ಅಥವಾ ಕೆಳಗೆ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ",
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

  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      // Browser supports speech recognition
      const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognitionAPI();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event) => {
        const current = event.resultIndex;
        if (event.results[current].isFinal) {
          const result = event.results[current][0].transcript;
          setTranscript(result);

          // Auto-process when speech recognition ends
          if (result.trim() !== '') {
            processQuery(result);
          }
        } else {
          // Update transcript with interim results
          const interim = event.results[current][0].transcript;
          setTranscript(interim);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
        toast({
          title: "Error",
          description: `Speech recognition error: ${event.error}`,
          variant: "destructive"
        });
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };

      // Set language for speech recognition based on user selection
      const updateRecognitionLanguage = () => {
        if (recognitionRef.current) {
          switch (language) {
            case 'en':
              recognitionRef.current.lang = 'en-US';
              break;
            case 'hi':
              recognitionRef.current.lang = 'hi-IN';
              break;
            case 'kn':
              recognitionRef.current.lang = 'kn-IN';
              break;
            default:
              recognitionRef.current.lang = 'en-US';
          }
        }
      };

      updateRecognitionLanguage();
    } else {
      // Browser doesn't support speech recognition
      toast({
        title: "Not supported",
        description: "Your browser doesn't support speech recognition. Try using Chrome.",
        variant: "destructive"
      });
    }
  },
    // [language]
  ); // Re-initialize when language changes

  // Function to handle language change
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // Reset state when language changes
    setTranscript('');
    setSchemes([]);
    setResponseMessage('');
  };

  // Function to start speech recognition
  const startListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        setTranscript('');
        setIsProcessing(false);
      } catch (error) {
        console.error('Error starting speech recognition:', error);
        toast({
          title: "Error",
          description: "Failed to start speech recognition. Please try again.",
          variant: "destructive"
        });
      }
    }
  };

  // Function to stop speech recognition
  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  // Function to handle text input submission
  const handleTextSubmit = (text: string) => {
    setTranscript(text);
    processQuery(text);
  };
  //translate -- 
  async function translateToEnglish(text: string): Promise<string> {
    try {
      const response = await axios.post('https://libretranslate.de/translate', {
        q: text,
        source: 'auto',
        target: 'en',
        format: 'text',
      }, {
        headers: { 'accept': 'application/json' }
      });

      const translatedText = response.data.translatedText;
      console.log('🔤 Translated text:', translatedText);  // 💥 You’ll see this in the browser console

      return translatedText;
    } catch (error) {
      console.error('❌ Translation error:', error);
      return text; // fallback: return original if translation fails
    }
  }
  // Function to process the query and find matching schemes
  const processQuery = async (query: string) => {
    try {
      setIsProcessing(true);

      // Translate the query to English
      const lowerQuery = (await translateToEnglish(query.toLowerCase())).toLowerCase();

      let filteredSchemes = sampleSchemes;

      console.log("Filtered Schemes (before filtering): ", filteredSchemes);

      // Simple keyword matching (replace with NLP/vector search in real app)
      if (lowerQuery.includes("loan")) {
        filteredSchemes = sampleSchemes.filter(scheme =>
          scheme.category.some(cat => cat.toLowerCase().includes("loan")) ||
          scheme.description.toLowerCase().includes("loan") ||
          scheme.name.toLowerCase().includes("loan")
        );
      }
      else if (lowerQuery.includes("farmer") || lowerQuery.includes("agriculture")) {
        filteredSchemes = sampleSchemes.filter(scheme =>
          scheme.category.some(cat => cat.toLowerCase().includes("agriculture")) ||
          scheme.sector.toLowerCase() === "agriculture"
        );
      }
      else if (lowerQuery.includes("pension") || lowerQuery.includes("elderly")) {
        filteredSchemes = sampleSchemes.filter(scheme =>
          scheme.category.some(cat => cat.toLowerCase().includes("pension")) ||
          scheme.name === "NSAP (National Social Assistance Programme)"
        );
      }

      // Limit to top 5 schemes
      filteredSchemes = filteredSchemes.slice(0, 5);

      setSchemes(filteredSchemes);

      // Generate a response message based on language
      let message = "";
      if (language === "en") {
        message = `Based on your query, I found ${filteredSchemes.length} relevant schemes that might help you.`;
      } else if (language === "hi") {
        message = `आपकी पूछताछ के आधार पर, मुझे ${filteredSchemes.length} प्रासंगिक योजनाएं मिलीं जो आपकी मदद कर सकती हैं।`;
      } else if (language === "kn") {
        message = `ನಿಮ್ಮ ಪ್ರಶ್ನೆಯ ಆಧಾರದ ಮೇಲೆ, ನಾನು ${filteredSchemes.length} ಸಂಬಂಧಿತ ಯೋಜನೆಗಳನ್ನು ಕಂಡುಕೊಂಡಿದ್ದೇನೆ ಅವು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಬಹುದು.`;
      }

      setResponseMessage(message);
      toast({
        title: "Results found!",
        description: `Found ${filteredSchemes.length} schemes matching your query.`,
      });

    } catch (error) {
      console.error("Error in processQuery:", error);
      toast({
        title: "Error",
        description: "Something went wrong while processing your query.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
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

        <div className="flex flex-col items-center mb-8">
          <LanguageSelector
            currentLanguage={language}
            onLanguageChange={handleLanguageChange}
          />

          <TranscriptDisplay
            transcript={transcript}
            isProcessing={isProcessing}
          />

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
            <div className="flex flex-col items-center">
              <MicrophoneButton
                isListening={isListening}
                onStartListening={startListening}
                onStopListening={stopListening}
              />
              <p className="text-sm text-gray-500 mt-2">
                {isListening ? "Listening..." : "Speak"}
              </p>
            </div>

            <div className="text-sm text-gray-500 hidden md:block">or</div>

            <TextInput
              placeholder={messages[language as keyof typeof messages].placeholder}
              onSubmit={handleTextSubmit}
              buttonText={messages[language as keyof typeof messages].searchButton}
            />
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
          <p className="text-sm">Built with ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

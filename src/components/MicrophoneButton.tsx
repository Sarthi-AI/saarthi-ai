
import React from 'react';
import { Mic, MicOff } from 'lucide-react';

interface MicrophoneButtonProps {
  isListening: boolean;
  onStartListening: () => void;
  onStopListening: () => void;
}

const MicrophoneButton: React.FC<MicrophoneButtonProps> = ({
  isListening,
  onStartListening,
  onStopListening
}) => {
  const handleClick = () => {
    if (isListening) {
      onStopListening();
    } else {
      onStartListening();
    }
  };

  return (
    <button
      className={`mic-button relative flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors ${isListening ? 'active' : ''}`}
      onClick={handleClick}
      aria-label={isListening ? "Stop listening" : "Start listening"}
    >
      {isListening ? <MicOff size={24} /> : <Mic size={24} />}
      {isListening && (
        <div className="absolute -inset-1 rounded-full border-4 border-secondary opacity-75 animate-pulse"></div>
      )}
    </button>
  );
};

export default MicrophoneButton;

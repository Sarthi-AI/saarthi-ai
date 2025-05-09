
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
      className={`relative flex items-center justify-center w-16 h-16 rounded-full ${isListening ? 'bg-red-500' : 'bg-primary'} text-white shadow-lg hover:opacity-90 transition-all`}
      onClick={handleClick}
      aria-label={isListening ? "Stop listening" : "Start listening"}
    >
      {isListening ? <MicOff size={24} /> : <Mic size={24} />}
      {isListening && (
        <>
          <span className="absolute -inset-2 rounded-full border-4 border-red-300 animate-ping opacity-75"></span>
          <span className="absolute -inset-4 rounded-full border-2 border-red-200 animate-pulse opacity-50"></span>
        </>
      )}
    </button>
  );
};

export default MicrophoneButton;

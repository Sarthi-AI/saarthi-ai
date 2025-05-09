
import React, { useState, useRef } from 'react';
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
      className={`mic-button ${isListening ? 'active' : ''}`}
      onClick={handleClick}
      aria-label={isListening ? "Stop listening" : "Start listening"}
    >
      {isListening ? <MicOff size={24} /> : <Mic size={24} />}
      {isListening && (
        <div className="absolute -inset-1 rounded-full border-4 border-secondary opacity-75"></div>
      )}
    </button>
  );
};

export default MicrophoneButton;

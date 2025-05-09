
import React from 'react';
import { Link } from 'react-router-dom';

interface TranscriptDisplayProps {
  transcript: string;
  isProcessing: boolean;
}

const TranscriptDisplay: React.FC<TranscriptDisplayProps> = ({ transcript, isProcessing }) => {
  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-4 mb-6 min-h-[100px]">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-gray-500">You said:</h3>
        <Link 
          to="/grievance" 
          className="text-xs text-primary hover:text-primary/80 underline underline-offset-2"
        >
          File a grievance
        </Link>
      </div>
      
      {transcript ? (
        <p className="text-lg">{transcript}</p>
      ) : (
        <p className="text-lg text-gray-400 italic">
          {isProcessing ? 'Listening...' : 'Press the microphone button and start speaking'}
        </p>
      )}
      
      {isProcessing && (
        <div className="flex space-x-2 mt-3">
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      )}
    </div>
  );
};

export default TranscriptDisplay;

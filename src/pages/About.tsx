
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-accent/30">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-6">About SaarthiAI</h1>
            <p className="text-xl text-gray-700">
              Bridging the gap between citizens and government schemes through AI-powered assistance
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              SaarthiAI aims to make government welfare schemes accessible to all citizens, especially those in rural areas, 
              by breaking down language barriers and simplifying the discovery process through voice-based AI interaction.
            </p>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">The Problem We're Solving</h2>
            <div className="space-y-4 mb-6">
              <p className="text-gray-700">
                India has over 3,000+ government welfare schemes, but many eligible citizens miss out due to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Lack of awareness about available schemes</li>
                <li>Language barriers in understanding eligibility criteria</li>
                <li>Complex application processes</li>
                <li>Limited digital literacy and internet access</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">How SaarthiAI Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-accent/50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <h3 className="font-semibold text-gray-800 mb-2">Voice Interaction</h3>
                <p className="text-gray-700">Speak to SaarthiAI in your preferred language (English, Hindi, or Kannada).</p>
              </div>
              
              <div className="bg-accent/50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <h3 className="font-semibold text-gray-800 mb-2">Intelligent Matching</h3>
                <p className="text-gray-700">Our AI analyzes your query and finds the most relevant government schemes.</p>
              </div>
              
              <div className="bg-accent/50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <h3 className="font-semibold text-gray-800 mb-2">Application Guidance</h3>
                <p className="text-gray-700">Receive clear information on eligibility, benefits, and how to apply.</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {['React', 'TailwindCSS', 'LlamaIndex', 'Whisper', 'OpenAI', 'Coqui TTS', 'FastAPI'].map((tech) => (
                <div key={tech} className="bg-gray-100 p-2 rounded text-center">
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/">
              <Button className="bg-primary hover:bg-primary-dark">
                Try SaarthiAI Now
              </Button>
            </Link>
          </div>
        </div>
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

export default About;

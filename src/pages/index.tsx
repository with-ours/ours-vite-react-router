import React from 'react';
import { TrackEventButton } from '../components/TrackEventButton';
import '../styles.css';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="hero">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Example App
          </h1>
          <h2 className="text-2xl font-medium text-gray-700 mb-8">
            Welcome to our amazing application
          </h2>
          <div className="hero-buttons">
            <TrackEventButton 
              eventName="primary_action_clicked"
              eventProperties={{ location: 'homepage', button_type: 'primary' }}
              className="btn-full"
            >
              Get Started
            </TrackEventButton>
            <TrackEventButton 
              eventName="secondary_action_clicked"
              eventProperties={{ location: 'homepage', button_type: 'secondary' }}
              className="btn-secondary btn-full"
            >
              Learn More
            </TrackEventButton>
          </div>
        </div>
      </div>
    </div>
  );
}

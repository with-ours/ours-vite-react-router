import React from 'react';
import ours from 'ours-web-sdk';

interface TrackEventButtonProps {
  eventName: string;
  eventProperties?: Record<string, any>;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function TrackEventButton({ 
  eventName, 
  eventProperties = {}, 
  children, 
  className = '',
  onClick 
}: TrackEventButtonProps) {
  const handleClick = () => {
    // Track the event using ours
    ours.track(eventName, eventProperties);
    
    // Call the optional onClick handler
    if (onClick) {
      onClick();
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`btn btn-primary ${className}`}
    >
      {children}
    </button>
  );
}

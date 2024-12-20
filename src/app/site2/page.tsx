import React from 'react';
import { VideoSection } from '../../features/site1/video-section';
import { ScrollPrompt } from '../../features/site1/scroll-prompt';

const Site2Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative">
      <VideoSection />
      <ScrollPrompt />
    </div>
  );
};

export default Site2Page;

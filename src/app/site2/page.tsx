import VideoEmbed from '@/features/site2/video-embed';
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-4 text-center">
      <h1 className="mt-10 text-4xl md:text-5xl font-bold mb-6 animate-fade-in-down">
        Stop Struggling With Your Dog's Behavior - There's A Better Way
      </h1>

      <p className="text-xl md:text-2xl mb-8 max-w-3xl animate-fade-in-up">
        Discover the breakthrough "brain training" method that's transforming
        impossible dogs into perfectly behaved companions - without force,
        treats, or countless hours of training.
      </p>

      <div className="mb-8 w-full animate-fade-in">
        <VideoEmbed />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full animate-bounce-in">
        <p className="text-2xl font-semibold mb-4">
          🔒 Special Limited-Time Offer Below 🔒
        </p>
        <p className="text-lg mb-6">
          WARNING: This revolutionary training method is only available for a
          short time at this exclusive rate. Don't miss your chance to transform
          your relationship with your dog forever.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105">
          CLICK HERE TO UNLOCK THE SECRET →
        </button>
        <p className="text-red-600 font-bold mt-6 animate-pulse">
          ❌ Offer Expires Soon - Don't Wait! ❌
        </p>
      </div>
    </div>
  );
};

export default LandingPage;

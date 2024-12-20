import { VideoPlayer } from './video-player';
import { OfferButton } from './offer-button';
import { LucideLock, LucideX } from 'lucide-react';

export function VideoSection() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-from-top">
      <div className="text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Stop Struggling With Your Dog&apos;s Behavior - There&apos;s A Better
          Way
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover the breakthrough &quot;brain training&quot; method
          that&apos;s transforming impossible dogs into perfectly behaved
          companions - without force, treats, or countless hours of training.
        </p>
      </div>

      <div className="rounded-xl overflow-hidden shadow-2xl">
        <VideoPlayer />
      </div>

      <div className="space-y-6 text-center">
        <div className="flex items-center justify-center gap-2 text-emerald-400">
          <LucideLock size={20} />
          <p className="text-lg font-semibold">
            Special Limited-Time Offer Below
          </p>
          <LucideLock size={20} />
        </div>

        <p className="text-amber-400 font-medium max-w-2xl mx-auto">
          WARNING: This revolutionary training method is only available for a
          short time at this exclusive rate. Don&apos;t miss your chance to
          transform your relationship with your dog forever.
        </p>
        <OfferButton />

        <div className="flex items-center justify-center gap-2 text-red-400 font-semibold">
          <LucideX size={20} />
          <p>Offer Expires Soon - Don&apos;t Wait!</p>
          <LucideX size={20} />
        </div>
      </div>
    </div>
  );
}

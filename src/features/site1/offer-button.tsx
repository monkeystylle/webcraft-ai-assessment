import { LucideArrowRight } from 'lucide-react';

export function OfferButton() {
  return (
    <button
      className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full 
                 shadow-lg flex items-center justify-center gap-2 mx-auto text-lg
                 transition-all duration-200 ease-in-out
                 hover:scale-105 active:scale-95 transform"
    >
      CLICK HERE TO UNLOCK THE SECRET
      <LucideArrowRight size={20} />
    </button>
  );
}

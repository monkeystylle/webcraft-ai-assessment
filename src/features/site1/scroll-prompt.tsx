import { LucideChevronDown } from 'lucide-react';

export function ScrollPrompt() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in [animation-delay:1000ms]">
      <div className="text-white/50 cursor-pointer animate-bounce">
        <LucideChevronDown size={32} />
      </div>
    </div>
  );
}

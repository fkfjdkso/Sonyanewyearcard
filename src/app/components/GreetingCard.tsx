import { useState } from 'react';
import { PineBranch } from './PineBranch';
import { CocoaCup } from './CocoaCup';
import { Stars } from './Stars';

export function GreetingCard() {
  const [message, setMessage] = useState("To my love,\n\nMay this new year bring us endless joy, laughter, and beautiful moments together. Here's to another year of adventures with you.");

  return (
    <div className="relative w-full max-w-2xl aspect-[3/4] bg-[#faf6f0] rounded-3xl shadow-2xl overflow-hidden">
      {/* Main card content */}
      <div className="relative h-full flex flex-col p-12">
        
        {/* Top decorative stars */}
        <div className="absolute top-8 right-12">
          <Stars />
        </div>

        {/* Pine branch decoration - top left */}
        <div className="absolute top-0 left-0">
          <PineBranch />
        </div>

        {/* Main greeting */}
        <div className="flex-1 flex flex-col items-center justify-start pt-32 z-10">
          <h1 className="text-6xl text-[#3d5f4a] mb-6" style={{ fontWeight: 700, lineHeight: '1.2' }}>
            Happy New Year
          </h1>
          <p className="text-4xl text-[#c67b5c]" style={{ fontWeight: 600 }}>
            2025
          </p>
        </div>

        {/* Cocoa cup illustration */}
        <div className="absolute bottom-32 right-16">
          <CocoaCup />
        </div>

        {/* Message area */}
        <div className="relative z-10 bg-white/40 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#3d5f4a]/20">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-40 bg-transparent border-none outline-none resize-none text-[#3d5f4a] placeholder-[#3d5f4a]/50"
            style={{ fontWeight: 500, fontSize: '1rem', lineHeight: '1.6' }}
            placeholder="Write your personal message here..."
          />
        </div>

        {/* Bottom decorative elements */}
        <div className="absolute bottom-8 left-12 opacity-30">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#c67b5c]" />
            <div className="w-3 h-3 rounded-full bg-[#3d5f4a]" />
            <div className="w-3 h-3 rounded-full bg-[#c67b5c]" />
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { GreetingCard } from './components/GreetingCard';

export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-[#f5f1ec] p-8" style={{ fontFamily: 'Nunito, sans-serif' }}>
      <GreetingCard />
    </div>
  );
}

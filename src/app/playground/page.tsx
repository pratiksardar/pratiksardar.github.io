'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AnimationPlayground() {
  const boxRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animate box on mount
    gsap.fromTo(
      boxRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );
    // Animate text with a bounce
    gsap.fromTo(
      textRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'bounce.out' }
    );
  }, []);

  const handleButtonClick = () => {
    gsap.to(boxRef.current, {
      rotate: '+=360',
      scale: 1.2,
      yoyo: true,
      repeat: 1,
      duration: 0.8,
      ease: 'power2.inOut',
    });
    gsap.fromTo(
      buttonRef.current,
      { scale: 1 },
      { scale: 1.3, yoyo: true, repeat: 1, duration: 0.3, ease: 'power1.inOut' }
    );
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-purple-900 to-amber-900 text-white">
      <h1 ref={textRef} className="text-4xl font-bold mb-10 text-amber-400" style={{ fontFamily: 'Nasalization, sans-serif' }}>
        Animation Playground
      </h1>
      <div
        ref={boxRef}
        className="w-40 h-40 bg-amber-400 rounded-lg shadow-lg flex items-center justify-center text-black text-2xl font-bold mb-8"
      >
        GSAP Box
      </div>
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-lg font-semibold shadow-md transition-colors duration-200"
      >
        Animate Box
      </button>
      <p className="mt-12 text-lg text-purple-200 max-w-xl text-center">
        Welcome to the Animation Playground! Click the button to see GSAP in action. You can add more animated elements here to experiment with different effects.
      </p>
    </main>
  );
} 
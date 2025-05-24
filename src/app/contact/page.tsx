'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import SpaceShooterBackground from '../../components/ui/SpaceShooterBackground';

export default function Contact() {
  const [state, handleSubmit] = useForm('xjkwqbqy');

  return (
    <main className="min-h-screen text-purple-500 relative overflow-hidden">
      <SpaceShooterBackground />
      {/* Home Button Top Right */}
      <Link href="/" aria-label="Home" className="fixed top-6 right-6 z-50">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="bg-black/60 rounded-full p-3 shadow-lg border-2 border-grey-400 hover:bg-amber-400/20"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
            <path d="M3 12L12 3l9 9" />
            <path d="M9 21V9h6v12" />
          </svg>
        </motion.div>
      </Link>
      <section className="my-16 container mx-auto px-6 min-h-[60vh] flex flex-col items-center relative z-10">
        <h1 style={{ fontFamily: 'Nasalization, sans-serif' }} className="text-4xl font-bold mb-20 mt-8 text-amber-400">Hit Me Up</h1>
        <div className="flex flex-col md:flex-row w-full max-w-3xl items-center md:items-center justify-center mb-12">
          {/* Profile and Socials */}
          <div className="flex flex-col items-center md:w-1/2 mb-8 md:mb-0">
            <motion.div
              className="w-40 h-40 rounded-full overflow-hidden mb-4 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 3 }}
            >
              <Image src="https://iili.io/3tPQ3S1.md.jpg" alt="Profile" className="w-full h-full object-cover" width={160} height={160} />
            </motion.div>
            <div className="flex space-x-4 justify-center">
              <motion.a 
                href="https://github.com/pratiksardar" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.5, rotate: 10 }}
                transition={{ type: "spring", stiffness: 900, damping: 50 }}
              >
                <Image src="https://img.icons8.com/?size=50&id=12598&format=png&color=ffffff" alt="GitHub" className="w-8 h-8" width={32} height={32} />
              </motion.a>
              <motion.a 
                href="https://x.com/pratik_sardar" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.5, rotate: 10 }}
                transition={{ type: "spring", stiffness: 900, damping: 50 }}
              >
                <Image src="https://img.icons8.com/?size=48&id=cMRBi0rI3iwb&format=png&color=ffffff" alt="Twitter" className="w-8 h-8" width={32} height={32} />
              </motion.a>
              <motion.a 
                href="https://farcaster.com/0xpratik" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.5, rotate: 10 }}
                transition={{ type: "spring", stiffness: 900, damping: 50 }}
              >
                <Image src="https://scontent-iad4-1.choicecdn.com/-/rs:fill:2000:2000/g:ce/f:webp/aHR0cHM6Ly9tYWdpYy5kZWNlbnRyYWxpemVkLWNvbnRlbnQuY29tL2lwZnMvYmFma3JlaWNzcnAyaW83bnlxdXVqa2FuNjI2aWpsNmxydjQ0cW1kbW1neXE2NXdhMmQ3amJ0Nmd6NWE" alt="Farcaster" className="w-8 h-8" width={32} height={32} />
              </motion.a>
              <motion.a 
                href="https://instagram.com/0xpratik" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.5, rotate: 10 }}
                transition={{ type: "spring", stiffness: 900, damping: 50 }}
              >
                <Image src="https://img.icons8.com/?size=100&id=32292&format=png&color=ffffff" alt="Instagram" className="w-8 h-8" width={32} height={32} />
              </motion.a>
              <motion.a 
                href="mailto:radarsardar@gmail.com"
                whileHover={{ scale: 1.5, rotate: 10 }}
                transition={{ type: "spring", stiffness: 900, damping: 50 }}
              >
                <Image src="https://img.icons8.com/?size=50&id=rUgzXdXFnhmg&format=png&color=ffffff" alt="Email" className="w-8 h-8" width={32} height={32} />
              </motion.a>
            </div>
          </div>
          {/* Contact Form */}
          <div className="md:w-1/2 w-full flex flex-col items-center md:items-start">
            {state.succeeded ? (
              <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg flex flex-col items-center">
                <h2 className="text-2xl font-bold text-green-400 mb-2">Thank you!</h2>
                <p className="text-lg text-gray-300">Your message has been sent. I will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg flex flex-col space-y-4">
                <label className="text-white font-semibold" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="p-2 rounded bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
                <label className="text-white font-semibold" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="p-2 rounded bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <label className="text-white font-semibold" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="p-2 rounded bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="mt-4 bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-6 rounded transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
} 
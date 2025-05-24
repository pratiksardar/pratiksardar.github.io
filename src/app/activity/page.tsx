'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaRocket } from 'react-icons/fa';
import Image from 'next/image';

export default function Activity() {
  return (
    <section className="my-16 container mx-auto px-6 min-h-[60vh]">
      <h1 className="text-4xl  mb-10 text-fuchsia-400 text-center">My Latest Activity (Work in Progress) </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* GitHub Activity */}
        <motion.div
          className="backdrop-blur-md bg-gradient-to-br from-gray-900/80 via-fuchsia-900/40 to-black border border-fuchsia-400/30 rounded-2xl p-4 shadow-xl flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <FaGithub className="text-2xl text-white" />
            <span className="font-bold text-lg text-white">GitHub</span>
          </div>
          <iframe
            src="https://ghchart.rshah.org/PratikSardar"
            title="GitHub Contribution Chart"
            width="320"
            height="160"
            className="rounded-lg border border-fuchsia-400 bg-black"
            style={{ background: 'black' }}
          ></iframe>
          <a
            href="https://github.com/pratiksardar"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-fuchsia-300 underline hover:text-fuchsia-400"
          >
            View on GitHub
          </a>
        </motion.div>
        {/* Twitter Activity */}
        <motion.div
          className="backdrop-blur-md bg-gradient-to-br from-gray-900/80 via-blue-900/40 to-black border border-blue-400/30 rounded-2xl p-4 shadow-xl flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <FaTwitter className="text-2xl text-sky-400" />
            <span className="font-bold text-lg text-white">Twitter</span>
          </div>
          <iframe
            src="https://twitframe.com/show?url=https://x.com/pratik_sardar"
            title="Twitter Timeline"
            width="320"
            height="400"
            className="rounded-lg border border-blue-400 bg-black"
            style={{ background: 'black' }}
            allowTransparency={true}
            allow="encrypted-media"
          ></iframe>
          <a
            href="https://.com/pratik_sardar"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-sky-300 underline hover:text-sky-400"
          >
            View on Twitter
          </a>
        </motion.div>
        {/* Warpcast Activity */}
        <motion.div
          className="backdrop-blur-md bg-gradient-to-br from-gray-900/80 via-pink-900/40 to-black border border-pink-400/30 rounded-2xl p-4 shadow-xl flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <FaRocket className="text-2xl text-pink-400" />
            <span className="font-bold text-lg text-white">Warpcast</span>
          </div>
          <div className="rounded-lg border border-pink-400 bg-black p-4 w-full flex flex-col items-center">
            <Image
              src="https://warpcast.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fwarpcast%2Fimage%2Fupload%2Fv1716822322%2Fprofile%2F0xpratik.png&w=256&q=75"
              alt="Warpcast Profile"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full mb-2 border-2 border-pink-400"
            />
            <span className="text-pink-300 font-bold">@0xpratik</span>
            <p className="text-gray-300 text-sm mt-2 text-center">Follow me on Warpcast for my latest web3 casts and updates!</p>
            <a
              href="https://warpcast.com/0xpratik"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-pink-300 underline hover:text-pink-400"
            >
              View on Warpcast
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
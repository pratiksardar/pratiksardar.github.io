'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/" 
              className="group relative text-2xl font-bold font-['Orbitron'] tracking-wider"
            >
              <span className="relative z-10 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent hover:from-purple-500 hover:via-pink-600 hover:to-purple-500 transition-all duration-500">
                Pratik
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-500/20 to-purple-400/20 blur-xl group-hover:blur-2xl transition-all duration-500 rounded-full"></span>
              <span className="absolute -inset-1 bg-gradient-to-r from-purple-400/10 via-pink-500/10 to-purple-400/10 rounded-full animate-pulse"></span>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-6"
          >
            <Link href="#about" className="group relative text-white hover:text-transparent transition-all duration-300">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text group-hover:from-cyan-500 group-hover:via-blue-600 group-hover:to-cyan-500">
                &lt;/about&gt;
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-cyan-400/20 blur-lg group-hover:blur-xl transition-all duration-300 rounded-full"></span>
            </Link>
            <Link href="#projects" className="group relative text-white hover:text-transparent transition-all duration-300">
              <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-400 bg-clip-text group-hover:from-emerald-500 group-hover:via-green-600 group-hover:to-emerald-500">
                &lt;/projects&gt;
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-green-500/20 to-emerald-400/20 blur-lg group-hover:blur-xl transition-all duration-300 rounded-full"></span>
            </Link>
            <Link href="/activity" className="group relative text-white hover:text-transparent transition-all duration-300">
              <span className="relative z-10 bg-gradient-to-r from-fuchsia-400 via-pink-500 to-fuchsia-400 bg-clip-text group-hover:from-fuchsia-500 group-hover:via-pink-600 group-hover:to-fuchsia-500">
                &lt;/activity&gt;
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-400/20 via-pink-500/20 to-fuchsia-400/20 blur-lg group-hover:blur-xl transition-all duration-300 rounded-full"></span>
            </Link>
            <Link href="/contact" className="group relative text-white hover:text-transparent transition-all duration-300">
              <span className="relative z-10 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text group-hover:from-amber-500 group-hover:via-orange-600 group-hover:to-amber-500">
                &lt;/contact&gt;
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-500/20 to-amber-400/20 blur-lg group-hover:blur-xl transition-all duration-300 rounded-full"></span>
            </Link>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 
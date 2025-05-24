"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [atTop, setAtTop] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 50 || window.innerHeight + window.scrollY < document.body.offsetHeight - 50);
      setAtTop(window.scrollY < 300);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = () => {
    if (atTop) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          onClick={scrollTo}
          className="fixed bottom-8 right-8 z-50 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 flex flex-col items-center"
          aria-label={atTop ? 'Scroll to bottom' : 'Back to top'}
        >
          {atTop ? (
            <>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
              <span className="text-xs mt-1">Bottom</span>
            </>
          ) : (
            <>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
              <span className="text-xs mt-1">Top</span>
            </>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
} 
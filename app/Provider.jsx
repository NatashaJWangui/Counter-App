'use client';
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

// Lazy load Counter component only when needed
const Counter = dynamic(() => import('@/components/Counter'), {
    loading: () => <p>Currently Loading...</p>,
    // Disable server-side rendering
    ssr: false
});

function Provider({ children }) {
  // default theme set to light
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return ( 
    <div>
      <button className='fixed flex top-2 left-2 rounded-lg bg-black text-white' onClick={toggleTheme}>
        Change to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <Counter />
      {children}
    </div>
  );
}

export default Provider;

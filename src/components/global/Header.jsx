import React, { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-4 h-14 flex items-center justify-between lg:px-6 bg-zinc-900 sticky top-0 z-50">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <span className="text-xl sm:text-2xl font-bold text-zinc-50">
          VIVEK
        </span>
        {/* Hamburger Button - Only visible on small screens */}
        <button
          className="text-zinc-50 lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* NAVBAR */}
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:flex lg:flex-row lg:justify-center items-center gap-8 sm:gap-4 md:gap-6 bg-slate-950 lg:bg-transparent lg:static absolute top-14 left-0 w-full lg:w-auto z-50 transition-all duration-300 ease-in-out`}
      >
        {['Home', 'About', 'Achievements', 'Skills', 'Projects', 'Contact'].map(
          (item) => (
            <div
              key={item}
              className="text-sm sm:text-lg font-medium hover:underline underline-offset-4 hover:text-yellow-500 text-zinc-50 py-2 lg:py-0"
            >
              {item}
            </div>
          )
        )}
      </nav>
    </header>
  );
}

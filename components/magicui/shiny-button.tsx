"use client";

import { ReactNode } from 'react';

interface ShinyButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ShinyButton({ children, className = "", onClick }: ShinyButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden px-6 py-2 rounded-lg font-semibold
        bg-white
        text-black border border-white/10
        transition-all duration-300 ease-out
        cursor-pointer
        ${className}
      `}
    >
      {/* Shiny overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full animate-shine" />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
      
      {/* Subtle inner glow */}
      <div className="absolute inset-1 rounded-xl bg-gradient-to-b from-white/10 to-transparent opacity-50" />
    </button>
  );
}

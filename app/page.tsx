"use client";

import Image from "next/image";
import { Instrument_Serif, Inter } from 'next/font/google';
import { Ripple } from "@/components/magicui/ripple";
import Form from "@/components/form";
import { motion } from "motion/react";

const instrumentSerif = Instrument_Serif({ weight: '400', subsets: ['latin'], style: 'italic' });

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden pt-24">
      <Ripple className="absolute inset-0 z-0" />
      <main className="flex-1 flex items-center justify-center p-8 tracking-tight relative z-10">
        <div className="text-center max-w-[400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-sm px-2 py-1 w-fit mx-auto mb-8 rounded-2xl border border-white/15 flex items-center gap-2"
          >
            <Image 
              src="/logo.png" 
              alt="Rove Browser Logo" 
              width={64} 
              height={64}
              className="w-12 h-12"
            />
            <p className="text-xl font-bold pr-4">Rove OS</p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl font-[500] mb-6 leading-14"
          >
            The Enterprise Browser Built for <span className={instrumentSerif.className + " text-6xl"} style={{ fontWeight: 550, fontStyle: 'italic' }}>Agents & Work</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-[11pt] opacity-60 mb-8 kerning-wide leading-5.5 max-w-[340px] mx-auto text-white/60"
          >
          Maybe browser is an understatement. We're building an agent-native OS for teams that need to automate, generate applications, orchestrate legacy workflows, and enforce data security and policy – built for the future of work with AGIs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Form />
          </motion.div>
        </div>
      </main>
      
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        className="relative z-10 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Company Info */}
            <div className="flex items-center space-x-6">
              <Image 
                  src="/logo.png" 
                  alt="Rove Browser Logo" 
                  width={64} 
                  height={64}
                  className="w-14 h-14"
                />
              <p className="text-xs opacity-50">© 2024 All rights reserved.</p>
            </div>
            
            {/* Links */}
            <div className="flex space-x-6 text-xs opacity-60">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
              <a href="#" className="hover:opacity-100 transition-opacity">X</a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

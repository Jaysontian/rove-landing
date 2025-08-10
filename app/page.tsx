"use client";

import Image from "next/image";
import { Instrument_Serif, Inter } from 'next/font/google';
import { Ripple } from "@/components/magicui/ripple";
import Form from "@/components/form";
import { motion } from "motion/react";

const instrumentSerif = Instrument_Serif({ weight: '400', subsets: ['latin'], style: 'italic' });

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
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
            <p className="text-xl font-bold pr-4">Rove</p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl font-[500] mb-6 leading-14"
          >
            The AI Browser Built to Automate <span className={instrumentSerif.className + " text-6xl"} style={{ fontWeight: 550, fontStyle: 'italic' }}>SaaS Workflows</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-[11pt] opacity-60 mb-8 kerning-wide leading-5.5 max-w-[340px] mx-auto text-white/60"
          >
            Spending hours reconciling orders, tracking receipts, and compiling reports across tabs? Rove speeds up SaaS workflows with agents that work like your best ops teammate — no coding required, just tell-and-run automation that saves thousands of hours.
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

    </div>
  );
}

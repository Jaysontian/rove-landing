import Image from "next/image";
import { Instrument_Serif, Inter } from 'next/font/google';
import { Ripple } from "@/components/magicui/ripple";
import { Particles } from "@/components/magicui/particles";
import { ShinyButton } from "@/components/magicui/shiny-button";

const instrumentSerif = Instrument_Serif({ weight: '400', subsets: ['latin'], style: 'italic' });

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      <Ripple className="absolute inset-0 z-0" />
      {/* <Particles 
        className="absolute inset-0 z-0" 
        quantity={20}
        color="#ffffff"
        size={0.1}
        staticity={120}
        ease={30}
      /> */}
      <main className="flex-1 flex items-center justify-center p-8 tracking-tight relative z-10">
        <div className="text-center max-w-[400px] mx-auto">
          <div className="bg-white/5 backdrop-blur-sm px-6 py-2 w-fit mx-auto mb-8 rounded-2xl border border-white/15">Rove Browser</div>
          <h1 className="text-5xl font-[500] mb-6 leading-14">The Enterprise Browser Built for <span className={instrumentSerif.className + " text-6xl"} style={{ fontWeight: 550, fontStyle: 'italic' }}>Agents & Work</span></h1>
          <p className="text-[12pt] opacity-60 mb-8 kerning-wide leading-6 max-w-[300px] mx-auto">
          Maybe browser is an understatement. We're building an agent-native OS for teams that need to automate, generate applications, orchestrate legacy workflows, and enforce data security and policy – built for the future of work with AGIs.
          </p>
          <ShinyButton>
            Get In Touch
          </ShinyButton>
        </div>
      </main>
      
      <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Company Info */}
            <div className="flex items-center space-x-6">
              <div className="bg-white/5 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/15 text-sm">Rove Browser</div>
              <p className="text-xs opacity-50">© 2024 All rights reserved.</p>
            </div>
            
            {/* Links */}
            <div className="flex space-x-6 text-xs opacity-60">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

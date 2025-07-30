"use client";

import { motion, AnimatePresence } from "motion/react";
import { ArrowUpIcon, CheckIcon } from "lucide-react";
import { useState } from "react";

export default function Form() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      // Handle email submission
      console.log("Email submitted:", email);
      setIsSubmitted(true);
    }
  };

  const containerVariants = {
    collapsed: {
      width: "auto",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 50,
        mass: 0.5
      }
    },
    expanded: {
      width: 320,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 50,
        mass: 1.2,
        delayChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    collapsed: {
      borderRadius: 20,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25
      }
    },
    expanded: {
      borderRadius: 20,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25
      }
    }
  };

  const checkmarkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 500,
        damping: 25,
        delay: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Input Area */}
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key="form-container"
            className={`relative px-4 py-2.5 font-semibold transition-colors overflow-hidden w-full rounded-2xl ${
              isSubmitted 
                ? "bg-white/20 text-white" 
                : "bg-white text-black hover:bg-gray-100"
            }`}
            variants={buttonVariants}
            whileHover={{ 
              scale: isExpanded && !isSubmitted ? 1 : 1.02,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            whileTap={{ 
              scale: isExpanded && !isSubmitted ? 1 : 0.98,
              transition: { type: "spring", stiffness: 300, damping: 50 }
            }}
          >
            <AnimatePresence mode="wait">
              {!isExpanded ? (
                <motion.button
                  key="button-text"
                  className="block whitespace-nowrap w-full fade-text cursor-pointer"
                  onClick={() => setIsExpanded(true)}
                  initial={{ opacity: 1, x: 0 }}
                  exit={{ 
                    opacity: 0, 
                    x: 50,
                    transition: { 
                      duration: 0.3,
                      ease: [0.4, 0.0, 0.2, 1]
                    }
                  }}
                >
                  Get In Touch
                </motion.button>
              ) : isSubmitted ? (
                <motion.div
                  key="success-content"
                  className="flex items-center justify-center w-full gap-3 py-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.4,
                      ease: [0.0, 0.0, 0.2, 1]
                    }
                  }}
                >
                  <motion.div
                    variants={checkmarkVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex-shrink-0"
                  >
                    <CheckIcon className="w-5 h-5 text-white" />
                  </motion.div>
                  <motion.span
                    className="text-sm font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      transition: {
                        delay: 0.1,
                        duration: 0.3
                      }
                    }}
                  >
                    Thanks! We'll be in touch soon.
                  </motion.span>
                </motion.div>
              ) : (
                <motion.form
                  key="expanded-content"
                  className="flex items-center w-full gap-3"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      duration: 0.4,
                      ease: [0.0, 0.0, 0.2, 1],
                      staggerChildren: 0.1
                    }
                  }}
                >
                  <motion.input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent text-black placeholder-black/50 outline-none text-sm font-normal fade-text"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        delay: 0.1,
                        duration: 0.3,
                        ease: [0.0, 0.0, 0.2, 1]
                      }
                    }}
                    autoFocus
                  />
                  <motion.button
                    type="submit"
                    className="w-7 h-7 bg-black rounded-full flex items-center justify-center flex-shrink-0"
                    disabled={!email.trim() || !email.includes('@')}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      rotate: 0,
                      transition: {
                        delay: 0,
                        duration: 0.4,
                        type: "spring",
                        stiffness: 500,
                        damping: 25
                      }
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 500, damping: 25 }
                    }}
                    whileTap={{ 
                      scale: 0.9,
                      transition: { type: "spring", stiffness: 500, damping: 25 }
                    }}
                  >
                    <ArrowUpIcon className="w-4 h-4 text-white"/>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <style jsx>{`
        .fade-text {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%);
          animation: fadeInOut 3s ease-in-out infinite;
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
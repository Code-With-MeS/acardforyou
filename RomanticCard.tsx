import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";
import girlfriendPhoto from "figma:asset/70682a028923b011237291d0c3a9ce4cdb7fcc9a.png";

export function RomanticCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden"
      style={{
        boxShadow: "0 0 0 4px #000, 0 20px 60px rgba(0,0,0,0.3)",
      }}
    >
      {/* Spider-Verse style background with halftone pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-pink-200 to-blue-300 opacity-90" />
      
      {/* Halftone overlay pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-30 mix-blend-multiply pointer-events-none">
        <defs>
          <pattern id="halftone" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="2" fill="#000" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#halftone)" />
      </svg>

      {/* Chromatic aberration layers - animated */}
      <motion.div
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20"
        animate={{
          x: [-2, 2, -2],
          y: [2, -2, 2],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-red-500" style={{ mixBlendMode: "screen" }} />
      </motion.div>
      <motion.div
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20"
        animate={{
          x: [2, -2, 2],
          y: [-2, 2, -2],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-cyan-500" style={{ mixBlendMode: "screen" }} />
      </motion.div>

      <div className="relative z-10 p-8">
        {/* Comic-style header with glitch effect */}
        <motion.div
          className="text-center mb-6"
          animate={{
            textShadow: [
              "3px 3px 0 #ff00ff, -3px -3px 0 #00ffff",
              "3px 3px 0 #00ffff, -3px -3px 0 #ff00ff",
              "3px 3px 0 #ff00ff, -3px -3px 0 #00ffff",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <h1 className="text-5xl text-white tracking-tight" style={{ 
            fontFamily: "'Bangers', cursive",
            WebkitTextStroke: "2px black",
            paintOrder: "stroke fill",
          }}>
            To the most beautiful Girl
          </h1>
        </motion.div>

        {/* Main content container with Spider-Verse style */}
        <div className="relative">
          {/* Decorative jellyfish elements - stylized */}
          <motion.div
            className="absolute -top-10 -left-10 w-32 h-32 opacity-60"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <filter id="comic-outline">
                  <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="dilated" />
                  <feFlood floodColor="#000000" result="black" />
                  <feComposite in="black" in2="dilated" operator="in" result="outline" />
                  <feMerge>
                    <feMergeNode in="outline" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Stylized jellyfish */}
              <ellipse cx="50" cy="30" rx="25" ry="20" fill="#ddd6fe" filter="url(#comic-outline)" />
              <path d="M 35 45 Q 30 70 25 80" stroke="#c084fc" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M 50 45 Q 50 75 50 85" stroke="#c084fc" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M 65 45 Q 70 70 75 80" stroke="#c084fc" strokeWidth="4" fill="none" strokeLinecap="round" />
              <circle cx="45" cy="28" r="3" fill="#000" />
              <circle cx="55" cy="28" r="3" fill="#000" />
            </svg>
          </motion.div>

          {/* Decorative lily elements - stylized */}
          <motion.div
            className="absolute -top-5 -right-10 w-28 h-28 opacity-70"
            animate={{ 
              rotate: [0, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Stylized lily flower */}
              <ellipse cx="50" cy="60" rx="15" ry="30" fill="#fbcfe8" filter="url(#comic-outline)" transform="rotate(-20 50 60)" />
              <ellipse cx="50" cy="60" rx="15" ry="30" fill="#fce7f3" filter="url(#comic-outline)" transform="rotate(20 50 60)" />
              <ellipse cx="50" cy="60" rx="15" ry="30" fill="#fdf4ff" filter="url(#comic-outline)" />
              <circle cx="50" cy="55" r="8" fill="#fbbf24" filter="url(#comic-outline)" />
              <line x1="50" y1="80" x2="50" y2="100" stroke="#86efac" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Main photo container with Spider-Verse effects */}
          <div className="relative mx-auto w-80 h-80 mb-8">
            {/* Glitch layers */}
            <motion.div
              className="absolute inset-0 rounded-full overflow-hidden"
              style={{
                border: "6px solid #000",
                boxShadow: "0 0 0 3px #ff00ff, 0 0 0 6px #00ffff, 0 10px 30px rgba(0,0,0,0.5)",
              }}
              animate={{
                boxShadow: [
                  "0 0 0 3px #ff00ff, 0 0 0 6px #00ffff, 0 10px 30px rgba(0,0,0,0.5)",
                  "0 0 0 3px #00ffff, 0 0 0 6px #ff00ff, 0 10px 30px rgba(0,0,0,0.5)",
                  "0 0 0 3px #ff00ff, 0 0 0 6px #00ffff, 0 10px 30px rgba(0,0,0,0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img
                src={girlfriendPhoto}
                alt="Beautiful soul"
                className="w-full h-full object-cover"
                style={{
                  filter: "contrast(1.1) saturate(1.2)",
                }}
              />
              
              {/* Halftone overlay on photo */}
              <svg className="absolute inset-0 w-full h-full opacity-20 mix-blend-multiply pointer-events-none">
                <defs>
                  <pattern id="photo-halftone" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="1.5" fill="#000" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#photo-halftone)" />
              </svg>
            </motion.div>

            {/* Animated comic burst lines */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 bg-white origin-center"
                style={{
                  height: "40px",
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * 30}deg) translateY(-200px)`,
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ 
                  scaleY: [0, 1, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Floating hearts with chromatic effect */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`heart-${i}`}
                className="absolute"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${-10 + (i % 2) * 20}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart 
                  className="w-6 h-6 fill-pink-400 text-pink-400" 
                  style={{
                    filter: "drop-shadow(2px 2px 0 #ff00ff) drop-shadow(-2px -2px 0 #00ffff)",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Love poem with comic book style */}
          <motion.div
            className="relative bg-white rounded-2xl p-6 mb-6"
            style={{
              border: "4px solid #000",
              boxShadow: "6px 6px 0 rgba(0,0,0,0.3)",
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Comic speech bubble tail */}
            <div 
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0" 
              style={{
                borderLeft: "20px solid transparent",
                borderRight: "20px solid transparent",
                borderBottom: "20px solid #000",
              }}
            />
            <div 
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0" 
              style={{
                borderLeft: "18px solid transparent",
                borderRight: "18px solid transparent",
                borderBottom: "18px solid #fff",
              }}
            />

            <div className="relative z-10 text-center">
              <motion.p
                className="text-purple-900 leading-relaxed mb-4"
                style={{
                  fontFamily: "'Comic Neue', cursive",
                  fontSize: "1.125rem",
                  lineHeight: "1.8",
                }}
                animate={{
                  textShadow: [
                    "1px 1px 0 #ff00ff",
                    "1px 1px 0 #00ffff",
                    "1px 1px 0 #ff00ff",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Just a little reminder – I really love talking to you, listening to you, watching you.
                <br />
                It just really makes my day so much better. ✨
              </motion.p>

              {/* Animated underline */}
              <motion.div
                className="h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </div>
          </motion.div>

          {/* Bottom glowing heart with Spider-Verse style */}
          <div className="relative flex justify-center items-center">
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart 
                className="w-16 h-16 fill-red-500 text-red-500 relative z-10" 
                style={{
                  filter: "drop-shadow(0 0 20px #ff0066)",
                  stroke: "#000",
                  strokeWidth: "2px",
                }}
              />
              
              {/* Chromatic glitch on heart */}
              <Heart 
                className="w-16 h-16 fill-cyan-400 text-cyan-400 absolute top-0 left-0 opacity-50" 
                style={{
                  transform: "translate(-3px, -3px)",
                }}
              />
              <Heart 
                className="w-16 h-16 fill-magenta-400 text-magenta-400 absolute top-0 left-0 opacity-50" 
                style={{
                  transform: "translate(3px, 3px)",
                }}
              />
            </motion.div>

            {/* Comic-style impact stars */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute"
                style={{
                  left: `${25 + i * 16}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                <Sparkles className="w-6 h-6 fill-yellow-300 text-yellow-400" style={{ stroke: "#000", strokeWidth: "1px" }} />
              </motion.div>
            ))}
          </div>

          {/* Animated wave pattern at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 -mb-8">
            <svg className="w-full h-full" viewBox="0 0 400 80" preserveAspectRatio="none">
              <defs>
                <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="50%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,40 Q100,20 200,40 T400,40 L400,80 L0,80 Z"
                fill="url(#wave-gradient)"
                stroke="#000"
                strokeWidth="3"
                animate={{
                  d: [
                    "M0,40 Q100,20 200,40 T400,40 L400,80 L0,80 Z",
                    "M0,35 Q100,55 200,35 T400,35 L400,80 L0,80 Z",
                    "M0,40 Q100,20 200,40 T400,40 L400,80 L0,80 Z",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Screen glitch effect overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(transparent 50%, rgba(0,0,0,0.05) 50%)",
          backgroundSize: "100% 4px",
        }}
        animate={{
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{ duration: 0.1, repeat: Infinity }}
      />

      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&display=swap');
      `}</style>
    </motion.div>
  );
}

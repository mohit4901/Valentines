import { useState } from "react"
import cupid from "../assets/cupid.png"
import HeartDecor from "./HeartDecor"
import Footer from "./Footer"

export default function Screen1OpenLetter({ next }) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
    setTimeout(next, 900)
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-pinkBg overflow-hidden px-4">

      {/* 💖 HEART DECORS */}
      <HeartDecor className="w-14 sm:w-16 top-10 left-4" />
      <HeartDecor className="w-10 sm:w-12 top-40 right-6" />
      <HeartDecor className="w-16 sm:w-20 bottom-32 left-6" />
      <HeartDecor className="w-12 sm:w-14 bottom-20 right-10" />

      {/* 😇 CUPIDS */}
      <img src={cupid} className="absolute top-6 left-4 w-16 sm:w-24 animate-floatSlow" />
      <img src={cupid} className="absolute top-20 right-4 w-14 sm:w-20 rotate-12 animate-floatSlow delay-200" />
      <img src={cupid} className="absolute bottom-36 left-8 w-14 sm:w-20 -rotate-12 animate-floatSlow delay-500" />

      {/* ✉️ LETTER */}
      <button
        onClick={handleOpen}
        className={`flex flex-col items-center transition-all duration-700 ${
          open ? "scale-150 opacity-0" : "scale-100"
        }`}
      >
        <div className="animate-float shadow-pinkGlow rounded-2xl">
          <ProfessionalEnvelope />
        </div>

        <p className="mt-6 font-love text-xl sm:text-2xl text-pinkDark tracking-wide animate-pulse">
          Tap to open 💌
        </p>
      </button>

      {/* FOOTER */}
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

/* ✨ ENHANCED PROFESSIONAL ENVELOPE */
function ProfessionalEnvelope() {
  return (
    <svg
      className="w-40 sm:w-44 md:w-48"
      viewBox="0 0 360 240"
    >
      {/* shadow */}
      <rect x="20" y="34" width="320" height="180" rx="24" fill="#f3b5c4" />

      {/* base */}
      <rect x="20" y="20" width="320" height="180" rx="24" fill="#f9c5d1" />

      {/* flap */}
      <path d="M20 20 L180 130 L340 20" fill="#f6a5b5" />

      {/* heart seal */}
      <circle cx="180" cy="120" r="22" fill="#ff5c8a" />
      <text x="167" y="130" fontSize="26">❤</text>
    </svg>
  )
}

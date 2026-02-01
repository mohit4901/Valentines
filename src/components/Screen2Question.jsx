import { useRef } from "react"
import cupid from "../assets/cupid.png"
import HeartDecor from "./HeartDecor"
import Footer from "./Footer"

export default function Screen2Question({ yes }) {
  const noRef = useRef(null)

  const dodge = () => {
    const btn = noRef.current
    if (!btn) return

    const maxX = window.innerWidth - btn.offsetWidth - 20
    const maxY = window.innerHeight - btn.offsetHeight - 20

    const x = Math.random() * maxX
    const y = Math.random() * maxY

    btn.style.left = `${x}px`
    btn.style.top = `${y}px`
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-pinkBg overflow-hidden px-4">

      {/* 💖 HEART DECORS */}
      <HeartDecor className="w-14 sm:w-16 top-10 left-4 animate-floatSlow" />
      <HeartDecor className="w-10 sm:w-12 top-40 right-6 animate-floatSlow delay-200" />
      <HeartDecor className="w-16 sm:w-20 bottom-32 left-6 animate-floatSlow delay-500" />
      <HeartDecor className="w-12 sm:w-14 bottom-20 right-10 animate-floatSlow delay-300" />

      {/* 😇 CUPIDS */}
      <img src={cupid} className="absolute top-6 left-4 w-16 sm:w-20 animate-floatSlow" />
      <img src={cupid} className="absolute top-20 right-4 w-14 sm:w-16 rotate-12 animate-floatSlow delay-200" />
      <img src={cupid} className="absolute bottom-36 left-8 w-14 sm:w-16 -rotate-12 animate-floatSlow delay-500" />

      {/* 💌 QUESTION CARD */}
      <div className="relative bg-white/60 backdrop-blur-md rounded-3xl px-6 py-10 shadow-pinkGlow max-w-sm w-full animate-fadeIn animate-float z-10">

        <h1 className="font-love text-3xl sm:text-4xl text-pinkDark mb-3">
          Will you be my
        </h1>

        <h2 className="font-love text-4xl sm:text-5xl text-heart mb-8 animate-pulse">
          Valentine? 💖
        </h2>

        {/* ❤️ YES BUTTON */}
        <button
          onClick={yes}
          className="w-full bg-pink-500 text-white py-3 rounded-full text-lg sm:text-xl mb-4
                     shadow-md transition transform active:scale-95 hover:scale-110 animate-pulse"
        >
          YES ❤️
        </button>

        <p className="text-sm text-pinkDark opacity-70">
          (You know you want to 😌)
        </p>
      </div>

      {/* 💔 NO BUTTON */}
      <button
        ref={noRef}
        onMouseEnter={dodge}
        onTouchStart={dodge}
        style={{ left: "50%", top: "68%", transform: "translateX(-50%)" }}
        className="absolute bg-pink-400 text-white px-8 py-2 rounded-full
                   transition-all duration-300 z-20 shadow-md animate-wiggle"
      >
        NO 💔
      </button>

      {/* FOOTER */}
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>

    </div>
  )
}

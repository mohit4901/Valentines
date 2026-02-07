import couple from "../assets/couple.png"
import HeartDecor from "./HeartDecor"
import Footer from "./Footer"

export default function Screen3Proposal() {
  return (
    <div className="fixed inset-0 bg-pinkBg">

      {/* SCROLL CONTAINER */}
      <div className="relative h-full w-full overflow-y-scroll px-5 sm:px-6 text-center">

        {/* 💖 HEART DECORS */}
        <HeartDecor className="w-14 sm:w-16 top-12 left-4 animate-floatSlow" />
        <HeartDecor className="w-12 sm:w-14 top-36 right-6 animate-floatSlow delay-200" />
        <HeartDecor className="w-16 sm:w-20 bottom-48 left-6 animate-floatSlow delay-500" />
        <HeartDecor className="w-12 sm:w-14 bottom-32 right-8 animate-floatSlow delay-300" />

        {/* 💑 COUPLE IMAGE */}
        <img
          src={couple}
          alt="Couple"
          className="w-56 sm:w-60 mx-auto mt-12 mb-10 animate-fadeIn animate-float shadow-pinkGlow rounded-xl"
        />

        {/* 💌 LOVE LETTER CARD */}
        <div className="bg-white/60 backdrop-blur-md rounded-3xl px-6 sm:px-8 py-10
                        font-love text-pinkDark text-lg sm:text-xl leading-relaxed
                        max-w-xl mx-auto animate-slideUp shadow-lg">

          <p>
           Happy Rose Day meri Moti 🌹, <br/> tu ghani pyari se, bilkul gulaab ki tarah khushboo faila de se meri zindagi mein.<br/>
Oye Baby, tera hassna mere din ka sabte badhiya scene hove se.<br/>
Moti, tu jab baat kare se na, manne lage se jaise sab tension hawa ho jave se.<br/>
Baby, tu mere dil ki ekdum setting se, bina tere sab adhoora lage se.<br/>
Moti, teri aankhya mein yo jo chamak se, uske aage toh chaand bhi fail se.<br/>
 Baby 🌹, tu meri zindagi ka sabte pyara phool se.<br/>
Moti, tu na sirf sundar se, par dil ki bhi ek number se.<br/>
Baby, tere saath rehke manne asli wali khushi ka matlab samajh aaya se.<br/>
Moti, tu meri aadat si ban gi se, bina tere mann na lage.<br/>
Rose Day pe ek baat yaad rakhiyo Baby — tu mere liye hamesha special thi, se, aur rahegi. ❤️🌹<br/>
           

            <span className="text-heart font-semibold animate-pulse">
              Kya tu meri ho kar,<br/>
              meri zindagi ka har Valentine,<br/>
              har kal, har muskurahat mere saath share karegi?
              <br/>💗💗💗💗💗💗
            </span>
          </p>
        </div>

        {/* FOOTER */}
        <div className="mt-24">
          <Footer />
        </div>

      </div>
    </div>
  )
}

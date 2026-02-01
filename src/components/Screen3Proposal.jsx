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
            Sun na babyyyy <br/>
            Mujhe kabhi perfect lines ya bade-bade promises bolne nahi aate.
            Par ek baat dil se bolna chahta hu. <br/><br/>

            Jab tu hasti hai na, toh lagta hai sab theek ho jaata hai.
            Jab tu udaas hoti hai, toh dil karta hai duniya se lad jaau… bas tere liye.
            <br/><br/>

            Tu sirf meri jaaneman nahi hai,<br/>
            tu meri cutuuu si smile hai,<br/>
            meri sweetaa si sukoon wali feeling hai,<br/>
            mera janaab jaisa classy pyaar hai,<br/>
            aur meri zindagi ki hukoom saa… jiske bina sab adhoora lagta hai.
            <br/><br/>

            Main ye vaada nahi karta ki main perfect hu,<br/>
            par ye vaada zaroor karta hu ki<br/>
            har din tujhe choose karunga,<br/>
            teri khushi, tera gussa, teri khamoshi… sab ke saath.
            <br/><br/>

            Iss Valentine’s pe ek simple sa sawaal hai,<br/>
            par jawab meri poori zindagi decide karega.
            <br/><br/>

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

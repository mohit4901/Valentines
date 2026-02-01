import { useState } from "react"
import Screen1OpenLetter from "./components/Screen1OpenLetter"
import Screen2Question from "./components/Screen2Question"
import Screen3Proposal from "./components/Screen3Proposal"

export default function App() {
  const [screen, setScreen] = useState(1)

  return (
    <div className="w-full h-screen bg-pinkBg overflow-hidden">
      {screen === 1 && <Screen1OpenLetter next={() => setScreen(2)} />}
      {screen === 2 && <Screen2Question yes={() => setScreen(3)} />}
      {screen === 3 && <Screen3Proposal />}
     
    </div>
  )
}

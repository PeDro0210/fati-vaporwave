import AdPart from "./components/main_components/ad_part/ad_part"
import UpperWindow from "./components/main_components/upper_window/upper_window"
import WindowGrid from "./components/main_components/window_grid/window_grid"
import "./App.css"
import { useEffect } from "react"
import clippy from "../src/assets/clippy.png";
//TODO: comment this one day
function App() {
  useEffect(() =>
    console.log("Amor, no tienes ni idea de cuanto te amo, estos meses han sido unicos y queria expresarte mi Amor con algo para sacar mi creatividad adelante y darte la razon en que si soy alguien asi, Te amo mi amor eres unica hermosa y perfecta, ahorita ando algo cansado, pero el domingo te dire aun mas cosas hermosa")
  )
  return (
    <div className="crt">
      <UpperWindow />
      <div className="content-part">
        <WindowGrid />
        <AdPart />
        <img className="clippy-image" src={clippy}></img>
      </div>
    </div >
  )
}

export default App

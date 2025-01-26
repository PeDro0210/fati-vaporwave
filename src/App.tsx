import AdPart from "./components/main_components/ad_part/ad_part"
import UpperWindow from "./components/main_components/upper_window/upper_window"
import WindowGrid from "./components/main_components/window_grid/window_grid"
import "./App.css"

//TODO: comment this one day
function App() {

  return (
    <div className="crt">
      <UpperWindow />
      <div className="content-part">
        <WindowGrid />
        <AdPart />
        <img className="clippy-image" src="../src/assets/clippy.png"></img>
      </div>
    </div >
  )
}

export default App

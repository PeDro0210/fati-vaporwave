import ResizableWindow from "../../usecases/resizable_window";
import "./upper_window.css"


function UpperWindow() {
  let url: string = "https://firebasestorage.googleapis.com/v0/b/fatipage-a0067.firebasestorage.app/o/MINDWAVE%20OST%20-%20Dorkus64%20-%20Although%20the%20Sky%20(Sped%20Up).mp4?alt=media&token=35e1c4d4-f18e-427e-ba5e-a438322188cc"
  return (
    <div className="upper-window">
      <ResizableWindow height="15vw" width="95vw" video={url} title="My beutiful wife.mp4" />
    </div>
  )
}

export default UpperWindow;

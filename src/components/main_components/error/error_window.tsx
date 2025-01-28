import ResizableWindow from "../../usecases/resizable_window";
import "./error_window.css";


function ErrorWindow() {
  const url2: string = "https://firebasestorage.googleapis.com/v0/b/fatipage-a0067.firebasestorage.app/o/The%20Kitty%20Cat%20Dance.mp4?alt=media&token=2c3ffabc-47ec-423a-a011-90a3be835f29"
  return (
    <div className="error-window">
      <ResizableWindow height="auto" width="auto" video={url2} title="sowwy:C, I didn't intead this resolution" />
    </div>
  )
}

export default ErrorWindow;

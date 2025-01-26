import ResizableWindow from "../../usecases/resizable_window";



function ErrorWindow() {
  let url: string = "https://firebasestorage.googleapis.com/v0/b/fatipage-a0067.firebasestorage.app/o/MINDWAVE%20OST%20-%20Dorkus64%20-%20Although%20the%20Sky%20(Sped%20Up).mp4?alt=media&token=35e1c4d4-f18e-427e-ba5e-a438322188cc"
  let url2: string = "https://firebasestorage.googleapis.com/v0/b/fatipage-a0067.firebasestorage.app/o/The%20Kitty%20Cat%20Dance.mp4?alt=media&token=2c3ffabc-47ec-423a-a011-90a3be835f29"
  return (
    <div className="upper-window">
      <ResizableWindow height="auto" width="auto" video={url} title="Sowwy :C" />
      <ResizableWindow height="auto" width="auto" video={url2} title="I didn't intead this resolution" />

    </div>
  )
}

export default ErrorWindow;

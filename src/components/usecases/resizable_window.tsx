import x_button from '../../assets/x_asset.png'
import "./resizable_window.css"

function ResizableWindow({ height, width, video, title }: { height: string; width: string; video: string; title: string }) {

  return (
    <div className="window-background"
      style={{
        '--height': height,  // CSS custom properties are set here
        '--width': width,    // CSS custom properties are set here
      } as React.CSSProperties}   >

      <div className="window-bar">

        <h1>{title}</h1>

        <div className="window-button">
          <img src={x_button} />
        </div>
      </div>

      <div className="window-content">
        <video src={video} className="video-asset" loop autoPlay muted />
      </div>

    </div>
  );
}

export default ResizableWindow;

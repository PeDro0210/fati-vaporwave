import ResizableWindow from '../../usecases/resizable_window';
import './ad_part.css';

function AdPart() {
  const url: string = "https://firebasestorage.googleapis.com/v0/b/fatipage-a0067.firebasestorage.app/o/get-in-loser-were-going-to-frutiger-aero-city-v0-16h5gw9xhe6c1%20(online-video-cutter.com).mp4?alt=media&token=f3d877ca-8dba-4423-b356-16d8db177d8f";
  return (
    <div className='ad-side'>
      < a href="https://github.com/PeDro0210" target="_blank" rel="noopener noreferrer" >
        <ResizableWindow height="55vh" width="40vh" video={url} title="Ad.mp4" />
      </a >
    </div >
  )
}

export default AdPart;

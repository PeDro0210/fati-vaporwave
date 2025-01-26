import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import app from "../../../firebase";
import { useEffect, useState } from "react";
import ResizableWindow from "../../usecases/resizable_window";
import "./window_grid.css"

function WindowGrid() {

  //dude, is kinda anyone typescrit, but Ig is safe
  const [videos, setVideos] = useState<string[]>([]);

  useEffect(() => {
    const storage = getStorage(app);
    const listRef = ref(storage, "videos/");

    listAll(listRef)
      .then((res) => {
        // Fetch the download URLs for each video
        const videoUrlsPromises = res.items.map(itemRef =>
          getDownloadURL(itemRef).then(url => url),

        );

        // Wait for all promises to resolve and then update state
        Promise.all(videoUrlsPromises)
          .then(urls => {
            setVideos(urls);
          })
          .catch((error) => {
            console.error("Error fetching video URLs:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  return (
    <div className="grid-part">
      <div className="spacer"></div>
      <div className="video-grid">
        {videos.map((video) => {
          return <ResizableWindow height="25vw" width="25vw" video={video} title="my beutiful wife.mp4" />
        })}
      </div>
    </div>
  )
}


export default WindowGrid;

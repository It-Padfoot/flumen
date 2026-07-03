import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import demoVideo from "@/assets/demo-video.mp4";

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlayClick = () => {
    setHasStarted(true);
    void videoRef.current?.play();
  };

  return (
    <section className="py-8 bg-[#EDF6FF]">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto" ref={ref}>
          <div
            className={`relative w-full aspect-video overflow-hidden transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <video
              ref={videoRef}
              controls={hasStarted}
              loop
              muted
              playsInline
              preload="metadata"
              onPlay={() => {
                setHasStarted(true);
                setIsPlaying(true);
              }}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover"
            >
              <source src={demoVideo} type="video/mp4" />
            </video>

            {!hasStarted && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Запустить демо-видео"
                  onClick={handlePlayClick}
                  className="pointer-events-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#167EDD] text-white shadow-2xl shadow-[#167EDD]/30 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#167EDD]/30"
                >
                  <Play className="ml-1 h-9 w-9 fill-current" />
                </button>
              </div>
            )}

            <div
              className="pointer-events-none absolute inset-x-0 top-0 bg-[#EDF6FF]"
              style={{ height: "14px" }}
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 bg-[#EDF6FF]"
              style={{ height: "14px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

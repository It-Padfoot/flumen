import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import demoVideo from "@/assets/demo-video.mp4";

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-[#EDF6FF]">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto" ref={ref}>
          <div
            className={`relative w-full aspect-video transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            >
              <source src={demoVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

const ImageCarousel = ({
  images,
  alt = "Project screenshot",
  autoPlay = true,
  interval = 3000,
  onPrevProject,
  onNextProject,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    let intervalId;
    if (isPlaying && images.length > 1) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
      }, interval);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, images.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-xl">
        <p className="text-white/50">No images available</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black/40 rounded-xl overflow-hidden group">
      {/* Main Image */}
      <img
        src={images[currentIndex]}
        alt={`${alt} ${currentIndex + 1}`}
        className="max-w-full max-h-full object-contain"
      />

      {/* Project Navigation Buttons (Edges) */}
      {onPrevProject && onNextProject && (
        <>
          <button
            onClick={onPrevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 rounded-full transition-all z-10 opacity-0 group-hover:opacity-100"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <button
            onClick={onNextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 rounded-full transition-all z-10 opacity-0 group-hover:opacity-100"
            aria-label="Next project"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </>
      )}

      {/* Controls Container */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/60 px-5 py-2.5 rounded-full z-10 transition-opacity duration-300">
          {/* Previous Image */}
          <button
            onClick={goToPrevious}
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="text-white hover:text-blue-400 transition-colors"
            aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current" />
            )}
          </button>

          {/* Next Image */}
          <button
            onClick={goToNext}
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Separator */}
          <div className="w-[1px] h-5 bg-white/20"></div>

          {/* Image Counter */}
          <span className="text-white text-sm font-medium tracking-wide min-w-[3ch] text-center">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;

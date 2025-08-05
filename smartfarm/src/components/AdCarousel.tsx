import { useState, useEffect } from "react";

const images = [
  "/ads/ad1.jpg",
  "/ads/ad2.jpg",
  "/ads/ad3.jpg",
];

export default function AdCarousel() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(next, 4000);
      return () => clearInterval(interval);
    }
  }, [index, isPlaying]);

  return (
    <div className="relative w-full h-[400px] mx-auto overflow-hidden rounded-md shadow-lg">
      <div
        className="flex transition-transform duration-700 h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`banner-${i}`}
            className="w-full h-full flex-shrink-0 object-contain"
          />
        ))}
      </div>

      {/* 좌우 버튼 */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &#10095;
      </button>

      {/* 하단 컨트롤 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4">
        {/* 도트 네비게이션 */}
        <div className="flex space-x-2">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-white" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>

        {/* 일시정지/재생 버튼 */}
        <button
          onClick={handlePlayPause}
          className="p-2 rounded-full bg-gray-400 text-white hover:bg-gray-500 focus:outline-none"
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 9v6m4-6v6"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3l14 9-14 9V3z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";

const images = ["/ads/ad1.jpg", "/ads/ad2.jpg", "/ads/ad3.jpg"];

export default function AdCarousel() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

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
      <div className="absolute bottom-4 right-4 flex items-center space-x-2 z-50">
        {/* 인덱스 숫자 표시 */}
        <div className="text-black text-sm font-semibold bg-[#FFFFFF99] px-4 py-2 rounded-3xl">
          {index + 1} / {images.length}
        </div>

        {/* 일시정지/재생 버튼 */}
        <button
          onClick={handlePlayPause}
          className="w-10 h-10 bg-[#FFFFFF99] rounded-full flex items-center justify-center z-50 cursor-pointer"
        >
          {!isPlaying ? (
            // 일시정지 아이콘
            <div className="">⏸</div>
          ) : (
            // 재생 아이콘
            <div className="">▶</div>
          )}
        </button>
      </div>
    </div>
  );
}

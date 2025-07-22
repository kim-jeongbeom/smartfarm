import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[url('https://www.n-farm.kr/images/main/main_img01.jpg')] bg-cover bg-center h-[500px] flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">청년농부와 함께하는 스마트팜</h2>
        <p className="text-lg">미래 농업의 시작, 스마트팜을 배워보세요</p>
      </div>
    </section>
  );
};

export default Hero;

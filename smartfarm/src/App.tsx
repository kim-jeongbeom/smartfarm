import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPages";
import SignUpPage from "./pages/SignUpPages";
import NoticePage from "./pages/NoticePages";

function HomePage() {
  return (
    <div>
      {/* ✅ 상단 바 + 카테고리바 */}
      <header>
        {/* ✅ 카테고리바 + 검색창 */}
        <div className="bg-white border-b border-gray-400 py-3">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
            {/* 카테고리 목록 */}
            <ul className="flex space-x-28 text-xl font-semibold text-gray-700 ">
              <li className="cursor-pointer hover:text-green-600">과일</li>
              <li className="cursor-pointer hover:text-green-600">채소</li>
              <li className="cursor-pointer hover:text-green-600">곡류</li>
              <li className="cursor-pointer hover:text-green-600">유제품</li>
              <li className="cursor-pointer hover:text-green-600">기타</li>
            </ul>

            {/* 검색창 */}
            <div className="relative">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="flex w-[350px] pl-4 pr-12 py-2 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <ul
                className="absolute right-1 top-3 -translate-y-1 mx-3 bg-transparent text-gray-500 hover:text-gray-500 cursor-pointer focus:outline-none focus:ring-0 focus:border-none"
                aria-label="검색"
              >
                🔍
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ 아래는 실제 페이지 본문 */}
      <main>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-16 py-16">
          <ul className="flex space-x-52 text-xl font-bold text-gray-700">
            <li className="flex flex-col items-center cursor-pointer">
              <img
                src="icons/fruit.png"
                alt="과일"
                className="w-16 h-16 mb-2"
              />
              과일
            </li>
            <li className="flex flex-col items-center cursor-pointer">
              <img
                src="icons/vegetable.png"
                alt="채소"
                className="w-16 h-16 mb-2"
              />
              채소
            </li>
            <li className="flex flex-col items-center cursor-pointer">
              <img
                src="icons/grain.png"
                alt="곡류"
                className="w-16 h-16 mb-2"
              />
              곡류
            </li>
            <li className="flex flex-col items-center cursor-pointer ">
              <img
                src="icons/dairy.png"
                alt="유제품"
                className="w-16 h-16 mb-2"
              />
              유제품
            </li>
            <li className="flex flex-col items-center cursor-pointer hover:text-green-600">
              <img src="icons/etc.png" alt="기타" className="w-16 h-16 mb-2" />
              기타
            </li>
          </ul>
        </div>
        <div className="recommend flex items-center gap-3">
          <div className="ml-20 text-5xl font-bold">실시간 상품 추천</div>
          <button
            className="text-xl text-gray-500 hover:bg-gray-100 border border-gray-700 px-6 py-4 rounded-lg"
            aria-label="더보기"
          >
            더보기+
          </button>
        </div>

        <div className="flex py-32 items-center justify-between">
          <div className="ml-20 text-5xl font-bold">상품정보</div>
          <ul className="text-xl rounded mr-28 underline">
            <li className="cursor-pointer hover:text-gray-600">더보기</li>
          </ul>
        </div>
        <div className="flex justify-between">
          <p className="ml-20 w-[500px] h-60 bg-sky-100 shadow p-4 ">
            <div className="ml-5">
              <div className="text-3xl font-bold leading-loose">고객센터</div>
              <div className="text-blue-900 text-5xl font-extrabold">
                1577-1577
              </div>
              <div className="text-xl text-black font-bold leading-loose">
                운영시간
              </div>
              <div className="text-xl flex space-x-2 items-center">
                <div className="font-semibold">상담시간</div>
                <div className="text-xl font-bold">06:00 ~ 23:00</div>
              </div>
              <div className="font-semibold leading-loose">
                (주말 상담 가능)
              </div>
            </div>
          </p>
          <div className="flex-1 ml-5 max-w-[900px]">
            {/* 제목 + 더보기 버튼 */}
            <div className="flex items-center mb-4 px-2 justify-between">
              <h2 className="text-3xl font-extrabold">
                공지사항 <span>📢</span>
              </h2>
              <ul className="text-xl rounded mr-28 underline">
                <li>
                  <Link
                    to="/notice"
                    className="text-gray-800 visited:text-gray-800 hover:text-gray-600 cursor-pointer"
                  >
                    더보기
                  </Link>
                </li>
              </ul>
            </div>

            {/* 공지 목록 */}
            <ul className="space-y-1 px-1 mr-20">
              <li className="flex justify-between text-lg border-b pb-1">
                <span>공지입니다. </span>
                <span className="text-gray-500">2025-07-21</span>
              </li>
              <li className="flex justify-between text-lg border-b pb-1">
                <span>공지입니다. </span>
                <span className="text-gray-500">2025-07-18</span>
              </li>
              <li className="flex justify-between text-lg border-b pb-1">
                <span>공지입니다. </span>
                <span className="text-gray-500">2025-07-09</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>공지입니다. </span>
                <span className="text-gray-500">2025-06-24</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-28" />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/notice" element={<NoticePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

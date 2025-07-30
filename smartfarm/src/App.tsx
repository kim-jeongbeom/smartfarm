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
            <ul className="flex items-center text-xl font-bold text-black space-x-32">
              {/* 카테고리 버튼 + 드롭다운 전체를 그룹화 */}
              <li className="relative group">
                {/* 메인 카테고리 버튼 */}
                <div className="cursor-pointer hover:bg-gray-100 flex items-center p-3 rounded-md">
                  <img
                    src="/src/assets/category.png"
                    alt="카테고리 아이콘"
                    className="h-[30px] w-auto mr-2"
                  />
                  <span>카테고리</span>
                </div>

                {/* 드롭다운 메뉴 */}
                <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md hidden group-hover:block group-hover:opacity-100 opacity-0 transition-opacity duration-200 z-10">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    과일
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    채소
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    곡류
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    유제품
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    기타
                  </li>
                </ul>
              </li>

              {/* 나머지 카테고리들 */}
              <li className="cursor-pointer hover:text-green-600">과일</li>
              <li className="cursor-pointer hover:text-green-600">채소</li>
              <li className="cursor-pointer hover:text-green-600">곡류</li>
              <li className="cursor-pointer hover:text-green-600">유제품</li>
              <li className="cursor-pointer hover:text-green-600">기타</li>
            </ul>

            {/* 검색창 */}
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
                alt="과 일"
                className="w-16 h-16 mb-2"
              />
              과 일
            </li>
            <li className="flex flex-col items-center cursor-pointer">
              <img
                src="icons/vegetable.png"
                alt="채 소"
                className="w-16 h-16 mb-2"
              />
              채 소
            </li>
            <li className="flex flex-col items-center cursor-pointer">
              <img
                src="icons/grain.png"
                alt="곡 류"
                className="w-16 h-16 mb-2"
              />
              곡 류
            </li>
            <li className="flex flex-col items-center cursor-pointer ">
              <img
                src="icons/dairy.png"
                alt="유 제 품"
                className="w-16 h-16 mb-2"
              />
              유 제 품
            </li>
            <li className="flex flex-col items-center cursor-pointer hover:text-green-600">
              <img src="icons/etc.png" alt="기타" className="w-16 h-16 mb-2" />
              기 타
            </li>
          </ul>
        </div>
        <div className="recommend flex items-center gap-3">
          <div className="ml-20 text-4xl font-bold">실시간 상품 추천</div>
          <button
            className="text-xl text-gray-500 hover:bg-gray-100 border border-gray-700 px-5 py-4 rounded-lg"
            aria-label="더보기"
          >
            더보기+
          </button>
        </div>

        <div className="flex py-32 items-center justify-between">
          <div className="ml-20 text-4xl font-bold">상품정보</div>
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

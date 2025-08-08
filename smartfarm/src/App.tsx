import React from "react";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPages";
import SignUpPage from "./pages/SignUpPages";
import NoticePage from "./pages/NoticePages";
import FruitPage from "./pages/Fruits";
import VegetablePage from "./pages/Vegetables";
import DairyPage from "./pages/Dairys";
import GrainPage from "./pages/Grains";
import AdCarousel from "./components/AdCarousel";
import { dummyData } from "./data/notices";
import NoticePages from "./pages/NoticePages";
import ScrollToTop from "./components/ScrollToTop";

function HomePage() {
  return (
    <div>
      {/* ✅ 아래는 실제 페이지 본문 */}
      <main>
        <AdCarousel />
        <div className="max-w-7xl mx-auto flex justify-center items-center px-16 py-16">
          <ul className="flex space-x-60 text-2xl font-bold text-gray-700">
            <li className="flex flex-col items-center cursor-pointer hover:text-green-600">
              <Link to="/fruits" className="flex flex-col items-center">
                <img
                  src="icons/fruit.png"
                  alt="과 일"
                  className="w-16 h-16 mb-2"
                />
                과 일
              </Link>
            </li>
            <li className="flex flex-col items-center cursor-pointer">
              <Link to="/vegetables" className="flex flex-col items-center">
                <img
                  src="icons/vegetable.png"
                  alt="채 소"
                  className="w-16 h-16 mb-2"
                />
                채 소
              </Link>
            </li>
            <li className="flex flex-col items-center cursor-pointer">
              <Link to="/grains" className="flex flex-col items-center">
                <img
                  src="icons/grain.png"
                  alt="곡 류"
                  className="w-16 h-16 mb-2"
                />
                곡 류
              </Link>
            </li>
            <li className="flex flex-col items-center cursor-pointer ">
              <Link to="/dairys" className="flex flex-col items-center">
                <img
                  src="icons/dairy.png"
                  alt="유 제 품"
                  className="w-16 h-16 mb-2"
                />
                유 제 품
              </Link>
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
        <div className="flex justify-between items-stretch">
          <div className="ml-20 mt-10 w-[500px] h-60 bg-sky-100 shadow p-4">
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
          </div>
          <div className="flex-1 max-w-7xl mx-auto px-4 py-10">
            {/* 공지사항 섹션 */}
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
                {[...dummyData]
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime()
                  )
                  .slice(0, 5)
                  .map((notice) => (
                    <li
                      key={notice.id}
                      className="flex justify-between text-lg border-b pb-1"
                    >
                      <span>{notice.title}</span>
                      <span className="text-gray-500">{notice.date}</span>
                    </li>
                  ))}
              </ul>
            </div>
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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/notice" element={<NoticePages />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/fruits" element={<FruitPage />} />
          <Route path="/vegetables" element={<VegetablePage />} />
          <Route path="/grains" element={<GrainPage />} />
          <Route path="/dairys" element={<DairyPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

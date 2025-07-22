import React from "react";
import Navbar from "./components/Navbar"; // 경로는 너 프로젝트 구조에 맞게

function App() {
  return (
    <div>
      {/* ✅ 상단 바 + 카테고리바 */}
      <header>
        <Navbar />

        {/* ✅ 카테고리바 + 검색창 */}
        <div className="bg-gray-50 border-b border-gray-200 py-3">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
            {/* 카테고리 목록 */}
            <ul className="flex space-x-6 text-sm font-medium text-gray-700 style={{ gap: '3rem' }}">
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
                className="flex w-[400px] pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                className="absolute right-0 top-1 -translate-y-1 mx-3 bg-transparent text-gray-500 hover:text-gray-500 focus:outline-none focus:ring-0 focus:border-none"
                aria-label="검색"
              >
                🔍
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ 아래는 실제 페이지 본문 */}
      <main>{/* 여기에 페이지 내용 들어감 */}</main>
    </div>
  );
}

export default App;

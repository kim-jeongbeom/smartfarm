import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white w-full shadow border-b border-gray-400 sticky top-0 z-50">
      <div className="w-full py-4 flex justify-between items-center">
        {/* 로고 영역: 텍스트 or 이미지 */}
        <Link to="/">
          <div className="ml-10 flex items-center space-x-3">
            <img
              src="/src/assets/logo2.png"
              alt="Bum's 농산물가게"
              style={{ height: "70px", width: "auto" }}
            />
            <span className="text-4xl font-bold leading-none text-green-800">
              Bum's 농산물가게
            </span>
          </div>
        </Link>

        {/* 메뉴 항목 */}
        <div className="relative">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="flex w-[500px] pl-4 pr-12 py-2 border border-gray-400 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600"
          />
          <ul
            className="absolute right-1 top-3 -translate-y-1 mx-3 bg-transparent text-gray-500 hover:text-gray-500 cursor-pointer focus:outline-none focus:ring-0 focus:border-none"
            aria-label="검색"
          >
            🔍
          </ul>
        </div>

        {/* 로그인/회원가입 버튼 */}
        <div className="space-x-6 mr-8">
          <Link to="/login" className="text-gray-700 hover:text-stone-600">
            로그인
          </Link>
          <Link to="/signup" className="text-gray-700 hover:text-gray-600">
            회원가입
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

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
              src="/src/assets/logo.png"
              alt="Bum's 농산물가게"
              style={{ height: "70px", width: "auto" }}
            />
            <span className="text-4xl font-bold leading-none text-green-800">
              Bum's 농산물가게
            </span>
          </div>
        </Link>

        {/* 메뉴 항목 */}
        <ul
          className="flex space-x-3 text-xl font-medium text-gray-800"
          style={{ gap: "4rem" }}
        >
          <li>
            <Link
              to="/"
              className="text-gray-800 visited:text-gray-800 hover:text-green-600 cursor-pointer"
            >
              HOME
            </Link>
          </li>
          <li className="hover:text-green-600 cursor-pointer">사업소개</li>
          <li className="hover:text-green-600 cursor-pointer">제품정보</li>
          <li className="hover:text-green-600 cursor-pointer">고객센터</li>
          <li>
            <Link
              to="/notice"
              className="text-gray-800 visited:text-gray-800 hover:text-green-600 cursor-pointer"
              >공지사항
              </Link>
          </li>
        </ul>

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

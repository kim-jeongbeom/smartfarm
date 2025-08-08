import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />

      {/* ✅ 공통 카테고리 바 */}
      <div className="bg-white border-b border-gray-400 py-3 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* 카테고리 메뉴 왼쪽 */}
          <div className="flex items-center">
            <ul className="flex items-center text-2xl font-bold text-black space-x-2">
              <li className="relative group">
                <div className="cursor-pointer flex items-center p-3 rounded-md">
                  <img
                    src="/src/assets/category.png"
                    alt="카테고리 아이콘"
                    className="h-[30px] w-auto mr-2"
                  />
                  <span>농산물 카테고리</span>
                </div>
                <div className="absolute top-full left-0 mt-[-1px] w-48 bg-white border shadow-md rounded-md hidden group-hover:block z-50 text-base">
                  <Link to="/fruits">
                    <li className="px-4 py-2 hover:bg-green-100 cursor-pointer">
                      과일
                    </li>
                  </Link>
                  <Link to="/vegetables">
                    <li className="px-4 py-2 hover:bg-green-100 cursor-pointer">
                      채소
                    </li>
                  </Link>
                  <Link to="/grains">
                    <li className="px-4 py-2 hover:bg-green-100 cursor-pointer">
                      곡류
                    </li>
                  </Link>
                  <Link to="/dairys">
                    <li className="px-4 py-2 hover:bg-green-100 cursor-pointer">
                      유제품
                    </li>
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {/* 오른쪽 메뉴 */}
          <div>
            <ul className="flex items-start text-2xl font-bold text-black space-x-48 mr-12">
              <li className="cursor-pointer hover:text-green-600">
                <Link to="/fruits">과일</Link>
              </li>
              <li className="cursor-pointer hover:text-green-600">
                <Link to="/vegetables">채소</Link>
              </li>
              <li className="cursor-pointer hover:text-green-600">
                <Link to="/grains">곡류</Link>
              </li>
              <li className="cursor-pointer hover:text-green-600">
                <Link to="/dairys">유제품</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

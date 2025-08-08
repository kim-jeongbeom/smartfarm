// src/components/MainCategoryBar.tsx
import React from "react";
import { Link } from "react-router-dom";

const MainCategoryBar = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto flex justify-center items-center px-16 py-8 space-x-20">
        <ul className="flex space-x-20 text-2xl font-bold text-gray-700">
          <li className="flex flex-col items-center cursor-pointer hover:text-green-600">
            <Link to="/fruits" className="flex flex-col items-center">
              <img src="/icons/fruit.png" alt="과일" className="h-20 mb-2" />
              <span>과일</span>
            </Link>
          </li>
          <li className="flex flex-col items-center cursor-pointer hover:text-green-600">
            <Link to="/vegetables" className="flex flex-col items-center">
              <img src="/icons/vegetable.png" alt="채소" className="h-20 mb-2" />
              <span>채소</span>
            </Link>
          </li>
          <li className="flex flex-col items-center cursor-pointer hover:text-green-600">
            <Link to="/dairy" className="flex flex-col items-center">
              <img src="/icons/dairy.png" alt="유제품" className="h-20 mb-2" />
              <span>유제품</span>
            </Link>
          </li>
          <li className="flex flex-col items-center cursor-pointer hover:text-green-600">
            <Link to="/grains" className="flex flex-col items-center">
              <img src="/icons/grain.png" alt="곡류" className="h-20 mb-2" />
              <span>곡류</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainCategoryBar;

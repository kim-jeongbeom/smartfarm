import React from "react";
import { Link } from "react-router-dom";

const CategoryBar = () => {
  return (
    <div className="bg-white border-b border-gray-400 py-3 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <ul className="flex items-center text-2xl font-bold text-black space-x-8">
          <li className="hover:text-green-600 cursor-pointer">
            <Link to="/fruits">과일</Link>
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            <Link to="/vegetables">채소</Link>
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            <Link to="/dairy">유제품</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryBar;

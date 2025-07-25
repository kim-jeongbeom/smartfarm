import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ID:", id);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      {/* 흰색 박스 */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-xl shadow-md w-full max-w-md"
      >
        {/* 제목 */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          로그인
        </h2>

        {/* 입력창들 */}
        <div className="flex flex-col gap-4">
          {/* 아이디 */}
          <div className="flex items-center bg-gray-100 px-4 py-3 ">
            <FaUser className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* 비밀번호 */}
          <div className="flex items-center justify-center bg-gray-100 px-4 py-3 ">
            <FaLock className="text-gray-400 mr-3" />
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* 로그인 버튼 */}
        <button
          type="submit"
          className="mt-6 w-full bg-green-500 text-white tracking-widest py-3 rounded hover:bg-green-400 transition"
        >
          L O G I N
        </button>
      </form>
    </div>
  );
}

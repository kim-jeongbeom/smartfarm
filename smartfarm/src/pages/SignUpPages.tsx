import React, { useState } from "react";
import { FaIdCard, FaLock, FaUser, FaPhone } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function SignupPage() {
  const [email, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 추가

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, name, phone });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-black">회원가입</h1>

        {/* 이메일 */}
        <div className="flex items-center border-b border-gray-300 py-2">
          <FaIdCard className="text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="ID"
            value={email}
            onChange={(e) => setId(e.target.value)}
            className="w-full outline-none placeholder-gray-400"
          />
        </div>

        {/* 비밀번호 */}
        <div className="flex items-center border-b border-gray-300 py-2 relative cursor-pointer">
          <FaLock className="text-gray-500 mr-3" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full outline-none placeholder-gray-400 pr-10"
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </div>
        </div>

        {/* 이름 */}
        <div className="flex items-center border-b border-gray-300 py-2">
          <FaUser className="text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full outline-none placeholder-gray-400"
          />
        </div>

        {/* 휴대폰 번호 */}
        <div className="flex items-center border-b border-gray-300 py-2">
          <FaPhone className="text-gray-500 mr-3" />
          <input
            type="tel"
            placeholder="휴대폰 번호를 -없이 입력해주세요"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full outline-none placeholder-gray-400"
          />
        </div>

        {/* 약관 동의 */}
        <div className="pt-3 text-sm border-gray-200 text-gray-800 font-semibold">
          <div className="flex justify-between items-center">
            <p className="text-xs font-normal text-gray-500">
              본인은 만 14세 이상이며, 위 약관 내용을 확인하였습니다
            </p>
            <input
              type="checkbox"
              id="agree"
              className="w-5 h-5 accent-black"
            />
          </div>
        </div>

        {/* 회원가입 버튼 */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-3 rounded cursor-not-allowed"
          disabled
        >
          회 원 가 입
        </button>
      </form>
    </div>
  );
}

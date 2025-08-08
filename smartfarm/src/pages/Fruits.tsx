import React from "react";

export default function Fruits() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 상품명 */}
      <h1 className="text-3xl font-bold mb-4">신선한 사과</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* 이미지 */}
        <div className="md:w-1/2">
          <img
            src="icons/apple.png"
            alt="신선한 사과"
            className="w-full rounded-lg shadow"
          />
        </div>

        {/* 상품 정보 */}
        <div className="md:w-1/2 space-y-4">
          <p className="text-gray-700">
            유기농으로 재배한 달콤하고 아삭한 사과입니다.
          </p>

          <table className="w-full text-left text-sm border border-gray-300 rounded">
            <tbody>
              <tr>
                <th className="p-2 border-b border-gray-300">원산지</th>
                <td className="p-2 border-b border-gray-300">한국</td>
              </tr>
              <tr>
                <th className="p-2 border-b border-gray-300">무게</th>
                <td className="p-2 border-b border-gray-300">1kg (5~6개)</td>
              </tr>
              <tr>
                <th className="p-2 border-b border-gray-300">보관법</th>
                <td className="p-2 border-b border-gray-300">냉장 보관</td>
              </tr>
            </tbody>
          </table>

          <div>
            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
              장바구니에 담기
            </button>
          </div>
        </div>
      </div>


      {/* 리뷰 또는 추천 상품 등 추가 영역 */}
    </div>
  );
}

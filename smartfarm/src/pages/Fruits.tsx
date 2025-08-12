import React from "react";

const products = [
  {
    id: 1,
    name: "[특화상품25-7호] 멜론/네트계 (2K내외)",
    image: "/cards/melon.jpg", // 이미지 경로 직접 추가 필요
    originalPrice: 9000,
    discount: 2000,
    weight: "2kg/개",
    quantity: 999999,
  },
  {
    id: 2,
    name: "신선한 사과",
    image: "/icons/apple.png",
    originalPrice: 8000,
    discount: 1000,
    weight: "1kg/봉지",
    quantity: 5000,
  },
  {
    id: 3,
    name: "맛있는 망고ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㄴㄴㄴ",
    image: "/cards/mango.jpg",
    originalPrice: 10000,
    discount: 2000,
    weight: "2kg/봉지",
    quantity: 8000,
  },
  {
    id: 4,
    name: "맛있는 키위ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㄴㄴㄴ",
    image: "/cards/kiwi.jpg",
    originalPrice: 10000,
    discount: 2000,
    weight: "2kg/봉지",
    quantity: 8000,
  },
  {
    id: 5,
    name: "맛있는 블루베리ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㄴㄴㄴ",
    image: "/icons/apple.png",
    originalPrice: 10000,
    discount: 2000,
    weight: "2kg/봉지",
    quantity: 8000,
  },
  {
    id: 6,
    name: "맛있는 블루베리ㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
    image: "/icons/apple.png",
    originalPrice: 10000,
    discount: 2000,
    weight: "2kg/봉지",
    quantity: 8000,
  },
  // 필요한 만큼 상품 추가
];

export default function Fruits() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">과일 상품 목록</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => {
          const finalPrice = product.originalPrice - product.discount;

          return (
            <div
              key={product.id}
              className="flex flex-col justify-between rounded-lg shadow hover:shadow-lg transition p-4 h-[520px]" // ✅ 높이 고정
            >
              {/* 이미지 */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain rounded"
              />

              {/* 콘텐츠 (텍스트, 가격, 정보 등) */}
              <div className="flex flex-col justify-between flex-grow mt-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">
                    농업회사법인주식회사한빛
                  </p>
                  <h2 className="text-lg font-semibold leading-snug">
                    {product.name}
                  </h2>

                  <div className="flex items-baseline space-x-2">
                    <span className="text-xl font-bold text-green-700">
                      {finalPrice.toLocaleString()}원
                    </span>
                    <span className="text-sm line-through text-gray-500">
                      {product.originalPrice.toLocaleString()}원
                    </span>
                  </div>

                  <table className="text-sm">
                    <tbody>
                      <tr>
                        <td className="pr-2 font-medium text-gray-600">
                          단위/포장:
                        </td>
                        <td>{product.weight}</td>
                      </tr>
                      <tr>
                        <td className="pr-2 font-medium text-gray-600">
                          수량:
                        </td>
                        <td>{product.quantity.toLocaleString()}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ✅ 버튼 - 고정 높이, 내부 정렬 유지 */}
                <button className="w-full bg-green-600 text-white h-12 rounded hover:bg-green-700 transition">
                  구매하기
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

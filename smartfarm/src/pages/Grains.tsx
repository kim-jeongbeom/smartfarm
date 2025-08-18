import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "[특화상품25-7호] 멜론/네트계 (2K내외)",
    image: "/cards/melon.jpg",
    originalPrice: 9000,
    discount: 2000,
    weight: "2kg/개",
    quantity: 999999,
    createdAt: "2025-08-01", // ✅ 등록일
  },
  {
    id: 2,
    name: "신선한 사과",
    image: "/icons/apple.png",
    originalPrice: 8000,
    discount: 1000,
    weight: "1kg/봉지",
    quantity: 5000,
    createdAt: "2025-08-05",
  },
  {
    id: 3,
    name: "맛있는 망고",
    image: "/cards/mango.jpg",
    originalPrice: 10000,
    discount: 2000,
    weight: "2kg/봉지",
    quantity: 8000,
    createdAt: "2025-07-28",
  },
];

export default function Fruits() {
  const [sortBy, setSortBy] = useState<
    "date" | "name" | "priceAsc" | "priceDesc"
  >("date");

  // ✅ 정렬된 상품 목록
  const sortedProducts = [...products].sort((a, b) => {
    const finalA = a.originalPrice - a.discount;
    const finalB = b.originalPrice - b.discount;

    if (sortBy === "date") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(); // 최신순
    }
    if (sortBy === "name") {
      return a.name.localeCompare(b.name, "ko"); // 가나다순
    }
    if (sortBy === "priceAsc") {
      return finalA - finalB; // 가격 낮은순
    }
    if (sortBy === "priceDesc") {
      return finalB - finalA; // 가격 높은순
    }
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* 상단 타이틀 + 정렬 드롭다운 */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">곡류 상품 목록</h1>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="border rounded px-6 py-2 text-left"
        >
          <option value="date">등록일순</option>
          <option value="name">가나다순</option>
          <option value="priceAsc">가격 낮은순</option>
          <option value="priceDesc">가격 높은순</option>
        </select>
      </div>

      {/* 상품 목록 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {sortedProducts.map((product) => {
          const finalPrice = product.originalPrice - product.discount;

          return (
            <div
              key={product.id}
              className="flex flex-col justify-between rounded-lg shadow hover:shadow-lg transition p-4 h-[520px]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain rounded"
              />

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

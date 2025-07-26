import React, { useState } from "react";

interface Notice {
  id: number;
  title: string;
  date: string;
}

const dummyData: Notice[] = [
  { id: 20, title: "공지입니다.", date: "2015.11.24" },
  { id: 19, title: "공지입니다.", date: "2015.11.11" },
  { id: 18, title: "공지입니다.", date: "2015.01.12" },
  { id: 17, title: "공지입니다.", date: "2015.01.12" },
  { id: 16, title: "공지입니다.", date: "2015.01.07" },
  { id: 15, title: "공지입니다.", date: "2015.01.07" },
  { id: 14, title: "공지입니다.", date: "2015.01.07" },
  { id: 13, title: "공지입니다.", date: "2014.12.24" },
  { id: 12, title: "공지입니다.", date: "2014.12.19" },
  { id: 11, title: "공지입니다.", date: "2014.12.18" },
  { id: 10, title: "공지입니다.", date: "2015.11.24" },
  { id: 9, title: "공지입니다.", date: "2015.11.11" },
  { id: 8, title: "공지입니다.", date: "2015.01.12" },
  { id: 7, title: "공지입니다.", date: "2015.01.12" },
  { id: 6, title: "공지입니다.", date: "2015.01.07" },
  { id: 5, title: "공지입니다.", date: "2015.01.07" },
  { id: 4, title: "공지입니다.", date: "2015.01.07" },
  { id: 3, title: "공지입니다.", date: "2014.12.24" },
  { id: 2, title: "공지입니다.", date: "2014.12.19" },
  { id: 1, title: "공지입니다.", date: "2014.12.18" },
];

export default function NoticeListPage() {
  const [inputValue, setInputValue] = useState(""); // 검색어 입력창 상태
  const [searchType, setSearchType] = useState("title"); // 선택된 검색 기준
  const [searchTerm, setSearchTerm] = useState(""); // 실제 검색어
  const [searchField, setSearchField] = useState("title"); // 실제 검색 필드
  const [currentPage, setCurrentPage] = useState(1);

  const noticesPerPage = 10;

  // 필터링
  const filteredNotices = dummyData.filter((n) => {
    const valueToSearch = searchField === "title" ? n.title : ""; // 나중에 내용도 추가 가능
    return valueToSearch.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(filteredNotices.length / noticesPerPage);
  const paginatedNotices = filteredNotices.slice(
    (currentPage - 1) * noticesPerPage,
    currentPage * noticesPerPage
  );

  const handleSearch = () => {
    setSearchTerm(inputValue); // 입력된 검색어로 설정
    setSearchField(searchType); // 선택된 검색 기준 반영
    setCurrentPage(1); // 검색 후 1페이지로 이동
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow mt-12">
      <h2 className="text-3xl font-bold text-center mb-6">공지사항</h2>

      {/* 테이블 */}
      <table className="w-full table-fixed border border-gray-300 text-center">
        <thead className="bg-gray-100">
          <tr className="text-gray-700">
            <th className="w-1/6 py-2 border">번호</th>
            <th className="w-4/6 py-2 border">제목</th>
            <th className="w-1/6 py-2 border">등록일</th>
          </tr>
        </thead>
        <tbody>
          {paginatedNotices.map((notice) => (
            <tr key={notice.id} className="hover:bg-gray-50">
              <td className="py-2 border">{notice.id}</td>
              <td className="py-2 border text-left pl-4">{notice.title}</td>
              <td className="py-2 border">{notice.date}</td>
            </tr>
          ))}
          {paginatedNotices.length === 0 && (
            <tr>
              <td colSpan={3} className="py-4 text-gray-400">
                검색 결과가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <div className="flex justify-center mt-6 space-x-1">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* 검색창 */}
      <div className="flex justify-center mt-6">
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-28"
        >
          <option value="title">제목</option>
          <option value="content">
            내용
          </option>
        </select>
        <div className="w-2"></div>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-96 rounded"
        />
        <div className="w-2"></div>
        <button
          onClick={handleSearch}
          className="bg-black text-white px-4 py-2 rounded-r-md"
        >
          🔍 검색
        </button>
      </div>
    </div>
  );
}

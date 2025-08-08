import React from "react";
import { dummyData } from "../data/notices";

function NoticePages() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold mb-6">공지사항 📢</h1>

        {/* 테이블 형태의 공지사항 */}
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="px-4 py-2 w-1/12 border">NO</th>
              <th className="px-4 py-2 border">제목</th>
              <th className="px-4 py-2 w-1/6 border">등록일</th>
            </tr>
          </thead>
          <tbody>
            {[...dummyData]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((notice, index, arr) => (
                <tr key={notice.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{arr.length - index}</td>
                  <td className="px-4 py-2 border">{notice.title}</td>
                  <td className="px-4 py-2 border">{notice.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NoticePages;

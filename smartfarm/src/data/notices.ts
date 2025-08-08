export interface Notice {
  id: number;
  title: string;
  date: string;
}

export const dummyData: Notice[] = [
  { id: 20, title: "2025년 4회차 산지팜투어 참가 모집공고(~8.19(화))", date: "2025-08-06" },
  { id: 19, title: "농수산물 온라인도매시장 거점물류 지원사업 현장설명회 안내", date: "2025-07-21" },
  { id: 18, title: "2025년 직구매/직배송 온오프라인 마케팅비 지원사업 추가 모집공고", date: "2025-07-18" },
  { id: 17, title: "[필독] 산지-소비지 직배송 물류비 지원사업 정산 관련 안내사항", date: "2025-07-09" },
  { id: 16, title: "공지입니다.", date: "2025-06-24" },
  { id: 15, title: "공지입니다.", date: "2025-06-21" },
];
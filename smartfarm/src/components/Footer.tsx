import React from "react";

const Footer = () => {
  const kakaoChPop = () => {
    alert("카카오톡 채널 추가 팝업 예시입니다.");
  };

  return (
    <footer className="bg-gray-100 text-gray-700 text-sm border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
        {/* 상단 정보 */}
        <div className="top space-y-3">
          <div className="logoArea">
            <img
              src="/src/assets/logo.png"
              alt="KAFB2B 농수산물 온라인도매시장"
              className="h-10 mb-6"
            /> 
          </div>
          <address className="not-italic">
            (11111) 경기도 평택시 , 1층
          </address>
          <p>
            <strong>고객만족센터:</strong> 1234-5678{" "}
            <span className="ml-2 text-gray-500">
              운영시간 : 06~23시 (토·일·공휴일 휴무)
            </span>
          </p>
          <p>
            <strong>업무 시간 외 장애 접수:</strong> 02-1234-5678
          </p>
          <p>
            <strong>사업자등록번호:</strong> 111-11-1111
          </p>
        </div>

        {/* 하단 링크 및 저작권 */}
        <div className="bottom border-t border-gray-200 pt-6">
          <ul className="flex flex-wrap gap-4 mb-4 text-gray-600">
            <li>
              <a
                href="/client/co/join/terms1.do"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                이용약관
              </a>
            </li>
            <li>
              <a
                href="https://www.at.or.kr/sitemap/apko918000/privacy_policy.action"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                개인정보처리방침
              </a>
            </li>
            <li>
              <a
                href="https://www.at.or.kr/privacy/apko372000/intro.action"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                개인정보침해 신고센터
              </a>
            </li>
            <li>
              <a
                href="http://www.at.or.kr/html/member/at_acount_5.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                이메일 무단 수집거부
              </a>
            </li>
            <li>
              <a
                href="/contents/file/(한국농수산식품유통공사)실증특례_이용자_고지_사항.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                실증특례 지정 고지
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  kakaoChPop();
                }}
                className="hover:text-green-600"
              >
                카카오톡 채널 추가
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* sbux-progress는 존재 시 스타일링 필요 */}
      {/* <sbux-progress
        id="_progress"
        name="_progress"
        uitype="loading"
        show-openlayer="true"
        animation-type="fadeIn"
        openlayer-title="처리중입니다."
      /> */}
    </footer>
  );
};

export default Footer;

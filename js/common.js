document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('#hd');

    // 스크롤 시 실행할 함수
    const handleScroll = () => {
        if (window.scrollY > 10) {
            // 휠을 내렸을 때: 투명 제거, 흰색 배경 및 그림자 추가
            header.classList.add('bg-white', 'shadow-sm');
            header.classList.remove('bg-transparent'); // 만약 초기 클래스에 투명이 있다면 제거
        } else {
            // 맨 위로 올라왔을 때: 흰색 배경 제거, 투명 추가
            header.classList.remove('bg-white', 'shadow-sm');
            // 필요 시 초기 투명 클래스 추가 (예: 헤더가 원래 투명해야 한다면)
            // header.classList.add('bg-transparent'); 
        }
    };

    // 페이지 로드 시점에도 스크롤 위치 확인 (새로고침 대응)
    handleScroll();

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);
});
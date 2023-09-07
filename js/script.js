// 버튼 누를시 상단으로 이동
const up = document.querySelector('#up')
console.log(up)

up.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // 스크롤을 부드럽게 이동
    });
});

// 헤더의 버튼을 클릭할 때 이벤트 핸들러를 추가합니다.
const userSearchButton = document.querySelector('#user_search');
const mainSearchForm = document.querySelector('main > form');

let isSearchVisible = false; // 검색 상태 여부를 저장하는 변수

// 헤더의 버튼을 클릭할 때 이벤트 핸들러를 추가합니다.
userSearchButton.addEventListener('click', toggleSearchForm);

// 스크롤 이벤트를 추가하여 검색 기능이 자동으로 숨겨지도록 합니다.
window.addEventListener('scroll', function () {
    if (isSearchVisible) {
        mainSearchForm.style.display = 'none'; // 검색 폼 숨기기
        isSearchVisible = false; // 상태를 업데이트
    }
});

function toggleSearchForm() {
    if (isSearchVisible) {
        mainSearchForm.style.display = 'none'; // 검색 폼 숨기기
    } else {
        mainSearchForm.style.display = 'block'; // 검색 폼 보이기
    }
    isSearchVisible = !isSearchVisible; // 상태를 토글
}
// 네비 보이게 하기

// 오픈 버튼 생성
const menu_btn = document.querySelector('.menu_btn')
console.log(menu_btn)

// 나가기 버튼 생성
const menu = document.querySelector('.menu')
const closer = document.querySelector('#closer')
console.log(menu, closer)

menu.style.display = 'none';
menu.style.transition = 'transform 0.8s ease'

// 메뉴 클릭시 메뉴 창 오픈
menu_btn.addEventListener('click',function(){
    menu.style.display = 'block'
    menu.style.transform = 'translateX(20%)';
})
// closer 클릭 시 메뉴창 없어지기
closer.addEventListener('click',function(){
    menu.style.transform = 'translateX(120%)';

    // 모든 디테일 요소를 숨깁니다.
    detailsLists.forEach((detailsList, index) => {
        detailsList.style.display = 'none';
        groupImgs[index].style.transform = 'rotate(0deg)';
    });

    // 모든 디테일 요소의 상태를 숨겨진 상태로 설정합니다.
    isDetailsVisible.fill(false);
})

// 메뉴 리스트
const groupBtns = document.querySelectorAll('.group');
const detailsLists = document.querySelectorAll('.details');
const groupImgs = document.querySelectorAll('.group > img');

// 초기 상태는 숨겨진 상태로 설정합니다.
const isDetailsVisible = Array.from({ length: groupBtns.length }, () => false);

groupBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // 클릭할 때마다 해당 요소의 상태를 토글(Toggle)합니다.
        if (isDetailsVisible[index]) {
            // 현재 보이는 상태인 경우
            detailsLists[index].style.display = 'none'; // 숨깁니다.
            groupImgs[index].style.transform = 'rotate(0deg)'; // 로테이트를 초기 상태로 되돌립니다.
        } else {
            // 현재 숨겨진 상태인 경우
            detailsLists[index].style.display = 'block'; // 보이게 합니다.
            groupImgs[index].style.transform = 'rotate(180deg)'; // 로테이트를 180도로 설정합니다.
            groupImgs[index].style.transition = 'all 0.5s'; // 애니메이션을 적용합니다.
        }

        // 해당 요소의 상태를 변경합니다.
        isDetailsVisible[index] = !isDetailsVisible[index];
    });
});



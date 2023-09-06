const swiper_bg = new Swiper('#swiper_bg',{
    autoplay:{
        delay:5000, // 1000 단위 당 1초
        disableOnInteraction:false //버튼 클릭 후 자동 재생유지
    },
    loop:true,
    speed:1000,
    direction:'horizontal',
    slidesPerView: 5, // 자동으로 슬라이드 개수를 설정
    centeredSlides: true, // 슬라이드를 가운데로 정렬
    spaceBetween: 30, // 슬라이드 사이의 간격 설정
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼 클래스
      prevEl: '.swiper-button-prev', // 이전 버튼 클래스
    },
    autoplay: {
      delay: 5000, // 자동 슬라이드 간격 (5초)
    },
})
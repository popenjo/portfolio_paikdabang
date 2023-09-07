const a = document.querySelector('#product')
const b = document.querySelector('.bg_top')
const c = document.querySelector('.best_product')
console.log(a, b, c)

const bg_top = new Swiper('.bg_top',{
    autoplay:{
        delay:6000, // 1000 단위 당 1초
        disableOnInteraction:false //버튼 클릭 후 자동 재생유지
    },
    loop:true,
    speed:1000,
    direction:'horizontal',
})

const product = new Swiper('#product',{
    autoplay:{
        delay:8000, // 1000 단위 당 1초
        disableOnInteraction:false //버튼 클릭 후 자동 재생유지
    },
    loop:true,
    speed:1000,
    direction:'horizontal',
    slidesPerView: 'auto',
})


// 검색기능
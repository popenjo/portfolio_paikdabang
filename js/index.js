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
})



const btnAll = document.querySelectorAll('button')
const link1 = document.querySelector('#link1')
const link2 = document.querySelector('#link2')
const link3 = document.querySelector('#link3')
console.log(link1, link2, link3, btnAll)

const headerSection = document.querySelector('header');
const main2Section = document.querySelector('.inner');
const footerSection = document.querySelector('footer');

// 검색기능
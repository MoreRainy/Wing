let wing_top = document.querySelector('.wing_top');
window.addEventListener('scroll', function () {
    if (window.pageYOffset == 0) {
        wing_top.style.bottom = '-2rem';
    }
    else {
        wing_top.style.bottom = '1rem';
    }
})
wing_top.addEventListener('click', function () {
    window.scrollTo({//一个对象，三个参数,这是对象字面量{}的写法
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})
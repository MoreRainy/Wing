let head_logo = document.querySelector('.wing_news_nav>img');
let head_text = document.querySelectorAll('.language a,.language span,.wing_news_nav_head');
let head_nav = document.querySelectorAll('.wing_news_nav_m>li');
let head_bg = document.querySelector('.wing_news_nav_bg');
for (let i = 0; i < head_nav.length; i++) {
    head_nav[i].addEventListener('mouseover', function () {
        head_bg.classList.add('wing_news_nav_bg_js'); //白色背景
        head_logo.src = 'images/tencent_logo.png';
        this.lastElementChild.style.transform = 'scaleY(1)';
        for (let j = 0; j < head_text.length; j++) {
            head_text[j].style.color = 'black';
        }
    })
    head_nav[i].addEventListener('mouseout', function () {
        head_bg.classList.remove('wing_news_nav_bg_js');
        if (window.pageYOffset == 0) {
            head_logo.src = 'images/tx_logo.png';
            this.lastElementChild.style.transform = 'scaleY(0)';
            for (let j = 0; j < head_text.length; j++) {
                head_text[j].style.color = '#FFF';
            }
        }
    })
}
let preScroll = 0;//初始化滚动位置变量
window.addEventListener('scroll', function () {
    if (window.pageYOffset - preScroll > 0) {//向下滚动
        head_bg.style.top = '-72px';
        // 向下滚动时，就算鼠标唤出了二级菜单，也要收回
        for (let i = 0; i < head_nav.length; i++) {
            head_nav[i].lastElementChild.style.transform = 'scaleY(0)';
        }
        head_bg.classList.remove('wing_news_nav_bg_js');
    }
    else {//向上滚动
        head_bg.style.top = '0';
        head_bg.classList.add('wing_nav_move');
        head_logo.src = 'images/tencent_logo.png';
        for (let j = 0; j < head_text.length; j++) {
            head_text[j].style.color = 'black';
        }
    }
    if (window.pageYOffset == 0) {//置顶清空所有样式
        head_bg.classList.remove('wing_nav_move');
        head_logo.src = 'images/tx_logo.png';
        for (let j = 0; j < head_text.length; j++) {
            head_text[j].style.color = '#FFF';
        }
    }
    preScroll = window.pageYOffset;//记录当前位置
})
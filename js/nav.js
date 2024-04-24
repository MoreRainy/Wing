let head_logo = document.querySelector('.wing_news_nav>img');
let head_text = document.querySelectorAll('.language a,.language span,.wing_news_nav_head');
let head_nav = document.querySelectorAll('.wing_news_nav_m>li');
let head_bg = document.querySelector('.wing_news_nav_bg');
let head_flag = 1; //head_flag用于判断是否满足二级菜单唤出的条件，不然鼠标放在导航栏滚动向下滚动会因为visibility不释放位置导致反复唤出二级菜单
// 实时获取鼠标位置
let mouseY = 0;
// 该监听事件即使物理鼠标没有移动，但页面滚动依然能监听
//用于修复鼠标提前放到相应的下拉菜单处，在滚轮上移且正好达到页面最顶部出现导航栏文字消失的bug
document.addEventListener('mousemove', function (e) {
    mouseY = e.clientY;
})
for (let i = 0; i < head_nav.length; i++) {
    head_nav[i].addEventListener('mouseover', function () {
        if (head_flag == 1) {
            head_bg.classList.add('wing_news_nav_bg_js'); //白色背景
            head_logo.src = 'images/tencent_logo.png';
            this.lastElementChild.style.transform = 'scaleY(1)';
            this.lastElementChild.style.visibility = 'visible';
            for (let j = 0; j < head_text.length; j++) {
                head_text[j].style.color = 'black';
            }
        }
    })
    head_nav[i].addEventListener('mouseout', function () {
        head_bg.classList.remove('wing_news_nav_bg_js');
        this.lastElementChild.style.transform = 'scaleY(0)';
        this.lastElementChild.style.visibility = 'hidden';
        if (window.pageYOffset == 0) {
            head_logo.src = 'images/tx_logo.png';
            for (let j = 0; j < head_text.length; j++) {
                head_text[j].style.color = '#FFF';
            }
        }
        if (window.pageYOffset == 0) {//置顶清空所有样式
            head_bg.classList.remove('wing_nav_move');
            head_logo.src = 'images/tx_logo.png';
            for (let j = 0; j < head_text.length; j++) {
                head_text[j].style.color = '#FFF';
            }
            head_flag = 1;
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
            head_nav[i].lastElementChild.style.visibility = 'hidden';
            head_flag = 0;
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
        head_flag = 1;
    }
    if (window.pageYOffset == 0 && mouseY > 72) {//置顶清空所有样式
        head_bg.classList.remove('wing_nav_move');
        head_logo.src = 'images/tx_logo.png';
        for (let j = 0; j < head_text.length; j++) {
            head_text[j].style.color = '#FFF';
        }
        head_flag = 1;
    }
    preScroll = window.pageYOffset;//记录当前位置
})
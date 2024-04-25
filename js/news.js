let news_bg_box = document.querySelector('.wing_news_bg_box>ul');//背景图片大集合ul
let news_bg_box_num = document.querySelectorAll('.wing_news_bg_box>ul>li');//背景图片li
let news_button_box = document.querySelector('.wing_news_button_chose');//原点集合
let new_current = 0;//追踪目前所在的图片
let new_bg_width = news_bg_box.parentNode.offsetWidth;//获取背景盒子的宽度，即ul外div的宽度,注意，offset获取不带单位
//动态修改盒子宽度
let width_sum = new_bg_width * news_bg_box_num.length;//背景宽度和，即需要设置的ul宽度
news_bg_box.style.width = width_sum + 'px';
for (let k = 0; k < news_bg_box_num.length; k++) {
    news_bg_box_num[k].style.width = new_bg_width + 'px';//每个背景的宽度
}
// 动态生成按钮
for (let i = 0; i < news_bg_box_num.length; i++) {
    let new_button = document.createElement('a');
    news_button_box.appendChild(new_button);
}
//5s自动轮播
let news_timer_stop = document.querySelector('.wing_news_container');
let news_timer = setInterval(function () {
    news_bg_next.click();
}, 5000)
news_timer_stop.addEventListener('mouseover', function () {
    clearInterval(news_timer);
    news_timer = null;
})
news_timer_stop.addEventListener('mouseout', function () {
    news_timer = setInterval(function () {
        news_bg_next.click();
    }, 5000)
})
//由于在缩放因为自动轮播导致宽度不断变化而出现的背景图偏移问题，所以在视口调整的时候禁用自动轮播
window.addEventListener('resize', function () {
    clearInterval(news_timer);
    news_timer = null;
    news_timer = setInterval(function () {
        news_bg_next.click();
    }, 5000)
})
//点击事件
let news_button_a = news_button_box.querySelectorAll('a');//每一个小圆点
//位移函数
function news_bg_move(target) {
    //news_bg_box.offsetLeft目前元素偏移量 target - new_current需要偏移的份数（跨越图片个数） new_bg_width每一份宽度（每个图片宽度）
    news_bg_box.style.left = news_bg_box.offsetLeft - (target - new_current) * new_bg_width + 'px';
    new_current = target;//修改追踪变量
}
//原点点击
for (let i = 0; i < news_button_a.length; i++) {
    news_button_a[0].className = 'wing_news_now';//初始化
    //添加点击事件
    news_button_a[i].addEventListener('click', function () {
        if (new_current * new_bg_width + news_bg_box.offsetLeft == 0) {//节流阀：判断上一次动画是否结束
            for (let j = 0; j < news_button_a.length; j++) {
                for (let k = 0; k < news_button_a.length; k++) {
                    news_button_a[k].className = '';
                }
                this.className = 'wing_news_now';
            }
            news_bg_move(i);
        }
    })
}
//箭头点击
let news_bg_last = document.querySelector('.wing_news_last');
let news_bg_next = document.querySelector('.wing_news_next');
news_bg_last.addEventListener('click', function () {
    if (new_current * new_bg_width + news_bg_box.offsetLeft == 0) {
        news_button_a[new_current].className = ''
        if (new_current - 1 < 0) {
            news_bg_move(news_bg_box_num.length - 1);
        }
        else {
            news_bg_move(new_current - 1);
        }
        news_button_a[new_current].className = 'wing_news_now';
    }
})
news_bg_next.addEventListener('click', function () {
    if (new_current * new_bg_width + news_bg_box.offsetLeft == 0) {
        news_button_a[new_current].className = ''
        if (new_current + 1 > news_bg_box_num.length - 1) {
            news_bg_move(0);
        }
        else {
            news_bg_move(new_current + 1);
        }
        news_button_a[new_current].className = 'wing_news_now';
    }
})
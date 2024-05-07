let news_bg_box = document.querySelector('.wing_news_bg_box>ul');//背景图片大集合ul
let news_bg_box_num = document.querySelectorAll('.wing_news_bg_box>ul>li');//背景图片li
let news_button_box = document.querySelector('.wing_news_button_chose');//原点集合
new_current = 0;//追踪目前所在的图片
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
//缩放需要实时改变背景宽度
let bg_position = -new_current * new_bg_width;
window.addEventListener('resize', function () {
    clearInterval(news_timer);
    news_timer = null;
    new_bg_width = news_bg_box.parentNode.offsetWidth;
    width_sum = new_bg_width * news_bg_box_num.length;
    news_bg_box.style.width = width_sum + 'px';
    for (let k = 0; k < news_bg_box_num.length; k++) {
        news_bg_box_num[k].style.width = new_bg_width + 'px';//每个背景的宽度
    }
    //还需要改变当前ul的定位
    bg_position = -new_current * new_bg_width;
    // 要先去掉left的动画，不然会因为0.3s的过渡动画不同步
    news_bg_box.style.transition = 'all 0s ease';
    news_bg_box.style.left = bg_position + 'px';
    //恢复动画
    news_bg_box.style.transition = 'all 0.3s ease';
    //恢复定时器
    news_timer = setInterval(function () {
        news_bg_next.click();
    }, 5000);
})
//点击事件
let news_button_a = news_button_box.querySelectorAll('a');//每一个小圆点
//位移函数
function news_bg_move(target) {
    //news_bg_box.offsetLeft目前元素偏移量 target - new_current需要偏移的份数（跨越图片个数） new_bg_width每一份宽度（每个图片宽度）
    news_bg_box.style.left = news_bg_box.offsetLeft - (target - new_current) * new_bg_width + 'px';
    new_current = target;//修改追踪变量
    new_text_change();
}
//文字变化
let new_text = document.querySelector('.wing_news_text');
function new_text_change() {
    // new_text.style.transform = 'translateX(60px)';
    switch (new_current) {
        case 0:
            if (lan_record == 0) {
                new_text.firstElementChild.firstElementChild.innerHTML = '腾讯公布二零二三年全年及第四季业绩';
                new_text.lastElementChild.firstElementChild.innerHTML = '';
                break;
            }
            if (lan_record == 1) {
                new_text.firstElementChild.firstElementChild.innerHTML = 'Tencent Announces 2023 Annual and Fourth Quarter Results';
                new_text.lastElementChild.firstElementChild.innerHTML = '';
                break;
            }
        case 1:
            if (lan_record == 0) {
                new_text.firstElementChild.firstElementChild.innerHTML = '三步打造世界级数字经济中心';
                new_text.lastElementChild.firstElementChild.innerHTML = '多元化、数字化产业是驱动经济增长的重要引擎。';
                break;
            }
            if (lan_record == 1) {
                new_text.firstElementChild.firstElementChild.innerHTML = 'Three Steps to a World-Class Digital Economic Hub';
                new_text.lastElementChild.firstElementChild.innerHTML = 'Diversified, digital-forward industries are key drivers for economic growth.';
                break;
            }
        case 2:
            if (lan_record == 0) {
                new_text.firstElementChild.firstElementChild.innerHTML = '2024年十大科技和应用趋势';
                new_text.lastElementChild.firstElementChild.innerHTML = '腾讯研究院邀请科学家、工程师、学者和其他专家对2024年科技发展趋势作出预测。';
                break;
            }
            if (lan_record == 1) {
                new_text.firstElementChild.firstElementChild.innerHTML = 'The Top 10 Technology Trends in 2024';
                new_text.lastElementChild.firstElementChild.innerHTML = 'Tencent Research Institute has consulted with leading scientists and other experts to compile our annual list of top tech trends. ';
                break;
            }
    }
    new_text.style.animation = 'text_move 0.3s ease normal forwards';
    // new_text.classList.add('wing_news_text_active');
    new_text_timer = setTimeout(function () {
        new_text.style.animation = 'none';
        clearTimeout(new_text_timer);
    }, 300);
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
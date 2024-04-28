let join_bg_box = document.querySelector('.wing_join_bg_box>ul');//背景图片大集合ul
let join_bg_box_num = document.querySelectorAll('.wing_join_bg_box>ul>img');//背景图片li
let join_button_box = document.querySelector('.wing_join_button_chose');//原点集合
let join_current = 0;//追踪目前所在的图片
let join_bg_width = join_bg_box.parentNode.offsetWidth;//获取背景盒子的宽度，即ul外div的宽度,注意，offset获取不带单位
//动态修改盒子宽度
let join_sum = join_bg_width * join_bg_box_num.length;//背景宽度和，即需要设置的ul宽度
join_bg_box.style.width = join_sum + 'px';
for (let k = 0; k < join_bg_box_num.length; k++) {
    join_bg_box_num[k].style.width = join_bg_width + 'px';//每个背景的宽度
}
// 动态生成按钮
for (let i = 0; i < join_bg_box_num.length; i++) {
    let join_button = document.createElement('a');
    join_button_box.appendChild(join_button);
}
//5s自动轮播
let join_timer_stop = document.querySelector('.wing_join_container');
let join_timer = setInterval(function () {
    join_bg_next.click();
}, 5000)
join_timer_stop.addEventListener('mouseover', function () {
    clearInterval(join_timer);
    join_timer = null;
})
join_timer_stop.addEventListener('mouseout', function () {
    join_timer = setInterval(function () {
        join_bg_next.click();
    }, 5000)
})
//由于在缩放因为自动轮播导致宽度不断变化而出现的背景图偏移问题，所以在视口调整的时候禁用自动轮播
//缩放需要实时改变背景宽度
let join_position = -join_current * join_bg_width;
window.addEventListener('resize', function () {
    clearInterval(join_timer);
    join_timer = null;
    join_bg_width = join_bg_box.parentNode.offsetWidth;
    join_sum = join_bg_width * join_bg_box_num.length;
    join_bg_box.style.width = join_sum + 'px';
    for (let k = 0; k < join_bg_box_num.length; k++) {
        join_bg_box_num[k].style.width = join_bg_width + 'px';//每个背景的宽度
    }
    //还需要改变当前ul的定位
    bg_position = -join_current * join_bg_width;
    // 要先去掉left的动画，不然会因为0.3s的过渡动画不同步
    join_bg_box.style.transition = 'all 0s ease';
    join_bg_box.style.left = join_position + 'px';
    console.log(join_bg_box.style.left, join_position);
    //恢复动画
    join_bg_box.style.transition = 'all 0.3s ease';
    //恢复定时器
    join_timer = setInterval(function () {
        join_bg_next.click();
    }, 5000);
})
//点击事件
let join_button_a = join_button_box.querySelectorAll('a');//每一个小圆点
//位移函数
function join_bg_move(target) {
    //news_bg_box.offsetLeft目前元素偏移量 target - new_current需要偏移的份数（跨越图片个数） new_bg_width每一份宽度（每个图片宽度）
    join_bg_box.style.left = join_bg_box.offsetLeft - (target - join_current) * join_bg_width + 'px';
    join_current = target;//修改追踪变量
}
//原点点击
for (let i = 0; i < join_button_a.length; i++) {
    if (join_current * join_bg_width + join_bg_box.offsetLeft == 0) {
        join_button_a[0].className = 'wing_join_now';//初始化
        //添加点击事件
        join_button_a[i].addEventListener('click', function () {
            for (let j = 0; j < join_button_a.length; j++) {
                for (let k = 0; k < join_button_a.length; k++) {
                    join_button_a[k].className = '';
                }
                this.className = 'wing_join_now';
            }
            join_bg_move(i);
        })
    }
}
//箭头点击
let join_bg_last = document.querySelector('.wing_join_last');
let join_bg_next = document.querySelector('.wing_join_next');
join_bg_last.addEventListener('click', function () {
    if (join_current * join_bg_width + join_bg_box.offsetLeft == 0) {
        join_button_a[join_current].className = ''
        if (join_current - 1 < 0) {
            join_bg_move(join_bg_box_num.length - 1);
        }
        else {
            join_bg_move(join_current - 1);
        }
        join_button_a[join_current].className = 'wing_join_now';
    }
})
join_bg_next.addEventListener('click', function () {
    if (join_current * join_bg_width + join_bg_box.offsetLeft == 0) {
        join_button_a[join_current].className = ''
        if (join_current + 1 > join_bg_box_num.length - 1) {
            join_bg_move(0);
        }
        else {
            join_bg_move(join_current + 1);
        }
        join_button_a[join_current].className = 'wing_join_now';
    }
})
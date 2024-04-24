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
//箭头点击
let join_bg_last = document.querySelector('.wing_join_last');
let join_bg_next = document.querySelector('.wing_join_next');
join_bg_last.addEventListener('click', function () {
    join_button_a[join_current].className = ''
    if (join_current - 1 < 0) {
        join_bg_move(join_bg_box_num.length - 1);
    }
    else {
        join_bg_move(join_current - 1);
    }
    join_button_a[join_current].className = 'wing_join_now';
})
join_bg_next.addEventListener('click', function () {
    join_button_a[join_current].className = ''
    if (join_current + 1 > join_bg_box_num.length - 1) {
        join_bg_move(0);
    }
    else {
        join_bg_move(join_current + 1);
    }
    join_button_a[join_current].className = 'wing_join_now';
})
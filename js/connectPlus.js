let connectPlus_current = 0;//记录当前图片
let connectPlus_img = document.querySelectorAll('a[class^="wing_connectPlus_img"]');
let connectPlus_last = document.querySelector('.wing_connnect_arrow_last');
let connectPlus_next = document.querySelector('.wing_connnect_arrow_next');
connectPlus_img[0].classList.add('wing_connectPlus_current');//默认显示第一张
function connectPlus_change(move) {
    connectPlus_img[connectPlus_current].classList.remove('wing_connectPlus_current');//隐藏当前图片
    if (move) {//下一张
        if (connectPlus_current + 1 == connectPlus_img.length) {
            connectPlus_img[0].classList.add('wing_connectPlus_current');
            connectPlus_current = 0;
        }
        else {
            connectPlus_img[connectPlus_current + 1].classList.add('wing_connectPlus_current');
            connectPlus_current++;
        }
    }
    else {//上一张
        if (connectPlus_current == 0) {
            connectPlus_img[connectPlus_img.length - 1].classList.add('wing_connectPlus_current');
            connectPlus_current = connectPlus_img.length - 1;
        }
        else {
            connectPlus_img[connectPlus_current - 1].classList.add('wing_connectPlus_current');
            connectPlus_current--;
        }
    }
}
connectPlus_last.addEventListener('click', function () {
    connectPlus_change(0);
});
connectPlus_next.addEventListener('click', function () {
    connectPlus_change(1);
});
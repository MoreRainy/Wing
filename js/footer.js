let footer_arrow = document.querySelectorAll('.wing_footer_arrow');
for (let i = 0; i < footer_arrow.length; i++) {
    footer_arrow[i].addEventListener('click', function () {
        if (footer_arrow[i].parentNode.offsetHeight == 72) {
            //修改高度
            if (i == 0 || i == 2) {
                footer_arrow[i].parentNode.style.height = '174px';
            }
            else {
                footer_arrow[i].parentNode.style.height = '242px';
            }
            //修改箭头
            footer_arrow[i].firstElementChild.style.transform = 'rotate(-135deg)';
        }
        else {
            //修改高度
            footer_arrow[i].parentNode.style.height = '72px';
            //修改箭头
            footer_arrow[i].firstElementChild.style.transform = 'rotate(45deg)';
        }
    })
}
// 连接板块
// var connect_btn = document.querySelectorAll('.wing_connect_container_nav');
// for (var i in connect_btn.length) {
//     console.log(i);
// }
var connect_1 = document.getElementsByClassName('connect_1');
var connect_2 = document.querySelector('.connect_2');
var connect_3 = document.querySelector('.connect_3');
var connect_content_1 = document.querySelector('.wing_connect_container_content_1');
var connect_content_2 = document.querySelector('.wing_connect_container_content_2');
var connect_content_3 = document.querySelector('.wing_connect_container_content_3');
connect_1.addEventListener('click', function () {
    console.log(1);
    connect_content_1.style.visibility = "visible";
    connect_content_1.className = "test";
    connect_content_2.style.visibility = "hidden";
    connect_content_3.style.visibility = "hidden";
})
connect_1.onclick = function{
    console.log("1");
}
connect_2.addEventListener('click', function () {
    connect_content_2.style.visibility = "visible";
    connect_content_1.style.visibility = "hidden";
    connect_content_3.style.visibility = "hidden";
})

connect_3.addEventListener('click', function () {
    connect_content_3.style.visibility = "visible";
    connect_content_2.style.visibility = "hidden";
    connect_content_1.style.visibility = "hidden";
})
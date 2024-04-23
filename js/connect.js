let connect_nav = document.querySelectorAll('.wing_text_up');
let connect_content = document.querySelectorAll('div[class^="wing_connect_container_content_js"]');
for (let i = 0; i < connect_nav.length; i++) {
    connect_nav[i].addEventListener('mouseover', function () {
        for (var j = 0; j < connect_content.length; j++) {
            connect_content[j].style.display = 'none';
        }
        connect_content[i].style.display = 'block';
    })
}
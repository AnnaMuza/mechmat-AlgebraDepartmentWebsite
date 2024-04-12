window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.matchMedia("(min-width: 480px)").matches) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("header_kaf").style.height = "0";
            document.getElementById("header_list").style = "top: 0;"
            document.getElementById("name").style = "margin-top: 0; opacity: 0;";
            document.getElementById("meh").style = "opacity: 0; transition: all 0.2s ease;";
            document.getElementById("meh_knu").style = "opacity: 0;";
            document.getElementById("lang").style = "opacity: 0; transition: all 0.2s ease;";
            document.getElementById("kaf_logo").style = "opacity: 1;";
        } else {
            document.getElementById("header_kaf").style.height = "100px";
            document.getElementById("header_list").style = "top: 100px;"
            document.getElementById("name").style = "margin-top: 30px; opacity: 1;";
            document.getElementById("meh").style = "opacity: 1; transition: all 0.4s ease; transition-delay: 0.1s;";
            document.getElementById("meh_knu").style = "opacity: 1;";
            document.getElementById("lang").style = "opacity: 1; transition: all 0.4s ease; transition-delay: 0.1s;";
            document.getElementById("kaf_logo").style = "opacity: 0;";
        }
    }
}

document.getElementById("menu_open").onclick = function() {
    document.getElementById("header_list").style.top = "80px";
    document.getElementById("menu_open").style = 'display: none;';
    document.getElementById("menu_close").style = 'display: block;';

};

document.getElementById("menu_close").onclick = function() {
    document.getElementById("header_list").style.top = "-300px";
    document.getElementById("menu_close").style = 'display: none;';
    document.getElementById("menu_open").style = 'display: block;';

};
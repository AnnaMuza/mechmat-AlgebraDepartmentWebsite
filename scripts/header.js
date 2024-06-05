$(document).ready(function () {
  changeTab();
  addEventListener("hashchange", function () {
    changeTab();
  });
});

function redirectToHome() {
  window.location.hash = '#professors';
}

function changeTab() {
  const url = window.location;
  const hash = url.hash;
  const lang = url.href.match(/\/(uk|en)\//)?.[1];
  if (!lang || !hash) redirectToHome();
  $(`a[href="${hash}"]`).css('color', '#fff');
  $('#content').load(`../${lang}/pages/${hash.slice(1)}.html`);
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.matchMedia("(min-width: 480px)").matches) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      $("#header_kaf").height(0);
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
$(document).ready(function () {
  window.onscroll = function() {scrollFunction()};
  changeTab();
  addEventListener("hashchange", function() {
    changeTab();
  });
});

const LANG_REGEX = /\/(uk|en)\//;

function redirectToHome() {
  window.location.hash = '#history';
}

function changeLang(lang) {
  window.location.href = window.location.href.replace(LANG_REGEX, `/${lang}/`);
}

function changeTab() {
  const url = window.location;
  const hash = url.hash;
  const lang = url.href.match(LANG_REGEX)?.[1];
  if (!lang || !hash) redirectToHome();
  const altLang = lang === 'en' ? 'uk' : 'en';
  const langButton = $(`#lang_${altLang}`);
  langButton.click(function() {changeLang(altLang)});
  langButton.css('cursor', 'pointer');
  const folder = (hash.match(/-/g) || []).length === 2 ? 'cv' : 'pages';
  $('#navbar a').css('color', '');
  $(`a[href="${folder === 'cv' ? '#professors' : hash}"]`).css('color', '#fff');
  $('#content').load(`../${lang}/${folder}/${hash.slice(1)}.html`);
  window.scrollTo(0, 0);
}

function scrollFunction() {
  if (window.matchMedia('(min-width: 480px)').matches) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      $("#header_kaf").height(0);
      $("#header_list").css({top: 0});
      $("#name").css({marginTop: 0, opacity: 0});
      $("#meh").css({opacity: 0, transition: "all 0.2s ease"});
      $("#meh_knu").css({opacity: 0});
      $("#lang").css({opacity: 0, transition: "all 0.2s ease"});
      $("#kaf_logo").css({opacity: 1});
    } else {
      $("#header_kaf").css({height: "100px"});
      $("#header_list").css({top: "100px"});
      $("#name").css({marginTop: "30px", opacity: 1});
      $("#meh").css({opacity: 1, transition: "all 0.4s ease", transitionDelay: "0.1s"});
      $("#meh_knu").css({opacity: 1});
      $("#lang").css({opacity: 1, transition: "all 0.4s ease", transitionDelay: "0.1s"});
      $("#kaf_logo").css({opacity: 0});
    }
  }
}

$("#menu_open").click(function() {
  $("#header_list").css({top: "80px"});
  $("#menu_open").css({display: 'none'});
  $("#menu_close").css({display: 'block'});
});

$("#menu_close").click(function() {
  $("#header_list").css({top: "-300px"});
  $("#menu_close").css({display: 'none'});
  $("#menu_open").css({display: 'block'});
});

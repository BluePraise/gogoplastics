$(document).ready((function(){feather.replace(),$(".page-title").addClass("animated fadeInUp"),$(".flexslider").flexslider({animation:"slide",controlNav:!1}),window.onscroll=function(){c()};var e=document.querySelector(".site-header"),o=e.offsetTop;function c(){window.pageYOffset>o?e.classList.add("sticky"):e.classList.remove("sticky")}c(),$(".hamburger").on("click",(function(){$(e).toggleClass("show-menu")}))})),$(window).on("load",(function(){try{"1"!=localStorage.getItem("cookie-enable")&&setTimeout((function(){$(".cc-window").removeClass("cc-invisible")}),500),$(".cc-dismiss").click((function(){$(this).closest(".cc-window").addClass("cc-invisible"),localStorage.setItem("cookie-enable","1")}))}catch(e){return!1}}));
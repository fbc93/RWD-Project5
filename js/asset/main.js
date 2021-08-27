$(function(){

  var swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      
      // when window width is >= 320px
      768: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      // when window width is >= 320px
      577: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      // when window width is >= 480px
      576: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    }
  });

  $('.text-box').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'video',
        gallery: {
          enabled:false
        }
    });
});

//PLUG-IN : Jarallax JS
$('.jarallax').jarallax({
  speed: 0.2,
  videoPlayOnlyVisible: false,
  videoLazyLoading: false
});

//Bootstrap JS : 스크롤 스파이
$('body').scrollspy({
  target: '#navi',
  offset: 64
});


//네비게이션 클릭-> 해당 컨텐츠로 이동
var menuItem = $('#gnb a, #navi h1 a');

// 스크롤 이동하기위해 만든 : scrollToDiv
function scrollToDiv(element, navHeight) {

  //변수선언: 오프셋값, 오프셋탑 값, 총 스크롤한 값( 탑값 - 네비높이값)
  var offset = element.offset();
  var offsetTop = offset.top
  var totalScroll = offsetTop - navHeight;

  //animate({}) : 메서드를 이용하여 스크롤탑값 : 최종값 , 속도
  $('html, body').animate({
    scrollTop: totalScroll
  }, 800);
}

//클릭시, 해당 영역으로 href를 이용하여 이동
menuItem.click(function (e) {

  //변수선언: 대상의 href값, 한번더 캐싱 => 최종 $(el)
  var el = $(this).attr('href');
  var elWrapped = $(el);

  //위에서 만든 함수 사용
  scrollToDiv(elWrapped, 63);

  //클릭시 a링크 속성 해제하여 번쩍거림 방지
  e.preventDefault();
});

// 스크롤시, 네비게이션 -> 배경, 글색 변화
$(window).scroll(function () {

  //스크롤 탑값 변수선언
  var scrollPos = $(window).scrollTop();

  //스크롤 탑값이 20초과하면...-> fixed클래스
  if (scrollPos > 20) {
    $('#navi').addClass('fixed');
  } else {
    $('#navi').removeClass('fixed');
  }
});

//인트로 스크롤매직

//1. 컨트롤러 생성
var controller = new ScrollMagic.Controller();

//2. 사용할 변수
var introPlay = $('#intro .text-box');


//3. 타임라인
var introT = new TimelineMax();
var introT2 = new TimelineMax();

//4. GSAP : 타임라인동안 동작할 애니메이션

introT.to(introPlay, 1.5, {
  top : 50 + '%',
  opacity : 1
});

introT2.to(introPlay, 1.8, {
  top : 60 + '%',
  opacity : 0
});

//5. 장면설정
var Intro = new ScrollMagic.Scene({
  triggerElement: '#intro',
  triggerHook: 0
  
}).setTween(introT).addTo(controller);

var Intro2 = new ScrollMagic.Scene({
  triggerElement: '#product',
  triggerHook: 0
  
}).setTween(introT2).addTo(controller);


});
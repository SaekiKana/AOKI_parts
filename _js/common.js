//fadeIn
$(function () {
    function animation() {
        $('.fadeInUp').each(function () {
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > target - windowHeight) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    }
    animation();
    $(window).scroll(function () {
        animation();
    });
});

//smooth scroll
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(function(){
  $('.slider').slick({
      autoplay:false,
      autoplaySpeed:5000,
      dots:true,
  });
});

//thumbnail
$(function(){
   $('.cmn-thumbnail__sub01 img').click(function(){
       let $thisImg = $(this).attr('src');
       let $this2xImg = $(this).attr('srcset');
       let $thisAlt = $(this).attr('alt');
       let $mainImg = $(".cmn-thumbnail__main01 img").attr('src');
       let $main2xImg = $(".cmn-thumbnail__main01 img").attr('srcset');
       let $mainAlt = $(".cmn-thumbnail__main01 img").attr('alt');
       $('.cmn-thumbnail__main01 img').hide();
       $('.cmn-thumbnail__main01 img').attr({srcset:$this2xImg,src:$thisImg,alt:$thisAlt}).fadeIn(500);
       $(this).attr({srcset:$main2xImg,src:$mainImg,alt:$mainAlt});
   });
});

$(function(){
   $('.cmn-thumbnail__sub02 img').click(function(){
       let $thisImg = $(this).attr('src');
       let $this2xImg = $(this).attr('srcset');
       let $thisAlt = $(this).attr('alt');
       let $mainImg = $(".cmn-thumbnail__main02 img").attr('src');
       let $main2xImg = $(".cmn-thumbnail__main02 img").attr('srcset');
       let $mainAlt = $(".cmn-thumbnail__main02 img").attr('alt');
       $('.cmn-thumbnail__main02 img').hide();
       $('.cmn-thumbnail__main02 img').attr({srcset:$this2xImg,src:$thisImg,alt:$thisAlt}).fadeIn(500);
       $(this).attr({srcset:$main2xImg,src:$mainImg,alt:$mainAlt});
   });
});

$(function(){
   $('.cmn-thumbnail__sub03 img').click(function(){
       let $thisImg = $(this).attr('src');
       let $this2xImg = $(this).attr('srcset');
       let $thisAlt = $(this).attr('alt');
       let $mainImg = $(".cmn-thumbnail__main03 img").attr('src');
       let $main2xImg = $(".cmn-thumbnail__main03 img").attr('srcset');
       let $mainAlt = $(".cmn-thumbnail__main03 img").attr('alt');
       $('.cmn-thumbnail__main03 img').hide();
       $('.cmn-thumbnail__main03 img').attr({srcset:$this2xImg,src:$thisImg,alt:$thisAlt}).fadeIn(500);
       $(this).attr({srcset:$main2xImg,src:$mainImg,alt:$mainAlt});
   });
});

$(function(){
   $('.cmn-thumbnail__sub04 img').click(function(){
       let $thisImg = $(this).attr('src');
       let $this2xImg = $(this).attr('srcset');
       let $thisAlt = $(this).attr('alt');
       let $mainImg = $(".cmn-thumbnail__main04 img").attr('src');
       let $main2xImg = $(".cmn-thumbnail__main04 img").attr('srcset');
       let $mainAlt = $(".cmn-thumbnail__main04 img").attr('alt');
       $('.cmn-thumbnail__main04 img').hide();
       $('.cmn-thumbnail__main04 img').attr({srcset:$this2xImg,src:$thisImg,alt:$thisAlt}).fadeIn(500);
       $(this).attr({srcset:$main2xImg,src:$mainImg,alt:$mainAlt});
   });
});

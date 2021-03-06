
// preloader
$(window).load(function(){
  console.log( "start" );
    $('.preloader').fadeOut(1000); // set duration in brackets    

    $('#episodes').on( "click", function() {
    console.log( "click" );
    });
});
 
/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#episodes').parallax("100%", 0.3);
    $('#gallery').parallax("100%", 0.2);
    $('#news').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);

  }
  initParallax();

  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  // NIVO LIGHTBOX
  $('#gallery a').nivoLightbox({
        effect: 'fadeScale',
    });

});


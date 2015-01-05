$(document).ready(function() {

  //For image hover effect -- see: http://alijafarian.com/demos/jquery-image-hover-captions/
  $('.standard').hover(
    function(){
      $(this).find('.caption').show();
    },
    function(){
      $(this).find('.caption').hide();
    }
  );
  $('.fade').hover(
    function(){
      $(this).find('.caption').fadeIn(250);
    },
    function(){
      $(this).find('.caption').fadeOut(250);
    }
  );
  $('.slide').hover(
    function(){
      $(this).find('.caption').slideDown(250);
    },
    function(){
      $(this).find('.caption').slideUp(250);
    }
  );
});
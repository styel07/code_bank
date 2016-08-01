$(document).ready(function() {
  // $('.box:first').slideUp(500).delay(1000).slideDown(800);
  $('.box:nth-child(2)').animate({bottom: '200px'}, 500);

  // Index Selectors
  // $('p:lt(2)').css('border', '4px solid red');

  // relationship filters
  // $('.box:empty').css('border', '4px solid red');

  // attribute filter
  // $('p[href$=".co.uk"]').css('border', '4px solid red');
  // $('p[name="stuff"]').css('border', '4px solid red');


  // ATTR Method
  // $('p:first').attr('class', 'not-lead');

  // Class methods
  // if the class is blue then removeClass else dont do anything
  // $('p').toggleClass('blue').removeClass('lead');

  // $('p').on('click', function(){
  //     $(this).toggleClass('blue lead');

  $('p').hover(function() {
      $(this).toggleClass('blue');
  });
  // 
  // });










});

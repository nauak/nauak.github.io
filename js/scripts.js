$(function( ){
    //Empty JS!

    // Closes responsive menu when a scroll trigger link is clicked
  //$('.js-scroll-trigger').click(function() {
  //  $('.navbar-collapse').collapse('hide');
  //});


  //TOP BUTTON APPEARS

  window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 500) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
  };


  //js-scroll-trigger for the button

  $("button.js-scroll-trigger").click(function(){
    $('html,body').animate({
      scrollTop:$(".gallery-container").offset().top //REplace by: "0px"   if is not working
    },"1000", "easeInOutExpo");
    return false})

})
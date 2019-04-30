//This file contains JS to modify the styles and the display of the page (not the functionallity)


// 
//
//  NavBar
//
//


var BotoObert = false; //This variable determines if the button on the menu mobile has been opened

window.onscroll = function() {scrollFunction()};

var firstTimePressed = true;

function scrollFunction() {
    
  //var element = document.getElementsByClassName("nav_scrolled");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    var element = document.getElementById("barraNavegacio");
    element.classList.add("nav_scrolled");
    element.children[0].classList.remove("navbar-brand-notScrolled");
    // To change size of title -> document.getElementsByClass("navbar-brand").style.fontSize = "25px";
  } else if (BotoObert == false){
      //if the buton is closed, then remove the class
    var element = document.getElementById("barraNavegacio");
    element.classList.remove("nav_scrolled");
    element.children[0].classList.add("navbar-brand-notScrolled");
    // document.getElementsByClass("navbar-brand").style.fontSize = "25px";
  } else {} //if the buton is opened don't remove the class, the class will be removed once the button is closed if it's on the top of the page
}

function opaqueNavbar(){
    var element = document.getElementById("barraNavegacio");
    element.classList.add("nav_scrolled");
    element.children[0].classList.remove("navbar-brand-notScrolled");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        //The buton has been opened in the part of the page where the nabvar is already opaque
    }
    else if (BotoObert == true ){
        //the buton has been closed (becase it's open and we have clicked on it) on the top of the page, so hide!
        var element = document.getElementById("barraNavegacio");
        element.classList.remove("nav_scrolled");
        element.children[0].classList.add("navbar-brand-notScrolled");
        
    } else {
        //the buton has been closed in the bottom of the page, so don't remove the scrolled class!
    };
    
    BotoObert = !BotoObert; //on the click the button changes from opened to closed or viceversa

    // simplified (not tested):
    // if ((document.body.scrollTop < 80 || document.documentElement.scrollTop < 80)) && (BotoObert == true){ 
    //    var element = document.getElementById("barraNavegacio");
    //    element.classList.remove("nav_scrolled");
    //}
}
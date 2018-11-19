// SOme notes:

// The day is set on 12-03 to test some features

// ToDO:
// you can preview today's picture before clicking. could be solved using addevents which are shown on event list, click, baggete box.
// Add p tags onclick and for the last days, not for the other.

var today = new Date();
var dd = today.getDate();
if (dd < 10){
    dd = "0" + dd 
};
var mm = today.getMonth() + 1; //get month returns the month beeing 0-January, 1-February, etc. until 11-December.
today = mm + "-" + dd;
today = "12-03";
mm = 12;

for (i=1; i<=31;i++){
    if (i < 10){
        i = "0" + i 
    }; //adding a 0 in case date is between 12-1 and 12-9

    var daycounter = mm + "-" + i;

    if (daycounter < today){
      var alreadyopened = document.getElementById(daycounter);
      alreadyopened.setAttribute("href","images/" + daycounter + ".jpg"); //introduces de right href of the image of the day
      alreadyopened.firstElementChild.setAttribute("src","images/" + daycounter + ".jpg");
    };

    if (mm == "12" && daycounter == today){
        //Only activate if it's december.
      
      var textnotseen = document.getElementById(daycounter).nextElementSibling.childNodes[3].innerHTML;

      var todayopened = document.getElementById(daycounter);

      document.getElementById(daycounter).nextElementSibling.childNodes[3].innerHTML = "";

      //todayopened.setAttribute("href","");
      
      todayopened.onclick = function(e){  //Important canviar tots els daycounter per today perque el daycounter ja ha arribat al final del loop quan es fa click.
        //e.preventDefault();
        document.getElementById(today).nextElementSibling.childNodes[3].innerHTML = textnotseen;
        todayopened.setAttribute("href","images/" + today + ".jpg"); //introduces de right href of the image of the day 
        //This new link should be added, but before it is clicked or executed the onclick!
        todayopened.firstElementChild.setAttribute("src","images/" + today + ".jpg");
        todayopened.setAttribute("href","images/" + today + ".jpg"); //introduces de right href of the image of the day 
        //baguetteBox.run('.tz-gallery');
        //setTimeout(function(url) { document.dispatchEvent("a#12-03.lightbox"); }, 5000, this.href);
      };
    };

    if (daycounter > today){
        //Invalidate the links when it's not yet the day.
        var notyetopened = document.getElementById(daycounter); //Takes as a variable the elements that shouldn't be opened yet because it's not the day.
        notyetopened.onclick = function(){ return false; };     //Invalidates any action when clicking this elements.
        notyetopened.setAttribute("href","");                   //It makes its href to be empty, otherwise you could see the image by sliding when whaching other images
        notyetopened.style = "cursor: default; pointer-events: none;"; //It makes the cursor look normal, not like in an link element. Pointer-events does nothing because return false already does it.

        notyetopened.childNodes.nodeValue = "";
        document.getElementById(daycounter).nextElementSibling.childNodes[3].innerHTML = "";
    };
}


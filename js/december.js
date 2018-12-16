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
//today = "12-15"
mm = 12;

for (i=1; i<=31;i++){
    if (i < 10){
        i = "0" + i 
    }; //adding a 0 in case date is between 12-1 and 12-9

    var daycounter = mm + "-" + i;
    
    if (daycounter < today && daycounter != "12-15"){
      var alreadyopened = document.getElementById(daycounter);
      alreadyopened.setAttribute("href","images/" + daycounter + ".jpg"); //introduces de right href of the image of the day
      alreadyopened.firstElementChild.setAttribute("src","images/" + daycounter + ".jpg");
    };

    if (daycounter == "12-15" && today != "12-15"){
        console.log("now executing");
            var alreadyopened = document.getElementById(daycounter);
            alreadyopened.firstElementChild.setAttribute("src","images/" + "12-15" + ".mp4");//introduces de right href of the image of the day

    }

    if (mm == "12" && daycounter == today && daycounter != "12-15"){
        //Only activate if it's december.
      
      var textnotseen = document.getElementById(daycounter).nextElementSibling.childNodes[3].innerHTML;

      var todayopened = document.getElementById(daycounter);

      document.getElementById(daycounter).nextElementSibling.childNodes[3].innerHTML = "";
      todayopened.setAttribute("href","images/" + daycounter + ".jpg");
      //console.log( todayopened.childNodes.nodeValue);
      //todayopened.childNodes.nodeValue = "";
//images/" + today + ".jpg
      //todayopened.setAttribute("href","");
      //todayopened.addEventListener("click",prova);
      //todayopened.removeEventListener("click",a#12-03.lightbox);


      //Insert the number of date:
      
      var today_day = i;
      if (today_day < 10){
          today_day = today_day.charAt(1);
      }; //Getting rid of double single numbers (06, 07, etc.)
      var node = document.createElement("SPAN");
      var textnode = document.createTextNode(today_day);
      node.appendChild(textnode);
      node.classList.add("daynumb", "christmas1")
      document.getElementById(daycounter).appendChild(node);


      todayopened.onclick = function(e){  //Important canviar tots els daycounter per today perque el daycounter ja ha arribat al final del loop quan es fa click.
        
        document.getElementById(today).nextElementSibling.childNodes[3].innerHTML = textnotseen;
        todayopened.setAttribute("href","images/" + today + ".jpg"); //introduces de right href of the image of the day 
        //This new link should be added, but before it is clicked or executed the onclick!
        todayopened.firstElementChild.setAttribute("src","images/" + today + ".jpg");
        todayopened.setAttribute("href","images/" + today + ".jpg"); //introduces de right href of the image of the day 
        //baguetteBox.run('.tz-gallery');
        //setTimeout(function(url) { document.dispatchEvent("a#12-03.lightbox"); }, 5000, this.href);
        var spantoberemoved = document.getElementById(today).childNodes[3];

        spantoberemoved.parentNode.removeChild(spantoberemoved);


      };

    };

    if (daycounter == "12-15" && daycounter == today ){ //execute only in day 15
        var textnotseen = document.getElementById(daycounter).nextElementSibling.childNodes[3].innerHTML;

        var todayopened = document.getElementById(daycounter);
  
        document.getElementById(daycounter).nextElementSibling.childNodes[3].innerHTML = "";
        //todayopened.setAttribute("href","images/" + daycounter + ".jpg");
        //console.log( todayopened.childNodes.nodeValue);
        //todayopened.childNodes.nodeValue = "";
  //images/" + today + ".jpg
        //todayopened.setAttribute("href","");
        //todayopened.addEventListener("click",prova);
        //todayopened.removeEventListener("click",a#12-03.lightbox);
  
  
        //Insert the number of date:
        
        //var today_day = i;
        //if (today_day < 10){
        //    today_day = today_day.charAt(1);
        //}; //Getting rid of double single numbers (06, 07, etc.)
        //var node = document.createElement("SPAN");
        //var textnode = document.createTextNode(today_day);
        //node.appendChild(textnode);
        //node.classList.add("daynumb", "christmas1")
        //document.getElementById(daycounter).appendChild(node);
  
  
        todayopened.onclick = function(e){  //Important canviar tots els daycounter per today perque el daycounter ja ha arribat al final del loop quan es fa click.
          
          document.getElementById(today).nextElementSibling.childNodes[3].innerHTML = textnotseen;
          todayopened.firstElementChild.setAttribute("src","images/" + "12-15" + ".mp4");
          //baguetteBox.run('.tz-gallery');
          //setTimeout(function(url) { document.dispatchEvent("a#12-03.lightbox"); }, 5000, this.href);
          var spantoberemoved = document.getElementById(today).childNodes[3];
  
          spantoberemoved.parentNode.removeChild(spantoberemoved);
  
  
        };
  
    };

    if (daycounter > today && i < 26){
        //Invalidate the links when it's not yet the day.
        var notyetopened = document.getElementById(daycounter); //Takes as a variable the elements that shouldn't be opened yet because it's not the day.
        notyetopened.onclick = function(){ return false; };     //Invalidates any action when clicking this elements.
        notyetopened.setAttribute("href","");                   //It makes its href to be empty, otherwise you could see the image by sliding when whaching other images
        notyetopened.style = "cursor: default; pointer-events: none;"; //It makes the cursor look normal, not like in an link element. Pointer-events does nothing because return false already does it.
        
        notyetopened.childNodes.nodeValue = ""; //Don't remember what this does. 
        document.getElementById(daycounter).nextElementSibling.childNodes[3].innerHTML = ""; //Hides text in p
        
        //Insert the number of date:
        var future_day = i;
        if (future_day < 10){
           future_day = future_day.charAt(1);
        }; //Getting rid of double single numbers (06, 07, etc.)
        var node = document.createElement("SPAN");
        var textnode = document.createTextNode(future_day);
        node.appendChild(textnode);
        node.classList.add("daynumb", "christmas1")
        document.getElementById(daycounter).appendChild(node);
    };

    if (i > 25){
        //Invalidate the links when it's not yet the day.
        var notyetopened = document.getElementById(daycounter); //Takes as a variable the elements that shouldn't be opened yet because it's not the day.
        notyetopened.onclick = function(){ return false; };     //Invalidates any action when clicking this elements.
        notyetopened.setAttribute("href","");                   //It makes its href to be empty, otherwise you could see the image by sliding when whaching other images
        notyetopened.style = "cursor: default; pointer-events: none;"; //It makes the cursor look normal, not like in an link element. Pointer-events does nothing because return false already does it.
        
        notyetopened.childNodes.nodeValue = ""; //Don't remember what this does. 
        document.getElementById(daycounter).nextElementSibling.childNodes[3].innerHTML = ""; //Hides text in p
    };
};
$(document).ready(function() { 
    var today2 = new Date();
    var dd2 = today2.getDate();
    if (dd2 < 10){
    dd2 = "0" + dd2 
    };
    var mm2 = today2.getMonth() + 1; //get month returns the month beeing 0-January, 1-February, etc. until 11-December.
    today2 = mm2 + "-" + dd2;
    today2 = "12-03";
    
});
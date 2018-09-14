/*eslint-env browser*/
//document.getElementById("checkIn").onclick = displayDate;


//This gets the full time. I'm trying to figure out how to get just the hour and minute in a variable
/*var time = new Date();

window.console.log(
    ("0" + time.getHours()).slice(-2)   + ":" + 
    ("0" + time.getMinutes()).slice(-2) + ":" + 
    ("0" + time.getSeconds()).slice(-2));
*/

//window.console.log(time);

//name is a placeholder value. It will be updated to pull from the text the user types in the name form
//var name = "Ben Sevcik";

//When the Check In button is clicked this will alert the user
//alert("Thank you "+ name + " for checking in at "+ time);


/*window.addEventListener('load',
    function() {
    alert('the dom is fully loaded')
}    
                       );
*/

document.getElementById("checkIn").addEventListener("click",
    function () {
        "use strict";
        var time = new Date();
        var timeNow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
       
        var name = document.getElementById("nameTyped").value;

        document.getElementById("checkedIn").innerHTML += "<br>" + name + " " + timeNow;
        
        document.getElementById("nameTyped").value = "";
    }
                                                   );

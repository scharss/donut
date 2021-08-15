/*
Developer
https://scharss.github.io
*/
$(document).ready(function() {

    var config = {

    };

    firebase.initializeApp(config);

    var database = firebase.database();

});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var acc = document.getElementsByClassName("accordion");
var i;
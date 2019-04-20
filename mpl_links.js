"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Mackenzie Baker
   Date:   4.18.2019
   
   Filename: mpl_links.js

*/
/* ---------------------------------------------------------------------------------------------------------- */

window.addEventListener("load", function () {
    var allSelect = document.forms.govLinks;

    for (var i = 0; i < allSelect.length; i++) {
        allSelect[i].onchange = function (e) {
            document.location.href = e.target.value;
        };
    };
});














/* ---------------------------------------------------------------------------------------------------------- */
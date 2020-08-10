//JS script

"use strict";

window.addEventListener("load", run, false);

function run () {
  var elems = document.querySelectorAll("body *");
  
  var scrollElems = filterElems(elems, "data-animate", "scroll");
  
  //Initial status on page refresh
  (scrollElems.length > 0) ? getPos(scrollElems) : false;
  
  //Window listeners
  window.addEventListener("scroll", function(){getPos(scrollElems);}, false);
}

//Helpers
function filterElems(elems, attribute, data) {
  var arr = [];
  for (var i = 0; i < elems.length; i++) {
    if (elems[i].getAttribute(attribute) === data) {
      arr.push(elems[i]);
    }
  }
  return arr;
}

function getPos(elems) {  
  var elemPos = [];
  var curr = [];
  
  for (var i = 0; i < elems.length; i++) {
    if (window.scrollY) {
      elemPos[i] = elems[i].getBoundingClientRect().top + window.scrollY;
      curr[i] = window.innerHeight + window.scrollY;
    }
    else{
      elemPos[i] = elems[i].getBoundingClientRect().top + document.documentElement.scrollTop;
      curr[i] = window.innerHeight + document.documentElement.scrollTop;
    }
    if (curr[i] > (elemPos[i] + (elems[i].offsetHeight / 4))) {
      addClass(elems[i], "active");
    }
  }
  
}

function addClass (elem, myClass) {
  if (elem.classList) {
    elem.classList.add(myClass);
  }
  else {
    var arr = elem.className.split(" ");
    var i = arr.indexOf(myClass);
    if (i == -1) {
      arr.push(myClass);
      elem.className = arr.join(" ");
    }
  }
}
// window.onscroll = function() {scrollFunction();};
//
// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("home-intro-text").style.display = "none";
//     // document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("home-intro-text").style.display = "block";
//     // document.getElementById("logo").style.fontSize = "35px";
//   }
// }


// When the user scrolls down 80px from the top of the document,
//resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 0px 0px 0px";
    document.getElementById("navbar").style.fontSize = "0.8em";
  } else {
    document.getElementById("navbar").style.padding = "60px 0px 10px 0px";
    document.getElementById("navbar").style.fontSize = "1em";
  }
}

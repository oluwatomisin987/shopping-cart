/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "230px";

}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";

}









// modal

var modal = document.getElementById("myModal");



var img = document.getElementsByClassName("big-shoe");
var modalImg = document.getElementsByClassName("big-shoee");



 function  press (){
  modal.style.display = "block";
  modalImg.src = this.src;
}




// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() { 
//   modal.style.display = "none";
// }
















// function openModal() {
//   document.getElementById("myModal").style.display = "block";
// }

// function closeModal() {
//   document.getElementById("myModal").style.display = "none";
// }


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

















// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlidee(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");

//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }
























// button increment anmd decrement


// function increment() {

// var data =  (document.getElementById("counting").textContent);
// data++
// document.getElementById("counting").textContent = data
// }


// //creation of decrement function
// function decrement() {

//   var data =  (document.getElementById("counting").textContent);
//   data--
//   document.getElementById("counting").textContent = data

//   if (data < 0 ){
//     document.getElementById ("counting").textContent = 0
//   }
// }







document.getElementsByClassName(".plus").addEventListener("click", function () {
  let data = 0;
  data = Number(document.getElementById(".counting").textContent);
  data++;

  document.getElementById(".counting").textContent = data;
});




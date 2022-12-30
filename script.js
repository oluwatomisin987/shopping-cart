/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "230px";

}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";

}









modal

var modal = document.getElementById("myModal");


var img = document.getElementsByClassName("big-shoe");
var modalImg = document.getElementsByClassName("big-shoee");



 function  press (){
  modal.style.display = "block";
  modalImg.src = this.src;
}













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

}







































































document.querySelector(".plus").addEventListener("click", function () {

  data = Number(document.querySelector(".counting").textContent);
  data++;

  document.querySelector(".counting").textContent = data;

  // data = Number(document.querySelector(".count").textContent);
  // data++;
  // document.querySelector(".count").textContent = data;

  //  dropdown cart info
  data = Number(document.querySelector(".itemsquantity").textContent);
  data++;
  document.querySelector(".itemsquantity").textContent = data;
});


document.querySelector(".minus").addEventListener("click", function () {
  data = Number(document.querySelector(".counting").textContent);
  data--

  document.querySelector(".counting").textContent = data;

 if (data < 0) {
   document.querySelector(".counting").textContent = 0;
 }

 
  // data = Number(document.querySelector(".count").textContent);
  // data--;
  // document.querySelector(".count").textContent = data;


//  dropdown cart info 
     data = Number(document.querySelector(".itemsquantity").textContent);
     data--;
     document.querySelector(".itemsquantity").textContent = data;

       
 if (data < 0) {
   document.querySelector(".itemsquantity").textContent = 0;
 }


  
 if (data < 0) {
   document.querySelector(".count").textContent = 0;
 }


});






document.querySelector ('.add-to-cart-btn').addEventListener('click', function(){
  let amount = 125;

  // let dat = Number();
  total = amount * data;

  document.querySelector(".count").textContent = data;

  amount = document.querySelector(".itemprice").textContent = amount;

  total = document.querySelector(".total").textContent = total;


  // display count up
   const countBoard = document.querySelector(".count");

   countBoard.style.display = "block";
})



 





document.querySelector ('.cart-imgg').addEventListener ('click',  function() {     

  let cartNumber = Number(document.querySelector('.count').textContent);

  if (cartNumber === 0) {
    // document.querySelector(".h3-3").textContent;
    // document.querySelector(".hiddenn-empty").style.display = "block";

    // let message = "Your cart is empty";
    // document.getElementById("cart-message").style.visibility = "visible";
    // document.querySelector("#cart-message").textContent = message;
    // document.getElementById("cart-message").style.fontFamily = "kumbh sans";
    // document.getElementById("cart-message").style.fontWeight = "700";
    // document.getElementById("cart-message").style.fontSize = "12px";
    // document.getElementById("cart-message").style.textAlign = "center";
    
    // document.querySelector(".hiddenn-empty").classList.toggle("hiddenn-empty");


       const cartBoardEmpty =document.querySelector ('.cart-board-empty');

 cartBoardEmpty.style.display = 'block';

  } else if (cartNumber > 0) {
    // document.querySelector(".h3-3").textContent;
    // document.querySelector(".h3-3").style.visibility = "visible";

    // document.querySelector(".cart-spacing").textContent;
    // document.querySelector(".cart-spacing").style.visibility = "visible";

    // document.querySelector(".h3-3").classList.toggle("hidden");

    // let numberOfItems = Number(document.querySelector("#p6-span").textContent);
    // const price = 125;
    // let result;
    // if (numberOfItems > 0) {
    //   result = numberOfItems * price;
    //   let output1 = `$${price}.00 x ${numberOfItems} `;
    //   let output2 = `$${result}.00`;

    //   document.querySelector("#price").textContent = output1;
    //   document.querySelector("#bold").textContent = output2;
    // }





     const cartboard = document.querySelector(".cart-board");

 cartboard.style.display = "block";
  }
 }   );




 document.querySelector ('.delete-btn').addEventListener ('click', function(){


       const cartBoardEmpty = document.querySelector(".cart-board-empty");

       cartBoardEmpty.style.display = "block";

       document.querySelector ('.count').style.display = 'none';


 }) 
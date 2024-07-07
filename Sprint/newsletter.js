
$(function(){
$('.one form .btn').on('click',function(){ 
$(this).parents('.one').animate({
top : '-500px'
},500);
    
$(this).parents('.one').siblings('.two').
 animate({
top : '0px'
 },500);
return false;
  });

$('.two .close').on('click',function(){
  $(this).parent().animate({
   top : '-500px'
  },500);
  
  $(this).parent().siblings('.one').animate({
   top : '0px'
  },500);
  return false;
 });
});
// To access the show button element
let showbtn = document.getElementById("showbtn");

// To access the Close button element
let closebtn = document.getElementById("closebtn");

//To access the popup element
let popup = document.querySelector(".popup");
let subp = document.getElementById('sub-p');

// To show the popup on a click
showbtn.addEventListener("click", () => {
  popup.computedStyleMap.display = "block";
  showbtn.style.display = "none";
  document.body.style.backgroundColor = "#09dbd450";
  subp.style.display = "block";
})

var loginbtn = document.getElementById("loginbutton");
loginbtn.addEventListener("click", function (event) {
  event.style.display = "none";
});

/*---
var signupbutton = document.getElementById("loginbutton");
var regbutton = document.getElementById("regbutton");
var registerdivlogin = document.getElementById("registerdiv-login");
var fullbox = document.getElementById("fullbox");
var loginaccount = document.getElementById("loginaccount");
loginaccount.addEventListener("click", function () {
  fullbox.style.display = "block";
  loginbutton1.style.display = "none";
});
signupbutton.addEventListener("click", function () {
  loginbutton1.style.display = "block";

  fullbox.style.display = "none";
});
regbutton.addEventListener("click", function () {
  loginbutton1.style.display = "none";
  registerbutton.style.display = "block";
});
registerdivlogin.addEventListener("click", function () {
  loginbutton1.style.display = "block";
  registerbutton.style.display = "none";
});
var registerbuttondiv = document.querySelector(".registerbtn");
registerbuttondiv.addEventListener("click", function () {
  loginbutton1.style.display = "block";
  registerbutton.style.display = "none";
});
*/
var sidebarconrol = document.querySelector(".sidebar");
var closebar = document.querySelector(".closebar");
closebar.addEventListener("click", function () {
  sidebarconrol.style.display = "none";
});
var menubar = document.querySelector(".menubar");
menubar.addEventListener("click", function () {
  sidebarconrol.style.display = "block";
});



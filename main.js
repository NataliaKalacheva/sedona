(function() {
  /*burger menu*/
  let navBtn = document.querySelector(".nav-toggle");
  let navMenu = document.querySelector(".navbar-list");

  navBtn.addEventListener("click", function() {
    navBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
})(); //main

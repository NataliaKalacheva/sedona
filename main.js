(function() {
  /*burger menu*/
  let navBtn = document.querySelector(".nav-toggle");
  let navMenu = document.querySelector(".navbar-list");

  navBtn.addEventListener("click", function() {
    navBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    closeMenu();
  });
  function closeMenu() {
    document.body.addEventListener("click", function(e) {
      if (!e.target.closest(".navbar")) {
        navMenu.classList.remove("active");
        navBtn.classList.remove("active");
      }
    });
  }
})(); //main

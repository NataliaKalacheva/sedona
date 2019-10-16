(function() {
  /*burger menu*/
  let navBtn = document.querySelector(".nav-toggle");
  let navMenu = document.querySelector(".navbar-list");

  navBtn.addEventListener("click", function() {
    toggleMenu();
    closeMenu();
  });

  function toggleMenu() {
    navBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeMenu() {
    document.addEventListener("click", function(e) {
      if (!e.target.closest(".navbar")) {
        toggleMenu();
      }
    });
  }
})(); //main

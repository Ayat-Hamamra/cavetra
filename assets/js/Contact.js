window.onscroll = function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 2) {
      navbar.classList.add("navscroll");
    } else {
        navbar.classList.remove("navscroll");
    }
  };
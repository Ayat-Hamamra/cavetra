window.onscroll = function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 2) {
    navbar.classList.add("navscroll");
  } else {
    navbar.classList.remove("navscroll");
  }
};

const imgs = [
  "./assets/img/Gallery/g1.jpg",
  "./assets/img/Gallery/g2.jpg",
  "./assets/img/Gallery/g3.jpg",
  "./assets/img/Gallery/g4.jpg",
  "./assets/img/Gallery/g5.jpg",
  "./assets/img/Gallery/g6.jpg",
  "./assets/img/Gallery/g7.jpg",
  "./assets/img/Gallery/g8.jpg",
  "./assets/img/Gallery/g9.jpg",
  "./assets/img/Gallery/g10.jpg",
  "./assets/img/Gallery/g11.jpg",
  "./assets/img/Gallery/g12.jpg",
];
let result = ``;
for (let i = 0; i < imgs.length; i++) {
  result += ` <div class="col">
          <div class="card">

          <img src="${imgs[i]}" class=" image card-img-top" alt="error">
           <div class="middle">
    <div class="text"><i class="fa-solid fa-eye" style="color: #fff;"></i></div>
  </div> 
          </div>
          </div>`;
}
document.querySelector(".row").innerHTML += result;
let slide=``
for (let i = 1; i < imgs.length; i++) {
  slide += ` 
  <div class="carousel-item ">
                <img src="${imgs[i]}" class="d-block w-100" alt="error">
              </div>`;
}
document.querySelector(" .carousel-inner").innerHTML += slide;

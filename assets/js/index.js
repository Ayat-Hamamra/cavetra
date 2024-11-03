window.onscroll = function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 2) {
      navbar.classList.add("navscroll");
    } else {
        navbar.classList.remove("navscroll");
    }
  };



  const imgs = [
    {
      src: "./assets/img/home/h1.jpg",
      titil: "Lunch Menu",
      description:" Aliquip periculis signiferumque est ea, dictas volutpat cu qui. Sea iisque offendit expetendis",
    },
    {
      src: "./assets/img/home/h2.jpg",
      titil: "Dinner Menu",
      description:" Aliquip periculis signiferumque est ea, dictas volutpat cu qui. Sea iisque offendit expetendis",
    },
  
    {
      src: "./assets/img/home/h3.jpg",
      titil: "Delivery Menu",
      description:" Aliquip periculis signiferumque est ea, dictas volutpat cu qui. Sea iisque offendit expetendis",
    },
    {
      src: "./assets/img/home/h4.jpg",
      titil: "Dessert Menu",
      description:" Aliquip periculis signiferumque est ea, dictas volutpat cu qui. Sea iisque offendit expetendis",
    },
    {
      src: "./assets/img/home/h5.jpg",
      titil: "Happy Hours",
      description:" Aliquip periculis signiferumque est ea, dictas volutpat cu qui. Sea iisque offendit expetendis",
    },
   
  ];



  let result = ``;
for (let i = 0; i < imgs.length; i++) {
  result += `<div class="col p-3">
          <div class="card  border-white  text-center d-flex  justify-content-center align-items-center py-3">
            <img src="${imgs[i].src}" class="card-img-top rounded-circle w-50 h-50 " alt="error">
            <div class="card-body   ">
              <h2 class="card-title py-3">${imgs[i].titil}</h2>
              <p class="card-text">${imgs[i].description}</p>
            </div>
          </div>
        </div> `;
}
document.querySelector(".menue").innerHTML += result;


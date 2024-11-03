window.onscroll = function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 2) {
    navbar.classList.add("navscroll");
  } else {
    navbar.classList.remove("navscroll");
  }
};

const Blog = [
  {
    src: "./assets/img/Blog/g1.jpg",
    date: "March 14, 2021-Food Recipes",
    titil: "Chef New Summer Dish",
    description:
      "Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit ...",
  },
  {
    src: "./assets/img/Blog/g6.jpg",
    date: "March 13, 2021-Food",
    titil: "Realm of the Spirit Whisky",
    description:
      "Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit ...",
  },
  {
    src: "./assets/img/Blog/g9.jpg",
    date: "March 12, 2021-Recipes",
    titil: "Restaurant Signature Dinner",
    description:
      "Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit ...",
  },

  {
    src: "./assets/img/Blog/g2.jpg",
    date: "March 11, 2021-Desserts",
    titil: "Chocolate Muffins Gift",
    description:
      "Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit ...",
  },
  {
    src: "./assets/img/Blog/g3.jpg",
    date: "March 10, 2021-Desserts Recipes",
    titil: "Royal Yacht Club Cocktail",
    description:
      "Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit ...",
  },
  {
    src: "./assets/img/Blog/g5.jpg",
    date: "March 9, 2021-Italian Recipes",
    titil: "Chicken milanese with spaghetti",
    description:
      "Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit ...",
  },
  {
    src: "./assets/img/Blog/g10.jpg",
    date: "March 8, 2021-Food",
    titil: "Next Level Steak Sandwich",
    description:
      "Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit ...",
  },
  {
    src: "./assets/img/Blog/g7.jpg",
    date: "March 7, 2021-Italian Recipes",
    titil: "Quick Grilled Pizza",
    description:
      "Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit ...",
  },
  {
    src: "./assets/img/Blog/g8.jpg",
    date: "March 5, 2021-Recipes",
    titil: "Corn-and-Ham Risotto",
    description:
      "Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit ...",
  },
];

 

let result = ``;
for (let i = 0; i < Blog.length; i++) {
  result += `<div class="col">
          <div class="card">
            <img src="${Blog[i].src}" class="card-img-top  " alt="...">
            <div class="card-body   ">
              <span class="date "><small>${Blog[i].date}</small></span>
              <h5 class="card-title py-3">${Blog[i].titil}</h5>
              <p class="card-text">${Blog[i].description}</p>
            </div>
          </div>
        </div> `;
}
document.querySelector(".mnue-all").innerHTML += result;






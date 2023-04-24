const burger = document.querySelector(".burger");
nav = document.getElementById("nav");
body = document.querySelector("body");
search = document.querySelector(".search");
menu = document.querySelector(".menu");
menuItems = document.querySelector(".menu-items");
addBtns = document.querySelectorAll(".add");
subBtns = document.querySelectorAll(".remove");
qCounts = document.querySelectorAll(".quantitycount");
buyBtn = document.querySelectorAll(".buy");
lazyImages = document.querySelectorAll('.lazy')

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

body.addEventListener("click", (e) => {
  let clickedEl = e.target;
  if (
    !clickedEl.classList.contains("burger") &&
    !clickedEl.classList.contains("menu-items") &&
    !clickedEl.classList.contains("material-symbols-rounded")
  ) {
    nav.classList.remove("active");
  }
});

search.addEventListener("click", () => {
  search.classList.add("search-toggle");
});

let kangoHat = 0;
qCounts[0].innerHTML = `x${kangoHat}`;

let bearBrick = 0;
qCounts[1].innerHTML = `x${bearBrick}`;

let shirt = 0;
qCounts[2].innerHTML = `x${shirt}`;

for (let i = 0; i < addBtns.length; i++) {
  addBtns[i].addEventListener("click", (e) => {
    let clickedEl = e.target;
    if (clickedEl === addBtns[0]) {
      kangoHat++;
      qCounts[0].innerHTML = `x${kangoHat}`;
    } else if (clickedEl === addBtns[1]) {
      bearBrick++;
      qCounts[1].innerHTML = `x${bearBrick}`;
    } else if (clickedEl === addBtns[2]) {
      shirt++;
      qCounts[2].innerHTML = `x${shirt}`;
    }
  });
}

for (let i = 0; i < subBtns.length; i++) {
  subBtns[i].addEventListener("click", (e) => {
    let clickedEl = e.target;
    if (clickedEl === subBtns[0]) {
      kangoHat--;
      qCounts[0].innerHTML = `x${kangoHat}`;
      if (kangoHat < 1) {
        kangoHat = 0;
        qCounts[0].innerHTML = `x${kangoHat}`;
      }
    } else if (clickedEl === subBtns[1]) {
      bearBrick--;
      qCounts[1].innerHTML = `x${bearBrick}`;
      if (bearBrick < 1) {
        bearBrick = 0;
        qCounts[1].innerHTML = `x${bearBrick}`;
      }
    } else if (clickedEl === subBtns[2]) {
      shirt--;
      qCounts[2].innerHTML = `x${shirt}`;
      if (shirt < 1) {
        shirt = 0;
        qCounts[1].innerHTML = `x${shirt}`;
      }
    }
  });
}

const observer = new IntersectionObserver((entries, observer) =>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img)
    }
  });
});



lazyImages.forEach(img => {
  observer.observe(img);
})

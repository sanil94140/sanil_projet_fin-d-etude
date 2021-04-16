const boutonNavbar = document.querySelector(".barreNav");
const navbarMobile = document.querySelector(".navbar2");
boutonNavbar.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (navbarMobile.style.display === "none") {
    navbarMobile.style.display = "block";
  } else {
    navbarMobile.style.display = "none";
  }
});

const flecheGaucheHomme = document.querySelector(
  ".collection-homme .flecheGauche"
);
const flecheDroiteHomme = document.querySelector(
  ".collection-homme .flecheDroite"
);
const flecheGaucheFemme = document.querySelector(
  ".collection-femme .flecheGauche"
);
const flecheDroiteFemme = document.querySelector(
  ".collection-femme .flecheDroite"
);
const collectionHomme = document.querySelectorAll(".image-homme");
const collectionFemme = document.querySelectorAll(".image-femme");
console.log(collectionHomme.length + "  " + collectionFemme.length);
flecheGaucheHomme.addEventListener("click", (evt) => {
  evt.preventDefault();
  for (let i = 0; i < collectionHomme.length; i++) {
    if (collectionHomme[i].style.display !== "none") {
      if (i == 0) {
        collectionHomme[4].style.display = "block";
        collectionHomme[0].style.display = "none";
        collectionHomme[5].style.display = "block";
        collectionHomme[1].style.display = "none";
        return;
      } else {
        collectionHomme[i - 2].style.display = "block";
        collectionHomme[i].style.display = "none";
        collectionHomme[i - 1].style.display = "block";
        collectionHomme[i + 1].style.display = "none";
        return;
      }
    }
  }
});
flecheDroiteHomme.addEventListener("click", (evt) => {
  evt.preventDefault();
  for (let i = 0; i < collectionHomme.length; i++) {
    if (collectionHomme[i].style.display !== "none") {
      if (i == 4) {
        collectionHomme[0].style.display = "block";
        collectionHomme[4].style.display = "none";
        collectionHomme[1].style.display = "block";
        collectionHomme[5].style.display = "none";
        return;
      } else {
        collectionHomme[i + 2].style.display = "block";
        collectionHomme[i].style.display = "none";
        collectionHomme[i + 3].style.display = "block";
        collectionHomme[i + 1].style.display = "none";
        return;
      }
    }
  }
});
flecheGaucheFemme.addEventListener("click", (evt) => {
  evt.preventDefault();
  for (let i = 0; i < collectionFemme.length; i++) {
    if (collectionFemme[i].style.display !== "none") {
      if (i == 0) {
        collectionFemme[4].style.display = "block";
        collectionFemme[0].style.display = "none";
        collectionFemme[5].style.display = "block";
        collectionFemme[1].style.display = "none";
        return;
      } else {
        collectionFemme[i - 2].style.display = "block";
        collectionFemme[i].style.display = "none";
        collectionFemme[i - 1].style.display = "block";
        collectionFemme[i + 1].style.display = "none";
        return;
      }
    }
  }
});
flecheDroiteFemme.addEventListener("click", (evt) => {
  evt.preventDefault();
  for (let i = 0; i < collectionFemme.length; i++) {
    if (collectionFemme[i].style.display !== "none") {
      if (i == 4) {
        collectionFemme[0].style.display = "block";
        collectionFemme[4].style.display = "none";
        collectionFemme[1].style.display = "block";
        collectionFemme[5].style.display = "none";
        return;
      } else {
        collectionFemme[i + 2].style.display = "block";
        collectionFemme[i].style.display = "none";
        collectionFemme[i + 3].style.display = "block";
        collectionFemme[i + 1].style.display = "none";
        return;
      }
    }
  }
});

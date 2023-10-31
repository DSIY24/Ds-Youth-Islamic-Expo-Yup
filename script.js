var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);

const openModelButtons = document.querySelectorAll("[data-model-target]");
const closeModelButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const model = document.querySelector(button.dataset.modelTarget);
    openModel(model);
  });
});

closeModelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const model = button.closest(".model");
    closeModel(model);
  });
});

function openModel(model) {
  if (model == null) return;
  model.classList.add("active");
  overlay.classList.add("active");
}

function closeModel(model) {
  if (model == null) return;
  model.classList.remove("active");
  overlay.classList.remove("active");
}

const hamburger = document.querySelector(".hamburgerMenu");
const hamburgerNav = document.querySelector(".menu");
const title = document.querySelector(".title");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  hamburgerNav.classList.toggle("active");
  title.classList.toggle("active");
});

window.addEventListener("scroll", slideUp);

function slideUp() {
  var cards = document.querySelectorAll(".reveal");

  for (var i = 0; i < cards.length; i++) {
    var divHeight = window.innerHeight;
    var revealTop = cards[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < divHeight - revealPoint) {
      cards[i].classList.add("active");
    } else {
      cards[i].classList.remove("active");
    }
  }

  var cards = document.querySelectorAll(".reveal1");

  for (var i = 0; i < cards.length; i++) {
    var divHeight = window.innerHeight;
    var revealTop = cards[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < divHeight - revealPoint) {
      cards[i].classList.add("active1");
    } else {
      cards[i].classList.remove("active1");
    }
  }
}

const registration = document.querySelector(".registerHover");
const registrationPopUp = document.querySelector(".registationContainer");

registration.addEventListener("mouseover", function () {
  registrationPopUp.classList.add("active");
});
registration.addEventListener("mouseout", function () {
  registrationPopUp.classList.remove("active");
});

const competition = document.querySelector(".competitionHover");
const competitionPopUp = document.querySelector(".competitionContainer");

competition.addEventListener("mouseover", function () {
  competitionPopUp.classList.add("active");
});
competition.addEventListener("mouseout", function () {
  competitionPopUp.classList.remove("active");
});

const accordion = document.getElementsByClassName("contentBx");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

const alertpopup = document.querySelector(".lunchAlert");
const alertpopupclose = document.getElementById("alertClose");

setTimeout(function () {
  alertpopup.classList.add("active");
}, 2000);

alertpopupclose.addEventListener("click", function () {
  alertpopup.classList.add("remove");
});

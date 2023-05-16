"use strict"

const isMobile = {
  Android: function () {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
      return (
              isMobile.Android()
              || isMobile.BlackBerry()
              || isMobile.iOS()
              || isMobile.Opera()
              || isMobile.Windows()
              );
  },
};


//THEME BLACK_WHITE

function toggleTheme() {
    let body = document.getElementsByTagName("body")[0];
    let header = document.getElementsByTagName("header")[0];
    let menu = document.getElementById("menu");
   
    if (body.classList.contains("dark-theme")) {
     body.classList.remove("dark-theme");
     body.classList.add("light-theme");
     header.style.backgroundColor = "white";
     menu.style.color = "black";
    } else {
     body.classList.remove("light-theme");
     body.classList.add("dark-theme");
     header.style.backgroundColor = "#333";
     menu.style.color = "white";
    }
   }
   
//SCROLL_UP-BUTTON
    window.addEventListener('scroll', function() {
        let btnTop = document.getElementById('btnTop');
     
        if (window.pageYOffset > 200) {
        btnTop.style.display = 'block';
        } else {
        btnTop.style.display = 'none';
        }
    });
    let btnTop = document.getElementById('btnTop');

        btnTop.addEventListener('click', function() {
            window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

//--------BURGER-MENU--------//

const burgerMenu = document.querySelector('.header__menu__hamburger');
const menuBody = document.querySelector ('.nav__menu__list');
  if(burgerMenu) {
    burgerMenu.addEventListener('click', function(e) {
      document.body.classList.toggle('_lock');
      burgerMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
  }
  function onMenuLinkClick(e) {
    if (burgerMenu.classList.contains('_active')) {
      document.body.classList.remove('_lock');
      burgerMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
      }
    }
    
const menuLinks = document.querySelectorAll('.nav__menu__link');
if(menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });
}
 

//DATA CHANGE

function getDayInfo(dateString) {
    const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const monthsOfYear = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const weekOfYear = Math.ceil((date.getDate() + 6 - date.getDay()) / 7);
    const monthOfYear = monthsOfYear[date.getMonth()];
    const year = date.getFullYear();
    
    return `${dayOfWeek}, ${weekOfYear} неделя ${monthOfYear} ${year} года`;
  }
  const dateElements = document.querySelectorAll(".date");
  for (let i = 0; i < dateElements.length; i++) {
    const date = dateElements[i].innerHTML;
    const formattedDate = getDayInfo(date);
    dateElements[i].innerHTML = `Дата добавления: ${formattedDate}`;
  }


//*----MODAL WINDOW__BUY FISH-----*/

let btns = document.querySelectorAll(".fish__card__button");
let modal = document.querySelector(".modalFish");


for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    modal.style.display = "block";
  });
}


let closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});


window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

const confirmBtn = document.querySelector('.confirm-btn');
const successMessage = document.querySelector('.success-message');
confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'none';
    successMessage.style.display = 'block';

    event.target.closest('form').reset();

    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  });



//--PLANTS MODAL WINDOW №2


let btnsPlants = document.querySelectorAll(".plants__card__button");
let modalPlants = document.querySelector(".modalPlants");


for (let i = 0; i < btnsPlants.length; i++) {
  btnsPlants[i].addEventListener("click", function() {
    modalPlants.style.display = "block";
  });
}


let closeBtnsPlants = document.querySelector(".closePlants");
closeBtnsPlants.addEventListener("click", function() {
  modalPlants.style.display = "none";
});


window.addEventListener("click", function(event) {
  if (event.target == modalPlants) {
    modalPlants.style.display = "none";
  }
});

const confirmBtnPlants = document.querySelector('.plantsBuyButton');
const successMessagePlants = document.querySelector('.success-message2');
confirmBtnPlants.addEventListener('click', (event) => {
    event.preventDefault();
    modalPlants.style.display = 'none';
    successMessagePlants.style.display = 'block';

    event.target.closest('form').reset();

    setTimeout(() => {
      successMessagePlants.style.display = 'none';
    }, 3000);
  });



//--AQUARIUMS MODAL WINDOW №3


let btnsAquariums = document.querySelectorAll(".aquariums__card__button");
let modalAquariums = document.querySelector(".modalAquariums");


for (let i = 0; i < btnsAquariums.length; i++) {
  btnsAquariums[i].addEventListener("click", function() {
    modalAquariums.style.display = "block";
  });
}


let closeBtnsAquariums = document.querySelector(".closeAquariums");
closeBtnsAquariums.addEventListener("click", function() {
  modalAquariums.style.display = "none";
});


window.addEventListener("click", function(event) {
  if (event.target == modalAquariums) {
    modalAquariums.style.display = "none";
  }
});

const confirmBtnAquariums = document.querySelector('.aquariumsBuyButton');
const successMessageAquariums = document.querySelector('.success-message3');
confirmBtnAquariums.addEventListener('click', (event) => {
    event.preventDefault();
    modalAquariums.style.display = 'none';
    successMessageAquariums.style.display = 'block';

    event.target.closest('form').reset();

    setTimeout(() => {
      successMessageAquariums.style.display = 'none';
    }, 3000);
  });

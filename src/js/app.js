import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const dropdown = document.querySelector('.header__dropdown');
const content = document.querySelector('.header__dropdown-content');

dropdown.addEventListener('click', ()=>{
    dropdown.classList.toggle('active')
    content.classList.toggle('active')
})

document.addEventListener("DOMContentLoaded", function() {
    var accordionButtons = document.querySelectorAll(".accordion > .accordion__button");

    for (var i = 0; i < accordionButtons.length; i++) {
        accordionButtons[i].addEventListener("click", function() {
            console.log('click');
            if (this.classList.contains("active")) {
                var accordionContent = this.nextElementSibling;
                accordionContent.classList.remove('active')
                this.parentElement.classList.remove('active')
                setTimeout(() => {
                    this.classList.remove("active");
                    accordionContent.style.display = "none";
                }, 300);
            } else {
                var activeButton = document.querySelector(".accordion > .accordion__button.active");
                if (activeButton) {
                    activeButton.parentElement.classList.remove('active')
                    var activeContent = activeButton.nextElementSibling;
                    activeContent.classList.remove('active')
                    setTimeout(() => {
                        activeButton.classList.remove("active");
                        activeContent.style.display = "none";
                    }, 300);
                }
                this.parentElement.classList.add('active')
                this.classList.add("active");
                var content = this.nextElementSibling;
                setTimeout(() => {
                    content.classList.add('active')
                }, 1);
                content.style.display = "block";
                content.style.height = `${content.querySelector('.accordion__content-body').clientHeight}px`
            }
        });
    }
});
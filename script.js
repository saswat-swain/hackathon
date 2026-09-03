const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");


// Mobile Menu

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});



// Subscribe Button

const subscribeBtn = document.getElementById("subscribeBtn");
const email = document.getElementById("email");


subscribeBtn.addEventListener("click", () => {

    if (email.value === "") {

        alert("Please enter your email address!");

    } else {

        alert("Thank you for subscribing!");

        email.value = "";

    }

});



// Brochure Button

const brochureBtn = document.querySelector(".brochure-btn");


brochureBtn.addEventListener("click", () => {

    alert("Brochure download will start soon!");

});



// Chat Button

const chatBtn = document.querySelector(".chat-btn");


chatBtn.addEventListener("click", () => {

    alert("Hello! How can we help you today?");

});
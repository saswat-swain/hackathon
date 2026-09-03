

/* =========================
   MOBILE SIDEBAR
========================= */

const menuBtn = document.getElementById("menuBtn");

const sidebar = document.getElementById("sidebar");

const overlay = document.getElementById("overlay");


if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        sidebar.classList.add("show");

        overlay.classList.add("show");

    });

}


overlay.addEventListener("click", () => {

    sidebar.classList.remove("show");

    overlay.classList.remove("show");

});



/* =========================
   ACTIVE MENU
========================= */

const menuItems = document.querySelectorAll(".sidebar-menu .menu-item");


menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(menu => {

            menu.classList.remove("active");

        });


        item.classList.add("active");

    });

});



/* =========================
   SMOOTH SCROLL
========================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}



/* =========================
   TOAST MESSAGE
========================= */

function showMessage(message) {

    const toast = document.getElementById("toast");

    const toastMessage = document.getElementById("toastMessage");


    toastMessage.textContent = message;


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}



/* =========================
   DELIVERY METHOD
========================= */

function selectDelivery(method) {

    const selfTransport =
        document.getElementById("selfTransport");

    const vehicleTransport =
        document.getElementById("vehicleTransport");


    const selfButton =
        selfTransport.querySelector(".delivery-btn");

    const vehicleButton =
        vehicleTransport.querySelector(".delivery-btn");


    if (method === "self") {

        selfTransport.classList.add("selected");

        vehicleTransport.classList.remove("selected");


        selfButton.textContent = "Selected";

        selfButton.classList.remove("light-btn");


        vehicleButton.textContent = "Book Vehicle";

        vehicleButton.classList.add("light-btn");


        showMessage(
            "Self transport selected successfully!"
        );

    }


    if (method === "vehicle") {

        vehicleTransport.classList.add("selected");

        selfTransport.classList.remove("selected");


        vehicleButton.textContent = "Vehicle Selected";

        vehicleButton.classList.remove("light-btn");


        selfButton.textContent = "Select Self Transport";

        selfButton.classList.add("light-btn");


        showMessage(
            "Centre vehicle booking selected!"
        );

    }

}



/* =========================
   CROP MODAL
========================= */

function showCropForm() {

    document
        .getElementById("cropModal")
        .classList
        .add("show");

}


function closeCropForm() {

    document
        .getElementById("cropModal")
        .classList
        .remove("show");

}



/* =========================
   CROP FORM
========================= */

const cropForm =
    document.getElementById("cropForm");


cropForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const cropName =
        document.getElementById("cropName").value;

    const quantity =
        document.getElementById("cropQuantity").value;


    closeCropForm();


    showMessage(

        cropName +
        " crop with " +
        quantity +
        " quintals added successfully!"

    );


    cropForm.reset();

});



/* =========================
   REFRESH QUEUE
========================= */

const refreshButton =
    document.querySelector(".full-outline-btn");


if (refreshButton) {

    refreshButton.addEventListener("click", () => {

        const queueNumber =
            document.querySelector(".queue-number");


        queueNumber.style.transform = "scale(0.8)";


        setTimeout(() => {

            queueNumber.style.transform = "scale(1)";

            showMessage(
                "Queue information updated successfully!"
            );

        }, 300);

    });

}



/* =========================
   MARK NOTIFICATIONS READ
========================= */

const markReadButton =
    document.querySelector(".text-btn");


if (markReadButton) {

    markReadButton.addEventListener("click", () => {

        const notifications =
            document.querySelectorAll(".notification-item");


        notifications.forEach(notification => {

            notification.classList.remove("unread");

        });


        showMessage(
            "All notifications marked as read!"
        );

    });

}



/* =========================
   CLOSE MODAL ON OUTSIDE CLICK
========================= */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("cropModal");


    if (event.target === modal) {

        closeCropForm();

    }

});



/* =========================
   DEMO LIVE TIME UPDATE
========================= */

setInterval(() => {

    const timeElement =
        document.querySelector(".queue-info-row strong");


    if (timeElement) {

        const currentTime =
            timeElement.textContent;

    }

}, 60000);
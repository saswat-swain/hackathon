const stateSelect = document.getElementById("state");
const districtSelect = document.getElementById("district");
const blockSelect = document.getElementById("block");


// =====================================
// STATE → DISTRICT DATA
// =====================================

const locationData = {

    Odisha: {

        "Kendrapara": [
            "Kendrapara",
            "Pattamundai",
            "Aul",
            "Derabish",
            "Garadpur"
        ],

        "Khordha": [
            "Bhubaneswar",
            "Jatni",
            "Khordha",
            "Begunia",
            "Balipatna"
        ],

        "Cuttack": [
            "Cuttack Sadar",
            "Niali",
            "Salepur",
            "Banki",
            "Athagarh"
        ],

        "Puri": [
            "Puri Sadar",
            "Pipili",
            "Satyabadi",
            "Brahmagiri",
            "Krushnaprasad"
        ]

    },


    "West Bengal": {

        "Kolkata": [
            "Kolkata Block 1",
            "Kolkata Block 2"
        ],

        "Howrah": [
            "Howrah Block",
            "Uluberia"
        ]

    },


    Jharkhand: {

        "Ranchi": [
            "Kanke",
            "Namkum",
            "Ormanjhi"
        ],

        "Dhanbad": [
            "Dhanbad Block",
            "Topchanchi"
        ]

    },


    Bihar: {

        "Patna": [
            "Patna Sadar",
            "Danapur",
            "Maner"
        ],

        "Gaya": [
            "Gaya Block",
            "Tekari"
        ]

    }

};



// =====================================
// STATE CHANGE
// =====================================

stateSelect.addEventListener("change", function () {

    const selectedState = this.value;


    // Reset District

    districtSelect.innerHTML =
        `<option value="">Select District</option>`;


    // Reset Block

    blockSelect.innerHTML =
        `<option value="">Select Block</option>`;


    if (selectedState !== "") {

        const districts =
            Object.keys(locationData[selectedState]);


        districts.forEach(function (district) {

            const option =
                document.createElement("option");

            option.value = district;

            option.textContent = district;

            districtSelect.appendChild(option);

        });

    }

});



// =====================================
// DISTRICT CHANGE
// =====================================

districtSelect.addEventListener("change", function () {

    const selectedState =
        stateSelect.value;

    const selectedDistrict =
        this.value;


    // Reset Block

    blockSelect.innerHTML =
        `<option value="">Select Block</option>`;


    if (
        selectedState !== "" &&
        selectedDistrict !== ""
    ) {

        const blocks =
            locationData[selectedState][selectedDistrict];


        blocks.forEach(function (block) {

            const option =
                document.createElement("option");

            option.value = block;

            option.textContent = block;

            blockSelect.appendChild(option);

        });

    }

});



// =====================================
// FORM LOGIN
// =====================================

const farmerForm =
    document.getElementById("farmerForm");


farmerForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const farmerId =
        document.getElementById("farmerId").value;

    const farmerCode =
        document.getElementById("farmerCode").value;

    const state =
        stateSelect.value;

    const district =
        districtSelect.value;

    const block =
        blockSelect.value;


    if (
        farmerId === "" ||
        farmerCode === "" ||
        state === "" ||
        district === "" ||
        block === ""
    ) {

        alert(
            "Please fill all the required details!"
        );

        return;

    }


    // Show Popup

    document
        .getElementById("popup")
        .classList
        .add("active");


    console.log({

        farmerId,
        state,
        district,
        block

    });

});



// =====================================
// CLOSE POPUP
// =====================================

function closePopup() {

    document
        .getElementById("popup")
        .classList
        .remove("active");


    window.location.href = "../farmer-dashboard/dashboard.html";

}
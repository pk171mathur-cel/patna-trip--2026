/*=========================================================
        PATNA EDUCATIONAL TRIP 2026
             WISDOM EDUCATION CENTER
=========================================================*/

/*========================
        LOADER
=========================*/

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 600);

});

/*========================
     COUNTDOWN TIMER
=========================*/

const tripDate = new Date("September 20, 2026 04:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(() => {

    const now = new Date().getTime();

    const distance = tripDate - now;

    if (distance <= 0) {

        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";

        return;

    }

    days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));

    hours.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    seconds.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);

}, 1000);

/*========================
      POPUP ELEMENTS
=========================*/

const form = document.getElementById("registrationForm");

const popup = document.getElementById("successPopup");

const closePopup = document.querySelector(".close-popup");

const printBtn = document.getElementById("printSlip");
console.log("Sending...");
/*========================
     FORM SUBMIT
=========================*/

form.addEventListener("submit", function (e) {

    e.preventDefault();

    /* Student Details */

    document.getElementById("slipName").innerHTML =
        "<strong>Name :</strong> " +
        document.getElementById("fullname").value;

    document.getElementById("slipFather").innerHTML =
        "<strong>Father's Name :</strong> " +
        document.getElementById("fathername").value;

    document.getElementById("slipMother").innerHTML =
        "<strong>Mother's Name :</strong> " +
        document.getElementById("mothername").value;

    document.getElementById("slipParent").innerHTML =
        "<strong>Parent Name :</strong> " +
        document.getElementById("parentname").value;

    document.getElementById("slipMobile").innerHTML =
        "<strong>Mobile :</strong> " +
        document.getElementById("mobile").value;

    document.getElementById("slipClass").innerHTML =
        "<strong>Class :</strong> " +
        document.getElementById("class").value;

    document.getElementById("slipSchool").innerHTML =
        "<strong>School :</strong> " +
        document.getElementById("school").value;

    document.getElementById("slipPayment").innerHTML =
        "<strong>Payment Mode :</strong> " +
        document.getElementById("paymentmode").value;

    /* Show Popup */

    popup.style.display = "flex";
emailjs.sendForm(
    "service_iasy8qe",
 "template_gnksdcd",
document.getElementById("registrationForm")
          )
    .then(function () {
        console.log("Email sent successfully!");
    })
    .catch(function (error) {
        console.log(error);
      alert("Email Error: " + (error.text || error.message || JSON.stringify(error)));
});
});

/*========================
      CLOSE POPUP
=========================*/

closePopup.addEventListener("click", function () {

    popup.style.display = "none";

});



/*========================
     CLOSE ON OUTSIDE CLICK
=========================*/

window.addEventListener("click", function (e) {

    if (e.target == popup) {

        popup.style.display = "none";

    }

});

/*========================
       PRINT SLIP
=========================*/

printBtn.addEventListener("click", function () {

    document.getElementById("registrationSlip").style.display = "block";

    window.print();

});/*=========================================================
        SMOOTH SCROLL ACTIVE NAVIGATION
=========================================================*/

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

      });



/*=========================================================
        MOBILE NUMBER VALIDATION
=========================================================*/

document.getElementById("mobile").addEventListener("input", function () {

    this.value = this.value.replace(/\D/g, "").slice(0, 10);

});


/*=========================================================
        SCROLL TO TOP ON RELOAD
=========================================================*/

window.onbeforeunload = function () {

    window.scrollTo(0, 0);

};

/*=========================================================
        COPYRIGHT YEAR
=========================================================*/

console.log("Designed & Developed By PK ❤️");
/* ================= EMAILJS ================= */
emailjs.init("qCDsPoHMU4gKRNdKP");
console.log("EmailJS =", emailjs);
console.log("Public Key Test");
/*=========================================================
                END OF SCRIPT
=========================================================*/


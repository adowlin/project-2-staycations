/*jshint esversion: 6 */

$(document).ready(function() {
    
    function darkMode(event) {
        let body = document.body;
        let form = document.getElementsByClassName('form-wrapper')[0];
        body.classList.toggle('body-dark-mode');
        form.classList.toggle('form-dark-mode');
        let darkModeStatus = body.classList.contains('body-dark-mode');
        if (darkModeStatus) {
            sessionStorage.setItem('darkModeActive', 'true'); //saves a value to session storage when dark mode is enabled
        } else {
            sessionStorage.removeItem('darkModeActive'); //removes the saved value from session storage when dark mode is disabled
        }
    }
    let darkModeSwitch = document.getElementById("dark-mode-slider");
    darkModeSwitch.addEventListener("click", darkMode);

    //check if there is already a saved value for dark mode in the session storage (from dark mode being enabled on another page on the site).
    //if there is, simulate a click on the dark mode switch, to automatically enable dark mode on this page too.
    //code to simulate a click event found in example here: https://stackoverflow.com/questions/2381572/how-can-i-trigger-a-javascript-event-click
    if (sessionStorage.getItem('darkModeActive') === "true") {
        darkModeSwitch.click();
    }
});

function sendMail(contactForm) {
    emailjs.send("service_6i30xfe","staycations_l6aihjr", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.textArea.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Your message has been sent! We'll get back to you as soon as possible.");
        },
        function(error) {
            console.log("FAILED", error);
            alert("Message failed to send. Please try again later");
        }
    );

    document.contactForm.reset(); // clears the form data when submitted
    return false; // prevents page reload
}
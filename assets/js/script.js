/*jshint esversion: 6 */

$(document).ready(function() {
    
    function darkMode(event) {
        let body = document.body;
        let form = document.getElementsByClassName('form-wrapper')[0];
        body.classList.toggle('body-dark-mode');
        form.classList.toggle('form-dark-mode');
    }
    let darkModeSwitch = document.getElementById("dark-mode-slider");
    darkModeSwitch.addEventListener("click", darkMode);
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
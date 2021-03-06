$(document).ready(function() {
    
    function darkMode(event) {
        let body = document.body;
        let form = document.getElementsByClassName('form-wrapper')[0];
        body.classList.toggle('body-dark-mode');
        form.classList.toggle('form-dark-mode');
    }
    let darkModeSwitches = document.querySelectorAll(".dark-mode-slider");
    for (var i = 0; i < darkModeSwitches.length; i++) {
        darkModeSwitches[i].addEventListener("click", darkMode);
        console.log(darkModeSwitches);
    }
});

function sendMail(contactForm) {
    emailjs.send("service_6i30xfe","staycations_l6aihjr", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message_body": contactForm.textArea.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    )

    document.contactForm.reset(); // clears the form data when submitted
    return false; // prevents page reload
}
$(document).ready(function() {
    
    function darkMode(event) {
        let body = document.body;
        body.classList.toggle("body-dark-mode");
    }

    let darkModeSwitch = document.getElementById("dark-mode-slider");
    darkModeSwitch.addEventListener('click', darkMode);
});
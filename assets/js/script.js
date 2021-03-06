$(document).ready(function() {
    
    function darkMode(event) {
        let body = document.body;
        let form = document.getElementsByClassName('form-wrapper')[0];
        body.classList.toggle('body-dark-mode');
        form.classList.toggle('form-dark-mode');
    }

    let darkModeSwitch1 = document.getElementById("dark-mode-slider");
    darkModeSwitch1.addEventListener('click', darkMode);

    let darkModeSwitch2 = document.getElementsByClassName("dark-mode-slider")[0];
    darkModeSwitch2.addEventListener('click', darkMode);
});
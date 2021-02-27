$(document).ready(function() {
    
    function darkMode(event) {
        let body = document.body;
        body.classList.toggle("body-dark-mode");
        let darkModeStatus = body.classList.contains("body-dark-mode");
        if (darkModeStatus) {
            map.setMapTypeId("styled_map");
        } else {
            map.setMapTypeId("roadmap");
        };
    }

    let darkModeSwitch1 = document.getElementById("dark-mode-slider");
    darkModeSwitch1.addEventListener('click', darkMode);

    let darkModeSwitch2 = document.getElementsByClassName("dark-mode-slider")[0];
    darkModeSwitch2.addEventListener('click', darkMode);
});
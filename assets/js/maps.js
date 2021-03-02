const irelandBounds = {
    north: 55.6341979462584,
    south: 51.20688339486562,
    west: -11.0302734375,
    east: -5.097656250000001,
};

var geocoder;
var map;
function initialize() {
    // create darkmode styled map variable
    const styledMapType = new google.maps.StyledMapType(
        [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            },
        ],
        { name: "Night Map" }
    );

    // Create a map object, and include the MapTypeIds to add
    // to the map type control.
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(51.89997191094052, -8.470630645751955);
    var mapOptions = {
        center: latlng,
        restriction: {
            latLngBounds: irelandBounds,
            strictBounds: false,
        },
        zoom: 18,
        mapTypeControlOptions: {
            mapTypeIds: ["roadmap", "styled_map"],
        },
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //Associate the styled map with the MapTypeId.
    map.mapTypes.set("styled_map", styledMapType);

    //Toggle darkmode map by changing map mapTypeId
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
}

// geocode location input from search bar - code adapted from Google Developer docs: https://developers.google.com/maps/documentation/javascript/geocoding
function codeLocation() {
    var searchlocation = document.getElementById('map-search').value;
    geocoder.geocode( { componentRestrictions: {country: 'IE', locality: searchlocation}},  function(results, status) {
        if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
        } else {
        alert('Location provided is not supported. Please provide a location in Ireland.');
        }
    });
}
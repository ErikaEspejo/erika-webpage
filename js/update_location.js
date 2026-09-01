function updateCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updateMap);
    } else { 
        window.alert("Este navegador no soporta Geolocalización");
    }
}

function updateMap(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    document.getElementById("locate-map").src = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude}%2C${longitude}&zoom=14&size=500x300&markers=color%3A%23D65F32%7Csize%3Amid%7Clabel%3AP%7C${latitude}%2C${longitude}&key=AIzaSyA65riSCrLQVKPwKZ3FdoaW_AKj6QYcIs0&scale=2`;
}
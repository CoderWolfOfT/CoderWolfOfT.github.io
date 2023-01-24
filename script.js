alert("Welcome to Wolf Web")
alert("Tip: For a better experience open a new tab and in search do chrome://quit")
var x = document.getElementById("Locate");
document.body.style.cursor = "no-drop"
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Error";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

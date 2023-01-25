alert("Welcome to Wolf Web")
alert("Tip: For a better experience open a new tab and in search do chrome://quit")
var x = document.getElementById("Locate");
const date = document.getElementById("Date")
const d = new Date("January, 25,2023 10:17")

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Error";
  }
}
getLocation()
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
showPosition()
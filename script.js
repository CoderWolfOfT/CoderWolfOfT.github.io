alert("Welcome to Wolf Web")
alert("Tip: For a better experience open a new tab and in search do chrome://quit")
var x = document.getElementById("Locate");
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
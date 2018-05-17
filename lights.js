illuminate = (light, color) => {
  clearLights();
  document.getElementById(light).style.backgroundColor = color;
}

clearLights = () => {
  var bulbs = document.getElementsByClassName('bulb');

  for (var i = 0; i < bulbs.length; i++) {
    bulbs[i].style.backgroundColor = "black";
  }
}
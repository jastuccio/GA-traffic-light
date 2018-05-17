illuminate = (light, color) => {
  clearLights();
  document.getElementById(light).style.backgroundColor = color;
}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}
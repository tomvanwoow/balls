function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function spawnball() {
  var ball = document.getElementById("ball");
  ball.style.top = "100px";
}

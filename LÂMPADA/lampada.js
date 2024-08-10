const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function lampOn() {
  if (!IsLampBroken()) {
    lamp.src = "./img/ligada.jpg";
  }
}

function lampOff() {
  if (!IsLampBroken()) {
    lamp.src = "./img/desligada.jpg";
  }
}

function LampBronken() {
  lamp.src = "./img/quebrada.jpg";
}

function IsLampBroken() {
  return lamp.src.indexOf("quebrada") > -1;
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", LampBronken);

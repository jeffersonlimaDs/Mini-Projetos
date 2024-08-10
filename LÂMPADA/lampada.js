const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

// Função para acender a lâmpada.
// Primeiro, verifica se a lâmpada não está quebrada, usando a função IsLampBroken.
// Se a lâmpada não estiver quebrada, a imagem da lâmpada acesa é exibida.

function lampOn() {
  if (!IsLampBroken()) {
    lamp.src = "./img/ligada.jpg";
  }
}

// Função para apagar a lâmpada.
// Primeiro, verifica se a lâmpada não está quebrada, usando a função IsLampBroken.
// Se a lâmpada não estiver quebrada, a imagem da lâmpada apagada é exibida.

function lampOff() {
  if (!IsLampBroken()) {
    lamp.src = "./img/desligada.jpg";
  }
}

// Função para quebrar a lâmpada.
// A imagem da lâmpada quebrada é exibida.

function LampBronken() {
  lamp.src = "./img/quebrada.jpg";
}

// Função para verificar se a lâmpada está quebrada.
// Retorna verdadeiro se a palavra "quebrada" estiver presente no caminho da imagem da lâmpada.

function IsLampBroken() {
  return lamp.src.indexOf("quebrada") > -1;
}
// Adiciona um ouvinte de eventos ao botão "turnOn" para acender a lâmpada ao clicar.

turnOn.addEventListener("click", lampOn);

// Adiciona um ouvinte de eventos ao botão "turnOff" para apagar a lâmpada ao clicar.

turnOff.addEventListener("click", lampOff);

// Adiciona um ouvinte de eventos ao elemento "lamp" para acender a lâmpada ao passar o mouse sobre ela.

lamp.addEventListener("mouseover", lampOn);

// Adiciona um ouvinte de eventos ao elemento "lamp" para apagar a lâmpada ao remover o mouse de cima dela.
lamp.addEventListener("mouseleave", lampOff);

// Adiciona um ouvinte de eventos ao elemento "lamp" para quebrar a lâmpada ao dar um duplo clique.

lamp.addEventListener("dblclick", LampBronken);

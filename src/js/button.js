var buttonNovoEvento = document.getElementById("buttonNovoEvento");
var buttonCancelar = document.getElementById("buttonCancelar");
var novoEvento = document.getElementById("formEventos");
var formEvento = document.getElementById("formNewEvent");
var inputNomeEvento = document.getElementById("reuniaoNome");
var inputDataEvento = document.getElementById("dataEvento");
var inputLocalEvento = document.getElementById("localEvento");

function mostrarNovoEvento() {
  novoEvento.classList.remove("d-none");
}

function cancelarEvento() {
  var cancelarEvento = document.getElementById("formEventos");
  cancelarEvento.classList.add("d-none");
}

function novoEventoValido(nomeEvento, dataEvento, localEvento) {
  /* Validação do evento */
  if (nomeEvento.trim().length === 0) {
    alert("Nome do evento invalido");
    return false;
  }

  /* Validação da hora */
  var timestampEvento = Date.parse(nomeEvento);
  if (isNaN(Date.parse(dataEvento))) {
    alert("Data invalida");
    return false;
  }
  var timestampAtual = new Date().getTime();
  if (timestampEvento <= timestampAtual) {
    alert("Não é possivel marcar eventos para o mesmo dia ou dias no passado ");
    return false;
  }

  /* Validação do local */
  if (localEvento.trim().length === 0) {
    alert("Nome do evento invalido");
    return false;
  }
  return true;
}

function salvarNovoEvento(event) {
  event.preventDefault();
  var nomeEvento = inputNomeEvento.value;
  var dataEvento = inputDataEvento.value;
  var localEvento = inputLocalEvento.value;

  if (novoEventoValido(nomeEvento, dataEvento, localEvento) == true) {
    console.log("Evento Valido");
  } else {
    console.log("Evento não é valido");
  }
}

buttonNovoEvento.addEventListener("click", mostrarNovoEvento);
buttonCancelar.addEventListener("click", cancelarEvento);
formEvento.addEventListener("submit", salvarNovoEvento);

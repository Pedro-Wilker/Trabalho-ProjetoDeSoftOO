var buttonNovoEvento = document.getElementById("buttonNovoEvento");
var buttonCancelar = document.getElementById("buttonCancelar");
var novoEvento = document.getElementById("formEventos");
var formEvento = document.getElementById("formNewEvent");
var inputNomeEvento = document.getElementById("reuniaoNome");
var inputDataEvento = document.getElementById("dataEvento");
var inputLocalEvento = document.getElementById("localEvento");
var messagemErro = document.getElementById("messagemErro");

function mostrarNovoEvento() {
  novoEvento.classList.remove("d-none");
}

function limparNovoEvento() {
  inputNomeEvento.value = "";
  inputDataEvento.value = "";
  inputLocalEvento.value = "";
  inputNomeEvento.classList.remove("is-invalid");
  inputDataEvento.classList.remove("is-invalid");
  inputLocalEvento.classList.remove("is-invalid");
  messagemErro.classList.add("d-none");
  messagemErro.innerText = "";
}

function cancelarEvento() {
  var cancelarEvento = document.getElementById("formEventos");
  cancelarEvento.classList.add("d-none");
  limparNovoEvento();
}

function novoEventoValido(nomeEvento, dataEvento, localEvento) {
  var validacaoOK = true;
  var erro = "";
  /*Validação dos 3*/
  if (
    nomeEvento.trim().length === 0 &&
    localEvento.trim().length === 0 &&
    isNaN(Date.parse(dataEvento))
  ) {
    if (erro.length > 0) {
      erro += "\n";
    }
    erro += "Nada foi inserido";
    inputNomeEvento.classList.add("is-invalid");
    inputDataEvento.classList.add("is-invalid");
    inputLocalEvento.classList.add("is-invalid");
    validacaoOK = false;
  } else {
    inputNomeEvento.classList.remove("is-invalid");
    inputDataEvento.classList.remove("is-invalid");
    inputLocalEvento.classList.remove("is-invalid");
  }

  /* Validação do evento */
  if (nomeEvento.trim().length === 0) {
    inputNomeEvento.classList.add("is-invalid");
    if (erro.length > 0) {
      erro += "\n";
    }
    erro += "Nome invalido";
    validacaoOK = false;
  } else {
    inputNomeEvento.classList.remove("is-invalid");
  }

  /* Validação da hora */
  var timestampEvento = Date.parse(nomeEvento);
  var timestampAtual = new Date().getTime();

  if (isNaN(Date.parse(dataEvento)) || timestampEvento <= timestampAtual) {
    if (erro.length > 0) {
      erro += "\n";
    }
    erro +=
      "A data invalida, a data precisa ser agendada pelo menos 1 dia após o dia atual.";
    inputDataEvento.classList.add("is-invalid");
    validacaoOK = false;
  } else {
    inputDataEvento.classList.remove("is-invalid");
  }

  /* Validação do local */
  if (localEvento.trim().length === 0) {
    if (erro.length > 0) {
      erro += "\n";
    }
    erro += "Local invalido";
    inputLocalEvento.classList.add("is-invalid");
    validacaoOK = false;
  } else {
    inputLocalEvento.classList.remove("is-invalid");
  }

  /* Menssagem de erro */

  if (!validacaoOK) {
    messagemErro.innerText = erro;
    messagemErro.classList.remove("d-none");
  } else {
    messagemErro.classList.add("d-none");
  }
  return validacaoOK;
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

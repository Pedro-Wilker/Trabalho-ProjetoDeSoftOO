var buttonNovoEvento = document.getElementById("buttonNovoEvento");
var buttonCancelar = document.getElementById("buttonCancelar");
var novoEvento = document.getElementById("formEventos");

function mostrarNovoEvento() {
  novoEvento.classList.remove("d-none");
}

function cancelarEvento() {
  var cancelarEvento = document.getElementById("formEventos");
  cancelarEvento.classList.add("d-none");
}

buttonNovoEvento.addEventListener("click", mostrarNovoEvento);
buttonCancelar.addEventListener("click", cancelarEvento);

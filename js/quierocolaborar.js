const tipo = document.getElementById("tipo-colaboracion");

const formDinero = document.getElementById("colaboracion-dinero");
const formTrabajo = document.getElementById("colaboracion-trabajo");
const formDifusion = document.getElementById("colaboracion-difusion");

// OCULTO
function ocultarTodos() {
  formDinero.classList.add("hidden");
  formTrabajo.classList.add("hidden");
  formDifusion.classList.add("hidden");
}


//selector
tipo.addEventListener("change", () => {
  ocultarTodos();

  if (tipo.value === "dinero") {
    formDinero.classList.remove("hidden");
  }

  if (tipo.value === "trabajo") {
    formTrabajo.classList.remove("hidden");
  }

  if (tipo.value === "difusion") {
    formDifusion.classList.remove("hidden");
  }
});

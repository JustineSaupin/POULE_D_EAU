var nombreClics = 0;

function comptage() {
  nombreClics++;
  document.getElementById("nombreClics").textContent = nombreClics;
}

const initComing = () => {
  document.getElementById("boutonClic").addEventListener("click", comptage);
}

export { initComing };

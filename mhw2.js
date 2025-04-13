const img = document.getElementById("slideshow");
const didascalia = document.getElementById("foto");

// Array immagini
const immagini = [
  { src: "https://www.ristorantecracco.it/wp-content/uploads/2018/04/Cracco-m-01-1.jpg",  id: 1 },
  
  { src: "https://www.ristorantecracco.it/wp-content/uploads/2018/04/Cracco-m-03-1.jpg",  id: 2 },
  
  { src: "https://www.ristorantecracco.it/wp-content/uploads/2018/04/Cracco-m-04-1.jpg", id: 3 }
];

let index = 0;

// Funzione per cambiare immagine
function cambiaImmagine() {
  index = (index + 1) % immagini.length;
  const nuova = immagini[index];

  img.src = nuova.src;
  img.setAttribute("data-index", nuova.id);
  img.classList.add("attiva");

  // Mostra didascalia
  didascalia.classList.remove("hidden");
  didascalia.textContent = nuova.testo || "";

  // Effetto visivo temporaneo
  setTimeout(() => {
    img.classList.remove("attiva");
  }, 500);
}

// Aggiunta evento direttamente sull'immagine
img.addEventListener("click", cambiaImmagine);
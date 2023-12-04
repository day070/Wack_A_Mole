const tanah = document.querySelectorAll(".land");
const tikus = document.querySelectorAll(".mole");

let tanahSebelumnya;

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];

  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}

function munculkanTikus() {
  const tRandom = randomTanah(tanah);
  tRandom.classList.add("show");

  setTimeout(() => {
    tRandom.classList.remove("show");
  }, 500);
}

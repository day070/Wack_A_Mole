const tanah = document.querySelectorAll(".tanah");
const tikus = document.querySelectorAll(".tikus");
const papanSkor = document.querySelector(".papanSkor");
const pop = document.getElementById("pop");
const ppn = document.querySelector(".ppn");
const gas = document.querySelector(".mulai");

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];

  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus() {
  const tRandom = randomTanah(tanah);
  const wRandom = randomWaktu(500, 800);
  tRandom.classList.add("show");

  setTimeout(() => {
    tRandom.classList.remove("show");
    if (!selesai) {
      munculkanTikus();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.innerHTML = 0;
  gas.classList.add("none");
  papanSkor.classList.remove("none");
  ppn.classList.remove("none");
  munculkanTikus();
  setTimeout(() => {
    selesai = true;
    gas.classList.remove("none");
    papanSkor.classList.add("none");
    ppn.classList.add("none");
  }, 15000);
}

function pukul() {
  skor++;
  papanSkor.innerHTML = skor;
  pop.play();
}

tikus.forEach((t) => {
  t.addEventListener("click", pukul);
  console.log(this);
});

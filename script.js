const images = [
  "./assets/images/gato1.jpg",
  "./assets/images/gato2.jpg",
  "./assets/images/gato3.jpg",
  "./assets/images/gato4.jpg",
  "./assets/images/gato5.jpg",
  "./assets/images/gato6.jpg",
  "./assets/images/gato7.jpg",
];

// URLs diretas de áudios de gatos (MP3/OGG que funcionam diretamente)
const audios = [
  "https://cdn.freesound.org/previews/634/634277_11861866-lq.mp3",
  "https://cdn.freesound.org/previews/634/634274_11861866-lq.mp3",
  "https://cdn.freesound.org/previews/634/634276_11861866-lq.mp3",
  "https://cdn.freesound.org/previews/138/138562_2538033-lq.mp3",
  "https://cdn.freesound.org/previews/221/221537_3954942-lq.mp3",
  "https://cdn.freesound.org/previews/634/634279_11861866-lq.mp3",
];

const drawButton = document.getElementById("draw-button");
const cardImage = document.getElementById("card-image");
const cardCaption = document.getElementById("card-caption");
const cardAudio = document.getElementById("card-audio");

const starsContainer = document.querySelector(".stars");

const randomItem = (items) => items[Math.floor(Math.random() * items.length)];

const createStars = (count = 45) => {
  for (let i = 0; i < count; i += 1) {
    const star = document.createElement("span");
    star.className = "star";
    const left = Math.random() * 100;
    const duration = 4 + Math.random() * 6;
    const delay = Math.random() * -10;
    const height = 60 + Math.random() * 80;
    star.style.left = `${left}%`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;
    star.style.height = `${height}px`;
    starsContainer.appendChild(star);
  }
};

createStars();

const revealCard = () => {
  const image = randomItem(images);
  const audio = randomItem(audios);

  cardImage.src = image;
  cardImage.alt = "Carta sorteada";
  cardCaption.textContent = "Carta revelada!";

  // Configura e reproduz o áudio automaticamente
  cardAudio.src = audio;
  cardAudio.load(); // Força o carregamento do áudio
  
  // Tenta reproduzir após um pequeno delay para garantir carregamento
  setTimeout(() => {
    cardAudio.play().catch((error) => {
      console.warn("Áudio bloqueado pelo navegador:", error);
      cardCaption.textContent = "Carta revelada! (Áudio pode estar bloqueado pelo navegador)";
    });
  }, 100);
};

drawButton.addEventListener("click", revealCard);

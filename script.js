const images = [
  "./assets/images/gato1.jpg",
  "./assets/images/gato2.jpg",
  "./assets/images/gato3.jpg",
  "./assets/images/gato4.jpg",
  "./assets/images/gato5.jpg",
  "./assets/images/gato6.jpg",
  "./assets/images/gato7.jpg",
];

const audios = [
  "https://www.myinstants.com/pt/instant/gato-riendo-57456/?utm_source=copy&utm_medium=share",
  "https://www.myinstants.com/pt/instant/gato-miando-panico-na-tv/?utm_source=copy&utm_medium=share",
  "https://www.myinstants.com/pt/instant/gato-miau-29437/?utm_source=copy&utm_medium=share",
  "https://www.myinstants.com/pt/instant/gato/?utm_source=copy&utm_medium=share",
  "https://www.myinstants.com/pt/instant/gato-sad-25756/?utm_source=copy&utm_medium=share",
  "https://www.myinstants.com/pt/instant/mu-hehehe-cat-meme-68900/?utm_source=copy&utm_medium=share",
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

  // Reproduz o áudio automaticamente
  cardAudio.src = audio;
  cardAudio.play().catch(() => {
    cardCaption.textContent = "Carta revelada! (O áudio pode não tocar automaticamente neste navegador)";
  });
};

drawButton.addEventListener("click", revealCard);

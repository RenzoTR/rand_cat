const images = [
  "./assets/images/gato1.jpg",
  "./assets/images/gato2.jpg",
  "./assets/images/gato3.jpg",
  "./assets/images/gato4.jpg",
  "./assets/images/gato5.jpg",
  "./assets/images/gato6.jpg",
  "./assets/images/gato7.jpg",
];

// URLs diretas dos MP3 do MyInstants (extraídas das páginas)
const audios = [
  "https://www.myinstants.com/media/sounds/gato-riendo.mp3",
  "https://www.myinstants.com/media/sounds/gato-miando-panico-na-tv.mp3",
  "https://www.myinstants.com/media/sounds/gato-miau.mp3",
  "https://www.myinstants.com/media/sounds/gato_9UAlUDt.mp3",
  "https://www.myinstants.com/media/sounds/gato-sad.mp3",
  "https://www.myinstants.com/media/sounds/mu-hehehe-cat-meme.mp3",
];

const drawButton = document.getElementById("draw-button");
const cardImage = document.getElementById("card-image");
const cardCaption = document.getElementById("card-caption");
let cardAudio = document.getElementById("card-audio");

// Se o elemento de áudio não existir, cria um
if (!cardAudio) {
  cardAudio = new Audio();
  cardAudio.id = "card-audio";
  cardAudio.preload = "auto";
  document.body.appendChild(cardAudio);
}

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

const playAudio = (audioUrl) => {
  // Para qualquer áudio em reprodução
  cardAudio.pause();
  cardAudio.currentTime = 0;
  
  // Define a nova fonte
  cardAudio.src = audioUrl;
  cardAudio.volume = 0.8; // Volume a 80%
  
  // Tenta reproduzir
  const playPromise = cardAudio.play();
  
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        console.log("Áudio reproduzindo com sucesso!");
        cardCaption.textContent = "Carta revelada!";
      })
      .catch((error) => {
        console.warn("Áudio bloqueado:", error);
        cardCaption.textContent = "Carta revelada! (Clique novamente se o áudio não tocar)";
      });
  }
};

const revealCard = () => {
  const image = randomItem(images);
  const audio = randomItem(audios);

  // Atualiza imagem
  cardImage.src = image;
  cardImage.alt = "Carta sorteada";
  
  // Reproduz áudio
  playAudio(audio);
};

// Adiciona o evento ao botão
drawButton.addEventListener("click", revealCard);

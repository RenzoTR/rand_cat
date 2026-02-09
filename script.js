const images = [
  "./assets/images/gato1.jpg",
  "./assets/images/gato2.jpg",
  "./assets/images/gato3.jpg",
  "./assets/images/gato4.jpg",
  "./assets/images/gato5.jpg",
  "./assets/images/gato6.jpg",
  "./assets/images/gato7.jpg",
];

// URLs alternativas de áudios de gatos de diferentes fontes
const audios = [
  // SoundBible - arquivos diretos
  "https://soundbible.com/mp3/Cat_Meow-Cat_Stevens-2034822903.mp3",
  "https://soundbible.com/mp3/Cat Meow 2-Cat Stevens-2034822903.mp3",
  "https://soundbible.com/mp3/Angry_Cat-SoundBible.com-2127166236.mp3",
  // Backup com sons alternativos caso os anteriores falhem
  "https://orangefreesounds.com/wp-content/uploads/2022/04/Cat-meow-sound-effect.mp3",
  "https://orangefreesounds.com/wp-content/uploads/2022/05/Angry-cat-sound-effect.mp3",
  "https://orangefreesounds.com/wp-content/uploads/2022/05/Cute-cat-meow-sound-effect.mp3",
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

const playAudio = async (audioUrl) => {
  try {
    // Limpa o áudio anterior
    cardAudio.pause();
    cardAudio.currentTime = 0;
    
    // Configura novo áudio
    cardAudio.src = audioUrl;
    cardAudio.volume = 0.7; // Volume a 70%
    
    // Aguarda carregar e reproduz
    await cardAudio.load();
    await cardAudio.play();
    
    cardCaption.textContent = "Carta revelada!";
  } catch (error) {
    console.warn("Áudio bloqueado ou erro ao carregar:", error);
    cardCaption.textContent = "Carta revelada! (Áudio pode estar bloqueado)";
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

// Habilita reprodução automática após primeira interação
drawButton.addEventListener("click", revealCard);

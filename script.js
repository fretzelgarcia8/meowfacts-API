const factText = document.getElementById("fact");
const loader = document.getElementById("loader");
const button = document.getElementById("btn");
const h1Title = document.querySelector("h1");

async function getMeowFact() {
  // Show loader, fade out button and title
  loader.classList.remove("hidden");
  button.classList.add("fade");
  h1Title.classList.add("fade");

  factText.classList.add("fade"); // optional: fade fact text as well
  factText.textContent = "";

  try {
    const response = await fetch("https://meowfacts.herokuapp.com/");
    const data = await response.json();
    factText.textContent = data.data[0];
  } catch {
    factText.textContent = "Failed to load a meow fact 🐾";
  }

  // Hide loader, fade back in button and title
  loader.classList.add("hidden");
  button.classList.remove("fade");
  h1Title.classList.remove("fade");
  factText.classList.remove("fade");
}


button.addEventListener("click", async () => {
  await getMeowFact();
});

const audio = document.getElementById("bg-audio");
const audioBtn = document.getElementById("btn-audio");
const audioIcon = audioBtn.querySelector("img");

audioBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    audioIcon.src = "pictures/play.png";
  } else {
    audio.pause();
    audioIcon.src = "pictures/pause.png";
  }
});


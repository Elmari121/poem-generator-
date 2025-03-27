const poemElement = document.querySelector("#poem");
const typewriter = new Typewriter(poemElement, {
  loop: false,
  delay: 50,
});

function displayPoem(response) {
  console.log("Poem generated");
  typewriter.typeString(response.data.answer).pauseFor(500).start();
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apikey = "30927dtfa44b4770359oe8258a9c5b2c";
  let prompt = `user instruction:generate a poem about ${instructionsInput.value}`;
  let context =
    "you are a romantic poem expert and love to write short poems. your mission is to generate a four-line poem. Make sure to follow the user instructions.";
  let apiurl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apikey}`;

  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);
  console.log("Generating poem");

  axios.get(apiurl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

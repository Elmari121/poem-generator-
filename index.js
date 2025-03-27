function displaypoem(response) {
  console.log("poem generated");
  typewriter
    .typeString(response.data.answer)
    .pauseFor(500)

    .pauseFor(500)

    .start();
}
const typewriter = new typewriter(poemElement, {
  loop: false,
  delay: 75,
});
function generatePoem(event) {
  event.preventDefault();
  let instructionsinput = document.querySelector("user-instructions");
  let apikey = "30927dtfa44b4770359oe8258a9c5b2c";
  let prompt = "generate a poem about $(instructionsinput.value)";
  let context = "";
  let apiurl =
    "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}";
  console.log("generating poem");

  axios.get(apiurl).then(displaypoem);
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "";

  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);
}

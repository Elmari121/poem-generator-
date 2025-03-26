function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "";

  const typewriter = new Typewriter(poemElement, {
    loop: false,
    delay: 75,
  });

  typewriter
    .typeString("roses are red")
    .pauseFor(500)
    .typeString("<br>violets are blue")
    .pauseFor(500)
    .typeString("<br>and AI poems are fun!")
    .start();
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

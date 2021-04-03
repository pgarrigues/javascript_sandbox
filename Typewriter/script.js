const txtAnim = document.querySelector("h1");

new Typewriter(txtAnim, {
  deleteSpeed: 20,
})
  .typeString("Hello, c'est Pierre-Loup, ")
  .pauseFor(300)
  .typeString("géomaticien - développeur SIG...")
  .pauseFor(2000)
  .deleteChars(32)
  .typeString("j'aime les cartes.")
  .pauseFor(1000)
  .deleteChars(11)
  .typeString("le développement web.")
  .pauseFor(1000)
  .deleteChars(21)
  .typeString("Python.")
  .pauseFor(1000)
  .deleteChars(7)
  .typeString("JavaScript.")
  .pauseFor(1000)
  .deleteChars(11)
  .typeString("Vue.js.")
  .pauseFor(1000)
  .deleteChars(16)
  .typeString(" ! Bienvenue à tous !")
  .start();

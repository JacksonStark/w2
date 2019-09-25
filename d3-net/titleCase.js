const titleCase = phrase => {
  if (phrase === "") return "";
  let newPhrase = phrase.toLowerCase();
  if (newPhrase.length === 1) return newPhrase.toUpperCase();

  let characters = newPhrase.split("");
  let firstLetter = characters[0].toUpperCase();
  characters.splice(0, 1, firstLetter);

  for (let i = 0; i < characters.length; i++) {
    if (characters[i] === " ") {
      let capital = characters[i + 1].toUpperCase();
      characters.splice(i + 1, 1, capital);
    }
  }

  return characters.join("");
};


// TEST CODE...
console.log(titleCase("this is an example")); // should return "This Is An Example"
console.log(titleCase("test")); // should return "Test"
console.log(titleCase("i r cool")); // should return "I R Cool"
console.log(titleCase("WHAT HAPPENS HERE")); // should return "What Happens Here"
console.log(titleCase("")); // should return ""
console.log(titleCase("a")); // should return "A"

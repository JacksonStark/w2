let symbols = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

let timer = 0;
let increment = 200;
const spinner2 = characters => {
  for (const char of characters) {
    setTimeout(() => {
      process.stdout.write(`\r${char}  `);
    }, timer);
    timer += increment;
  }
  setTimeout(() => {
    process.stdout.write(`\n`)
  }, timer);
};

spinner2(symbols);

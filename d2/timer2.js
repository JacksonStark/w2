// CONFIGURATIONS...
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// BEEP FUNCTION...
const beep = () => {
  process.stdout.write("\x07");
};

// MAIN FUNCTION...
const main = () => {
  stdin.on('data', (key) => {
    if (key === 'b') {
      beep();
    } else if (!isNaN(key)) {
      console.log(`You set an alarm for ${key} seconds.`);
      setTimeout(() => {
        beep();
      }, key * 1000);
    } else if (key === '\u0003') {
      console.log("Thanks for using me, ciao!");
      process.exit();
    }
  });
};

main();

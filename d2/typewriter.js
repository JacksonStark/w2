const sentence = "hello there from lighthouse labs";

let timer = 0;
for (const char of (sentence + '\n')) {
  timer += 100;
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
}
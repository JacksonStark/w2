let input  = process.argv.slice(2);

const timer1 = () => {
  if(input.length === 0){
    return;
  }
  for (const item of input){
    let timer = Number(item) * 1000;
    if(timer < 0 || isNaN(timer)){
      continue;
    }
    setTimeout(() => {
      console.log(timer);
      process.stdout.write('\x07');
    }, timer);
  }
}

timer1();
const encrypt = function(plaintext, key){
  output = '';
  for (let i = 0; i < plaintext.length; i++) {
    if(plaintext[i] === ' ') {
      output += ' ';
    } else {
      let code = plaintext.charCodeAt(i) + key;
      if (code < 97) {
        code = 123 - (97 - code);
      } else if (code > 123) {
        code = 97 + (code - 123);
      }
      let letter = String.fromCharCode(code);
      output += letter;
    }
  }
  return output;
};

module.exports = { encrypt };
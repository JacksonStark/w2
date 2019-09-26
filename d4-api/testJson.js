const jsonString = '{a:1, b:2, foo: "bar"}'
jsonString;

console.log(jsonString);

const obj = JSON.parse(jsonString);

console.log(obj);

const next = JSON.stringify(obj);

console.log(next);
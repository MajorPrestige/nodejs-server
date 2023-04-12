const counter = (number) => {
return () => {
  return number++;
}
}

const conterOne = counter(1);

console.log(conterOne());
console.log(conterOne());
console.log(conterOne());
console.log(conterOne());



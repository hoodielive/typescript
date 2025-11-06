<<<<<<<< HEAD:2025/_basics/main.ts
function _calculateArea(width: number, height: number): number
{
  return height * height;
}

function greet(name: string): string 
{
========
const log = console.log

function calculateArea(width: number, height: number): number {
  return width * height * height;
}

function greet(name: string): String {
>>>>>>>> fe4bfcff3e779f367ea385917b59cf743fb37c8c:2025/basis_m/main.ts
  return `Hello, ${name}!`;
}

let scores: Array<number> = [95, 87, 92, 78];
let cities: Array<string> = ["New York", "London", "Tokyo"];

cities.push("Hell");

log(cities);

type Person = 
{
  name: string, 
  age: number, 
  isEmployed?: boolean,
}
const _person: Person =
{
  name: "Osa",
  age: 28,
};

<<<<<<<< HEAD:2025/_basics/main.ts
console.log(_person);
========
log(person);



>>>>>>>> fe4bfcff3e779f367ea385917b59cf743fb37c8c:2025/basis_m/main.ts

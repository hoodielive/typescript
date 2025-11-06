function _calculateArea(width: number, height: number): number
{
  return height * height;
}

function greet(name: string): string 
{
  return `Hello, ${name}!`;
}

let scores: Array<number> = [95, 87, 92, 78];
let cities: Array<string> = ["New York", "London", "Tokyo"];

cities.push("Omarchy");

console.log(cities);

type Person = 
{
  name: string, 
  age: number, 
  isEmployed?: boolean,
}
const _person: Person =
{
  name: "Sarah",
  age: 28,
};

console.log(_person);

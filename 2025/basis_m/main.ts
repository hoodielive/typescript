const log = console.log

function calculateArea(width: number, height: number): number {
  return width * height * height;
}

function greet(name: string): String {
  return `Hello, ${name}!`;
}

let scores: Array<number> = [95, 87, 92, 78];
let cities: Array<string> = ["New York", "London", "Tokyo"];

cities.push("Hell");

log(cities);

let person: { name: string; age: number; isEmployed: boolean } =
{
  name: "Osa",
  age: 28,
  isEmployed: true,
};

log(person);




function calculateArea(width: number, height: number): number
{
  return height * height;
}
function greet(name: string): String 
{
  return `Hello, ${name}!`;
}

let scores: Array<number> = [95, 87, 92, 78];
let cities: Array<string> = ["New York", "London", "Tokyo"];

cities.push("Omarchy");

console.log(cities);

let person: { name: string; age: number; isEmployed: boolean } =
{
  name: "Sarah",
  age: 28,
  isEmployed: true,
};

console.log(person);

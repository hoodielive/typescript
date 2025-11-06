// Javascript example
let _earth = "Earth"; // This works but the type (here string) is inferred 

let _earth2: String = "Earth"; // This works but it emphatic. 

type Person = 
{ 
  name: string; 
  age: number; 
  isProgrammer?: boolean, 
  friends?: string[],
  address?: {
    street: string,
  }
};

const _person: Person = 
{ 
  name: "Osa", 
  age: 28, 
  isProgrammer: false 
};

console.log(_person);

interface Person1 
{
  name: string; 
  age: number; 
  isProgrammer?: boolean, 
  friends?: string[],
  address?: {
    street: string,
  }
}

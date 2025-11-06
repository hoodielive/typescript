type Person =
{
  name: string;
  age: number | boolean;
  alive: boolean;
}

type Age = Person["age"];

const whoareyou: Age = 44;

console.log(whoareyou)


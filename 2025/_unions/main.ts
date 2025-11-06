// Union modifier - can't do this with a interface, has to be down with a Type 

type Todo = 
{
  name: string,
  status: "Complete" | "Incomplete"  | "Draft",
  isProgrammer?: boolean,
}

const _todo: Todo  = { name: "Laundry", status: "Complete" }

console.log(_todo);

type Person = 
{
  // readonly id: number, // don't allow mutableablity 
  name: string,
  age: number,
}

// Intersections (must to be this type and this type a the same time)
type PersonWithId = Person & { id: string  }

// interface PersonWithId extends Person { id: string }
const _person: PersonWithId = { id: "390248", name: "Osa" , age: 28 }

console.log(_person)

// readonly
type NumbersArray = readonly number[]

const _person3: NumbersArray = [1, 2, 3]

// keyof
const age = getValue("age", { name: "Osa", age: 99 })
console.log(age);

function getValue(key: keyof Person, _person: Person)
{
  return _person[key]
}


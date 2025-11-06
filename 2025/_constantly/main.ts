const _nums = ["1", "2", "3"] as const

const person = 
{
  name: "Osa",
  age: 39,
}

Object.entries(person).forEach(([key, value]) => {
  console.log(key, value)
})

type Tuple = [string, boolean]
const _a: Tuple = ["sdkfr", true]
console.log(_a)



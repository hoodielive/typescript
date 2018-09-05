// string
let myName: string = 'Larry'

// number
let myAge: number = 19

// boolean
let hasHobbies: Boolean = false; 

// assigning a type 
let myRealAge: number; 
myRealAge: 33

// array
let hobbies: any[] = ["coding", "reading"]; 
console.log(typeof hobbies)
hobbies = [100]; 

// tuples 
let address: [string, number] = ["Superstreet", 99]

// enum
enum Color {
    Gray,
    Green,
    Blue,
    Pink = 100, // lol 
}

let myColor: Color = Color.Green;
console.log(myColor);

// any 
let car: any = "BMW";
console.log(car); 
car = { brand: "BMW", series: 3};
console.log(car); 

// functions 
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void 
function sayHello(): void {
  console.log("Hello!");
  // this function should NOT return anything, if you try to coerce it, typescript will fuss at you
}

// argument types 
function multiply(value1: number, value2: number): number { 
  return value1 * value2;
}
console.log(multiply(2, 218))

// function types 
let myMultiply: (val1: number, val2: number) => number; 
// myMultiply = sayHello;
// myMultiply(); 
myMultiply = multiply
console.log(myMultiply(5, 2));

// objects 
//let userData: { name: string, age: number } = 
//  name: "Hood",
//  age: 33,
//};

type Complex = { data: number[], output: (all: boolean) => number[]}; 

// Complex object 
let complex: Complex = { 

    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
      return this.data;  
    }
}


// union types
myRealRealAge: number | string = 29; 
myRealRealAge = 23
console.log(myRealRealAge); 

// Check types 
let finalValue = "A String",
  if (typeof finalvalue == "number") {
    console.log("Final vaue is a number") 
  }

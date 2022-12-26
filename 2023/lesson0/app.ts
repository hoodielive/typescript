const greeting: string = 'Hello, World!';

const year: number = 2021;

const b = 1 + greeting;

greeting.toLowerCase();

const addTwoNumbers = (a: number, b: number): number => a + b;


interface User {
  id: string,
  name: string,
  age: number, 
  email: string,
}

console.log(addTwoNumbers);

const getUserById = (id: string): User => ({
  id,
  name: 'Michael Jackson',
  age: 29,
  email: 'something@somewhere.com'
});


const user = getUserById(id: 'uuid-1o')

const saveUser = (user: { id: string, name: string}) => console.log('saving user', {user});

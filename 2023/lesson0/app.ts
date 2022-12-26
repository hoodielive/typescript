const log = console.log

const greeting: string = 'Hello, World!';

const year: number = 2021;

const b = 1 + greeting;

greeting.toLowerCase();

const addTwoNumbers = (a: number, b: number): number => a + b;


interface User 
{
  id: string,
  name: string,
  age: number, 
  email: string,
}

interface Book
{
  id: string,
  name: string,
}

console.log(addTwoNumbers);

const getUserById = (id: string): User => ({
  id,
  name: 'Michael Jackson',
  age: 29,
  email: 'something@somewhere.com'
});

const getBookById = (id: string): Book => ({
  id,
  name: 'Typescript is better than Javascript.',
})

const user = getUserById('uuid-1');
const book = getBookById('book-1');

const saveUser = (user: User) => log('saving user', {user});
const saveBook = (book: Book) => log('saving book', {book});

saveUser(user)
saveBook(book)

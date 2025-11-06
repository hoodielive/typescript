type Todo = 
{
  id: string,
  name: string, 
  status: string,
  completed: boolean
}

type Person = 
{
  name: string, 
  age: number,
  address: { /** Prophecy */}
}

type NewTodo = Omit<Todo, "id"> 
type NewPersonType = Pick<Person, "name" | "age">

function saveTodo(todo: NewTodo) : Todo
{
  return { ...todo, id: crypto.randomUUID() }
}

function renderTodo(todo: )

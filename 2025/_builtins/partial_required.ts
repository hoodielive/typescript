type Todo = 
{
  title?: string,
  completed: boolean,
  address?: {
    street?: string
  }
}

// Everything becomes optional (partial)
// Required makes it all required
// Required does not do 'nested'

type FormTodo = Partial<Todo>;
type FormTodo2 = Required<Pick<Todo, "title">> & Omit<Todo, "title">
type RequiredPick<T, Key extends keyof T> = Omit<T, Key> & Required<Pick<T, Key>> 

const _todo: RequiredPick<Todo, "title"> = {
  title: "Bish",
  completed: true,
}

type _TodoAllRequired = Required<Todo>
// So DeepPartial: everything is optional, recursively
type DeepPartial<T> = 
{
  [P in keyof T]?: DeepPartial<T[P]>;
}

// DeepPartial: everything is required, recursively
type DeepRequired<T> = {
  T extends (...args: any) => any ? T :
  T extends object ? { [P in keyof T]-?: DeepRequired<T[P]> } : 
  T
}

type FormTodoDeep = DeepPartial<Todo> 
type TodoDeepRequired = DeepRequired<Todo>

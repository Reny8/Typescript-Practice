import axios from 'axios';
// GOAL IS TO FETCH DATA FROM A FAKE API
const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then((response) => {
  // Typescript has used the interface created above to tell us where the errors are in our code
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(id, title, completed);
});

// Added type annotations to help find errors
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo with ID: ${id}
    Has a title of: ${title}
    Is it completed? ${completed}
    `);
};

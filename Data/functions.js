
export const TODO = 'TODO';

export function getUser() {
    const stringyUser = localStorage.getItem(TODO);

    return JSON.parse(stringyUser);
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(TODO, stringyUser);
}

// export function getUsers() {
//     const user = getUser();
//     const userName = { userName: item, }
// }

// export function setUsers() {

// }


export function getToDo() {
    const { todos } = getUser();

    return todos;

}

export function setToDo(todos) {
    const user = getUser();

    user.todos = todos;

    setUser(user);
}

export function addToDo(message) {
    const todos = getToDo();
    const newToDo = {
        id: Math.ceil(Math.random() * 5000),
        todo: message,
        completed: 'false'
    };
    todos.push(newToDo);
    setUser(todos);
}

export function completeToDo(id) {
    const todos = getToDo();

    const matchingToDo = todos.find(todo => todo.id === id);

    matchingToDo.completed = true;

    setToDo(todos);
}


// Задача 5

interface User {
    name: string;
    age: number;
    isAdmin?: boolean;
}

function createUser({name, age}: User): User {
  return {
    name,
    age,
    isAdmin: false
  };
}

createUser({ name: "Alice", age: 30 });

// Завдання:
// Типізуйте функцію повністю: параметри і повернення функції.
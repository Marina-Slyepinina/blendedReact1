// Задача 13
// Є функція reducer:

type Action = {
    type: "increment" | "decrement";
};

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

reducer(3, {type: "decrement"})
// Завдання:
// Типізуйте state як число.
// Створіть тип Action, що може приймати як значення лише рядки increment та decrement.
// Типізуйте функцію повністю.
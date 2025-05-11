// Задача 12
// Є функція sendDoneStatus:

type Callback = (param: string) => void;

function sendDoneStatus(callback: Callback) {
  callback("done");
}

// function sendDoneStatus2(callback: (param: string) => void) {
//     callback("done");
// }

// Завдання:
// Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.
// Task 1

let tmp = prompt("Хто такий Іван Франко?");

console.log(typeof tmp);
console.log(tmp);

let counter = 0;

if (tmp === "письменник") {
  counter++;
  alert("Ви відповіли правильно");
} else {
  alert("Ваша відповідь неправильна");
}

tmp = prompt("Хто мер Львова?");
console.log(tmp);

if (tmp === "Садовий") {
  counter++;
  alert("Ви відповіли правильно");
} else {
  alert("Ваша відповідь неправильна");
}

tmp = prompt("Засновник Львова?");
console.log(tmp);

if (tmp === "король Данило") {
  counter++;
  alert("Ви відповіли правильно");
} else {
  alert("Ваша відповідь неправильна");
}

switch (counter) {
  case 1:
    alert(`Рахунок ${counter}/3 - погано`);
    break;
  case 2:
    alert(`Рахунок ${counter}/3 - задовільно`);
    break;
  case 3:
    alert(`Рахунок ${counter}/3 - відмінно`);
    break;
  default:
    alert(`Рахунок ${counter}/3 - спробуй ще раз )`);
    break;
}

// Task 2

let month = prompt("Введіть число від 1 до 12");
if (month >= 1 && month <= 12) {
  switch (+month) {
    case 1:
      alert("Січень");
      break;
    case 2:
      alert("Лютий");
      break;
    case 3:
      alert("Березень");
      break;
    case 4:
      alert("Квітень");
      break;
    case 5:
      alert("Травень");
      break;
    case 6:
      alert("Червень");
      break;
    case 7:
      alert("Липень");
      break;
    case 8:
      alert("Серпень");
      break;
    case 9:
      alert("Вересень");
      break;
    case 10:
      alert("Жовтень");
      break;
    case 11:
      alert("Листопад");
      break;
    case 12:
      alert("Грудень");
      break;

    default:
      alert("Ви ввели не число!");
      break;
  }
} else {
  alert("Число повинне бути від 1 до 12");
}

// Функция для преобразования числа из одной системы счисления в другую
function convertNumber(number, fromSystem, toSystem) {
  let decimalNumber;
  if (fromSystem === "binary") {
    decimalNumber = parseInt(number, 2);
  } else if (fromSystem === "decimal") {
    decimalNumber = parseInt(number, 10);
  } else if (fromSystem === "hexadecimal") {
    decimalNumber = parseInt(number, 16);
  }

  let convertedNumber;
  if (toSystem === "binary") {
    convertedNumber = decimalNumber.toString(2);
  } else if (toSystem === "decimal") {
    convertedNumber = decimalNumber.toString(10);
  } else if (toSystem === "hexadecimal") {
    convertedNumber = decimalNumber.toString(16).toUpperCase();
  }

  return convertedNumber;
}

// Функция для выполнения операций над числами разных систем счисления
function performOperation() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const system1 = document.getElementById("system1").value;
  const operation = event.target.id; // ID кнопки, которая была нажата

  let result;

  const decimalNum1 = convertNumber(num1, system1, "decimal");
  const decimalNum2 = convertNumber(num2, system1, "decimal");

  switch (operation) {
    case "add":
      result = parseInt(decimalNum1, 10) + parseInt(decimalNum2, 10);
      break;
    case "subtract":
      result = parseInt(decimalNum1, 10) - parseInt(decimalNum2, 10);
      break;
    case "multiply":
      result = parseInt(decimalNum1, 10) * parseInt(decimalNum2, 10);
      break;
    case "divide":
      result = parseInt(decimalNum1, 10) / parseInt(decimalNum2, 10);
      break;
  }

  const resultInSystem = convertNumber(result.toString(), "decimal", system1);
  document.getElementById("result").value = resultInSystem;
}

// Обработчики событий для кнопок
document.getElementById("add").addEventListener("click", performOperation);
document.getElementById("subtract").addEventListener("click", performOperation);
document.getElementById("multiply").addEventListener("click", performOperation);
document.getElementById("divide").addEventListener("click", performOperation);

// Функция для очистки полей ввода
function clearInputValues() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").value = "";
}

// Очистка полей ввода при загрузке страницы
window.addEventListener("load", clearInputValues);

function openConverter(converterName) {
	// Скрыть все конвертеры
	var converters = document.getElementsByClassName("converter");
	for (var i = 0; i < converters.length; i++) {
		converters[i].style.display = (converters[i].id === converterName + "Converter") ? "block" : "none";
	}
	// Отобразить выбранный конвертер
	var selectedConverter = document.getElementById(converterName + "Converter");
	selectedConverter.style.display = "block";
}

function convertLength() {
	var inputValue = parseFloat(document.getElementById("lengthValue").value);
	var unitFrom = document.getElementById("lengthUnitFrom").value;
	var unitTo = document.getElementById("lengthUnitTo").value;
	var result = 0;

	// Convert to meters
	switch (unitFrom) {
	case "km":
	result = inputValue * 1000;
	break;
	case "cm":
	result = inputValue / 100;
	break;
	case "mm":
	result = inputValue / 1000;
	break;
	case "mi":
	result = inputValue * 1609.34;
	break;
	case "yd":
	result = inputValue * 0.9144;
	break;
	case "ft":
	result = inputValue * 0.3048;
	break;
	case "in":
	result = inputValue * 0.0254;
	break;
	default:
	result = inputValue;
	}

	// Convert from meters
	switch (unitTo) {
	case "km":
	result /= 1000;
	break;
	case "cm":
	result *= 100;
	break;
	case "mm":
	result *= 1000;
	break;
	case "mi":
	result /= 1609.34;
	break;
	case "yd":
	result /= 0.9144;
	break;
	case "ft":
	result /= 0.3048;
	break;
	case "in":
	result /= 0.0254;
	break;
	default:
	result = result;
	}

	document.getElementById("lengthResult").innerHTML = result.toFixed(2) + " " + unitTo;
}

function convertWeight() {
	var inputValue = parseFloat(document.getElementById("weightValue").value);
	var unitFrom = document.getElementById("weightUnitFrom").value;
	var unitTo = document.getElementById("weightUnitTo").value;
	var result = 0;
  
	// Convert to grams
	switch (unitFrom) {
	  case "g":
		result = inputValue;
		break;
	  case "kg":
		result = inputValue * 1000;
		break;
	  case "t":
		result = inputValue * 1000000;
		break;
	  default:
		result = inputValue;
	}
  
	// Convert from grams
	switch (unitTo) {
	  case "g":
		result = result;
		break;
	  case "kg":
		result = result / 1000;
		break;
	  case "t":
		result = result / 1000000;
		break;
	  default:
		result = result;
	}
  
	document.getElementById("weightResult").innerHTML = result.toFixed(2) + " " + unitTo;
}
  
function convertArea() {
  var inputValue = parseFloat(document.getElementById("areaValue").value);
  var unitFrom = document.getElementById("areaUnitFrom").value;
  var unitTo = document.getElementById("areaUnitTo").value;
  var result = 0;

  // Convert to square meters
  switch (unitFrom) {
    case "cm2":
      result = inputValue / 10000;
      break;
    case "km2":
      result = inputValue * 1000000;
      break;
    case "m2":
      result = inputValue;
      break;
    case "ha":
      result = inputValue * 10000;
      break;
    default:
      result = inputValue;
  }

  // Convert from square meters
  switch (unitTo) {
    case "cm2":
      result = result * 10000;
      break;
    case "km2":
      result = result / 1000000;
      break;
    case "m2":
      result = result;
      break;
    case "ha":
      result = result / 10000;
      break;
    default:
      result = result;
  }

  document.getElementById("areaResult").innerHTML = result.toFixed(2) + " " + unitTo;
}

function openConverter(converterType) {
	var converters = document.getElementsByClassName("converter");
	for (var i = 0; i < converters.length; i++) {
	  converters[i].style.display = "none";
	}
	
	// Скрыть калькулятор
	var calculator = document.getElementsByClassName("calculator")[0];
	calculator.style.display = "none";
	
	// Отобразить выбранный конвертер
	var converter = document.getElementById(converterType + "Converter");
	converter.style.display = "block";
	
	// Создать кнопку "Back" (Назад)
	var backButton = document.createElement("button");
	backButton.innerText = "Back";
	backButton.onclick = function() {
	  // Скрыть конвертер
	  converter.style.display = "none";
	  
	  // Отобразить калькулятор
	  calculator.style.display = "block";
	  
	  // Удалить кнопку "Back" (Назад)
	  backButton.remove();
	};
	
	// Добавить кнопку "Back" (Назад) к конвертеру
	converter.appendChild(backButton);
  }
  

// function hideAllConverters() {
// 	var converters = document.getElementsByClassName("converter");
// 	for (var i = 0; i < converters.length; i++) {
// 		converters[i].style.display = "none";
// 	}
// }


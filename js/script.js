let currentNum = "";
let historyStr = "";
let arrNum = []; // array for numbers
let arrOper = []; // arra for operations
let memory = 0;
let isNegative = false;
let isPercent = false;
let operExist = false;
let isAfterEqual = false;
clearDisplay();

document.addEventListener("keydown", function (event) {
    appendValue(event.key);
});

function updateHistory(isEqual) {
    if (!arrOper[0] || arrNum[0] === 0 || isAfterEqual) return;

    if (historyStr === "") {
        if (!isPercent) {
            if (!isEqual) {
                historyStr = `${!arrNum[1] ? arrNum[0] : arrNum[1]} ${arrOper[0]}`;
            } else {
                historyStr = `${!arrNum[1] ? arrNum[0] : arrNum[1]}}`;
            }
        } else {
            if (!isEqual) {
                historyStr = `${!arrNum[1] ? arrNum[0] : arrNum[1]}% ${arrOper[0]}`;
            } else {
                historyStr = `${!arrNum[1] ? arrNum[0] : arrNum[1]}}%`;
            }
        }
    } else {
        if (!isPercent) {
            if (!isEqual) {
                historyStr = `${historyStr} ${!arrNum[1] ? arrNum[0] : arrNum[1]} ${arrOper[0]}`;
            } else {
                historyStr = `${historyStr} ${!arrNum[1] ? arrNum[0] : arrNum[1]}`;
            }
        } else {
            if (!isEqual) {
                historyStr = `${historyStr} ${!arrNum[1] ? arrNum[0] : arrNum[1]}% ${arrOper[0]}`;
            } else {
                historyStr = `${historyStr} ${!arrNum[1] ? arrNum[0] : arrNum[1]}%`;
            }
        }
    }
    document.getElementById("history").textContent = historyStr;
}

function checkAndPushNum() {
    if (currentNum === "") return;

    if (!isNegative) {
        arrNum.push(Number(currentNum));
    } else {
        arrNum.push(Number(currentNum));
        isNegative = false;
    }

    currentNum = "";
}

function clearDisplay() {
    while (arrNum[0]) {
        arrNum.splice(0, 1);
    }
    while (arrOper[0]) {
        arrOper.splice(0, 1);
    }
    currentNum = "";
    historyStr = "";
    isNegative = false;
    isPercent = false;
    operExist = false;
    isAfterEqual = false;
    document.getElementById("display").value = '0';
    document.getElementById("history").textContent = "";
}

function appendValue(input) {
    if (!isNaN(input) || input === '.') {
        currentNum += input;
        operExist = false;
        document.getElementById("display").value = currentNum;
    } else if (input === '+/-') {
        if (!isNegative) {
            isNegative = true;
            currentNum = "-" + currentNum;
        } else {
            isNegative = false;
            currentNum = currentNum.slice(1);
        }
        document.getElementById("display").value = currentNum;
    } else if (/^[+*/^-]+$/.test(input)) {
        if (!operExist) {
            if (isAfterEqual) {
                historyStr = `${historyStr} ${input}`;
                document.getElementById("history").textContent = historyStr;
            }
            checkAndPushNum();
            arrOper.push(input);
            operExist = true;
            updateHistory(false);
            isAfterEqual = false;
            if (arrNum[1]) {
                calculateOnce();
            }
        } else {
            arrOper.pop();
            arrOper.push(input);
            historyStr = historyStr.slice(0, -1);
            historyStr += input;
            document.getElementById("history").textContent = historyStr;
        }
    } else if (input === '%') {
        !isPercent ? isPercent = true : isPercent = false;
    }
}

function calculate() {
    checkAndPushNum();
    updateHistory(true);
    calculateOnce();
    isAfterEqual = true;
    while (arrNum[1]) {
        arrNum.splice(1, 1);
    }
    while (arrOper[0]) {
        arrOper.splice(0, 1);
    }
}

function calculateOnce() {
    if (!arrNum[1] || !arrOper[0]) return;

    if (!isPercent) {
        if (arrOper[0] === '+') {
            arrNum[0] += arrNum[1];
        } else if (arrOper[0] === '-') {
            arrNum[0] -= arrNum[1];
        } else if (arrOper[0] === '*') {
            arrNum[0] *= arrNum[1];
        } else if (arrOper[0] === '/') {
            arrNum[0] /= arrNum[1];
        } else if (arrOper[0] === '^') {
            arrNum[0] = Math.pow(arrNum[0], arrNum[1]);
        }
    } else {
        if (arrOper[0] === '+') {
            arrNum[0] += (arrNum[0] / 100) * arrNum[1];
        } else if (arrOper[0] === '-') {
            arrNum[0] -= (arrNum[0] / 100) * arrNum[1];
        } else if (arrOper[0] === '*') {
            arrNum[0] *= arrNum[1];
            arrNum[0] /= 100;
        } else if (arrOper[0] === '/') {
            arrNum[0] /= arrNum[1];
            arrNum[0] /= 100;
        }
        isPercent = false;
    }
    arrNum.splice(1, 1);
    arrOper.splice(0, 1);
    document.getElementById("display").value = arrNum[0];
}

// creative part

function toggleAdditionalButtons() {
    var additionalButtons = document.querySelector('.additional-buttons');
    var additionalButtonsBottom = document.querySelector('.additional-buttons-bottom');

    if (additionalButtons.style.display === 'none') {
        additionalButtons.style.display = 'grid';
        additionalButtonsBottom.style.display = 'block';
    } else {
        additionalButtons.style.display = 'none';
        additionalButtonsBottom.style.display = 'none';
    }
    var converters = document.getElementsByClassName("converter");
    for (var i = 0; i < converters.length; i++) {
        converters[i].style.display = "none";
    }
}

function factorial() {
    checkAndPushNum();
    let result = 1;
    let num = 0;
    !arrNum[1] ? num = arrNum[0] : num = arrNum[1];
    while (num !== 1) {
        result *= num;
        num--;
    }
    !arrNum[1] ? (arrNum[0] = result) : (arrNum[1] = result);
    document.getElementById("display").value = !arrNum[1] ? arrNum[0] : arrNum[1];
}

function squareRoot() {
    checkAndPushNum();
    !arrNum[1] ? (arrNum[0] = Math.sqrt(arrNum[0])) : (arrNum[1] = Math.sqrt(arrNum[1]));
    document.getElementById("display").value = !arrNum[1] ? arrNum[0] : arrNum[1];
}

function calculateInverse() {
    checkAndPushNum();
    !arrNum[1] ? (arrNum[0] = 1 / arrNum[0]) : (arrNum[1] = 1 / arrNum[1]);
    document.getElementById("display").value = !arrNum[1] ? arrNum[0] : arrNum[1];
}

function memoryRecall() {
    currentNum = memory.toString();
    document.getElementById("display").value = currentNum;
}

function memoryClear() {
    memory = 0;
}

function memoryAdd() {
    memory += Number(currentNum);
    currentNum = "";
    document.getElementById("display").value = '0';
}

function memorySubtract() {
    memory -= Number(currentNum);
    currentNum = "";
    document.getElementById("display").value = '0';
}

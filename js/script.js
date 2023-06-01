let currentNum = "";
let arrNum = []; // array for numbers
let arrOper = []; // arra for operations
let isNegative = false;
let isPercent = false;
let operExist = false;

function checkAndPushNum() {
    if (!isNegative) {
        arrNum.push(Number(currentNum));
    } else {
        arrNum.push(Number(currentNum));
        isNegative = false;
    }
    operExist = false;
}

function clearDisplay() {
    while (arrNum[0]) {
        arrNum.splice(0, 1);
    }
    while (arrOper[0]) {
        arrOper.splice(0, 1);
    }
    currentNum = "";
    document.getElementById("display").value = '0';
}

function appendValue(input) {
    if (!isNaN(input) || input === '.') {
        currentNum += input;
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
    } else if (/^[+*/-]+$/.test(input)) {
        if (!operExist) {
            checkAndPushNum();
            arrOper.push(input);
            currentNum = "";
            operExist = true;
            if (arrNum[1]) {
                calculateOnce();
            }
        } else {
            arrOper.pop();
            arrOper.push(input);
        }
    } else if (input === '%') {
        isPercent++;
    }
}

function calculate() {
    checkAndPushNum();
    calculateOnce();
    // while (arrNum[1]) {
    //     if (arrOper[0] === '+') {
    //         arrNum[0] += arrNum[1];
    //     } else if (arrOper[0] === '-') {
    //         arrNum[0] -= arrNum[1];
    //     } else if (arrOper[0] === '*') {
    //         arrNum[0] *= arrNum[1];
    //     } else if (arrOper[0] === '/') {
    //         arrNum[0] /= arrNum[1];
    //     }
    //     arrNum.splice(1, 1);
    //     arrOper.splice(0, 1);
    // }
    // document.getElementById("display").value = arrNum[0];
}

function calculateOnce() {
    if (!isPercent) {
        if (arrOper[0] === '+') {
            arrNum[0] += arrNum[1];
        } else if (arrOper[0] === '-') {
            arrNum[0] -= arrNum[1];
        } else if (arrOper[0] === '*') {
            arrNum[0] *= arrNum[1];
        } else if (arrOper[0] === '/') {
            arrNum[0] /= arrNum[1];
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
    }
    arrNum.splice(1, 1);
    arrOper.splice(0, 1);
    document.getElementById("display").value = arrNum[0];
}
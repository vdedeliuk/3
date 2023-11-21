const num = Math.floor(Math.random() * 101)
strNum = num.toString()

let slot1
let slot2

if (strNum.length == 2) {
    if (strNum[0] == "1" && strNum[1] !== "0") {
        switch (strNum[1]) {
            case "1": console.log(num, "=>", "eleven");
                break;
            case "2": console.log(num, "=>", "twelve");
                break;
            case "3": console.log(num, "=>", "thirteen");
                break;
            case "5": console.log(num, "=>", "fifteen");
                break;
            case "8": console.log(num, "=>", "eighteen");
                break;
            default:
                secondNumber(strNum[1])
                console.log(num, "=>", slot2 + "teen")
        }
        return;
    }
    else if (strNum[1] == "0") {
        switch (strNum[0]) {
            case "1": console.log(num, "=>", "ten");
                break;
            default:
                firstNumber(strNum[0])
                console.log(num, "=>", slot1)
        }
        return;
    }

    firstNumber(strNum[0])
    secondNumber(strNum[1])
    console.log(num, "=>", slot1, slot2)
    return;
}
else if (strNum.length == 1) {
    secondNumber(strNum[0])
    console.log(num, "=>", slot2)
    return;


}
console.log(num, "=>", "one hundred")

function firstNumber(a) {
    switch (a) {
        case "2": slot1 = "twenty";
            break
        case "3": slot1 = "thirty";
            break
        case "4": slot1 = "forty";
            break
        case "5": slot1 = "fifty";
            break
        case "6": slot1 = "sixty";
            break
        case "7": slot1 = "seventy";
            break
        case "8": slot1 = "eighty";
            break
        case "9": slot1 = "ninety";
            break
    }
}

function secondNumber(b) {
    switch (b) {
        case "0": slot2 = "zero";
            break
        case "1": slot2 = "one";
            break
        case "2": slot2 = "two";
            break
        case "3": slot2 = "three";
            break
        case "4": slot2 = "four";
            break
        case "5": slot2 = "five";
            break
        case "6": slot2 = "six";
            break
        case "7": slot2 = "seven";
            break
        case "8": slot2 = "eight";
            break
        case "9": slot2 = "nine";
            break
    }
}
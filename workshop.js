function firstLetter(inputString) {
    if (typeof inputString === "string") {
        return inputString[0];
    } 
    
    else {
        return undefined;
    }
}

function lastLetter(inputString) {
    if (typeof inputString === "string") {
        return inputString[inputString.length - 1];
    } 
    
    else {
        return undefined;
    }
}

function letterAtPosition(inputString, position) {
    if (typeof inputString === "string" && typeof position === "number") {
        return inputString[position];
    }
    
    else {
        return undefined;
    }
}

function addTwoNumbers(num1, num2) {
    if (typeof (num1 && num2) === "number") {
        return num1 + num2;
    }
    
    else {
        return undefined;
    }
}



function multiplyTwoNumbers(num1, num2) {

}

function calculator(operation, num1, num2) {

}

function repeatString(inputString, numRepetitions) {

}

function reverseString(inputString) {

}

function longestWord(inputString) {

}

function capitalize(inputString) {

}

function sumOfNumbers(arrayOfNumbers) {

}

function uniqueElements(array1, array2) {

}

function isPalindrome(inputString) {

}

function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};
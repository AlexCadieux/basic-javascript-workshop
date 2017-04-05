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
    if (typeof (num1, num2) === "number") {
        return num1 * num2;
    }
    
    else {
        return undefined;
    }
}

function calculator(operation, num1, num2) {
    if (typeof (num1, num2) === "number") {
        switch(operation) {
            case "add":
                return num1 + num2;
                break;
                
            case "sub":
                return num1 - num2;
                break;
            
            case "mult":
                return num1 * num2;
                break;
                
            case "div":
                return num1 / num2;
                break;
                
            default:
                return undefined;
        }
    }
    
    else {
        return undefined;
    }
}

function repeatString(inputString, numRepetitions) {
    if (typeof inputString === "string" && typeof numRepetitions === "number") {
        if (numRepetitions <=  0 || inputString.length === 0) {
            return "";
        }
        
        else {
            var stringRepeated = ""
            for (var i = 0; i< numRepetitions; i++) {
                stringRepeated += inputString;
            }
            return stringRepeated;
        }
    }
    
    else {
        return undefined;
    }
}

function reverseString(inputString) {
    if (typeof inputString === "string") {
        var stringReversed = ""
        for (var i = inputString.length -1; i >= 0; i--) {
            stringReversed += inputString[i];
        }
        return stringReversed;
    }
    
    else {
        return undefined;
    }
}

function longestWord(inputString) {
    if (inputString.length === 0) {
        return "";
    }
    
    else {
        var splitString = inputString.split(" " || "," || ";");
        var longest = 0;
        var word = null;
        for (var i = 0; i < splitString.length; i++) {
            if (longest < splitString[i].length) {
                longest = splitString[i].length;
                word = splitString[i];
            }
        }
        return word;
    }
}

function capitalize(inputString) {
    if (typeof inputString === "string") {
        var splitString = inputString.toLowerCase().split(" ");
        
        for (var i = 0; i < splitString.length; i++) {
            splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
        };
        
        return splitString.join(" ");
    }
    
    else {
        return undefined;
    }
}

function sumOfNumbers(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers)) {
        if (arrayOfNumbers.length === 0) {
            return 0;
        }
        
        else {
            var sum = 0;
            for (var i=0; i < arrayOfNumbers.length; i++) {
                if (typeof arrayOfNumbers[i] === "number") {
                    sum += arrayOfNumbers[i];
                }
                
                else {
                    return undefined;
                }
            }
            return sum;
        }
    }
    
    else {
        return undefined;
    }
}

function uniqueElements(array1, array2) {
    if(Array.isArray(array1) && Array.isArray(array2)) {
        var uniqueArray = [];
        for (var i = 0; i < array1.length; i++) {
            var isUnique = true
            for (var j = 0; j < array2.length; j++) {
                if (array1[i] == array2[j]) {
                    isUnique = false
                }
            }
            
            if (isUnique) {
                
                uniqueArray.push(array1[i]);
            }
        }
        
        for (var i = 0; i < array2.length; i++) {
            var isUnique = true
            for (var j = 0; j < array1.length; j++) {
                if (array2[i] == array1[j]) {
                    isUnique = false
                }
            }
            
            if (isUnique) {
                uniqueArray.push(array2[i]);
            }
        }
        
        return uniqueArray;
    }
    
    else {
        return undefined;
    }
}

function isPalindrome(inputString) {
    inputString = inputString.replace(/\W+/g, " ").split(" ").join("").toLowerCase()    
    var reverseString = ""
    for (var i = inputString.length -1; i >= 0; i--) {
        reverseString += inputString[i];
    }
    if (inputString == reverseString) {
        return true;
    }
    
    else {
        return false;
    }
}

function wrapCharacter(inputString) {
    var result = '';
    var arr = inputString.split("")
    
    for (var i = 0; i<arr.length; i++) {
        if(i%40===0 && i>0) {
            if(arr[i]=== " ") {
                arr[i] = "\n"
            }
            else{
                arr[i] += "\n"
            }
        }
    }
    
    return arr.join("")
    
    // while (inputString.length >= 40) {
    //     if (inputString[41] !== " ") {
    //     result += inputString.substring(0, 40) + '\n';
    //     inputString = inputString.substring(41);
    //     }
        
    //     else {
    //         result += inputString.substring(0, 40) + '\n';
    //         inputString = inputString.substring(40);
    //     }
    // }
    // result += inputString.substring(0);
    return result;
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
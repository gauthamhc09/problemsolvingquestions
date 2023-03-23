//program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

function checkNumber(num1, num2) {
    const sum = num1 + num2;
    if (num1 === 100 || num2 === 100 || sum === 100) {
        console.log(true);
        return true
    }
    console.log(false);
    return false
}

// checkNumber(100, 00)


//write a javascript program to get the extension of a file name

function getExtension(fileName) {
    const file = fileName.split('.').pop();
    console.log('file', file);
    return file;

}

function getExtensionSlice(fileName) {
    const lastIndexOf = fileName.lastIndexOf('.');
    const file = fileName.slice(lastIndexOf)
    console.log(file);
    return file;
}

// getExtensionSlice('script.js')

//Write a function to replace every character in a given string with the character following it in the alphabet

function nextAlphabet(str) {
    const name = str
        .split('')
        .map((char, index) => {
            const unicodeValues = (str.charCodeAt(index) + 1)
            const nextAlphabet = String.fromCharCode(unicodeValues)
            return nextAlphabet
        })
        .join('')
    return name
}

// console.log(nextAlphabet('abc'));


//write a javascript program to get the current date - mm-dd-yyyy or mm/dd/yyyy

function getCurrentDate() {
    const fullDate = new Date();
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth() + 1;
    console.log(month)
    const day = fullDate.getDate();
    const date = `${day}/${month}/${year}`
    return date
}

// console.log(getCurrentDate());

//program to create a new string adding 'New!' in front of a given string. if the given string begins with 'New!' then return the original string

function addNewString(str) {
    if (str.startsWith('New' || 'New!')) {
        return str;
    }
    const newString = `New! ${str}`
    return newString;
}

// console.log(addNewString('Plant'));


// program to check whether given string or number is a palindrome

function checkPalindrome(data) {

    const reverseData = data.toString().split('').reverse().join('');

    if (data === reverseData) {
        return true;
    }
    return false;
}

// console.log(checkPalindrome('racecar'));


//program to get fibonnacci number

function checkFibonacci(num) {
    const arr = [0, 1];

    for (i = 2; i <= num; i++) {
        const n = (arr[i - 1] + arr[i - 2])
        arr.push(n)
    }
    return arr;
}

function checkFiboUsingRec(num) {
    if (num <= 1) return num;

    return checkFiboUsingRec(num - 1) + checkFiboUsingRec(num - 2)
}
// console.log(checkFibonacci(6));
// console.log(checkFiboUsingRec(6));



//function to check anagram => ex. "car" = "arc"
function checkAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    let result = [];
    for (let char1 in str1) {
        for (let char2 in str2) {
            if (str1[char1] === str2[char2]) {
                result.push(str1[char1]);
            }
        }
    }
    const str2Array = str2.split('').sort()
    const str1Sorted = result.sort()
    const checkIfTrue = JSON.stringify(str1Sorted) == JSON.stringify(str2Array)
    console.log(JSON.stringify(str1Sorted));

    return checkIfTrue
}

// console.log(checkAnagram('race', 'ecar'));
function checkAnagramUsingObject2(str1, str2) {
    if (str1.length !== str2.length) return false;

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    }
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true
}

console.log(checkAnagramUsingObject2('rsaee', 'eears'));


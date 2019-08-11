/*
// 1.1 Is Unique
export function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    const findRepeated = str.indexOf(char, i + 1);

    if (char == " ") continue;
    if (findRepeated != -1) return false;
  }
  return true;
}

// 1.2 Check Permutation
function returnObjCountedChars(str) {
  let charCountObj = {};
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i).toLowerCase();
    if (charCountObj[char]) {
      charCountObj[char] += 1;
    } else {
      charCountObj[char] = 1;
    }
  }
  return charCountObj;
}
export function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;
  let charCountObj1 = returnObjCountedChars(str1);
  let charCountObj2 = returnObjCountedChars(str2);
  const objsLength = Object.keys(charCountObj1).length;

  for (let i = 0; i < objsLength; i++) {
    const prop = Object.keys(charCountObj1)[i];
    if(charCountObj1[prop] !== charCountObj2[prop]) {
      return false;
    }
  }
  return true;
}

// 1.3 URLify
function URLify(str) {
  const trimmedStr = str.trim();
  return trimmedStr.replace(/ /g, '%20');
}
*/

// 1.4 Palindrome Permutation
function palindromePermutation() {}

// 1.5 One away
function oneAway(str1, str2) {
  let errors = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) == str2.charAt(i)) {
      continue;
    } else {
      errors++;
    }
  }
  return errors > 1 ? false : true;
}

// 0.6 String Compression
String.prototype.concat = function(str) {
  let newStr = '';
}
function stringCompression(str) {
  let charCount = 1;
  let compressedStr = '';
  let isCompressed = false;

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    const next = str.charAt(i+1);
    
    if(char == next) {
      charCount++;
      isCompressed = true;
    } else {
      charCount = 1;
      compressedStr.concat('char');
    }
  }
  compressedStr

  return isCompressed ? compressedStr : str;
}

console.log(stringCompression('sstriiing'))
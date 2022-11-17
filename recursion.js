/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {

  if(i === nums.length) return 1;

  return nums[i] * product(nums, i + 1)
}
console.log("Product *************************")
console.log(product([1,2,3,4,5]));
console.log(product([10,12,14]))

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx=0, longestWord=0) {
  if(idx === words.length) return longestWord;
  longestWord = Math.max(words[idx].length, longestWord);
  return longest(words, idx + 1, longestWord);
}
console.log("Longest *************************")
console.log(longest(["hello", "world","duh", "remarkable"]))


/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, newStr="") {
  if(idx >= str.length) return newStr;

  newStr += str[idx];

  return everyOther(str, idx + 2, newStr)
  // for(let i = 0; i < str.length; i++){
  //   if(i % 2 === 0){
  //     console.log("evens", i, str[i])
  //   }
  // }

}
console.log("everyOther ************************")
console.log(everyOther("hello"))
console.log(everyOther("supercalifragilistic"))
/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if(leftIdx >= rightIdx) return true;
  if(str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);

}
console.log("isPalindrome ************************")
console.log(isPalindrome("hello"))
console.log(isPalindrome("racecar"))
/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if(idx === arr.length) return -1;
  if(arr[idx] === val) return idx;

  return findIndex(arr, val, idx + 1);
}
console.log("findIndex ************************")
console.log(findIndex(["dog", "cat", "lizard", "monkey"], "cat"))
console.log(findIndex(["dog", "cat", "lizard", "monkey"], "monkey"))
/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=0, reversed="") {
  if(reversed.length >= str.length) return reversed;
  reversed += str[str.length - 1 - idx];
  return revString(str, idx + 1, reversed)
}
console.log("revString *************************")
console.log(revString("hello"))
console.log(revString("Marvel Cinematic Universe"))

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}
console.log("gatherStrings **********************")
//Example/Test Object
let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};

console.log(gatherStrings(nestedObj))

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

 function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}
console.log("binarySearch ******************************")
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11], 5))

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

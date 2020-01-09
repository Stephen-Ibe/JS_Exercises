'use strict';

// First solution to palindrome task
function isPalindrome(str){
    let len = str.length;
    let mid = Math.floor(len/2);
    for(let i=0;i<mid;i++){
        if(str[i] !== str[len-1-i]){
            return `${str} is not a Palindrome`;
        }
    }
    return `${str} is a Palindrome`;
}

console.log(isPalindrome('racecare'));
console.log(isPalindrome('lawal'));


// Second solution to palindrome task
let isItPalindrome = (word) => {
    let reverse =  word.split('').reverse().join("");
    if(reverse !== word){
        return `${word} is not a Palindrome`;
    }
    return `${word} is a Palindrome`;
}

console.log(isItPalindrome('madam'));
console.log(isItPalindrome('javascript'));


// Third Solution
const isPalindrome = ((str)=>{
    str = str.toLowerCase();
    for(let i=0;i<str.length;i++){
        str.replace(' ','');
        str.replace('.','');
        str.replace(',','');
        str.replace('-','');
        str.replace('/','');
        str.replace('(','');
        str.replace(')','');
        str.replace('_','');
    }
    let copy = str.split('').reverse().join('');
    if(copy==str){
        console.log(true);
    } else {
        console.log(false);
    }
})('raCecar');
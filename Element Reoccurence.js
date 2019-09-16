/* FUNCTION TO CHECK FOR DUPLICATE ELEMENTS IN AN ARRAY */

/* 
*   array containing random numbers
*   the array contains a space too to test for undefined value
*   and also a negative interger too 
*/
let a = [1,2,3,4,3,2,5,6,7,8,9,,-1];
let isEmpty = [];

const check = (arr) => {
    let aCopy=a.slice(0);
    for (let i = 0; i < arr.length; i++) {
        let count=0;
        for (let j = 0; j < aCopy.length; j++) {
           if(arr[i]==aCopy[j]) {
               count++;
               delete aCopy[j];
           }
        }
        if(count>0){
            let obj = {};
            obj.value=arr[i];
            obj.count=count;
            isEmpty.push(obj);
        }
    }
    console.log(isEmpty);
}

// function call
check(a);
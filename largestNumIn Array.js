// Return an array consisting of the largest number for each provided sub-array

const largestNum = arr => {
    let largestArr = [];
    for (let i = 0; i < arr.length; i++) {
        let num = 0;
        for (let j = 0; j < arr.length; j++) {
            if(num < arr[i][j]) num = arr[i][j];
        }
        largestArr.push(num);
    }
    return largestArr;
}
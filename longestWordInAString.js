const longestWord = str => {
    let arr = str.split(' ');
    let longestStr = '';
    arr.map(e=>{
        if (longestStr.length < e.length) longestStr=e;
    })
    return `${longestStr} \t ${longestStr.length}`;
}
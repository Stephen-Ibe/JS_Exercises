// Repeat a given string, n TimeRanges. Return a empty string if n is a negative value.

const repeat = (str,n) => {
    let strHolder = [];
    for (let i = 0; i < n; i++) {
        strHolder.push(str);
    }
    return strHolder.join('');
}
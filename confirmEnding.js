// Check if a word ends with a given target string

const checkEnding = (str, target) => {
    let start = str.length-(target.length);
    (str.subStr(start, str.length)===target)?true:false;
}


// Test Cases
// checkEnding("Bastian", 'n');
// checkEnding("Connor", 'n');
// checkEnding("Wlaking on water and developing software from a specification are easy if both are frozen", 'specification');
// checkEnding("He has to give me his name", 'name');

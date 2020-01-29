const titleCase = str => {
    let arr = str.split(' ');
    let newArr = []
    arr.map(e=>{
        let uppCase = e.charAt(0).toUpperCase();
        let lowCase = e.slice(1, e.length).toLowerCase();
        e=uppCase.concat(lowCase);
        newArr.push(e);
    })
    str = newArr.join(' ');
    return str;
}

// Test Case:

// titleCase("I'm a little tea pot");
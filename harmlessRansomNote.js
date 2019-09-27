// Harmless Ransom Note Algorithm

const hRN = (note, magazineText) => {
    let noteArr = note.split(' ');
    let magazineArr = magazineText.split(' ');
    let magObj = {};

    magazineArr.forEach(word => {
        if(!magObj[word]){
            magObj[word] = 0;
        }
        magObj[word]++;
    });

    let noteIsPossible = true;

    noteArr.forEach(e => {
        if(magObj[e]){
            magObj[e]--;
            if (magObj[e] < 0) noteIsPossible = false;
        } else noteIsPossible = false;
    });

    return noteIsPossible;
};

hRN('this is a secret text from a secret admirer', 'eat from while read this sweet place is dance a favoru adorable text are go early populated admirer best places secret boots waterfall');

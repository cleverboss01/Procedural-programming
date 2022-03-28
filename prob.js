// write a search procedure (C,STR,VARFIND, VARPOS) which searches for a character C in a string STR and returns its position if it exists. VARFIND will return true if element exists and VARPOS will return the position of the element

// write a DELETE procedure (C,STR,VAR_FIND) which deletes the firstoccurence of a character C in a string STR , if it exists 

// write  a DELETE_ALL procedure (C,STR) which deletes all occurecnce of an element C in a string STR, if it exists

let C = '@';
let STR = 'ndubeansdaniel97@gmail.com'

function VARFIND (C, STR){
    let textArr = Array.from(STR);
    for(i=0; i<STR.length; i++){
        var char = STR[i];
        if (char == C) {
            return char.indexOf(C);
        }
    }
    if(STR.includes(C)){
        return true;
    }
}

console.log(VARFIND(C, STR));

// Step 1
function inString(searchStr, searchC){

    let index = searchStr.indexOf(searchC);

    if(index !== -1) return index;
    return;
}

//Procedure 1
function searchProcedure(C, STR){

}


let sentence = 'Smart learn from everything and everyone, average people from their experience, stupid already, have all the answers'
let vowels = [];

const longestWord = sentence => {
    var arrItems = sentence.split(' ');
    var longWord = 0;
    for (item of arrItems) {
        if(item.length > longWord){
            longWord = item.length;
        }
    }
    return `The longest word is ${longWord} letters`
};

console.log(longestWord(sentence));
















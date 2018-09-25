// Write a JS function that accepts a string and counts the number of consonants
const vowel = [`a`, `e`, `i`, `o`, `u`];

const consonant = function(word){
    let length = word.length;
    let n=0;

    for(i=0; i<length; i++){
        if(vowel.includes(word[i])){
            n++;
        }
    }

    return length-n;

};

console.log(consonant(`message`))
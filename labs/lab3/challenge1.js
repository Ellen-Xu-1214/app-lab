//Write a JS function that reverses a word

const reverseWord = function(word){
    let wordLength = word.length;
    let newWord = ``;

    for(i=0; i<wordLength; i++){
        newWord += word[wordLength-i-1]
    };

    return newWord;

}

console.log(reverseWord(`nice`))

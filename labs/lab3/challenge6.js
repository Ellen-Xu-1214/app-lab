/*
Write a function to replace the word umbrella with 
coat from this string: she didn't like how heavy the 
rain was, so she decided to take her umbrella
*/


let replaceWord = function(sentence){
    let words = sentence.split(` `);
    //console.log(words);

    for(i=0; i<words.length; i++){
        if(words[i] == `umbrella`){
            words[i] = `coat`;
        }
    }

    return words.join(` `)
}

const sentence = `she didn't like how heavy the rain was, so she decided to take her umbrella`
console.log(replaceWord(sentence))
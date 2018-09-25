/* 
Write a function countLine that takes a string of names 
as its only argument and returns a number that indicates 
how many names there are in the string.
*/

let countLine = function(stringOfNames){
    const names = stringOfNames.split(',');
    return names.length;
}

console.log(countLine(`Jeff Winger, Alice Kim, Abed`))

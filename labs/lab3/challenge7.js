let tower = function(lineNumber){

    for(i=0;i<lineNumber;i++) {
        let blank = ` `.repeat(lineNumber-i-1);
        let hash = `#`.repeat(2*i+1)
        console.log(blank + hash + blank);
    }

}

console.log(tower(5))


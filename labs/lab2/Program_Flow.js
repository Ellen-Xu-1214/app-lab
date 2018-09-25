// Challenge 1
for(i=0;i<4;i++) {
    let blank = ` `.repeat(3-i);
    let hash = `#`.repeat(2*i+1)
    console.log(blank + hash + blank);
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = addZero(m);
    s = addZero(s);
    document.getElementById('start').innerHTML =
    h + ":" + m + ":" + s;
}

function addZero(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}

function endTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = addZero(m);
    s = addZero(s);
    document.getElementById('end').innerHTML =
    h + ":" + m + ":" + s;
}


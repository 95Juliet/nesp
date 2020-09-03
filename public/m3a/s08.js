// !undefined non è booleano -> viene convertito (seguendo delle regole)
if (!undefined) {
    console.log('undefined is falsy');
}
if (!null) {
    console.log('null is falsy');
}
if (!0) {
    console.log('0 is falsy');
}
if (!-0) {
    console.log('-0 is falsy');
}
if (!NaN) {
    console.log('NaN is falsy');
}
if (!'') {
    console.log('empty string is falsy');
}

// array vuoto
if ([]) {
    console.log('empty array is truthy');
}

// oggetto vuoto
if ({}) {
    console.log('empty object is truthy');
}
if (function () { }) {
    console.log('empty function is truthy');
}

if("42" == 42) {
    console.log("?");
}

// le stringhe sono primitivi quindi risulta vero
if("42" === "42") {
    console.log("?");
}

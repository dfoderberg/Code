//console.log("enter");
let a = 'a';
let alphabet = [];
//console.log("enter2");
for (var i = 0; i < 26; i += 2){
    ////console.log("enter3");   
    alphabet[i] = a+i;
}
for(letter in alphabet){
    //console.log("enter4");
    console.log((letter + 100)); // errors with correct char code output.
}
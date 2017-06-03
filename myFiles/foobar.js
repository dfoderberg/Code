let a = [1,2,3];
//let date = new Date();
let map = new Map();

for (let i = 0; i < 1000000; i++){
    a.push(i);
    map.set((i + ''), 1);

}
let t = Date.now();
for (let x of a){
    console.log(x);
    if(x == 1000000){
        break;
    }
}
let d = Date.now();
console.log(d-t);
//for(let x of a){
    //console.log(x);
//}
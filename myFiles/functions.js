let count = 0;
let map = {};
let tree = {
    country:{
        us:{
            colorado:{
                westminster:1,
                denver :1
            }
        },
        canada:{
            britishColombia:{
                ski:1
            }
        }
    }
}
tree.country.brk = tree.country;
let recurse = (obj)=>{
    count++;
    console.log(count);
    
    if (typeof obj == 'object'){
        for (let n in obj){
            if(map[n]){
                return
            }
            map[n] =obj[n];
            console.log(n);
            if (typeof obj[n] == 'object'){
                recurse(obj[n]);
            }
            else {
                console.log(n,obj[n]);
            }
        }
    }
    
}
recurse(tree);
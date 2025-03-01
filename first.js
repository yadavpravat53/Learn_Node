const app = require('./second')

console.log("Pravat");
console.log(app);
console.log(app.x);
console.log(app.y);
console.log(app.z());

var x='20';

if(x==20){
    console.log("matched")
}

for(i=0;i<10;i++){
    console.log(i)
}

const arr=[2,4,7,1,3,8,3];
console.log(arr)
console.log(arr[0])

// arr.filter((item)=>{
//     console.log(item)
// })
// let result = arr.filter((item)=>{
//     return item===3;
// })

let result = arr.filter((item)=>{
    return item>3;
})
console.log(result)

// const fs=require('fs');
// const fs=require('fs').writeFileSync;
const py=require('fs').writeFileSync;

console.log("Core Modules");

// fs,Buffer,HTTP etc...

// fs.writeFileSync("Hello.txt","Pravat Yadav");
py("Hello2.txt","Pravat Yadav");

console.log("->>",__dirname)
console.log("->>",__filename)
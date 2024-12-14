//var c = 300;
let a = 300;
//{} isko scope bolte h jb ye kisi function ya if-else k sath ata h
if (true){
    let a = 10;
    const b = 20;
    var c = 30; //var use krne se jyada problems error ate h
    console.log("INNER: ", a);
    
}

console.log(a);
//console.log(b);
//console.log(c);



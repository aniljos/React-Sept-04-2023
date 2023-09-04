
// Hoisting var x, var y


console.log("x", x);//undefined
var x = 10;
console.log("x", x); // 10

var y;
console.log("y", y); // undefined

//console.log("z", z); //Uncaught exception

console.log("foo", foo);
//foo();
var foo = function foo(){

    //Hoisting var a, var msg
    console.log("in foo");
    var a = 100;
    if(a > 10){
        let msg = "hello";
        console.log("msg", msg);
    }
    //console.log("msg", msg);//Uncaught exception

}
foo();


console.log("Script over");

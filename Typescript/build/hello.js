console.log("Hello Typescript");
var x = 10; // number => Type Inference
//x = "abc"; // Compilation error => Static type checking
var y; // any infered 
y = 100;
y = "abc";
y = {};
var z; // Type annotation
z = 200;
//z = {};
var foo;
foo = function () {
    console.log("foo..");
};
var user;
user = { id: 100, name: "Abc" };

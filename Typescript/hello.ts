console.log("Hello Typescript");

var x = 10; // number => Type Inference
//x = "abc"; // Compilation error => Static type checking

var y; // any infered 
y = 100;
y = "abc";
y = {};

var z: number; // Type annotation
z = 200;
//z = {};

var foo : () => void;
foo = function(){
    console.log("foo..")
};

var user: {id: number, name: string};
user = {id: 100, name: "Abc"};

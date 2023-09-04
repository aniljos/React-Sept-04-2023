
function sum() {

    console.log("in sum norags...")

}
//function statement
// implicit args => this, arguments
function sum(a, b) {

    console.log("in sum...", arguments)
    return a + b;
}

console.log(sum(2, 3));
window.sum();
sum(2, 3, 4, 5);

//function expression
var add = function (a, b) {
    return a + b;
}

//arrow function
// no implicit args => this, arguments
var compute = (a, b) => {
    return a + b;
}
console.log("compute", compute(4, 7));
compute = (a, b) => a * b;
console.log("compute", compute(4, 7));

var obj = {
    id: 100,
    print: function () {
        console.log("id", this.id);
        var x = "hello";

        setTimeout(function () {
            var x = "welcome";
            console.log("id after 2 secs", this.id);
            console.log("id after 2 secs", x);
        }, 2000);

        setTimeout( ()=> {
            console.log("id after 2 secs in arrow fn", this.id);
        }, 2000);
    }
}

obj.print();




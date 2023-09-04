console.log("in main.ts");
//default import
//import process from './two.js';
import Process from './two.js';
function process() {
    console.log("in main.ts process");
}
process(); //main
Process(); //two.ts

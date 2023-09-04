console.log("in main.ts");

//named import
//import {process} from './two.js';
import {process as twoProcess} from './two.js';

//default import
//import process from './two.js';
import Process from './two.js';


function process(){
    console.log("in main.ts process");
}

process(); //main
Process(); //two.ts
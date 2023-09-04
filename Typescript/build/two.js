import { compute } from './one.js';
console.log("in two.ts");
//named exports
export function process() {
    console.log("in two.ts process");
    compute(3, 4);
}
//default export
export default process;

import { URL } from 'node:url';

let adr = "https://www.w3schools.com/nodejs/nodejs_url.asp"
let u = new URL(adr);

console.log(u.hostname);
console.log(u.pathname);
console.log(u.search);
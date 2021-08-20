"use strict";
//
let count = 5;
count = 10;
//count = "Atiyah"
//Const's type is a literal
const fname = "Atiyah";
// this makes a var of type any 
// let testing;
let testing;
//testing = "Justin"
testing = 5;
let student = {
    fname: "Renee",
    lname: "Hope",
    grade: 12,
    favColor: "RED"
};
let student2 = {
    fname: "Anita",
    lname: "Williams",
    grade: 12,
};
let sqr = (x) => x * x;
function toString(student) {
    return JSON.stringify(student);
}
const toStringArrow = (student) => {
    return JSON.stringify(student);
};
console.log(toString(student2));
console.log(add(5, testing));
function add(x, y) {
    let result = x + y;
    return result;
}
// Tuple
function sendMessage() {
    let tmp = Math.round((Math.random()));
    if (tmp == 1) {
        return ["success", {
                fname: "Atiyah",
                lname: "Ellerbee",
                grade: 12
            }];
    }
    else {
        return ["failure", "Something Failed"];
    }
}
for (let i = 0; i < 10; i++) {
    let [statusResult, data] = sendMessage();
    if (statusResult == "success")
        console.log(data);
}

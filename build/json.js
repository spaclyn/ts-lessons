"use strict";
/*
What is Json

Object
Array
Number
String

    "LITERAL VALUES"

false
true
null
*/
function isJson(j) { }
let testing1 = { fname: "Atiyah", data: [1, 2, 3] };
let testing2 = "Test String";
let testing3 = [1, 2, "Hello", { fname: "Atiyah" }];
isJson(testing1);
isJson(testing2);
isJson(testing3);
let test4 = { fname: "Atiyah", data: [1, 2, 3] };
let test5 = { fname: "Atiyah", data: [1, 2, 3] };
// @ts-expect-error
isJson(class Test {
});
//@ts-expect-error
isJson(isJson);

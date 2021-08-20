
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


function isJson(j: JSONValue){}
type Primative = string | number | boolean | null

//

type JSONObject = {[k: string]: JSONValue}
type JSONArray = JSONValue[]
type JSONValue = Primative | JSONObject | JSONArray

let testing1: JSONValue = { fname: "Atiyah", data: [1, 2, 3]}
let testing2: JSONValue = "Test String"
let testing3: JSONValue = [1, 2, "Hello", { fname: "Atiyah"}]

isJson(testing1)
isJson(testing2)
isJson(testing3)

let test4: JSONValue = { fname: "Atiyah", data: [1, 2, 3]}
let test5: JSONValue = { fname: "Atiyah", data: [1, 2, 3]}

// @ts-expect-error
isJson(class Test{})

//@ts-expect-error
isJson(isJson)
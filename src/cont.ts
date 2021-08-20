// type this allows us to add to the type system
type Year = string | number

enum Color {
    "Red", // 0 ,  adding a = 2 allows for number to be that starter
    "Blue", // 1
    "Yellow" // 2
}

console.log(Color.Yellow)
type Car = {
    year: Year,
    color: Color
}

// type , are unique , and cannot have duplicate identifiers 
type addInput =  number | string
function addTwoThings(x: any, y: any): string | number
{
    return x + y
}

let z = addTwoThings("2", "5")

// Gaurd .. Type Guards
if (typeof z == "string"){
    z.toUpperCase()
}
// [1, 2, 3, "Hello"] // Array<number> | number[]
let myObj: number[] | object
myObj = [1, 2, 3]
//myObj = {fname: "Atiyah"} 
if (myObj instanceof Array) {
    console.log(myObj)
} else {
    let values = Object.values(myObj)
    console.log(values)
}

// interface
// type boolean
let isDone: boolean = false;
console.log("boolean ~~", isDone);

// number

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log("decimal ~~", decimal);
console.log("hex ~~", hex);
console.log("binary ~~", binary);
console.log("octal ~~", octal);

// string

// ex1
let color: string = "blue";
console.log("string ~~", color);
color = "red";
console.log("string ~~", color);

// ex2
let fullName: string = `Dinh`;
let age: number = 20;
let sentence: string = `Hello, my name is ${fullName}.I'll be ${
  age + 1
} years old next month.`;
console.log(sentence);

// array
let list: number[] = [1, 2, 3];
let otherInit: Array<number> = [1, 2, 3];

console.log("array ~~", list);
console.log("array ~~", otherInit);

// tupple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
console.log("tupple key ~~", x[0]);
console.log("tupple value~~", x);

// ENUM
enum Color {
  Red = 20,
  Green = 26 ,
  Blue = 100,
}
let c: Color = Color.Green;
console.log("color green ~~", c);

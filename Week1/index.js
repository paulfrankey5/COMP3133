console.log("=== Week 1 Buffer Practice Start ===");

let b2 = Buffer.from([65, 66]);
console.log(b2);
console.log(b2.toString());

let b3 = Buffer.from(b2);
console.log(b3.toString());

let b4 = Buffer.alloc(10);
b4.fill("*");
console.log(b4.toString());

let b5 = Buffer.allocUnsafe(10);
b5.write("COMP3133");
console.log(b5.toString());

let b6 = Buffer.from("A 🎁🛎");
console.log(b6.toString());
console.log(b6.length);

let b7 = Buffer.concat([b4, b5, Buffer.from("-XYZ")]);
console.log(b7.toString());

console.log("=== End ===");

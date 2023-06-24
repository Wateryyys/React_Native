let a = 1;
console.log("Top level");
console.log("a = " + a);

{
    let b = 2
    console.log("inside block");
    console.log("a = " + a);
    console.log("b = " + b);
}
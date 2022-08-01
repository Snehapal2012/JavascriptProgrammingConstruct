/**Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum value */
let num1=Math.floor(Math.random()*999)+100; //random 3 digit number between 100 to 999
console.log("First number: "+num1);
let num2=Math.floor(Math.random()*999)+100; //random 3 digit number between 100 to 999
console.log("First number: "+num2);
let num3=Math.floor(Math.random()*999)+100; //random 3 digit number between 100 to 999
console.log("First number: "+num3);
if(num1>num2 && num1>num3){              //if num1 has maximum value
    console.log("First number has maximum value: "+num1);
}
else if(num2>num1 && num2>num3){          //if num2 has maximum value
    console.log("Second number has maximum value: "+num2);
}
else{                                     // if num3 has maximum value
    console.log("Third number has maximum value: "+num3);
}
if(num1<num2 && num1<num3){                       // if num1 has minimum value
    console.log("First number has minimum value: "+num1);
}else if(num2<num1 && num2<num3){                 // if num2 has minimum value
    console.log("Second number has minimum value: "+num2);
}else{                                            // if num3 has minimum value
    console.log("Third number has minimum value: "+num3);
}

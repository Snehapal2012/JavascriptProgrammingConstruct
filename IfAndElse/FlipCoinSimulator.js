/**Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly. */
let coin=Math.floor(Math.random());
console.log(coin);
if(coin>0.5){
    console.log("Heads!");
}else{
    console.log("Tails!")
}
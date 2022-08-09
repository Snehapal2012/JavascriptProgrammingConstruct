/**Write a Program where a gambler starts with Rs 100 and places Re 1 bet until he/she goes broke i.e. no more money to gamble or reaches the goal of Rs 200. Keeps track of number of times won and number of bets made. */
let money = 100
 const GOAL = 200
 let win = 0
 let lose = 0
 console.log("Intial Money is 100")

 while ((money < GOAL) && (money > 0)) {
     let bet = Math.floor(Math.random() * 2)    
     if (bet == 0) {
         money++
         win++
     }
     else {
         money--
         lose++
     }
 }
 if ((money == 200) && (money == 0)) {
     console.log("Gambler Has Won the game")
 } else {
     console.log("Gambler Has Loss the game")
 }
 console.log("Final Money: " + money + " Win Times: " + win + " Bet Times: " +(win+lose))
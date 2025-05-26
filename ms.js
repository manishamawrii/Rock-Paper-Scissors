let stone = document.querySelector(".stone")
let paper = document.querySelector(".paper")
let scissor = document.querySelector(".scissor")
let user = document.querySelector(".user")
let computer = document.querySelector(".computer")
let winner = document.querySelector(".winner")

stone.addEventListener("click",()=> spsgame("rock"))
paper.addEventListener("click",()=>spsgame("paper"))
scissor.addEventListener("click",()=> (spsgame("scissor")))


const spsgame = (userClicking)=>
   {
      console.log(userClicking)
      let comp = ["rock" ,"paper", "scissor"];
let comcho = comp[Math.floor(Math.random()*3)]
// console.log(comcho);

let result =""


   user.innerHTML= `you clicked ${userClicking} ` 
   computer.innerHTML= `computer clicked ${comcho} ` 
    //  console.log(user)
   if(userClicking===comcho){
      winner.innerHTML= "its a tie"
   }
   if(userClicking==="rock" &&comcho==="scissor"||
    userClicking==="paper" &&comcho==="rock"||
    userClicking==="scissor" &&comcho==="paper")
   {
      winner.innerHTML= "you have won"
   }
   else {
    winner.innerContent= "computer have won"

   }
}
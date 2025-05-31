let gamechoice = document.querySelectorAll(".sps");

let movesound = document.getElementById("moveSound")
let user = document.querySelector(".user")
let computer = document.querySelector(".computer")
let winner = document.querySelector(".winner")
let uscore = document.querySelector(".userscore")
let  cscore = document.querySelector(".compscore")

let compuscore = 0;
let usersscore =  0;


let computersel = ()=>{
 let choices = ["stone" , "paper" , "scissor"]
 let montu =choices[(Math.floor(Math.random()*3))]
//  console.log(montu)
 return montu;
}

gamechoice.forEach(btn=>{

   btn.addEventListener("click" , (e)=>
   {
      let usercho = e.target.getAttribute("id");
      console.log(usercho)
      user.innerHTML= `user select ${usercho}`
      movesound.play()
      let compu = computersel();
      console.log(compu)
      
       computer.innerHTML= `computer select ${compu}`
         movesound.play()
       
      //  console.log(computer.innerHTML)
      if(usercho===compu)
      {
         winner.innerHTML= "its a tie";
         winner.style.backgroundColor = "yellow"

      }
      else if(usercho==="stone" && compu==="scissor"||
         usercho==="paper" && compu==="stone"||
         usercho==="scissor" && compu==="paper"){

         winner.innerHTML = "USER WIN"
         winner.style.backgroundColor = "green"
         usersscore++;
         uscore.innerHTML= `user score :  ${usersscore}`
         
   
      }
      else{
         winner.innerHTML= "COMPUTER WIN"
         compuscore++;
         cscore.innerHTML =`computer score: ${compuscore}`
         winner.style.backgroundColor = " rgb(250, 34, 48)"
         

      }

   }) 
   
}
)


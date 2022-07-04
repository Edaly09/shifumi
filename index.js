

let choixJoueur = ""
let ordi = ""
  const pierFunction = () => {
    choixJoueur = "rock"
    humain.innerHTML = `<img src="./images/1-pierre.jpg" class="humain" alt="">`
    inteligenceFunction()
comparaisonFunction()
  }
  const but = document.getElementById("pie")

  but.addEventListener("click", pierFunction)



  const paperFunction = () =>{
    choixJoueur ="paper"
    humain.innerHTML = `<img src="./images/2-feuille.jpg" class="humain" alt="">`
    inteligenceFunction()
    comparaisonFunction()
  }

const butt = document.getElementById("feu")
butt.addEventListener("click", paperFunction)


const scissorsFunction = () =>{
    choixJoueur = "scissors"
    humain.innerHTML = `<img src="./images/3-ciseaux.jpg" class="humain" alt="">`
    inteligenceFunction()
    comparaisonFunction()
   }


const butto = document.getElementById("cis")

butto.addEventListener("click", scissorsFunction)






const inteligenceFunction = () =>{
const max = 3
const min = 1
const random = Math.floor(Math.random() * max) + min
if(random === 1){
    ordi ="rock"
    robot.innerHTML = `<img src="./images/1-pierre.jpg" class="humain" alt="">`

}
else if(random === 2){
    ordi ="paper"
    robot.innerHTML = `<img src="./images/2-feuille.jpg" class="humain" alt="">`
}
else if(random === 3){
    ordi = "scissors"
    robot.innerHTML = `<img src="./images/3-ciseaux.jpg" class="humain" alt="">`

}
else{
    `<img src=" ./images/robot.webp" class="robot" alt="">`
   
    
}
const winner = rps(choixJoueur, ordi)
comparaisonFunction()
console.log(winner)
}

const button = document.getElementById("robot")



const rps = (p1, p2) => {

      if( p1 === "scissors" && p2 ===  "paper"){
        return "Player 1 won!"
      }
        else if(p1 === "scissors" && p2 ===  "scissors"){
          return "Draw!"
        }
        
      else if( p1 === "scissors" && p2 ===  "rock"){
        return "Player 2 won!"
      }
      else if(p1 === "paper" && p2 ===  "paper"){
        return "Draw!"
      }
        else if(p1 === "paper" && p2 ==="scissors"){
        return  "Player 2 won!"
        }
        else if( p1 === "paper" && p2 ==="rock"){
        return  "Player 1 won!"
          
        }
        else if(p1 === "rock" && p2 ==="rock"){
        return "Draw!"
    
        }
        else if(p1 === "rock" && p2 ==="paper"){
        return  "Player 2 won!"
    
        }
        else if(p1 === "rock" && p2 ==="scissors"){
          return  "Player 1 won!"
      
          }
      }
    
      const comparaisonFunction = () =>{
        if(choixJoueur === "paper" && ordi === scissors){
            shifumi.innerHTML = `<h1>TU AS GAGNE </h1>`
        }
        
      }
   const shifumi = document.getElementById("shifumi")
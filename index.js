

let choixJoueur = ""
let ordi = ""
let scorJoueur = 0
let scoreOrdi = 0

  const pierFunction = () => {
      choixJoueur = "rock"
      humain.innerHTML = `<img src="./images/1-pierre.jpg" class="humain" alt="">`
      inteligenceFunction()
      resultatGame()
}
  const but = document.getElementById("pie")

  but.addEventListener("click", pierFunction)



  const paperFunction = () =>{
      choixJoueur ="paper"
      humain.innerHTML = `<img src="./images/2-feuille.jpg" class="humain" alt="">`
      inteligenceFunction()
      resultatGame()  

  }

const butt = document.getElementById("feu")
butt.addEventListener("click", paperFunction)


const scissorsFunction = () =>{
    choixJoueur = "scissors"
    humain.innerHTML = `<img src="./images/3-ciseaux.jpg" class="humain" alt="">`
    inteligenceFunction()
    resultatGame()  

}


const butto = document.getElementById("cis")

butto.addEventListener("click", scissorsFunction)


// La partie de l'intelligence artificielle

const inteligenceFunction = () =>{
const max = 3
const min = 1
const random = Math.floor(Math.random() * max) + min


if(random === 1){
    ordi ="rock"
    robot.innerHTML = `<img src="./images/1-pierre.jpg"  class="humain" alt="">`
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
}


// les conditions du jeu shifumi

const rps = (p1, p2) => {



  if( p1 === "scissors" && p2 ===  "paper"){
    scorJoueur = scorJoueur + 1

    shifumi.innerHTML = `<h1>TU AS GAGNE </h1>`
    score1.innerHTML =  `<p>${scorJoueur} points</p>`
    score2.innerHTML =  `<p>${scoreOrdi} points</p>`


    return "Player 1 won!"
  }
    else if(p1 === "scissors" && p2 ===  "scissors"){

    shifumi.innerHTML = `<h1>DRAW !</h1>`

      return "Draw!"
    }
    
  else if( p1 === "scissors" && p2 ===  "rock"){
    scoreOrdi = scoreOrdi + 1

    shifumi.innerHTML = `<h1>IA AS GAGNE </h1>`
    score1.innerHTML =  `<p>${scorJoueur} points</p>`
    score2.innerHTML =  `<p>${scoreOrdi} points</p>`


    return "Player 2 won!"
  }
  else if(p1 === "paper" && p2 ===  "paper"){
    shifumi.innerHTML = `<h1>Draw!</h1>`
    return "Draw!"
  }
    else if(p1 === "paper" && p2 ==="scissors"){
    scoreOrdi = scoreOrdi + 1

      shifumi.innerHTML = `<h1>IA AS GAGNE </h1>`
    score1.innerHTML =  `<p>${scorJoueur} points</p>`
    score2.innerHTML =  `<p>${scoreOrdi} points</p>`


    return  "Player 2 won!"
    }
    else if( p1 === "paper" && p2 ==="rock"){
    scorJoueur = scorJoueur + 1

      shifumi.innerHTML = `<h1>TU AS GAGNE </h1>`
    score1.innerHTML =  `<p>${scorJoueur} points</p>`
    score2.innerHTML =  `<p>${scoreOrdi} points</p>`


    return  "Player 1 won!"
      
    }
    else if(p1 === "rock" && p2 ==="rock"){
      shifumi.innerHTML = `<h1>DRAW ! </h1>`
    return "Draw!"

    }
    else if(p1 === "rock" && p2 ==="paper"){
        scoreOrdi = scoreOrdi + 1

        shifumi.innerHTML = `<h1>IA AS GAGNE </h1>`
        score1.innerHTML =  `<p>${scorJoueur} points</p>`
        score2.innerHTML =  `<p>${scoreOrdi} points</p>`
        return  "Player 2 won!"
    }
    else if(p1 === "rock" && p2 ==="scissors"){
    scorJoueur = scorJoueur + 1

        shifumi.innerHTML = `<h1>TU AS GAGNE </h1>`
        score1.innerHTML =  `<p>${scorJoueur} points</p>`
        score2.innerHTML =  `<p>${scoreOrdi} points</p>`
        return  "Player 1 won!"
    }
    
}
const resultatGame = () =>{

    if(scorJoueur === 3){
        fin.innerHTML = ` ${scoreOrdi} : ${scorJoueur} `
        robot.innerHTML = `<img src="./images/bad.gif"class="robot" alt="">`
        humain.innerHTML = `<img src="./images/200w.webp" class="humain" alt="">`

        

        button.innerHTML = `<button>Recommencer</button>`

        detail.innerHTML = `<p>Historiques</p>
        <h1>ROUND 1</h1>
        ${choixJoueur}
        ${ordi}
        <h2>ROUND 2</h2>
        ${choixJoueur}
        ${ordi}
        <h2>ROUND 3</h2>
        ${choixJoueur}
        ${ordi}`
      

    }
    else if( scoreOrdi === 3){
      
      humain.innerHTML = `<img src="./images/bad.gif" class="humain" alt=""> `
      robot.innerHTML = `<img src="./images/200w.webp" class="robot" alt="">`
      fin.innerHTML = ` ${scoreOrdi} : ${scorJoueur}  `
      button.innerHTML = `<button class="buttoN">Recommencer</button>`
      detail.innerHTML = `<p>Historique</p>
      <h1>ROUND 1</h1>
      ${choixJoueur}
      ${ordi}
      <h2>ROUND 2</h2>
      ${choixJoueur}
      ${ordi}
      <h2>ROUND 3</h2>
      ${choixJoueur}
      ${ordi}`
    
    }
    else if(scorJoueur > 3){
      scorJoueur = 0
    }
    else if(scoreOrdi > 3){
      scoreOrdi = 0
    }
      
}

const replayGame = () =>{
    robot.innerHTML = `<img src="./images/robot.webp"  class="robot" alt=""> `
    humain.innerHTML = `<img src="./images/humain.jpg" class="humain" alt="">`
    detail.innerHTML = ``
    fin.innerHTML = ``
    button.innerHTML = ``
    score1.innerHTML = ``
    score2.innerHTML = ``
    shifumi.innerHTML = `<h1>SHIFUMI</h1>`


}

const Recommencer = document.getElementById("button")
Recommencer.addEventListener("click", replayGame)






//Variables we use for code
let score = 0;
let wickets = 0;
let Balls = 0;
let MaxBalls
let MaxWickets

// Selecting elements
let startBtn = document.querySelector("#btn")
let TotalRuns = document.querySelector(".score")
const btn = document.querySelector(".btn")
let scoreboard = document.querySelector(".scoreboard")
let currentBall = document.querySelector(".currentball")
let img = document.querySelector(".img")
let againbtn = document.querySelector(".again")


//Function and there actions

//Start button
startBtn.addEventListener("click",()=>{
    //Getting overs and wickets by Select Options
    MaxBalls = (document.getElementById("over").value)*6;
    MaxWickets = document.getElementById("wickets").value
    btn.disabled = false

    score = 0;
    MaxBalls = (document.getElementById("over").value)*6;
    MaxWickets = document.getElementById("wickets").value
    btn.disabled = false
    Balls = 0;
    wickets = 0

    btn.disabled = false
    againbtn.disabled = true

    currentBall.innerText = "current ball"
    TotalRuns.innerHTML = ``
    scoreboard.innerText= `${score}/${wickets} (${Math.floor(Balls/6)}.${Balls%6})`
    img.setAttribute("src",`${wickets+1}.jpg`)
})


//Next Ball Function
btn.addEventListener("click",()=>{
    Balls += 1
    if(wickets == MaxWickets || Balls == MaxBalls ){
        TotalRuns.innerHTML = `Total score <b>${score}</b>`
        btn.disabled = true
        againbtn.disabled = false
    }
    else{
        let randomNumber = Math.floor(Math.random()*10)
        if(randomNumber == 0){
            currentBall.innerText = "OUT!"
            wickets = wickets + 1
            img.setAttribute("src",`${wickets+1}.jpg`)
            if(wickets == 5){
                 btn.innerText = "show score"
            }

        }
        else if(randomNumber >=1 && randomNumber <=6 && randomNumber != 5){
            currentBall.innerText = randomNumber
            score = score+ randomNumber
        }
        else{
            currentBall.innerText = "Dot Ball"
        }
        
    }
    scoreboard.innerText= `${score}/${wickets} (${Math.floor(Balls/6)}.${Balls%6})`
})

//PlayAgain Button Function
againbtn.addEventListener("click",()=>{
    score = 0;
    MaxBalls = (document.getElementById("over").value)*6;
    MaxWickets = document.getElementById("wickets").value
    // btn.disabled = false
    Balls = 0;
    wickets = 0

    btn.disabled = false
    againbtn.disabled = true

    currentBall.innerText = "current ball"
    TotalRuns.innerHTML = ``
    scoreboard.innerText= `${score}/${wickets} (${Math.floor(Balls/6)}.${Balls%6})`
    img.setAttribute("src",`${wickets+1}.jpg`)

})
let score = 0;
let wickets = 0;

const btn = document.querySelector(".btn")
let scoreboard = document.querySelector(".scoreboard")
let currentBall = document.querySelector(".currentball")

btn.addEventListener("click",()=>{

    if(wickets == 2){
        console.log("Total Score",score);
    }
    else{
        let randomNumber = Math.floor(Math.random()*10)
        if(randomNumber == 0){
            currentBall.innerText = "OUT!"
            wickets = wickets + 1
            if(wickets ==2){
                 btn.innerText = "show score"
            }

        }
        else if(randomNumber >=1 && randomNumber <=6){
            currentBall.innerText = randomNumber
            score = score+ randomNumber
        }
        else{
            currentBall.innerText = 0
        }
        scoreboard.innerText= `${score}/${wickets}`
        
        // console.log("RandomNumber",randomNumber);
        // console.log("score",score);
        // console.log("wickets",wickets);
        // console.log("------------------------------------------");
    }
})


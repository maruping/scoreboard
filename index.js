
let homeScoreCounter = 0;
let homeScore = document.getElementById("home-score");

let guestScoreCounter = 0;
let guestScore = document.getElementById("guest-score");

function addHomePoints(value){
    
    homeScoreCounter += value;    
    homeScore.textContent = homeScoreCounter;
    
}

function addGuestPoints(value){
     
    guestScoreCounter += value;    
    guestScore.textContent = guestScoreCounter;
}

function resetScores(){
    homeScoreCounter = 0;    
    homeScore.textContent = homeScoreCounter;
    
    guestScoreCounter = 0;    
    guestScore.textContent = guestScoreCounter;
}
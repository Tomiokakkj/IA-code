let score = 0;
let clickPower = 1;

let upgrades = [
{cost:10, power:1},
{cost:50, power:5},
{cost:150, power:15},
{cost:400, power:40},
{cost:1000, power:100}
];

const scoreText = document.getElementById("score");
const clickBtn = document.getElementById("clickBtn");

clickBtn.onclick = function(){
score += clickPower;
updateScore();
}

function buyUpgrade(i){

if(score >= upgrades[i].cost){
score -= upgrades[i].cost;
clickPower += upgrades[i].power;
updateScore();
alert("Upgrade comprado!");
}
else{
alert("Pontos insuficientes!");
}

}

function updateScore(){
scoreText.innerText = "Pontos: " + score;
}

let score = 0;

let rebirths = 0;

let baseClick = 1;

let clickPower = 1;

let upgrades = [
{name:"Samurai Edge", cost:10, power:1, bought:0},
{name:"Chicago Typewriter", cost:50, power:5, bought:0},
{name:"Handcannon", cost:150, power:15, bought:0},
{name:"Magnum Requiem", cost:400, power:40, bought:0},
{name:"RPG-7", cost:1000, power:100, bought:0}
];

const scoreText = document.getElementById("score");
const rebirthInfo = document.getElementById("rebirthInfo");

const clickBtn = document.getElementById("clickBtn");

clickBtn.onclick = function(){
score += clickPower;
updateUI();
}

function getRebirthMultiplier(){
return 1 + (rebirths * 0.20);
}

function buyUpgrade(i){

    let upgrade = upgrades[i];
    
    if(upgrade.bought >= 3){
    alert("Limite atingido!");
    return;
    }
    
    if(score >= upgrade.cost){
    
    score -= upgrade.cost;
    
    upgrade.bought++;
    
    // AUMENTO FORTE DO PREÇO
    upgrade.cost = Math.floor(upgrade.cost * 1.2 * (upgrade.bought + 1));
    
    recalculateClickPower();
    
    if(upgrade.bought >= 3){
    document.getElementById("up"+i).disabled = true;
    }
    
    updateUI();
    
    }else{
    alert("Pontos insuficientes!");
    }
    
    }

function recalculateClickPower(){

let total = baseClick;

upgrades.forEach(u=>{
total += u.power * u.bought;
});

clickPower = total * getRebirthMultiplier();

}

function rebirth(){

if(score < 5000){
alert("Você precisa de 5000 pontos para rebirth!");
return;
}

rebirths++;

score = 0;

upgrades.forEach((u,i)=>{

u.bought = 0;

document.getElementById("up"+i).disabled = false;

});

recalculateClickPower();

updateUI();

}

function updateUI(){

    scoreText.innerText = "Pontos: " + Math.floor(score);
    
    let bonusPercent = rebirths * 20;
    
    rebirthInfo.innerText =
    "Rebirths: " + rebirths +
    " | Bônus: +" + bonusPercent + "%";
    
    upgrades.forEach((u,i)=>{
    
    let btn = document.getElementById("up"+i);
    
    if(u.bought >= 3){
    
    btn.innerText = u.name + " - MAX!";
    
    btn.disabled = true;
    
    }else{
    
    btn.innerText =
    u.name +
    " - Custo: " + u.cost +
    " (" + u.bought + "/3)";
    
    }
    
    });
    
    }

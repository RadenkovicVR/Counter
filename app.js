const btnDecrease = document.getElementById('btn-decrease');
const btnReset = document.getElementById('btn-reset');
const btnIncrease = document.getElementById('btn-increase');
let counter = document.querySelector('.counter');

let counterNum = 0;

btnDecrease.addEventListener('click', function(){
counter.textContent = (counterNum -= 1);
})

btnReset.addEventListener('click', function(){
    counterNum = 0;
    counter.textContent = counterNum;
})

btnIncrease.addEventListener('click', function(){
    counter.textContent = (counterNum += 1);
})
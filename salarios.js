import PromptSync from "prompt-sync"

const prompt = PromptSync();

const currentWage = Number(prompt("Salario: "));
const percentage = calculetePercentageIncrease(currentWage)

const increase = currentWage * (percentage/100)
const newWage = currentWage + increase


function calculetePercentageIncrease(value) {
    if (value <= 280){
        return 20
    }else if (value <= 700) {
        return 15
    }else if (value <= 1500){
        return 10
    }else {
        return 5
    }
}

console.log(`O salario atual é de R$${currentWage}.`);
console.log(`O percentual de aumento é de ${percentage}%.`);
console.log(`Aumento de R$${increase}.`)
console.log(`O novo salario é de R$${newWage}.`);


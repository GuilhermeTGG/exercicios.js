import PromptSync from "prompt-sync"

const prompt = PromptSync();

let numberOfStudents = Number(prompt("Quantos alunos a sala possui? "));

console.clear()

let counter = 0
let bestGrade = 0
let bestStudent = ''

while (counter < numberOfStudents ){
    let studentName = String(prompt(`Nome do aluno ${counter + 1}: `))
    let studentGrade = Number(prompt(`Nota do aluno ${counter + 1}: `))
    console.clear()
 if(studentGrade > bestStudent) {
    bestStudent = studentGrade
    bestStudent = studentName
 }
 counter++
}

console.log(`A turma tem ${numberOfStudents} alunos.`);
console.log(`O aluno ${bestStudent} teve o melhor aproveitamento!`);
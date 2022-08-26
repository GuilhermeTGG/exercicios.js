import PromptSync from "prompt-sync"

const prompt = PromptSync();

const studentGrade = prompt("Nota: ");
let studentLetter = ''

if (studentGrade >= 9) {
    studentLetter = 'A'
} else if (studentGrade >= 8) {
    studentLetter= 'B'
} else if (studentGrade>= 7) {
    studentLetter = 'C'
}  else if (studentGrade >= 6) {
    studentLetter = 'D'
}  else {
    studentLetter = 'F'
}

console.log(`Aluno letra ${studentLetter}`)
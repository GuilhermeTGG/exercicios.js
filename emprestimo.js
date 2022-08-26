import PromptSync from "prompt-sync"

const prompt = PromptSync();

const loan = Number(prompt("Informe o valor do emprestímo: "));
console.clear()
const installments = Number(prompt("Informe o número de parcelas: "));
console.clear()

console.log(`Você vai pagar ${installments} parcelas de R$${((loan + (loan * 0.2)) / installments).toFixed(2)} cada parcela.`);
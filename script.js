var number = 0
var attempts = 0

function update() {
    var numberTyped = document.querySelector('#inputNum').value

    numberTyped = ''

    number = parseInt(Math.floor(Math.random() * 101))   
}

update()

function checkNumber() {
    var numberTyped = document.querySelector("#inputNum").value

    if (numberTyped > 100 || numberTyped < 0)  {
        console.log("Sabe ler não?? 🤨🤨🤨")
        alert("Sabe ler não?? 🤨🤨🤨")
        return
    } 
    if (numberTyped > number) {
        attempts++
        alert("O número correto é MENOR fiiiii!!! 🚨🚨")
    } else if (numberTyped < number) {
        attempts++
        alert("O número correto é MAIOR fiiiii!!! 🚨🚨")
    } else {
        alert(`PARABUAINS, você acertou em ${attempts} tentativas!! 🏆🏆`)
    }
}
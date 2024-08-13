let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let choice = Math.round((Math.random() * 2) + 1)
    if (choice == 1) {
        return "scissors"
    }
    else if (choice == 2) {
        return "rock"
    }
    else if (choice = 3) {
        return "paper"
    }
}

function getHumanChoice() {
    let x = prompt("Rock, paper or scissors?").toLowerCase()
    if (x === "rock" || x === "paper" || x === "scissors") {
        return x
    }
}

function playRound(humanChoice, computerChoice) {
    const div = document.querySelector("#results")
    
    const win = () => {
        const content = document.createElement("div")
        content.textContent = "You win! " + humanChoice + " beats " + computerChoice
        div.appendChild(content)
    }
    const lose = () => {
        const content = document.createElement("div")
        content.textContent = "You lose! " + computerChoice + " beats " + humanChoice
        div.appendChild(content)
    }

    if (humanChoice === "rock" && computerChoice === "scissors") {
        win()
        humanScore++
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        lose()
        computerScore++
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        win()
        humanScore++
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        lose()
        computerScore++
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        win()
        humanScore++
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        lose()
        computerScore++
    }
    else {
        const content = document.createElement("div")
        content.textContent = "It's a tie!"
        div.appendChild(content)
    }
}

function playGame() {

    const div = document.querySelector("#results")

    function checkScore() {
        if (humanScore == 5) {
        const winner = document.createElement("div")
        winner.textContent = `You win! ${humanScore}-${computerScore}`
        div.appendChild(winner)
        }
        else if (computerScore == 5) {
        const winner = document.createElement("div")
        winner.textContent = `You lose! ${computerScore}-${humanScore}`
        div.appendChild(winner)
        }
    }

    const paper = document.querySelector("#paper")
    const rock = document.querySelector("#rock")
    const scissors = document.querySelector("#scissors")

    const score = document.querySelector("#score")
    const num = document.createElement("div")

    const updateScore = () => {
        num.textContent = `Your score: ${humanScore} - Computer score: ${computerScore}`
        score.appendChild(num)
    }

    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice())
        updateScore()
        checkScore()
    })
    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice())
        updateScore()
        checkScore()
    })
    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice())
        updateScore()
        checkScore()
    })

    // for (let i = 0; i < 5; i++) {
        // const humanSelection = getHumanChoice()
        // const computerSelection = getComputerChoice()
        // playRound(humanSelection, computerSelection)
    // }

    // if (humanScore > computerScore) {
    //     console.log("You win! " + humanScore + "-" + computerScore)
    // }
    // else if (humanScore == computerScore) {
    //     console.log("It's a tie!")
    // }
    // else {
    //     console.log("Computer wins! " + computerScore + "-" + humanScore)
    // }

}

playGame()


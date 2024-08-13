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
            let win = "You win! " + humanChoice + " beats " + computerChoice
            let lose = "You lose! " + computerChoice + " beats " + humanChoice

            if (humanChoice === "rock" && computerChoice === "scissors") {
                console.log(win)
                humanScore++
            }
            else if (humanChoice === "rock" && computerChoice === "paper") {
                console.log(lose)
                computerScore++
            }
            else if (humanChoice === "paper" && computerChoice === "rock") {
                console.log(win)
                humanScore++
            }
            else if (humanChoice === "paper" && computerChoice === "scissors") {
                console.log(lose)
                computerScore++
            }
            else if (humanChoice === "scissors" && computerChoice === "paper") {
                console.log(win)
                humanScore++
            }
            else if (humanChoice == "scissors" && computerChoice == "rock") {
                console.log(lose)
                computerScore++
            }
            else {
                console.log("Tie!")
            }
        }

        function playGame() {
            for (let i = 0; i < 5; i++) {
                const humanSelection = getHumanChoice()
                const computerSelection = getComputerChoice()
                playRound(humanSelection, computerSelection)
            }

            if (humanScore > computerScore) {
                console.log("You win! " + humanScore + "-" + computerScore)
            }
            else if (humanScore == computerScore) {
                console.log("It's a tie!")
            }
            else {
                console.log("Computer wins! " + computerScore + "-" + humanScore)
            }
        }

        playGame()


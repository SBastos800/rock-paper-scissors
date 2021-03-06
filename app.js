window.onload = () => {

    const buttonsMove = document.querySelectorAll('.rps button');

    const resultGame = document.querySelector('.winner');

    const reset = document.querySelector('.reset');

 
    const computerMove = () => {
        let moves = ["rock", "paper", "scissors"];
        let randomNumber = Math.floor(Math.random() * 3);
        return moves[randomNumber];
    }

    buttonsMove.forEach((button) => {
        button.addEventListener('click', (event) => {
            const clickAll = event.target.value;
            console.log(clickAll);
            const computer = computerMove()
            console.log(computer)
            // checkResult(clickAll, computer);
            resultGame.innerHTML = `Computer chose ${computer}, ${checkResult(clickAll, computer)}`;
        })
    })

    const checkResult = (moveHuman, moveRobot) => {
        if (moveHuman === moveRobot) {
            return "It's a Draw";
        } else if ((moveHuman === "rock" && moveRobot === "scissors") ||
            (moveHuman === "paper" && moveRobot === "rock") ||
            (moveHuman === "scissors" && moveRobot === "paper")) {
            return "Human Wins";
        } else if ((moveRobot === "rock" && moveHuman === "scissors") ||
            (moveRobot === "paper" && moveHuman === "rock") ||
            (moveRobot === "scissors" && moveHuman === "paper")) {
            return "Robot Wins";
        }
    }

    const resetGame = () => {
        resultGame.innerText = "";
    }

    reset.addEventListener('click', () => {
        resetGame();  
        location.reload(true);     
    })   
}
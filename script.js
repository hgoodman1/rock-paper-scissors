document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const userChoiceDisplay = document.getElementById('user-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const resultDisplay = document.getElementById('result');
    
    const choicesArray = ['rock', 'paper', 'scissors'];
    
    choices.forEach(choice => choice.addEventListener('click', (e) => {
        const userChoice = e.target.id;
        userChoiceDisplay.innerText = `You chose: ${userChoice}`;
        const computerChoice = generateComputerChoice();
        computerChoiceDisplay.innerText = `Computer chose: ${computerChoice}`;
        const result = getResult(userChoice, computerChoice);
        resultDisplay.innerText = `Result: ${result}`;
    }));
    
    function generateComputerChoice() {
        const randomChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
        return randomChoice;
    }
    
    function getResult(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'It\'s a draw!';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }
});

//VARIABLES: Establish variables.

var keyPressed; // records the key that is pressed.
var keyPressedCount = 0; //Check to see if it is the first time clicked.
//var wins = 0;
var guessesRemaining = 5;
var underscores = "";

//Create word to be guessed.
var easyWordBank = ["cat", "dog", "frog", "cow", "pig"];
var lettersGuessed = [];
var currentWordToGuess = "";
var endOfGameText = "";

//experimental
var firstLetter = "";
var secondLetter = "";
var thirdLetter = "";
var fourthLetter = "";

//ar gameSound = new sound("../sounds/backgroundGameSound.mp3");

//EVENT LISTENER: Create event listener for any key that is pressed.
document.onkeyup = function(event)
{

    keyPressed = event.key; //Determines which key is pressed
    //Determine if this is the first time the user clicks the button
    keyPressedCount++;
    console.log(keyPressedCount);
    if(keyPressedCount == 1)
    {
        startGame();
    }
    else
    {
        fillTextFields();
    }

}

//FUNCTIONS

    function  playSound(){
    gameSound.play();
     }

     //Generates the word
    function generateWord()
    {
        var calculateWordPosition = Math.floor(Math.random() * easyWordBank.length);
        currentWordToGuess = easyWordBank[calculateWordPosition];
        console.log(currentWordToGuess);
    }

    function startGame()
    {
        document.getElementById("preGameText").innerHTML = "Guess the letter!";
        generateWord();
        fillTextFields();
    }

    //fills the text fields
    function fillTextFields()
    {
        lettersGuessed.push(keyPressed);

        //add underscores
        if(keyPressedCount == 1) {
            for (var i = 0; i < currentWordToGuess.length; i++) {
                underscores = underscores.concat() + " ___ ,";
                console.log(underscores);
            }
        }

        //Check for win ??????????????????????????????????????
        firstLetter = currentWordToGuess.charAt(0);
        secondLetter = currentWordToGuess.charAt(1);
        thirdLetter = currentWordToGuess.charAt(2);
        fourthLetter = currentWordToGuess.charAt(3);

        //How do I check for to see if individual guesses/letters = the current word.
        //Add sound and a sprite sheet?
        guessesRemaining -=1;
        console.log(guessesRemaining);

        //check the word inside
        checkEachLetter();

        //Game is over
        if(guessesRemaining ==0)
        {
            gameOver();
        }
        else{
            //document.getElementById("numberOfWins").innerHTML = " Number of wins:  " +wins;
            document.getElementById("wordWithSpaces").innerHTML = " Current word hint:  " +underscores; //How do I put spaces
            document.getElementById("numberOfGuesses").innerHTML = "Guesses Remaining:  " +guessesRemaining;
            document.getElementById("lettersAlreadyGuessed").innerHTML = "Letter already guessed:  " +lettersGuessed;
            //append?
        }

    }

    //Checks/finds each letter in the word
    function checkEachLetter()
    {
        for(var i =0; i< currentWordToGuess.length; i++)
        {
            currentWordToGuess.charAt(i);
            console.log(currentWordToGuess.charAt(i));
        }


        // firstLetter = currentWordToGuess.charAt(0);
        // secondLetter = currentWordToGuess.charAt(1);
        // thirdLetter = currentWordToGuess.charAt(2);
        // fourthLetter = currentWordToGuess.charAt(3);

        // console.log(firstLetter);
        // console.log(secondLetter);
        // console.log(thirdLetter);
        // console.log(fourthLetter);


        //return firstLetter;
    }

//game is over
function gameOver()
{
    endOfGameText = "The word is " +currentWordToGuess +" . Press any key to start over";
    document.getElementById("preGameText").innerHTML = endOfGameText;
    //<i class="fa fa-arrow-left" aria-hidden="true"></i>
    //document.getElementById("numberOfWins").innerHTML = " Number of wins:  " +wins;
    document.getElementById("wordWithSpaces").innerHTML = " Current word hint:  " +underscores;
    document.getElementById("numberOfGuesses").innerHTML = "Guesses Remaining:  " +guessesRemaining;
    document.getElementById("lettersAlreadyGuessed").innerHTML = "Letter already guessed:  " +lettersGuessed; //How do I get to display without comma, e.g. ,r,d,j

    //Check to see if there is a winner (word has been solved).

    //Reset variables
    lettersGuessed = [];
    keyPressedCount = 0;
    underscores = "";
    guessesRemaining = 5;
    currentWordToGuess ="";
    //playAgain();
}



    //User plays the game again.
    // function playAgain(){
    //     document.onkeyup = function(event)
    //     {
    //         fillTextFields();
    //     }
    // }









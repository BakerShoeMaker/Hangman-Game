//VARIABLES: Establish variables.

var keyPressed; // records the key that is pressed.
var keyPressedCount = 0; //Check to see if it is the first time clicked.
//var wins = 0;
var guessesRemaining = 5;
var underscores = "";

//Create word to be guessed.
var easyWordBank = ["cat", "dog", "can", "cow", "pig"];
var lettersGuessed = []; //When user inputs letter
var currentWordToGuess = ""; //Word that is generated from easyWordBank.
var answerArray = [];

var endOfGameText = "";

//experimental
var firstLetter = "";
var secondLetter = "";
var thirdLetter = "";
var fourthLetter = "";

//Sounds
var soundCorrect = new Audio();
    soundCorrect.src = "assets/sounds/ding.mp3";
var soundIncorrect = new Audio();
    soundIncorrect.src = "assets/sounds/horn_wrong.mp3";

//EVENT LISTENER: Create event listener for any key that is pressed.
document.onkeyup = function(event)
{

    keyPressed = event.key; //Determines which key is pressed
    //Determine if this is the first time the user clicks the button
    keyPressedCount++;
    console.log("This is the key that was pressed: " +keyPressedCount);
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
    function preloadSound(){
     }

     //Generates the word
    function generateWord()
    {
        var calculateWordPosition = Math.floor(Math.random() * easyWordBank.length);
        currentWordToGuess = easyWordBank[calculateWordPosition];
        console.log("This is the current word to guess: " +currentWordToGuess);
        answerArrayFunction();
    }

    function startGame()
    {
        document.getElementById("preGameText").innerHTML = "Guess the letter!";
        generateWord();
        fillTextFields();
        preloadSound();
    }
    //Pushes the word generated into an answer array to compare.
    function answerArrayFunction()
    {
        for(var i =0; i< currentWordToGuess.length; i++)
        {
            answerArray.push(currentWordToGuess.charAt(i));
            console.log("This is each letter: "+answerArray);
        }


    }


    //fills the text fields
    function fillTextFields()
    {
        lettersGuessed.push(keyPressed);

        //add underscores
        if(keyPressedCount == 1) {
            for (var i = 0; i < currentWordToGuess.length; i++) {
                underscores = underscores.concat() + " ___ ,";
                //console.log(underscores);
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
        //console.log(guessesRemaining);

        //check the word inside
        checkEachLetter();
        if(keyPressedCount > 1){
                if(keyPressed == answerArray[0] || keyPressed == answerArray[1] || keyPressed == answerArray[2] )//what about words > 3?
                {
                    //play correct sound.
                    console.log("You got a letter!" +keyPressed);
                    soundCorrect.play();
                }
                else
                {
                    //play incorrect sound.
                    console.log("That's the wrong answer");
                    soundIncorrect.play();
                }
        }
        //Game is over
        if(guessesRemaining ==0)
        {
            gameOverLose();
        }
        else{
            //document.getElementById("numberOfWins").innerHTML = " Number of wins:  " +wins;
            document.getElementById("wordWithSpaces").innerHTML = " Current word hint:  " +underscores; //How do I put spaces
            document.getElementById("numberOfGuesses").innerHTML = "Guesses Remaining:  " +guessesRemaining;
            document.getElementById("lettersAlreadyGuessed").innerHTML = "Letter already guessed:  " +lettersGuessed;
            //append?
            //console.log("Key press count: " +keyPressedCount);
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



        //return firstLetter;
    }

//game is over
function gameOverLose()
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

function gameOverWin()
{




}


    //User plays the game again.
    // function playAgain(){
    //     document.onkeyup = function(event)
    //     {
    //         fillTextFields();
    //     }
    // }









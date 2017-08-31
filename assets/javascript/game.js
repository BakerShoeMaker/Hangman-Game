//VARIABLES: Establish variables.

var keyPressed;
var keyPressedCount = 0; //Check to see if it is the first time clicked.
var wins = 0;
var guessesRemaining = 5;


//Create word to be guessed.
var easyWordBank = ["cat", "dog", "frog", "cow", "pig"];
var lettersGuessed = [];
var currentWordToGuess = "";

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

    function fillTextFields()
    {
        lettersGuessed.push(keyPressed);
        guessesRemaining -=1;
        console.log(guessesRemaining);
        //Game is over
        if(guessesRemaining ==0)
        {
            //document.getElementById("preGameText").innerHTML = "Try again? The word is " +currentWordToGuess " . Press any key to play again.";
            document.getElementById("numberOfWins").innerHTML = " Number of wins:  " +wins;
            document.getElementById("wordWithSpaces").innerHTML = " Current word hint:  " +currentWordToGuess;
            document.getElementById("numberOfGuesses").innerHTML = "Guesses Remaining:  " +guessesRemaining;
            document.getElementById("lettersAlreadyGuessed").innerHTML = "Letter already guessed:  " +lettersGuessed; //How do I get to display without comma, e.g. ,r,d,j

            //Reset variables
            lettersGuessed = [];
            keyPressedCount = 0;
            guessesRemaining = 5;
            currentWordToGuess ="";
            //playAgain();
        }
        else{
            document.getElementById("numberOfWins").innerHTML = " Number of wins:  " +wins;
            document.getElementById("wordWithSpaces").innerHTML = " Current word hint:  " +currentWordToGuess; //How do I put spaces (___, ___, ___) For loop?
            document.getElementById("numberOfGuesses").innerHTML = "Guesses Remaining:  " +guessesRemaining;
            document.getElementById("lettersAlreadyGuessed").innerHTML = "Letter already guessed:  " +lettersGuessed;
            //append?
        }

    }

    //User plays the game again.
    // function playAgain(){
    //     document.onkeyup = function(event)
    //     {
    //         fillTextFields();
    //     }
    // }




//Output - Create question
    //1) <p> The word is _______________ ? </p>
    //2) <p> Try and guess 1 letter of the word I'm and thinking! </p>
    //3) <p> Enter the letter on your keyboard </p>
        //4) <p> Number of Guesses Remaining: </p>
        //5) <p> Letters Already Guessed: </p> push letters guess into an array (array.push()).

//*After the user wins/loses the game should automatically choose another word and make the user play it.

//Create logic for figuring out letter typed in.
    //1 If letter typed in === letter in word
            //Do something here.

    //2 If letter typed in != letter in word
            //Do something here.

    //Check to see if number of guesses = 9
            //If === 9 then game over.

                //If game over then stop (add
            //If they guess the whole word then ("Yeah! You are awesome!, then start over, reset the variables).


//Output - Provide the answers




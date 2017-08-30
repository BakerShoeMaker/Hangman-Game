//console.log(Guessesworld!");

//VARIABLES: Establish variables.
var wins = 0;
var guessesRemaining = 0;
var totalGueesses = 0;
var letteresGuessed = [];


//Create word to be guessed.
var easyWordBank = ["cat", "dog", "frog", "cow", "pig"];
var lettersGueesed = [];

//EVENT LISTENER: Create event listener for any key that is pressed.
document.onkeyup = function(event)
{
var keyPressed = event.key; //Determines which key is pressed
alert(keyPressed);
startGame(); //Start the game startGame();
}

//FUNCTIONS
    function startGame()
    {
        document.getElementById("preGameText").innerHTML = "Guess the letter!";
        fillTextFields();
    }

    function fillTextFields()
    {

        document.getElementById("numberOfWins").innerHTML = " Number of wins:  " +wins;
        document.getElementById("numberOfGuesses").innerHTML = "Guesses Remaining:  " ;
        document.getElementById("lettersAlreadyGuessed").innerHTML = "Letter already guessed:  ";
        alert(guessesRemaining);
        //document.getElementById("numberOfGuesses").innerHTML = "<p> Number of Guesess:" +alreadyGuessed "<p>";
    }



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




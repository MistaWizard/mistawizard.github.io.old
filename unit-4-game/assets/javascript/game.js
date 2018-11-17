// Variable to set random Pokedex number
var pokeDexNumber = Math.floor(Math.random() * 101) +19;
$("#pokeNumber").text(pokeDexNumber);

// Variables to set the random Pokescore numbers for each of the four starter Pokemon
var pikaNum = Math.floor(Math.random() * 11) + 1;
var charmNum = Math.floor(Math.random() * 11) + 1;
var squiNum = Math.floor(Math.random() * 11) + 1;
var bulbNum = Math.floor(Math.random() * 11) + 1;

// The beginning Pokescore should be set to 0
var pokeScore = 0;
$("#playerScore").text(pokeScore);

// Variables to set the wins and losses on page load
var winCounter = 0;
var lossCounter = 0;
$('#pokeWins').text(winCounter);
$('#pokeLosses').text(lossCounter);

// Function used to start the game
function startGame() {

  // Reset Pokescore at the beginning of the game
  pokeScore = 0;
  $("#playerScore").text(pokeScore);

  // Determine the random Pokedex number and write it to the proper section of the html
  pokeDexNumber = Math.floor(Math.random() * 101) + 19;
  $("#pokeNumber").text(pokeDexNumber);

  // Run the math to determine the values of each Pokemon
  pikaNum = Math.floor(Math.random() * 11) + 1;
  charmNum = Math.floor(Math.random() * 11) + 1;
  squiNum = Math.floor(Math.random() * 11) + 1;
  bulbNum = Math.floor(Math.random() * 11) + 1;
}

// Only winners get to see this function
function win() {

	$("#whatHappened").text("You win!");
	winCounter ++;
	$("#pokeWins").text(winCounter);
	startGame();
}

// Try harder if you see this alot
function lose() {

	$("#whatHappened").text("Try Again!");
	lossCounter ++;
	$("#pokeLosses").text(lossCounter);
	startGame();
}

// Pikachu button
$('#pika').on ('click', function(){
    pokeScore = pokeScore + pikaNum;
    
    $('#playerScore').text(pokeScore); 
          
        if (pokeScore == pokeDexNumber){
          win();
        }
        else if (pokeScore > pokeDexNumber){
          lose();
        }   
  });  

// Charmander button
$('#charm').on ('click', function(){
    pokeScore = pokeScore + charmNum;
    
    $('#playerScore').text(pokeScore); 
         
        if (pokeScore == pokeDexNumber){
          win();
        }
        else if (pokeScore > pokeDexNumber){
          lose();
        }   
  });  

// Squirtle button
$('#squi').on ('click', function(){
    pokeScore = pokeScore + squiNum;
    
    $('#playerScore').text(pokeScore); 
          
        if (pokeScore == pokeDexNumber){
          win();
        }
        else if (pokeScore > pokeDexNumber){
          lose();
        }   
  });  

// Bulbasaur button
$('#bulb').on ('click', function(){
    pokeScore = pokeScore + bulbNum;
    
    $('#playerScore').text(pokeScore); 
         
        if (pokeScore == pokeDexNumber){
          win();
        }
        else if (pokeScore > pokeDexNumber){
          lose();
        }   
}); 
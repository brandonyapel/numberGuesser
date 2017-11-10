console.log('js');

var randomNumber

$(document).ready(function(){
    createRandomNumber()
    $('#Submit-Button').on('click',submitGuess)
    $('#New-Game-Button').on('click',startNewGame)
}//endfunction
);//end .ready

function createRandomNumber (){
    randomNumber=Math.floor(Math.random()*10)+1;
    console.log('Random Number:',randomNumber);
};//end createRandomNumber

function submitGuess(){
    var guess = $('#Input-Number').val()
    console.log('Guess:',guess);
    if(guess==randomNumber){
        $('#Number-Guesser-Game').css('background-color','green');
        console.log('correct guess')
        $('#Input-Feedback').append('<li>'+guess+' is a Correct Guess!</li>');
        newGameButton()
    }else if(guess>randomNumber){
        $('#Number-Guesser-Game').css('background-color','orange');
        console.log('guess is greater than randomNumber')
        $('#Input-Feedback').append('<li>'+guess+' is too high</li>');
    }else if(guess<randomNumber){
        $('#Number-Guesser-Game').css('background-color','yellow');
        console.log('guess is less than randomNumber')
        $('#Input-Feedback').append('<li>'+guess+' is too low</li>');
    }
};//end submitGuess Function

function newGameButton(){
    $('#Submit-Button').replaceWith('<button id="New-Game-Button">New Game</button>')
    console.log('newGameButton() called')
    $('#New-Game-Button').on('click',startNewGame)
};//end newGame Button

function startNewGame(){
    createRandomNumber()
    console.log('startNewGame() called')
    $('#Number-Guesser-Game').css('background-color','white');
    $('#Input-Feedback').childre  n().remove()
    $('#Input-Feedback').append('<li>New Game</li>');
    $(this).replaceWith('<button id="Submit-Button">Submit Guess</button>')
    $('#Submit-Button').on('click',submitGuess)  
}


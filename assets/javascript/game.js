$(document).ready(function () {

    $( document ).ready(function() {
        var numberToGuess = 53;
        var counter = 0;
        var number1 = [10];
        var number2 = [5];
        var number3 = [3];
        var number4 = [7];
        $('number1 number2 number3 number4').text(numberToGuess);
        for (var i=0; i< number1.length; i++){
          var imageCrystal1 = $('<img>');
       
    <!DOCTYPE html>
    <html lang="eng">
    <head>
        <meta charset="UTF-8">
        <Title>* Crystals *</Title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="./assets/css/reset.css">
        <link rel="stylesheet" type="text/css" href="./assets/css/style.css">
    
    </head>
    
    <header id="masthead text-center">
        <div class="container"></div>
            <h1>Lets Play With Crystals!</h1>
    </div>
    </header>
    
    <body>
    
    <div class="container-">
        <div class="row">
            <div class="col-sm-12">
                <br>
            <h2><strong>The game is simple...</strong></h2><br>
            <p>We give you a number randomly generated to start the game.</p><br>
            <p>Each one of the crystals also has a randomly generated number attached to it, and they do change every game! </p>
            <br><p>Match the original score by clicking on your crystals.</p>
            </div>
        </div>
    </div>
    <br><br>
    <!--Crystal images for the buttons -->
    
        <div class="crystals">
            <img src="./assets/images/cry1.jpg" id="blue" alt="Blue Crystal">
            <img src="./assets/images/cry2.jpg" id="purple" alt="Purple Crystal">
            <img src="./assets/images/cry3.jpg" id="red" alt="Red Crystal">
            <img src="./assets/images/cry4.jpg" id="yellow" alt="Yellow Crystal">
        </div>
    
    
        
    
    <script type="text/javascript" src="assets/javascript/game.js"></script>
    
    </body>
    </html>
    
    
    
      
      });
    </script>
});
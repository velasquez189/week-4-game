$(document).ready(function () {

  var number = Math.floor((Math.random() * 102) + 19);

  var blueC = Math.floor((Math.random() * 12) + 1);
  var purpleC = Math.floor((Math.random() * 12) + 1);
  var redC = Math.floor((Math.random() * 12) + 1);
  var yellowC = Math.floor((Math.random() * 12) + 1);



  $(".numbers").html(number);

//onClick images 
  $("#blue").click(function () {
    update(blue);
  });
  $("#purple").click(function () {
    update(purple);
  });
  $("#red").click(function () {
    update(red);
  });
  $("#yellow").click(function () {
    update(yellow);
  });
  $(".dropdown").click(function () {
    $(".instructions").toggle("slow");
  })

  //Reset game after each round
  function reset() {
    number = Math.floor((Math.random() * 102) + 19);
    $(".numbers").html(number);
    blue = Math.floor((Math.random() * 12) + 1);
    purpleC = Math.floor((Math.random() * 12) + 1);
    redC = Math.floor((Math.random() * 12) + 1);
    yellowC = Math.floor((Math.random() * 12) + 1);
    guessTotal = 0;
    $(".guesses").html(guessTotal);
  };

  function update(hue){
    guessTotal += hue;
    $(".guesses").empty();
    $(".guesses").append(guessTotal);

    if (guessTotal > number) {
      losses++;
      $("#losses").html(losses);
      reset();
      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      };
      currentStreak = 0
      $("#current").html(currentStreak);
    } else if (guessTotal == number) {
      wins++;
      $("#wins").html(wins);
      reset();
      currentStreak++;
      $("#current").html(currentStreak);
    };
  };
</script >

$(document).ready(function () {

  var targetValue = Math.floor(Math.random() * 102 + 19);

  console.log("target value " + targetValue);

  $("#targetValue").html(targetValue);

 

  // Is it BETWEEN 1 & 12 or Is it 1-12, inclusive??//

  var crystalOneValue = Math.floor(Math.random() * 12 + 1);
  // console.log("crystal one value " + crystalOneValue);

  var crystalTwoValue = Math.floor(Math.random() * 12 + 1);
  // console.log("crystal two value " + crystalTwoValue);

  var crystalThreeValue = Math.floor(Math.random() * 12 + 1);
  // console.log("crystal three value " + crystalThreeValue);

  var crystalFourValue = Math.floor(Math.random() * 12 + 1);
  // console.log("crystal four value " + crystalFourValue);

  var counter = 0;
  var wins = 0;
  var losses = 0;

$("#wins").html(wins);
$("#losses").html(losses);



  // keeping javascript here just to remember how to do it - for reference//
  // document.getElementById("crystalOneValue").innerHTML = crystalOneValue;//

//leaving these here so I can test easier//
  $("#crystalOneValue").html(crystalOneValue);
  $("#crystalTwoValue").html(crystalTwoValue);
  $("#crystalThreeValue").html(crystalThreeValue);
  $("#crystalFourValue").html(crystalFourValue);

  
  function reStartGame() {
    targetValue = Math.floor(Math.random() * 102 + 19);
    $("#targetValue").html(targetValue);
    crystalOneValue = Math.floor(Math.random() * 12 + 1);
    crystalTwoValue = Math.floor(Math.random() * 12 + 1);
    crystalThreeValue = Math.floor(Math.random() * 12 + 1);
    crystalFourValue = Math.floor(Math.random() * 12 + 1);
    console.log("reset " + targetValue);
    console.log("crystal one reset " + crystalOneValue);
    counter = 0;
    $("#counter").html(counter);
  }

  function printCounter() {
    $("#counter").html(counter);
  }

  function win() {
    
    alert("you win");
    wins++;
    $("#wins").html(wins);
    reStartGame();
  }

  function lose() {
    alert("you lose");
    losses++;
    $("#losses").html(losses);
    reStartGame();
  }
//user input/clicks on crystals//

  $("#crystalOneValue").click(function () {
    counter = counter + crystalOneValue;
    // $("#counter").html(counter);
    printCounter();
    $("#counter").html(counter);

    if (counter == targetValue) {
      win();
    }
    else if (counter > targetValue) {
      lose();
    }
    console.log(counter);
  });

  $("#crystalTwoValue").click(function () {
    counter = counter + crystalTwoValue;
    // $("#counter").html(counter);
    printCounter();

    if (counter == targetValue) {
      win();
    }
    else if (counter > targetValue) {
      lose();
    }

    console.log(counter);
  });

  $("#crystalThreeValue").click(function () {
    counter = counter + crystalThreeValue;
    printCounter();
    // $("#counter").html(counter);
    if (counter == targetValue) {
      win();
    }
    else if (counter > targetValue) {
      lose();
    }
  
    console.log(counter);
  });

  $("#crystalFourValue").click(function () {
    counter = counter + crystalFourValue;
    printCounter();
    // $("#counter").html(counter);
    if (counter == targetValue) {
      win();  
    }
    else if (counter > targetValue) {
      lose();
    }
  
    console.log(counter);
  });




  // //onclick event to start game//

  //display the crystal value in the DOM//
  // $("#counter").html(counter);



  // //if counter equals targetValue, let player know//
  // if (counter === targetValue) {
  //   alert("You Win");
  //   win();
  // }
  // else if (counter > targetValue) {
  //   alert("You Lose");
  //   lose();
  // }
  // if totalSum is less than targetValue, user can keep guessing//



  // var counter;
  // var scoreTotal;
  // var losses;
  // var crystalValue;
  // var randomCrystalValue;
});
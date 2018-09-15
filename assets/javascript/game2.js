$(document).ready(function () {

    var targetValue = Math.floor(Math.random() * 102 + 19);

    console.log("target value " + targetValue);

    var counter = 0;

    // Is it BETWEEN 1 & 12 or Is it 1-12, inclusive??//

    var crystalOneValue = Math.floor(Math.random() * 12 + 1);

    console.log("crystal one value " + crystalOneValue);

    var crystalTwoValue = Math.floor(Math.random() * 12 + 1);
    console.log("crystal two value " + crystalTwoValue);

    var crystalThreeValue = Math.floor(Math.random() * 11.999999999 + 1);
    console.log("crystal three value " + crystalThreeValue);

    var crystalFourValue = Math.floor(Math.random() * 11.999999999 + 1);
    console.log("crystal four value " + crystalFourValue);



    // keeping javascript here just for reference//
    // document.getElementById("crystalOneValue").innerHTML = crystalOneValue;//

    $("#crystalOneValue").html(crystalOneValue);
    $("#crystalTwoValue").html(crystalTwoValue);
    $("#crystalThreeValue").html(crystalThreeValue);
    $("#crystalFourValue").html(crystalFourValue);

    //duplicate this function for each crytal

    });

    $("#crystalOneValue").click(function () {
        counter = counter + crystalOneValue;
        $("#counter").html(counter);
        console.log(counter);
        printCounter();
      });
      
      $("#crystalTwoValue").click(function () {
        counter = counter + crystalTwoValue;
        $("#counter").html(counter);
        console.log(counter);
      });
    
      $("#crystalThreeValue").click(function () {
        counter = counter + crystalThreeValue;
        $("#counter").html(counter);
        console.log(counter);
      });
    
      $("#crystalFourValue").click(function () {
        counter = counter + crystalFourValue;
        $("#counter").html(counter);
        console.log(counter);
      });
    


    // //onclick event to start game//

    //display the crystal value in the DOM//
    $("#targetValue").html(targetValue);
    $("#counter").html(counter);

    function reStartGame() {
        targetValue=Math.floor(Math.random()*102+19);
        console.log("reset " + targetValue);
    };
    
    function printCounter() {
        $("#counter").html(counter);
        
    }
        printCounter();

    // //if totalSum of user choices equals targetValue, let player know//
    // if (parseInt(totalSum)) === targetValue) {
    //     $("#result").text("You win");
    // }
    // if totalSum is less than targetValue, user can keep guessing//


    // //display the sum of the crystal the user clicked on//
    // $("#counter").text(counter);

});
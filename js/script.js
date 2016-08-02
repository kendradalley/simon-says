$(document).ready(function() {

    // define variables
    var userPattern = [];
    var simonPattern = [];
    var round = 0; //round starts at 1 with start button
    // var result = '';
    // var winValue = 0; //

    //audio variables
    var redAudio = new Audio(
        'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    var greenAudio = new Audio(
        'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    var blueAudio = new Audio(
        'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');

    var yellowAudio = new Audio(
        'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
    var audioBuzzer = new Audio('https://s3-us-west-2.amazonaws.com/guylemon/Buzzer.mp3');

    // play audio with button click

    // function playAudio() {
    //     if (choice === 'red') {
    //         playAudio('redAudio');
    //     } else if (choice === 'green') {
    //         playAudio('greenAudio');
    //     } else if (choice === 'blue') {
    //         playAudio('blueAudio');
    //     } else if (choice === 'yellow') {
    //         playAudio('yellowAudio');
    //     }

    // };


    // get random pick from computer 
    function compColor() {
        colors = [red.id, green.id, blue.id, yellow.id];
        compChoice = colors[Math.floor(Math.random() * colors.length)];
        return compChoice;

    };
    compColor();

    // get Users choice, push into array ✓


     $(".btn").each(function() {
        $(this).click(function() {
            console.log("button clicked");
            var UserChoice = $(this).attr('id');
            userPattern.push(UserChoice);
            // console.log(UserChoice);
            // console.log(userPattern);
        });
    });


    //start game
    $("#start").on("click", function() {
        round = 1; 
        simonPattern = [];
        userPattern = [];
        gameStart();
        // console.log("start button clicked")
    });


    //AI makes first move
    function gameStart() {
        var cpucolor = compColor();
        simonPattern.push(compColor); 
        // playAudio();
        $("#" + cpucolor).addClass("lit"); 
        setTimeout(function() {
            $("#" + cpucolor).removeClass("lit");
        }, 800);

      };

    //make it harder after certain rounds
        // if (round >= 6) {
        //     speed = 700;
        // } else if (round >= 10) {
        //     speed = 600;
        // } else if (round >= 15) {
        //     speed = 400;
        // }
        // round += 1;
    // };



//         function comparePatterns() {
//       $(simonPattern).each(function() {  {
//         //loop through each element in array to see if it matches user array
//         if (userPattern[i] != simonPattern[i]) {
//           return (false);
//         }
//         return (true);
//     }


//     //reset the game/new game
//     function reset() {

//         for (var i = 0; i < boxes.length; i++) {
//             userPattern = [];
//             simonPattern = [];
//             round = 0;
//             winValue = 0;
//         }


});

 $(document).ready(function() {

     var turn = 0;
     var simonPattern = [];
     var userPattern = [];
     var message = document.getElementById("message");
     // var gameStatus = {}; use for messages

     //use .getElementById because it returns just the tag, instead of $ because it returns an array of objects.. not what we want
     var red = document.getElementById("red");
     var green = document.getElementById("green");
     var blue = document.getElementById("blue");
     var yellow = document.getElementById("yellow");

     var redAudio = new Audio('simonSound-red.mp3');
     var greenAudio = new Audio('simonSound-green.mp3');
     var blueAudio = new Audio('simonSound-blue.mp3');
     var yellowAudio = new Audio('simonSound-yellow.mp3');

     // start .start button function
     $("#start").on("click", function() {
         turn = 1;
         simonPattern = [];
         userPattern = [];
         gameStart();
     });
     // end start button function

     // start simonaudio function
     function simonAudio() {
        for(i=0; i < simonPattern.length; i++){
         if (choice == red || simonPattern[i] == red) {
             redAudio.play();
         } else if (choice == blue) {
             blueAudio.play();
         } else if (choice == green) {
             greenAudio.play();
         } else if (choice == yellow) {
             yellowAudio.play();
         }
         }
     };
     // end simonaudio function
     // random color generator
     function compColor() {
         colors = [red, green, blue, yellow];
         choice = colors[Math.floor(Math.random() * colors.length)];
         return choice;

     };
     // end random color generator

     // start gameStart function 
     function gameStart() {
         $("#message").empty()
         document.getElementById("score").innerHTML = turn;
         compColor();
         simonPattern.push(choice);
         console.log(simonPattern);
         simonAudio();
         $(choice).addClass("lit");
         setTimeout(function() {
             $(choice).removeClass("lit");
         }, 800);
         return;
     };
     // end gameStart function

     // start gameRun function
     function gameRun() {

         var counter = 0;

         var myInterval = setInterval(function() {
             console.log('In interval:', counter);
             if (counter === simonPattern.length - 1) {
                 clearInterval(myInterval);
             };
             simonAudio();
             $(simonPattern[counter]).addClass("lit");

             setTimeout(function() {
                 $(simonPattern[counter]).removeClass("lit");
                 counter++;
                 console.log('timeout');
             }, 500);

         }, 1000);

     };

     // start checkPattern
     function checkPattern() {
         // if (userPattern.length !== simonPattern.length)
         //     return false;
         for (var i = userPattern.length; i--;) {
             if (userPattern[i] !== simonPattern[i])
                 return false;
             // else if (userPattern.length !== simonPattern.length)
             //     return false;
         }
     return true;
 };
 // end of checkPattern


 // start of nextTurn function
 function nextTurn() {
     // setTimeout(function() {

     if (checkPattern()) {
         message.innerHTML = "Good job, keep going!";
         userPattern = []; //need to empty array everytime
         turn++;
         $("#score").html(turn);
         compColor();
         simonPattern.push(choice);
         checkTurn();
         gameRun();

     } else {
         message.innerHTML = "GAME OVER. Press START to play again."

     };
     return;
     // gameStart();
     // }, 1000);
         console.log(simonPattern);
 };


 // end of nextTurn function

 // start of lengthCheck function
 function lengthCheck() {
     if (userPattern.length == simonPattern.length) {
         nextTurn();
     };
     return;
 };
 // end of lengthCheck function

 function checkTurn() {
     if (turn >= 21) {
         message.innerHTML = "Congrats! You won!";
         simonPattern = [];
         userPattern = [];
     }
     return;
 };

 //listen for user clicks-- updated. 
 $(".btn").mousedown(function() {
     $(this).addClass("lit");
     userPattern.push(this);
 }); $(".btn").mouseup(function() {
     $(this).removeClass("lit");
     lengthCheck();
 });
 // end of click listeners

 //start userAudio clicks
 $("#red").mousedown(function() {
     redAudio.play();
 }); $("#green").mousedown(function() {
     greenAudio.play();
 }); $("#blue").mousedown(function() {
     blueAudio.play();
 }); $("#yellow").mousedown(function() {
     yellowAudio.play();
 });
 // end userAudio clicks
 });

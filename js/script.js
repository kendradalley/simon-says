 $(document).ready(function() {

     var turn = 0;
     var simonPattern = [];
     var userPattern = [];
     var message = document.getElementById("message");

     var red = document.getElementById("red");
     var green = document.getElementById("green");
     var blue = document.getElementById("blue");
     var yellow = document.getElementById("yellow");

     var redAudio = new Audio('simonSound-red.mp3');
     var greenAudio = new Audio('simonSound-green.mp3');
     var blueAudio = new Audio('simonSound-blue.mp3');
     var yellowAudio = new Audio('simonSound-yellow.mp3');

     // start
     $("#start").on("click", function() {
         turn = 1;
         simonPattern = [];
         userPattern = [];
         gameStart();
     });
     // end start button function

     // start simonaudio function
     function simonAudio(color) {
         // i = simonPattern
         // for(var i=0; i < simonPattern.length; i++){
         if (color == red) {
             redAudio.play();
         } else if (color == blue) {
             blueAudio.play();
         } else if (color == green) {
             greenAudio.play();
         } else if (color == yellow) {
             yellowAudio.play();
             // }
         }
     };
     // end simonaudio function

     // random color generator
     function compColor() {
         colors = [red, green, blue, yellow];
         choice = colors[Math.floor(Math.random() * colors.length)];
         console.log(choice);
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
         simonAudio(choice);
         $(choice).addClass("lit");
         setTimeout(function() {
             $(choice).removeClass("lit");
         }, 800);
         return;
     };
     // end gameStart function

     // start gameRun function
     function gameRun() {
         compGameRun = true;
         var counter = 0;

         var myInterval = setInterval(function() {
             console.log('In interval:', counter);
             if (counter === simonPattern.length - 1) {
                 clearInterval(myInterval);

             };
             simonAudio(simonPattern[counter]);
             $(simonPattern[counter]).addClass("lit");

             setTimeout(function() {
                 if (counter === simonPattern.length - 1) {
                     compGameRun = false;
                 }
                 $(simonPattern[counter]).removeClass("lit");
                 counter++;
             }, 700);

         }, 1000);

     };
  // end gameRun function

     // start checkPattern
     function checkPattern() {

         for (var i = 0; i < userPattern.length; i++) {
             if (userPattern[i] !== simonPattern[i]) {
                 message.innerHTML = "GAME OVER. Press START to play again."
                 return false;
             }

         }
         return true;
     };
     // end of checkPattern
     function reset() {
         simonPattern = [];

     }

     // start of nextTurn function
     function nextTurn() {

         if (checkPattern()) {
             message.innerHTML = "Good job, keep going!";
             userPattern = []; //need to empty array everytime
             turn++;
             $("#score").html(turn);
             compColor();
             simonPattern.push(choice);
             console.log(simonPattern);
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

  // start checkTurn function
     function checkTurn() {
         if (turn >= 21) {
             message.innerHTML = "Congrats! You won!";
             simonPattern = [];
             userPattern = [];
         }
         return;
     };
  // end checkTurn function

     var compGameRun = false;
     //listen for user clicks-- updated. 
     //

     $(".btn").mousedown(function() {
         if (!compGameRun) {

             $(this).addClass("lit");
             simonAudio(this);
             userPattern.push(this);
             console.log(userPattern);
         }
     });

     $(".btn").mouseup(function() {
         if (!compGameRun) {
             $(this).removeClass("lit");
             checkPattern();
             lengthCheck();
         }
     });
     // end of click listeners

     //start userAudio clicks
     // $("#red").mousedown(function() {
     //     redAudio.play();
     // }); $("#green").mousedown(function() {
     //     greenAudio.play();
     // }); $("#blue").mousedown(function() {
     //     blueAudio.play();
     // }); $("#yellow").mousedown(function() {
     //     yellowAudio.play();
     // });
     // end userAudio clicks

 });

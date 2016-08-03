 $(document).ready(function() {

     var turn = 0;
     var simonPattern = [];
     var userPattern = [];
     // var gameStatus = {}; use for messages

     //use .getElementById because it returns just the tag, instead of $ because it returns an array of objects.. not what we want
     var red = document.getElementById("red");
     var green = document.getElementById("green");
     var blue = document.getElementById("blue");
     var yellow = document.getElementById("yellow");

     // start .start button function
     $("#start").on("click", function() {
         turn = 1;
         simonPattern = [];
         userPattern = [];
         gameStart();
     });
     // end start button function

     // random color generator
     function compColor() {
         colors = [red, green, blue, yellow];
         choice = colors[Math.floor(Math.random() * colors.length)];
         return colors;

     };
     // end random color generator

     // start gameStart function 
     function gameStart() {
         document.getElementById("score").innerHTML = turn;
         compColor();
         simonPattern.push(choice);
         $(choice).addClass("lit");
         setTimeout(function() {
             $(choice).removeClass("lit");
         }, 800);
         console.log(simonPattern);
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

           $(simonPattern[counter]).addClass("lit");

           setTimeout(function() {
               $(simonPattern[counter]).removeClass("lit");
               counter++;
               console.log('timeout');
           }, 500);

        }, 1000);

     };


     // start checkMatch
     function checkPattern() {
         if (userPattern.length !== simonPattern.length)
             return false;
         for (var i = userPattern.length; i--;) {
             if (userPattern[i] !== simonPattern[i])
                 return false;
         }
         // console.log(turn);
         return true;
     };


     function nextTurn() {
         setTimeout(function() { //testing setInterval instead of setTimeout

             if (checkPattern()) {

                 userPattern = []; //need to empty array everytime
                 turn++;
                 $("#score").html(turn);
                 compColor();
                 simonPattern.push(choice);
                 gameRun();

             } else {
                 // youLose
             };
             return;
         }, 2100);

     };

     function lengthCheck() {
         if (userPattern.length == simonPattern.length) {
             nextTurn();
         }
         return;
     }

     function youWin() {
        if (round >= 20) {

        }
     }

     //listen for user clicks-- updated. 
     $(".btn").mousedown(function() {
         $(this).addClass("lit");
         userPattern.push(this);
     });
     $(".btn").mouseup(function() {
         $(this).removeClass("lit");
         lengthCheck();
     });

 });

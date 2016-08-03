 $(document).ready(function() {

   var turn = 0;
   var simonPattern = [];
   var userPattern = [];
   var gameStatus = {};

   var red = document.getElementById("red");
   var green = document.getElementById("green");
   var blue = document.getElementById("blue");
   var yellow = document.getElementById("yellow");

   $("#start").on("click", function() {
     turn = 1;
     simonPattern = [];
     userPattern = [];
     gameStart();
   });

   function compColor() {
     colors = [red, green, blue, yellow];
     choice = colors[Math.floor(Math.random() * colors.length)];
     return colors;

   };

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

   function gameRun() {

     var counter = -1; // ? needs -1 so it shows the first color in array


     (function next() {
       var maxLoops = simonPattern.length -1; //see above comment, not sure if it's needed here
       if (counter++ >= maxLoops)
          return;
       $(simonPattern[counter]).addClass("lit");

       setTimeout(function() {
         $(simonPattern[counter]).removeClass("lit");

         next();
       }, 800);
     })();
     return;
   };

   function checkMatch() {
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
     setTimeout(function() {

       if (checkMatch()) {

         userPattern = [];
         turn++;
         $("#score").html(turn);
         compColor();
         simonPattern.push(choice);
         gameRun();

       } else {
         // youLose
       };
       return;
     }, 1000);

   };

   function lengthCheck() {
     if (userPattern.length == simonPattern.length) {
       nextTurn();
     }
     return;
   }

//listen for user clicks
   $(".btn").mousedown(function() {
     $(this).addClass("lit");
     userPattern.push(this);
   });
   $(".btn").mouseup(function() {
     $(this).removeClass("lit");
     lengthCheck();
   });

 });
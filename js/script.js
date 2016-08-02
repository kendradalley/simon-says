$(document).ready(function() {

    // define variables
    var userPattern = [];
    var computerPattern = [];
    var round = ''; //round starts at 0
    var result = '';
    var winValue = 0; //



    $(".btn").each(function() {
        $(this).click(function() {
            console.log("button clicked");
            var UserChoice = $(this).attr('id');
            userPattern.push(UserChoice);
            console.log(UserChoice);
            console.log(userPattern);
        });

        function compColor() {
            color = [red, green, blue, yellow];
            compChoice = color[Math.floor(Math.random() * color.length)];
            return color;
            console.log(color);

        };
    });



    // function reset() {

    //   for (var i = 0; i < boxes.length; i++) {
    //     boxes[i].innerHTML = "";
    //     arrayX = [];
    //     arrayO = [];
    //     count = 0;
    //   }
    // }; 

});

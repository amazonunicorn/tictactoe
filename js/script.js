let currentPlayer = "x";
let turns = 0;
let gameEnd = "";

function performLogic(buttonId, tileId){
    turns += 1;

    $(buttonId).hide();
    $(tileId).text(currentPlayer);

    if (turns === 9){
      $("h1").text("It's a Draw");
    }

    if ("#tile5" === currentPlayer && "#tile1" === currentPlayer && "#tile9" === currentPlayer){
console.log("hey it worked");
    }
    
    $("#tile1").html();
    $("#tile5").html();
    $("#tile9").html();
    console.log($("#tile9, #tile5, tile1").html());

    
    
    if (currentPlayer === "x") {
        currentPlayer = "o";
    } else {
        currentPlayer = "x";
    }

}






$("#button1").click(function () {
    performLogic("#button1", "#tile1");
});

$("#button2").click(function () {
    performLogic("#button2", "#tile2");
});

$("#button3").click(function () {
    performLogic("#button3", "#tile3");
});

$("#button4").click(function () {
    performLogic("#button4", "#tile4");
});

$("#button5").click(function () {
    performLogic("#button5", "#tile5");
});

$("#button6").click(function () {
    performLogic("#button6", "#tile6");
});

$("#button7").click(function () {
    performLogic("#button7", "#tile7");
});

$("#button8").click(function () {
    performLogic("#button8", "#tile8");
});

$("#button9").click(function () {
    performLogic("#button9", "#tile9");
});


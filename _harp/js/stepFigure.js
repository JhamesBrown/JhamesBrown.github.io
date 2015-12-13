var columns, theNum, playerNum, cPlayCol, timer;
columns = 3;
theNum = [];
playerNum = [];
cPlayCol = 0; // cPlayCol is the current player col
timer = 30; // time left to complete the current level

$( "#scene" ).append( '<div id="timer">'+timer+'</div>');
$( "#scene" ).append( '<div class="flexColContainer"></div>');

for (var i = 0; i < columns; i++) {
    theNum[i] = Math.floor((Math.random()*10));
    playerNum[i] = 0;

    $( ".flexColContainer" ).append( '<div id="col'+i+'" class="gameCol" animation="none"></div>');
    $( '#col'+i ).append( '<div id="playerNum'+ i +'""></div>' ).append( '<div id="winStatus'+ i +'"></div>');
    $( '#playerNum'+i ).append( "<p>"+ playerNum[i] +"</p>" );
}

var myTimer = window.setInterval(timerDown,1000);


$( document ).ready( function () {
    $( window ).keydown( function(e) {
        if (e.keyCode == 37 && cPlayCol > 0) { //left arrow
            cPlayCol--;
        } else if (e.keyCode == 39 && cPlayCol < columns-1) { //right arrow
            cPlayCol++;
        }
        if (e.keyCode == 38 && playerNum[cPlayCol] < 9) { //up arrow
            playerNum[cPlayCol] += 1;
        } else if (e.keyCode == 40 && playerNum[cPlayCol] > 0) { // down arrow
            playerNum[cPlayCol] -= 1;
        }

        if (e.keyCode == 32){ //spacebar
            assessNum();
        }
        currentColDraw();
        $( '#playerNum'+cPlayCol+' > p' ).replaceWith( "<p>"+ playerNum[cPlayCol] +"</p>" );
    });
    currentColDraw();
});

var assessNum = function () {
    for (var i = 0; i < columns; i++) {
        if (playerNum[i] < theNum[i]) {
            $( "#col"+i ).attr( "animation" , "higher" );
            //$( "#col"+i ).replaceWith( $( "#col"+i ).clone(true));
        } else if (playerNum[i] > theNum[i]) {
            $( "#col"+i ).attr( "animation" , "lower" );
        } else if (playerNum[i] == theNum[i]) {
            $( "#col"+i ).attr( "animation" , "none" );
            $( "#col"+i ).css( "background-color" , "#88FF88" );
        }
        $( "#col"+i ).replaceWith( $( "#col"+i ).clone(true));
    }
}

var currentColDraw = function () {
    for (var i = 0; i < columns; i++) {
        if (i == cPlayCol) {
            $( '#col'+i ).css("border-style", "solid" );
        }else {
            $( '#col'+i ).css("border-style", "none" );
        }
    }
}

function timerDown() {
    if (timer > 0) {
        timer--;
        document.getElementById("timer").innerHTML = ""+timer;
    }
}

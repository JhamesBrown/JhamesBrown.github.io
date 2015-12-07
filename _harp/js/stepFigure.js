var columns, theNum, playerNum, cPlayCol;
columns = 3;
theNum = [];
playerNum = [];
cPlayCol = 0; // cPlayCol is the current player col

for (var i = 0; i < columns; i++) {
    theNum[i] = Math.floor((Math.random()*10));
    playerNum[i] = 0;

    $( "#scene" ).append( '<div id="col'+i+'" class="gameCol"></div>');
    $( '#col'+i ).append( '<div id="playerNum'+ i +'""></div>' ).append( '<div id="winStatus'+ i +'"></div>');
    $( '#playerNum'+i ).append( "<p>"+ playerNum[i] +"</p>" );
}

//$( "#scene" ).append( '<div id="playerNum"></div>' );
//$( "#scene" ).append( '<div id="winStatus"></div>');

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
    var s;

    for (var i = 0; i < columns; i++) {
        if (playerNum[i] < theNum[i]) {
            $( "#col"+i ).css( "background-color" , "#8888FF" );
            //s = "higher";
        } else if (playerNum[i] > theNum[i]) {
            $( "#col"+i ).css( "background-color" , "#FF8888" );
            //s = "lower";
        } else if (playerNum[i] == theNum[i]) {
            $( "#col"+i ).css( "background-color" , "#88FF88" );
            //s = "got it";
        }
        //$( '#winStatus'+i ).empty().append( '<p>'+s+'</p>' );
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

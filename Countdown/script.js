var hours = 0;
var mins = 0;
var seconds = 0;

$('#start').click(function () {
    startmain();
});

$('#stop').click(function () {
    clearTimeout(timer);
});

$('#reset').click(function () {
    $('#hours').html('00:');
    $('#mins').html('00:');
    $('#seconds').html('00');
});

function startmain() {
    timer = setTimeout(function () {
        seconds++;
        if (seconds > 59) {
            seconds = 0; mins++;
            if (mins > 59) {
                mins = 0; hours++;
                if (hours < 10) { 
                    $("#hours").text('0' + hours + ':') 
                } 
                else{
                    $("#hours").text(hours + ':');
                }
            }

            if (mins < 10) {
                $("#mins").text('0' + mins + ':');
            }
            else $("#mins").text(mins + ':');
        }
        if (seconds < 10) {
            $("#seconds").text('0' + seconds);
        } 
        else {
            $("#seconds").text(seconds);
        }


        startmain();
    }, 1000);
}


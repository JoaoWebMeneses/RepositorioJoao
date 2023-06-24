const seconds = 0
const minutes = 0
function Start(){
    while (true){
        setTimeout(function(){
            seconds += 1
            if(seconds < 10){
                document.getElementById("seconds").innerHTML = `0${seconds}`;
            } 
            else if (seconds >= 10){ 
                document.getElementById("seconds").innerHTML = seconds;
            }
        },1000);
    }
}
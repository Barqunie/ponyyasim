
function hesapla(){
const x = document.getElementById('yas').value;
document.getElementById("sonuc").innerHTML = Math.floor( x*99.45)+" Pony Yaşındasın!";
console.log(x);}

var audio = document.getElementById('background_audio');
audio.volume = 0.1;


document.getElementById('sus').addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);



const img= document.getElementById('sus');

let toggle = true;

img.addEventListener('click',function(){
    toggle = !toggle;
    if (toggle) {
        
        img.src = 'img\\mute.png';
    }
    else{img.src = 'img\\muted.png';}

} );

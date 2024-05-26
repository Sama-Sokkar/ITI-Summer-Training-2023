
var aud = document.querySelector("audio");
var timeRange = document.getElementById("time");
var source = document.getElementById("src");
// console.log(source.src)
var img = document.getElementById("img");
// console.log(img)

// window.addEventListener("load",function()
// {
//     timeRange.max = aud.duration;
// })
function changeTimeRange()
{
    timeRange.value = aud.currentTime;
    timeRange.max = aud.duration; 
}
function changeTime()
{
    aud.currentTime = timeRange.value;
}
function playAud()
{
    aud.play();
}
function pauseAud()
{
    aud.pause();
}
function changeVol()
{
    var volRange = document.getElementById("vol");
    aud.volume = volRange.value
}
function stopAud()
{
aud.load();
aud.pause();
}
function muteAud()
{
aud.muted = !aud.muted;
}
function playAudio(audioSrc,imgSrc) {
    source.src = audioSrc;
    img.src=imgSrc;
    aud.load();
    aud.play();
}




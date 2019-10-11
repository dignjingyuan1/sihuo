/**
 * 播放视频
 */
function playVideo(){
    document.getElementById('videoImg').style.display = "none";
    document.getElementById('videoButton').style.display = "none";
    document.getElementById('videoPlay').style.display = "inline-block";
    document.getElementById('videoPlay').play();
}
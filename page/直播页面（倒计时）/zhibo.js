/**
 * 播放视频
 */
function playVideo() {
    document.getElementById('videoImg').style.display = "none";
    document.getElementById('videoButton').style.display = "none";
    document.getElementById('videoPlay').style.display = "inline-block";
    document.getElementById('videoPlay').play();
}


/**
 * 倒计时
 */
function timeOut(date) {
    var bb = setInterval(function () {
        date -= 1000;
        var day = Math.floor(date / 86400000);
        var hour = Math.floor((date-day*86400000) / 3600000)
        var minu = Math.floor(((date-day*86400000) - hour * 3600000) / 60000)
        var score = Math.floor((((date-day*86400000) - hour * 3600000) - minu*60000) / 1000)
        document.getElementById('timeOut').innerText = day + "天" + hour + '小时' + minu + '分钟' + score + '秒'
    }, 1000)
}

var date = document.getElementById('timeOutDate').value * 1 - new Date().getTime()
timeOut(date)
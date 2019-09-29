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
 * 全选
 */
function allCheck() {
    var imgArr = document.getElementsByClassName('checkbox-img');
    var allCheckImg = document.getElementById('allCheck');
    var isCheck = false;
    if (allCheckImg.src.indexOf('hui') != -1) {
        isCheck = true
        allCheckImg.src = "../../img/checkbox.png"
    } else {
        allCheckImg.src = "../../img/checkbox-hui.png"
    }
    for (var index = 0; index < imgArr.length; index++) {
        var img = imgArr[index];
        if (isCheck) {
            img.src = "../../img/checkbox.png"
        } else {
            img.src = "../../img/checkbox-hui.png"
        }
    }
}
/**
 * 播放视频
 */
function play(dom) {
    var playArr = document.getElementsByClassName('play-button');
    for (var index = 0; index < playArr.length; index++) {
        var playImg = playArr[index];
        playImg.src = "../../img/play-hui.png"
    }
    var playTextArr = document.getElementsByClassName('class-item-title');
    for (var index = 0; index < playTextArr.length; index++) {
        var playText = playTextArr[index];
        playText.classList.remove('tilte-act')
    }
    dom = dom.parentElement;
    dom.getElementsByClassName('play-button')[0].src = "../../img/play-act.png"
    dom.getElementsByClassName('class-item-title')[0].classList.add('tilte-act')
}
/**
 * 单选被点击
 */
function checkOnclick(dom) {
    if (dom.src.indexOf('hui') != -1) {
        dom.src = "../../img/checkbox.png"
    } else {
        dom.src = "../../img/checkbox-hui.png"
    }
}
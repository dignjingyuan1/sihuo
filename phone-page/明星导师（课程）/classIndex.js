console.log('首页js')

function bannerOnload() {
    var bnnerArr = document.getElementsByClassName('banner-img');
    var actIndex = 0;
    var interval = setInterval(function () {
        for (var index = 0; index < bnnerArr.length; index++) {
            var element = bnnerArr[index];
            element.classList.remove('banner-active')
        }
        bnnerArr[actIndex].classList.add('banner-active')
        if ((actIndex + 1) < bnnerArr.length) {
            actIndex++;
        } else {
            actIndex = 0;
        }
    }, 2000)
}
bannerOnload() // 开始执行banner
/**
 * 弹出登录弹窗
 */
function openLogin(isCloseReg) {
    if (isCloseReg) {
        document.getElementById('reg-alert').style.display = "none";
    }
    document.getElementById('login-alert').style.display = "block";
}
/**
 * 关闭登录弹窗
 */
function closeLogin() {
    document.getElementById('login-alert').style.display = "none";
}
/**
 * 弹出注册弹窗
 */
function openReg() {
    document.getElementById('reg-alert').style.display = "block";
}
/**
 * 关闭注册弹窗
 */
function closeReg() {
    document.getElementById('reg-alert').style.display = "none";
}
/**
 * 获取验证码
 */
function getValidateCode() {
    var vld = document.getElementById("validateCode");
    var timeout = 10;
    if (vld.innerText.indexOf('获取验证') != -1) {
        var bb = setInterval(function () {
            document.getElementById("validateCode").innerText = timeout + "s"
            if (timeout <= 0) {
                document.getElementById("validateCode").innerText = "获取验证码";
                clearInterval(bb)
            }
            timeout--;
        }, 1000)
    }
}
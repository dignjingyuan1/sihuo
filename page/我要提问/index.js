
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

function uploadImg(){
    document.getElementById("fileUpload").click();
}

function weiguan(ev){
    if(ev.src.indexOf("hui")!=-1){
        // TODO 弹出提示
        document.getElementById("myAlert").style.display = "block";
    }else{
        ev.src = "../../img/checkbox-hui.png";
    }
}

function confirm(){
    document.getElementById("wieguan").src = "../../img/checkbox-act.png";
    document.getElementById("myAlert").style.display = "none";
}
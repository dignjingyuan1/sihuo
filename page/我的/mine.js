
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

document.getElementById('myClass').style.display = "block";
document.getElementById('myQustion').style.display = "none";
document.getElementById('myWealth').style.display = "none";
document.getElementById('myBill').style.display = "none";
document.getElementById('myInfo').style.display = "none";
document.getElementById('my-recommend').style.display = "none";
/**
 * 侧边栏被点击
 */
function tabOnclick(index) {
    console.log(index)
    var backButtonArr = document.getElementsByClassName('back-button');
    for (var i = 0; i < backButtonArr.length; i++) {
        var element = backButtonArr[i];
        element.style.display = "none"
    }
    switch (index) {
        case 1: {
            backButtonArr[0].style.display = "block"
            document.getElementById('myClass').style.display = "block";
            document.getElementById('myQustion').style.display = "none";
            document.getElementById('myWealth').style.display = "none";
            document.getElementById('myBill').style.display = "none";
            document.getElementById('myInfo').style.display = "none";
            document.getElementById('my-recommend').style.display = "none";
            break;
        }
        case 2: {
            backButtonArr[1].style.display = "block"
            document.getElementById('myQustion').style.display = "block";
            document.getElementById('myClass').style.display = "none";
            document.getElementById('myWealth').style.display = "none";
            document.getElementById('myBill').style.display = "none";
            document.getElementById('myInfo').style.display = "none";
            document.getElementById('my-recommend').style.display = "none";
            break;
        }
        case 3: {
            backButtonArr[2].style.display = "block"
            document.getElementById('myClass').style.display = "none";
            document.getElementById('myQustion').style.display = "none";
            document.getElementById('myWealth').style.display = "block";
            document.getElementById('myBill').style.display = "none";
            document.getElementById('myInfo').style.display = "none";
            document.getElementById('my-recommend').style.display = "none";
            break;
        }
        case 4: {
            backButtonArr[3].style.display = "block"
            document.getElementById('myClass').style.display = "none";
            document.getElementById('myQustion').style.display = "none";
            document.getElementById('myWealth').style.display = "none";
            document.getElementById('myBill').style.display = "block";
            document.getElementById('myInfo').style.display = "none";
            document.getElementById('billList').style.display = "block";
            document.getElementById('billDetail').style.display = "none";
            document.getElementById('my-recommend').style.display = "none";
            break;
        }
        case 5: {
            backButtonArr[4].style.display = "block"
            document.getElementById('myClass').style.display = "none";
            document.getElementById('myQustion').style.display = "none";
            document.getElementById('myWealth').style.display = "none";
            document.getElementById('myBill').style.display = "none";
            document.getElementById('myInfo').style.display = "none";
            document.getElementById('my-recommend').style.display = "block";
            break;
        }
        case 6: {
            backButtonArr[5].style.display = "block"
            document.getElementById('myClass').style.display = "none";
            document.getElementById('myQustion').style.display = "none";
            document.getElementById('myWealth').style.display = "none";
            document.getElementById('myBill').style.display = "none";
            document.getElementById('myInfo').style.display = "block";
            document.getElementById('my-recommend').style.display = "none";
            break;
        }

    }
}

/**
 * 
 * @param {选择这个被点击} dom 
 */
function checkThis(dom) {
    if (dom.src.indexOf('hui') != -1) {
        dom.src = "../../img/checkbox.png"
    } else {
        dom.src = "../../img/checkbox-hui.png"
    }
}
/**
 * 全选
 */
function checkAll(dom) {
    var checkArr = document.getElementsByClassName("check-box");
    if (dom.src.indexOf('hui') != -1) {
        dom.src = src = "../../img/checkbox-act.png"
        for (let index = 0; index < checkArr.length; index++) {
            const element = checkArr[index];
            element.src = "../../img/checkbox.png"
        }
    } else {
        dom.src = src = "../../img/checkbox-hui-h.png"
        for (let index = 0; index < checkArr.length; index++) {
            const element = checkArr[index];
            element.src = "../../img/checkbox-hui.png"
        }
    }
}
/**
 * 我的资料保存
 */
function alertText(text) {
    var dom = document.getElementById('successAlert')
    dom.innerText = text
    dom.style.display = "block"
    setTimeout(function () {
        dom.style.display = "none"
    }, 1000)
}
/**
 * 点选按钮选择
 */
function checkIt(dom){
    var imgArr = document.getElementsByClassName('radio')
    for (var index = 0; index < imgArr.length; index++) {
        var element = imgArr[index];
        element.src="../../img/radio-hui.png"
    }
    dom.src = "../../img/radio-act.png"
}
/**
 * 下一步被点击
 */
function next(){
    document.getElementById('billList').style.display = "none";
    document.getElementById('billDetail').style.display = "block";
}
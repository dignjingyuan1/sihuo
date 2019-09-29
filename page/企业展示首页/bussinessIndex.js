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
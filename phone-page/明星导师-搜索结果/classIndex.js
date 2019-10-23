console.log('课程首页js')
var isMenuShow = false;
function menuShow(){
    console.log('dudu')
    if(isMenuShow){
        document.getElementById('menu').style.display = 'none'
        isMenuShow = false;
    }else{
        document.getElementById('menu').style.display = 'block'
        isMenuShow = true;
    }
}
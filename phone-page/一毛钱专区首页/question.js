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
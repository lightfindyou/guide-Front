var touch = true;           //touch=true为开启触摸滑动
var slideBt = true;         //slideBt=true为开启滚动按钮


var slideNub;               //楼数量
var floorNub;

var building;
var floor;
var floors=["一楼","二楼","三楼","四楼","五楼","六楼"];
$(function(){
    $(".slide").height($(".slide").width()*0.56);
    slideNub = $(".slide .img").size();             //获取轮播图片数量
    floorNub = $(".right .floor").size();           //获取楼层的个数
    console.log(floorNub)
    for(i=0;i<slideNub;i++){
        $(".slide .img:eq("+i+")").attr("data-slide-imgId",i);
    }
    for(i=0;i<floorNub;i++){
        $(".right .floor:eq("+i+")").attr("data-slide-floorId",i);
    }


    //根据轮播图片数量设定图片位置对应的class
    if(slideNub==1){
        for(i=0;i<slideNub;i++){
            $(".slide .img:eq("+i+")").addClass("img3");
        }
    }
    if(slideNub==2){
        for(i=0;i<slideNub;i++){
            $(".slide .img:eq("+i+")").addClass("img"+(i+3));
        }
    }
    if(slideNub==3){
        for(i=0;i<slideNub;i++){
            $(".slide .img:eq("+i+")").addClass("img"+(i+2));
        }
    }
    if(slideNub>3&&slideNub<6){
        for(i=0;i<slideNub;i++){
            $(".slide .img:eq("+i+")").addClass("img"+(i+1));
        }
    }
    if(slideNub>=6){
        for(i=0;i<slideNub;i++){
            if(i<5){
               $(".slide .img:eq("+i+")").addClass("img"+(i+1)); 
            }else{
                $(".slide .img:eq("+i+")").addClass("img5"); 
            }
        }
    }

    //根据楼层数量设定图片位置对应的class
    if(floorNub==1){
        for(i=0;i<floorNub;i++){
            $(".right .floor:eq("+i+")").addClass("floor3");
        }
    }
    if(floorNub==2){
        for(i=0;i<floorNub;i++){
            $(".right .floor:eq("+i+")").addClass("floor"+(i+3));
        }
    }
    if(floorNub==3){
        for(i=0;i<floorNub;i++){
            $(".right .floor:eq("+i+")").addClass("floor"+(i+2));
        }
    }
    if(floorNub>3&&floorNub<6){
        for(i=0;i<floorNub;i++){
            $(".right .floor:eq("+i+")").addClass("floor"+(i+1));
        }
    }
    if(floorNub>=6){
        for(i=0;i<floorNub;i++){
            if(i<5){
               $(".right .floor:eq("+i+")").addClass("floor"+(i+1)); 
            }else{
                $(".right .floor:eq("+i+")").addClass("floor5"); 
            }
        }
    }


    if(touch){
        k_touch();
        f_touch();
    }
    imgClickFy();
    selected();
    building=$(".img3").html()
    floor=$(".floor3").children().eq(0).html();
    console.log(building);
    console.log(floor);
})


//右滑动
function right(){
    var fy = new Array();
    for(i=0;i<slideNub;i++){
        fy[i]=$(".slide .img[data-slide-imgId="+i+"]").attr("class");
    }
     console.log(fy);
    for(i=0;i<slideNub;i++){
        if(i==0){
            $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[slideNub-1]);
        }else{
           $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[i-1]); 
        }
    }
    imgClickFy();
    building=$(".img3").html()
    console.log(building)
}
//上滑动
var j=0;
function up(){
    var f = new Array();
j++;
   // $("#right").html("<div class='floor'>四层<br>五层</div><div class='floor'>五层</div><div class='floor'>一层<br>二层</div><div class='floor'>二层<br>三层</div><div class='floor'>三层<br>四层</div>")
    for(i=0;i<slideNub;i++){
        f[i]=$(".right .floor[data-slide-floorId="+i+"]").attr("class");
        //$("#right").children().eq(1).html(floors[1]+"<br>"+floors[2]);
        //$(".floor2").html(floors[1]+"<br>"+floors[2]);
    }
     console.log(f);
    for(i=0;i<slideNub;i++){
        if(i==0){
            $(".right .floor[data-slide-floorId="+i+"]").attr("class",f[floorNub-1]);

        }else{
           $(".right .floor[data-slide-floorId="+i+"]").attr("class",f[i-1]); 
        }
    }
    imgClickFy();
    //floor=$(".floor3").children().eq(0).html();
    floor=$(".floor3").html();
    console.log(floor)
    var floor1=floor.substring(6,8 );
    console.log(floor1);
    for(j=0;j<5;j++){
        if(floor1==floors[j]){
            console.log(j);
            change();
        }
    }
    
    
   
}

//左滑动
function left(){
    var fy = new Array();
    for(i=0;i<slideNub;i++){
        fy[i]=$(".slide .img[data-slide-imgId="+i+"]").attr("class");
    }
    console.log(fy);
    //var building=$(".slide").children().eq(3).html();
    //building=$(".img2").html()
    for(i=0;i<slideNub;i++){
        if(i==(slideNub-1)){
            $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[0]);
        }else{
           $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[i+1]); 
        }
    }
    imgClickFy();
    building=$(".img3").html()
    console.log(building)
}
//下滑动
function down(){
    var ff = new Array();
    for(i=0;i<floorNub;i++){
        ff[i]=$(".right .floor[data-slide-floorId="+i+"]").attr("class");
    }
    console.log(ff);
    for(i=0;i<floorNub;i++){
        if(i==(slideNub-1)){
            $(".right .floor[data-slide-floorId="+i+"]").attr("class",ff[0]);
        }else{
            $(".right .floor[data-slide-floorId="+i+"]").attr("class",ff[i+1]); 
        }
    }
    imgClickFy();
    //floor=$(".floor3").children().eq(0).html();
    floor=$(".floor3").html();
    console.log(floor)
    var floor1=floor.substring(25,27 );
    $('.floor3').html("<span>"+floor1+"</span>");
    console.log(floor1);
    for(j=0;j<5;j++){
        if(floor1==floors[j]){ 
            console.log(j);
            change();
        }
    }
}

//轮播图片左右图片点击翻页
function imgClickFy(){
    $(".slide .img").removeAttr("onclick");
    $(".slide .img2").attr("onclick","left()");
    $(".slide .img4").attr("onclick","right()");
    //floor
    $(".right .floor").removeAttr("onclick");
    $(".right .floor2").attr("onclick","up()");
    $(".right .floor4").attr("onclick","down()");
}

//触摸滑动模块
function k_touch() {
    var _start = 0, _end = 0, _content = document.getElementById("slide");
    _content.addEventListener("touchstart", touchStart, false);
    _content.addEventListener("touchmove", touchMove, false);
    _content.addEventListener("touchend", touchEnd, false);
    function touchStart(event) {
        var touch = event.targetTouches[0];
        _start = touch.pageX;
    }
    function touchMove(event) {
        var touch = event.targetTouches[0];
        _end = (_start - touch.pageX);
    }

    function touchEnd(event) {
        if (_end < -100) {
            left();
            building=$(".img3").html();
            console.log(building);
            _end=0;
        }else if(_end > 100){
            right();
            building=$(".img3").html();
            console.log(building);
            _end=0;
        }
    }
}


//floor触摸滑动模块
function f_touch() {
    var _start = 0, _end = 0, _content = document.getElementById("right");
    _content.addEventListener("touchstart", touchStart, false);
    _content.addEventListener("touchmove", touchMove, false);
    _content.addEventListener("touchend", touchEnd, false);
    function touchStart(event) {
        var touch = event.targetTouches[0];
        _start = touch.pageX;
    }
    function touchMove(event) {
        var touch = event.targetTouches[0];
        _end = (_start - touch.pageX);
    }

    function touchEnd(event) {
        if (_end < -10) {
            up();
            floor=$(".floor3").children().eq(0).html();
            console.log(floor);
            _end=0;
        }else if(_end > 100){
            down();
            floor=$(".floor3").children().eq(0).html();
            console.log(floor);
            _end=0;
        }
    }
}
function change(){
    if(j==0){
                $('.floor2').html("<span>"+floors[4]+"</span><br><span>"+floors[5]+"</span>"); 
                $('.floor4').html("<span>"+floors[1]+"</span><br><span>"+floors[2]+"</span>"); 
    }
    if(j==1){
        $('.floor2').html("<span>"+floors[5]+"</span><br><span>"+floors[0]+"</span>"); 
        $('.floor4').html("<span>"+floors[2]+"</span><br><span>"+floors[3]+"</span>"); 
    }
    if(j==2){
        $('.floor2').html("<span>"+floors[0]+"</span><br><span>"+floors[1]+"</span>"); 
        $('.floor4').html("<span>"+floors[3]+"</span><br><span>"+floors[4]+"</span>"); 
    }
    if(j==3){
        $('.floor2').html("<span>"+floors[1]+"</span><br><span>"+floors[2]+"</span>");
        $('.floor4').html("<span>"+floors[4]+"</span><br><span>"+floors[5]+"</span>"); 
    }
    if(j==4){
        $('.floor2').html("<span>"+floors[2]+"</span><br><span>"+floors[3]+"</span>"); 
        $('.floor4').html("<span>"+floors[5]+"</span><br><span>"+floors[0]+"</span>"); 
    }
    if(j==5){
        $('.floor2').html("<span>"+floors[3]+"</span><br><span>"+floors[4]+"</span>"); 
        $('.floor4').html("<span>"+floors[0]+"</span><br><span>"+floors[1]+"</span>"); 
    }
}
 function selected(){
        $(".bottom").click(function(){
            var time=location.hash.substring(1);
            var ffloor=floor.substring(6,8);
            var hhotel="双人间-"+building+"-"+ffloor;
            //window.open(encodeURI(url + “?userName=” + userName));
            //window.location.href=encodeURI('floor.html?hotle=' +hhotel+ '&time=' + time);
           window.location.href = 'floor.html?hotle=' +encodeURI(hhotel)+ '&time=' + time;  
        })
    }
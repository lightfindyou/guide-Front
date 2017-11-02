// JavaScript Document
//元素的显示和隐藏
$(document).ready(function() {
    $(".register").click(function() {
        $(".none1").toggle();
        $(".none2").hide();
        $(".none3").hide();
    });
});
$(document).ready(function() {
    $(".course").click(function() {
        $(".none2").toggle();
        $(".none1").hide();
        $(".none3").hide();
    });
});
$(document).ready(function() {
    $(".message").click(function() {
        $(".none3").toggle();
        $(".none1").hide();
        $(".none2").hide();
    });
});
$(document).ready(function() {
    $(".learner").click(function() {
        $(".learner").addClass("stitledivhover");
        $(".boarder").removeClass("stitledivhover");
        $(".info").removeClass("stitledivhover");
        $(".send").removeClass("stitledivhover");
        $(".sended").removeClass("stitledivhover");
    });
});
$(document).ready(function() {
    $(".boarder").click(function() {
        $(".boarder").addClass("stitledivhover");
        $(".info").removeClass("stitledivhover");
        $(".send").removeClass("stitledivhover");
        $(".sended").removeClass("stitledivhover");
        $(".learner").removeClass("stitledivhover");
    });
});
$(document).ready(function() {
    $(".info").click(function() {
        $(".info").addClass("stitledivhover");
        $(".boarder").removeClass("stitledivhover");
        $(".send").removeClass("stitledivhover");
        $(".sended").removeClass("stitledivhover");
        $(".learner").removeClass("stitledivhover");
    });
});
$(document).ready(function() {
    $(".send").click(function() {
        $(".send").addClass("stitledivhover");
        $(".boarder").removeClass("stitledivhover");
        $(".info").removeClass("stitledivhover");
        $(".sended").removeClass("stitledivhover");
        $(".learner").removeClass("stitledivhover");
    });
});
$(document).ready(function() {
    $(".sended").click(function() {
        $(".sended").addClass("stitledivhover");
        $(".boarder").removeClass("stitledivhover");
        $(".info").removeClass("stitledivhover");
        $(".send").removeClass("stitledivhover");
        $(".learner").removeClass("stitledivhover");
    });
});
/*function colorchange(Click, TOT, RE1, RE2, RE3, RE4, NEWCLASS) {
    $(Click).click(function() {
        $(TOT).addClass(NEWCLASS);
        $(RE1).removeClass(NEWCLASS);
        $(RE2).removeClass(NEWCLASS);
        $(RE3).removeClass(NEWCLASS);
        $(RE4).removeClass(NEWCLASS);
    });
};*/

/*function colorchange1(Click, RE1, RE2, RE3, ID, SHU) {
    $(Click).click(function() {
        $(Click).attr('id', ID);
        $(RE1).attr('id', '');
        $(RE2).attr('id', '');
        $(RE3).attr('id', '');
        if (SHU != null) {
            for (var i = 0; i <= 3; i++) {
                $(".class01").attr('id', ID);
                $(".class02").attr('id', "");
                $(".class03").attr('id', "");
                $(".class04").attr('id', "");
                a = i + 1;
                document.getElementsByClassName('changeclass')[i].innerHTML = "1" + SHU + "0" + a + "";
            }
        }
    });
};*/

function show(Click, on, off1, off2, off3, off4, off5) {
    $(Click).click(function() {
        $(on).attr('style', 'display:block;');
        $(off1).attr('style', 'display:none;');
        $(off2).attr('style', 'display:none;');
        $(off3).attr('style', 'display:none;');
        $(off4).attr('style', 'display:none;');
        $(off5).attr('style', 'display:none;');
    });

};
//元素文本改变
function searchfloor() {
    var floorp = document.getElementsByClassName("floorp");
    var everychoice = document.getElementsByClassName("everychoice");
    var everydormitoryp = document.getElementsByClassName("everydormitoryp");
    $(".dormitory").mouseover(function() {
        $("#choiceAB").show();
    }).mouseout(function() {
        $("#choiceAB").hide();
    });
    $(".floors").mouseover(function() {
        $("#choicefloor").show();
    }).mouseout(function() {
        $("#choicefloor").hide();
    });
    for (var i = 0; i <= 1; i++) {
        (function() {
            var k = i;
            var ek = everychoice[k];
            ek.onclick =
                function() {
                    floorp[0].innerHTML = ek.innerText + '座';
                    $("#choiceAB").hide();
                };
        })();
    }
    for (var i = 2; i <= 8; i++) {
        (function() {
            var k = i;
            var g = k - 1;
            var ek = everychoice[k];
            ek.onclick =
                function() {
                    floorp[1].innerHTML = '第' + ek.innerText + '层';
                    $("#choicefloor").hide();
                    for (var a = 0; a <= 21; a++) {
                        everydormitoryp[a].innerText = g + everydormitoryp[a].innerText.charAt(1) + everydormitoryp[a].innerText.charAt(2);
                    }
                };
        })();
    }
};

function searchclass() {
    var floorp = document.getElementsByClassName("Classes");
    var everychoice = document.getElementsByClassName("everychoice");
    var everydormitoryp = document.getElementsByClassName("everydormitoryp");
    $(".Classes").mouseover(function() {
        $("#choiceClass").show();
    }).mouseout(function() {
        $("#choiceClass").hide();
    });
    $(".Classes1").mouseover(function() {
        $("#choiceClass1").show();
    }).mouseout(function() {
        $("#choiceClass1").hide();
    });
    /*for (var i = 0; i <= 1; i++) {
        (function() {
            var k = i;
            var ek = everychoice[k];
            ek.onclick =
                function() {
                    floorp[0].innerHTML = ek.innerText + '座';
                    $("#choiceAB").hide();
                };
        })();
    }
    for (var i = 2; i <= 8; i++) {
        (function() {
            var k = i;
            var g = k - 1;
            var ek = everychoice[k];
            ek.onclick =
                function() {
                    floorp[1].innerHTML = '第' + ek.innerText + '层';
                    $("#choicefloor").hide();
                    for (var a = 0; a <= 21; a++) {
                        everydormitoryp[a].innerText = g + everydormitoryp[a].innerText.charAt(1) + everydormitoryp[a].innerText.charAt(2);
                    }
                };
        })();
    }*/
};

function changetext() {
    var theclasses = document.getElementsByClassName("classes")[0];
    var theclass = theclasses.getElementsByTagName("p");
    theclasses.onclick = function(ev) {　　
        var ev = ev || window.event;　　　　
        var target = ev.target || ev.srcElement;　　　　
        if (target.nodeName.toLowerCase() == 'p') {　　　　　　　　
            target.ondblclick = function() {
                var oldhtml = target.innerHTML;
                if (oldhtml.indexOf('type="text"') > 0) {
                    return;
                }　　
                var newobj = document.createElement('input');
                //创建新的input元素
                newobj.type = 'text';
                //为新增元素添加类型
                newobj.onblur = function() {
                    target.innerHTML = this.value ? this.value : oldhtml;
                    //当触发时判断新增元素值是否为空，为空则不修改，并返回原有值
                }
                target.innerHTML = '';
                target.appendChild(newobj);
                newobj.focus();
            };
        }　　
    }
}
//定时发送框
function settimetosend() {
    var tosend = document.getElementsByClassName("tosend")[1];
    tosend.onclick = function() {
        $(".tohide").show();
        $(".settime").show();
    }
    $(".tohide").click(function() {
        $(".settime").hide();
        $(".tohide").hide();
    });

}


function allinfo() {
	var IsAjaxall=true;
    $(".detailed").attr('style', 'display:none;');
    $(".Addlearnercontainer").attr('style', 'display:none;');
    $(".learnerscontainer").attr('style', 'display:block;');
    $.ajax({
        type: "POST",
        url: "http://46y7i4.natappfree.cc/guide/courseOverview.action",
        async: false,
        success: function(data) {
        	IsAjaxall=false;
            var lc = document.getElementById("choiceClass");
            var txt = data;
            var obj = JSON.parse(txt);
            var txttable = "";
            for (var i = 0; i < obj.length; i++) {
                var jsonObj = obj[i];
                txttable = txttable + " <div class=\"everyChoice class0\"><p>" + "<span>" + jsonObj.courseName + "</span>" + "-" + "<span>"+jsonObj.courseId + "</span>"+ "</p></div>";
            }
            /*txttable = txttable + " <div class=\"everyChoice\"><p class=\"changeclass \">" + "添加班级" + "</p></div>";*/
            lc.innerHTML = txttable;
            if (obj.length >= 5) {
                $("#choiceClass").attr('style', 'height:500%;overflow-y:auto');
                var cCd = document.getElementById("choiceClass").getElementsByTagName("div");
                for (var i = 0; i < cCd.length; i++) {
                    cCd[i].setAttribute("style", "height:20%");
                }
            } else {
                $("#choiceClass").attr('style', 'height:100%;overflow-y:none');
                var cCd = document.getElementById("choiceClass").getElementsByTagName("div");
                for (var i = 0; i < cCd.length; i++) {
                    cCd[i].setAttribute("style", "height:100%");
                }
            }
            var c0 = document.getElementsByClassName("class0");
            for (var i = 0; i <= c0.length - 1; i++) {
                (function() {
                    var k = i;
                    c0[k].onclick = function() {
                    	var IsAjaxall1;
                    	if(IsAjaxall1==true){return;}
                    	IsAjaxall1=true;
                        document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].setAttribute("id", "");
                        $(".detailed").attr('style', 'display:none;');
                        $(".Addlearnercontainer").attr('style', 'display:none;');
                        $(".learnerscontainer").attr('style', 'display:block;');
                        $(".addlearnerimg").attr('style', 'display:block;');
                        $(".aordlearner").attr('style', 'display:none;');
                        $(".backtodetial").attr('style', 'display:none;');
                        document.getElementsByClassName("search")[0].setAttribute("style","display:block;");
                        $(".courseaord").attr('style', 'display:none;');
                        $('.class0').attr('id', '');
                        $(this).attr('id', 'yearhover');
                        if (k == 0) {
                            $.ajax({
                                type: "POST",
                                url: "http://46y7i4.natappfree.cc/guide/userPandect.action",
                                async: false,
                                success: function(data) {
                                	IsAjaxall1=false;
                                    var lc = document.getElementsByClassName("learners")[0];
                                    var txt = data;
                                    var obj = JSON.parse(txt);
                                    var txttable = "";

                                    function forin(json) {
                                        for (var i = 0; i < json.length; i++) {
                                            var jsonObj = json[i];
                                            txttable = txttable + "<div class=\"everylearner\">";
                                            txttable = txttable + "<p class=\"learnerp\">" + jsonObj.userName + "</p>";
                                            txttable = txttable + "<p class=\"learnerp learnerppn\">" + jsonObj.phoneNumber + "</p>";
                                            txttable = txttable + "<p class=\"learnerp everylearnerp\">" + "详细信息" + "</p></div>";
                                        }
                                    }

                                    forin(obj);
                                    lc.innerHTML = txttable;
                                    document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].innerText = "选择课程";
                                },
                                error: function(jqXHR) {
                                	IsAjaxall1=false;
                                    alert("发生错误：" + jqXHR.status);
                                },
                            });
                        }
                        /*else if (k == c0.length - 1) {
                                                   document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].setAttribute("id", "");
                                                   document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].innerText = "选择课程";
                                                   $('.class0').attr('id', '');
                                                   $(".addClass").attr('style', 'display:block;');
                                                   $(".detailed").attr('style', 'display:none;');
                                                   $(".learnerscontainer").attr('style', 'display:none;');
                                                   $(".Addlearnercontainer").attr('style', 'display:none;');
                                                   document.getElementsByClassName("AddClassSubmit")[0].onclick = function() {
                                                       var a = k;
                                                       var ac = document.getElementsByClassName("addClassinput")[0].value;
                                                       var lc = document.getElementsByClassName("fourclass")[0];
                                                       var cc = document.getElementsByClassName("changeclass")[a - 1];
                                                       $.ajax({
                                                           type: "POST",
                                                           url: "http://46y7i4.natappfree.cc/guide/addClass.action",
                                                           async: false,
                                                           data: { classes: ac },
                                                           success: function(data) {
                                                               /*var txttable = lc.innerHTML;
                                                               cc.innerText = ac;
                                                               txttable = txttable + " <div class=\"class0\"><p class=\"changeclass \">" + "添加班级" + "</p></div>";
                                                               lc.innerHTML = txttable;*/
                        /*if (data = "success") {

                                            alert("添加成功");
                                        } else {
                                            alert("添加失败");
                                        }
                                    },
                                    error: function(jqXHR) {
                                        alert("发生错误：" + jqXHR.status);
                                    },
                                });
                                document.getElementsByClassName("addClassinput")[0].value = "";
                                $(".addClass").attr('style', 'display:none;');
                                $(".detailed").attr('style', 'display:none;');
                                $(".learnerscontainer").attr('style', 'display:block;');
                                $(".Addlearnercontainer").attr('style', 'display:none;');
                            }
                        }*/
                        else {
                        	var IsAjaxall2;
                        	if(IsAjaxall2==true){return}
                        	IsAjaxall2=true;
                            $(".addlearnerimg").attr('style', 'display:none;');
                            $(".aordlearner").attr('style', 'display:table;');
                            $(".backtodetial").attr('style', 'display:none;');
                            document.getElementsByClassName("search")[0].setAttribute("style","display:none;");
                            var everyPhone = new Array();
                            $.ajax({
                            	
                                type: "POST",
                                url: "http://46y7i4.natappfree.cc/guide/courseOverview.action",
                                async: false,
                                success: function(data) {
                                	IsAjaxall2=false;
                                    var lc = document.getElementsByClassName("classes")[0];
                                    var txt = data;
                                    var obj = JSON.parse(txt);
                                    var txttable = "";

                                    function forin(json) {
                                        for (var i = 0; i < json.length; i++) {
                                            var jsonObj = json[i];
                                            /*txttable = txttable + "<div class=\"everyclass\">";
                                            txttable = txttable + "<div><p>" + jsonObj.courseName + "</p></div>";
                                            txttable = txttable + "<div><p>" + jsonObj.teacherName + "</p></div>";
                                            txttable = txttable + "<div><p>" + jsonObj.location + "</p></div>";
                                            txttable = txttable + "<div><p>" + jsonObj.courseSeq + "</p></div>";*
                                            txttable = txttable + "<div><div class=\"likeap likeap1\">" + jsonObj.courseId + "</div></div></div>";*/
                                            if (c0[k].getElementsByTagName("p")[0].getElementsByTagName("span")[1].innerText == jsonObj.courseId) {
                                                everyPhone = jsonObj.studPhone.split(";");
                                            }
                                        }
                                    }
                                    forin(obj);
                                    lc.innerHTML = txttable;
                                    changetext();
                                },
                                error: function(jqXHR) {
                                	IsAjaxall2=false;
                                    alert("发生错误：" + jqXHR.status);
                                },
                            });
                            $.ajax({
                                type: "POST",
                                url: "http://46y7i4.natappfree.cc/guide/userPandect.action",
                                async: false,
                                success: function(data) {
                                	IsAjaxall2=false;
                                    $('.class0').attr('id', '');
                                    document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].setAttribute("id", "yearhover");
                                    var lc = document.getElementsByClassName("learners")[0];
                                    var txt = data;
                                    var obj = JSON.parse(txt);
                                    var txttable = "";
                                    document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].innerText = c0[k].innerText;
                                    var lcp = document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0];

                                    function forin(json) {
                                        for (var i = 0; i < json.length; i++) {
                                            var jsonObj = json[i];
                                            for (var j = 0; j < everyPhone.length; j++) {
                                                if (jsonObj.phoneNumber == everyPhone[j]) {
                                                    txttable = txttable + "<div class=\"everylearner\">";
                                                    txttable = txttable + "<p class=\"learnerp\">" + jsonObj.userName + "</p>";
                                                    txttable = txttable + "<p class=\"learnerp learnerppn\">" + jsonObj.phoneNumber + "</p>";
                                                    txttable = txttable + "<p class=\"learnerp everylearnerp\">" + "详细信息" + "</p></div>";
                                                }
                                            }
                                        }
                                    }
                                    forin(obj);
                                    lc.innerHTML = txttable;
                                },
                                error: function(jqXHR) {
                                	IsAjaxall2=false;
                                    alert("发生错误：" + jqXHR.status);
                                },
                            });
                            document.getElementsByClassName("aordlearner")[0].onclick = function() {
                            	var IsAjaxall3;
                            	if(IsAjaxall3==true)
                            		IsAjaxall3=true;
                                $(".addlearnerimg").attr('style', 'display:none;');
                                $(".aordlearner").attr('style', 'display:none;');
                                $(".backtodetial").attr('style', 'display:table;');
                                $(".courseaord").attr('style', 'display:block;');
                                $.ajax({
                                	
                                    type: "POST",
                                    url: "http://46y7i4.natappfree.cc/guide/userPandect.action",
                                    async: false,
                                    success: function(data) {
                                    	IsAjaxall3=false;
                                        $('.class0').attr('id', '');
                                        document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].setAttribute("id", "yearhover");
                                        var lc = document.getElementsByClassName("learners")[0];
                                        var txt = data;
                                        var obj = JSON.parse(txt);
                                        var txttable = "";
                                        document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].innerText = c0[k].innerText;
                                        var lcp = document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0];

                                        function forin(json) {
                                            for (var i = 0; i < json.length; i++) {
                                                var jsonObj = json[i];
                                                for (var j = 0; j < everyPhone.length; j++) {
                                                    if (jsonObj.phoneNumber == everyPhone[j]) {
                                                        txttable = txttable + "<div class=\"everylearner\">";
                                                        txttable = txttable + "<p class=\"learnerp\">" + jsonObj.userName + "</p>";
                                                        txttable = txttable + "<p class=\"learnerp learnerppn\">" + jsonObj.phoneNumber + "</p>";
                                                        txttable = txttable + "<p class=\"learnerp everylearnerpa\">" + "点击删除" + "</p></div>";
                                                    }
                                                }
                                            }
                                        }

                                        function forin1(json) {
                                            for (var i = 0; i < json.length; i++) {
                                                var jsonObj = json[i];
                                                var x=0;
                                                for (var j = 0; j < everyPhone.length; j++) {
                                                	
                                                    if (jsonObj.phoneNumber != everyPhone[j]) {
                                                    	x++;
               
                                                    }
                                                    if(x==everyPhone.length)
                                                    	{
                                                    	txttable = txttable + "<div class=\"everylearner\">";
                                                        txttable = txttable + "<p class=\"learnerp\">" + jsonObj.userName + "</p>";
                                                        txttable = txttable + "<p class=\"learnerp learnerppn\">" + jsonObj.phoneNumber + "</p>";
                                                        txttable = txttable + "<p class=\"learnerp everylearnerpd\">" + "点击添加" + "</p></div>";
                                                    	}
                                                }
                                            }
                                        }
                                        forin(obj);
                                        forin1(obj);
                                        lc.innerHTML = txttable;

                                        function change1(a) {
                                            $(a).attr("class", "learnerp everylearnerpa everylearnerpa1");
                                            $(a).text("点击添加");
                                        }

                                        function change3(a) {
                                            $(a).attr("class", "learnerp everylearnerpa");
                                            $(a).text("点击删除");
                                        }

                                        function change2(a) {
                                            $(a).attr("class", "learnerp everylearnerpd everylearnerpd1");
                                            $(a).text("点击删除");
                                        }

                                        function change4(a) {
                                            $(a).attr("class", "learnerp everylearnerpd");
                                            $(a).text("点击添加");
                                        }
                                        $(".everylearnerpa").click(function() {
                                            if (this.className == "learnerp everylearnerpa") {
                                                change1(this);
                                            } else {
                                                change3(this);
                                            }
                                        });
                                        $(".everylearnerpd").click(function() {
                                            if (this.className == "learnerp everylearnerpd") {
                                                change2(this);
                                            } else {
                                                change4(this);
                                            }
                                        });
                                    },
                                    error: function(jqXHR) {
                                    	IsAjaxall3=false;
                                        alert("发生错误：" + jqXHR.status);
                                    },
                                });
                            }
                            document.getElementsByClassName("caoda")[0].onclick = function() {
                            	var IsAjaxall4;
                            	if(IsAjaxall4==true){return;}
                            	IsAjaxall4=true;
                                var theId = document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].innerText;
                                var everyId = theId.split("-");
                                var sp = document.getElementsByClassName("caodput")[0].value;
                                $.ajax({
                                	
                                    type: "POST",
                                    url: "http://46y7i4.natappfree.cc/guide/addStuByCor.action",
                                    async: false,
                                    data: { courseId: everyId[1], studPhone: sp },
                                    success: function(data) {
                                    	IsAjaxall4=false;
                                        if (data == "success") {
                                            alert("添加成功");
                                        } else {
                                            alert("添加失败");
                                        }
                                    },
                                    error: function() {
                                    	IsAjaxall4=false;
                                        detailed.innerHTML = "添加失败";
                                    },
                                });
                                $.ajax({
                                    type: "POST",
                                    url: "http://46y7i4.natappfree.cc/guide/courseOverview.action",
                                    async: false,
                                    success: function(data) {
                                    	IsAjaxall4=false;
                                        var lc = document.getElementsByClassName("classes")[0];
                                        var txt = data;
                                        var obj = JSON.parse(txt);
                                        var txttable = "";
                                        function forin(json) {
                                            for (var i = 0; i < json.length; i++) {
                                                var jsonObj = json[i];
                                                /*txttable = txttable + "<div class=\"everyclass\">";
                                                txttable = txttable + "<div><p>" + jsonObj.courseName + "</p></div>";
                                                txttable = txttable + "<div><p>" + jsonObj.teacherName + "</p></div>";
                                                txttable = txttable + "<div><p>" + jsonObj.location + "</p></div>";
                                                txttable = txttable + "<div><p>" + jsonObj.courseSeq + "</p></div>";*
                                                txttable = txttable + "<div><div class=\"likeap likeap1\">" + jsonObj.courseId + "</div></div></div>";*/
                                                if (c0[k].getElementsByTagName("p")[0].getElementsByTagName("span")[1].innerText == jsonObj.courseId) {
                                                    everyPhone = jsonObj.studPhone.split(";");
                                                }
                                            }
                                        }
                                        forin(obj);
                                        lc.innerHTML = txttable;
                                        changetext();
                                    },
                                    error: function(jqXHR) {
                                    	IsAjaxall4=false;
                                        alert("发生错误：" + jqXHR.status);
                                    },
                                });
                                $.ajax({
                                    type: "POST",
                                    url: "http://46y7i4.natappfree.cc/guide/userPandect.action",
                                    async: false,
                                    success: function(data) {
                                    	IsAjaxall4=false;
                                        $('.class0').attr('id', '');
                                        document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].setAttribute("id", "yearhover");
                                        var lc = document.getElementsByClassName("learners")[0];
                                        var txt = data;
                                        var obj = JSON.parse(txt);
                                        var txttable = "";
                                        document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].innerText = c0[k].innerText;
                                        var lcp = document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0];

                                        function forin(json) {
                                            for (var i = 0; i < json.length; i++) {
                                                var jsonObj = json[i];
                                                for (var j = 0; j < everyPhone.length; j++) {
                                                    if (jsonObj.phoneNumber == everyPhone[j]) {
                                                        txttable = txttable + "<div class=\"everylearner\">";
                                                        txttable = txttable + "<p class=\"learnerp\">" + jsonObj.userName + "</p>";
                                                        txttable = txttable + "<p class=\"learnerp learnerppn\">" + jsonObj.phoneNumber + "</p>";
                                                        txttable = txttable + "<p class=\"learnerp everylearnerp\">" + "详细信息" + "</p></div>";
                                                    }
                                                }
                                            }
                                        }
                                        forin(obj);
                                        lc.innerHTML = txttable;
                                    },
                                    error: function(jqXHR) {
                                    	IsAjaxall4=false;
                                        alert("发生错误：" + jqXHR.status);
                                    },
                                });
                                document.getElementsByClassName("caodput")[0].value="";
                                oneinfo();
                            }
                            
                            document.getElementsByClassName("caodd")[0].onclick = function() {
                            	var IsAjaxall5;
                            	if(IsAjaxall5==true){return;}
                            	IsAjaxall5=true;
                                var theId = document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].innerText;
                                var everyId = theId.split("-");
                                var sp = document.getElementsByClassName("caodput")[0].value;
                                $.ajax({
                                	
                                    type: "POST",
                                    url: "http://46y7i4.natappfree.cc/guide/delStuByCor.action",
                                    async: false,
                                    data: { courseId: everyId[1], studPhone: sp },
                                    success: function(data) {
                                    	IsAjaxall5=false;
                                        if (data == "success") {
                                            alert("删除成功");
                                        } else {
                                            alert("删除失败")
                                        }
                                    },
                                    error: function() {
                                    	IsAjaxall5=false;
                                        detailed.innerHTML = "删除失败";
                                    },
                                });
                                $.ajax({
                                    type: "POST",
                                    url: "http://46y7i4.natappfree.cc/guide/courseOverview.action",
                                    async: false,
                                    success: function(data) {
                                    	IsAjaxall5=false;
                                        var lc = document.getElementsByClassName("classes")[0];
                                        var txt = data;
                                        var obj = JSON.parse(txt);
                                        var txttable = "";

                                        function forin(json) {
                                            for (var i = 0; i < json.length; i++) {
                                                var jsonObj = json[i];
                                                /*txttable = txttable + "<div class=\"everyclass\">";
                                                txttable = txttable + "<div><p>" + jsonObj.courseName + "</p></div>";
                                                txttable = txttable + "<div><p>" + jsonObj.teacherName + "</p></div>";
                                                txttable = txttable + "<div><p>" + jsonObj.location + "</p></div>";
                                                txttable = txttable + "<div><p>" + jsonObj.courseSeq + "</p></div>";*
                                                txttable = txttable + "<div><div class=\"likeap likeap1\">" + jsonObj.courseId + "</div></div></div>";*/
                                                if (c0[k].getElementsByTagName("p")[0].getElementsByTagName("span")[1].innerText == jsonObj.courseId) {
                                                    everyPhone = jsonObj.studPhone.split(";");
                                                }
                                            }
                                        }
                                        forin(obj);
                                        lc.innerHTML = txttable;
                                        changetext();
                                    },
                                    error: function(jqXHR) {
                                    	IsAjaxall5=false;
                                        alert("发生错误：" + jqXHR.status);
                                    },
                                });
                                $.ajax({
                                    type: "POST",
                                    url: "http://46y7i4.natappfree.cc/guide/userPandect.action",
                                    async: false,
                                    success: function(data) {
                                    	IsAjaxall5=false;
                                        $('.class0').attr('id', '');
                                        document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].setAttribute("id", "yearhover");
                                        var lc = document.getElementsByClassName("learners")[0];
                                        var txt = data;
                                        var obj = JSON.parse(txt);
                                        var txttable = "";
                                        document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].innerText = c0[k].innerText;
                                        var lcp = document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0];

                                        function forin(json) {
                                            for (var i = 0; i < json.length; i++) {
                                                var jsonObj = json[i];
                                                for (var j = 0; j < everyPhone.length; j++) {
                                                    if (jsonObj.phoneNumber == everyPhone[j]) {
                                                        txttable = txttable + "<div class=\"everylearner\">";
                                                        txttable = txttable + "<p class=\"learnerp\">" + jsonObj.userName + "</p>";
                                                        txttable = txttable + "<p class=\"learnerp learnerppn\">" + jsonObj.phoneNumber + "</p>";
                                                        txttable = txttable + "<p class=\"learnerp everylearnerp\">" + "详细信息" + "</p></div>";
                                                    }
                                                }
                                            }
                                        }
                                        forin(obj);
                                        lc.innerHTML = txttable;
                                    },
                                    error: function(jqXHR) {
                                    	IsAjaxall5=false;
                                        alert("发生错误：" + jqXHR.status);
                                    },
                                });
                                document.getElementsByClassName("caodput")[0].value="";
                                oneinfo();
                            }
                            
                            document.getElementsByClassName("backtodetial")[1].onclick = function() {
                            	var IsAjaxall6;
                            	if(IsAjaxall6==true){return;}
                            	IsAjaxall6=true;
                                $(".addlearnerimg").attr('style', 'display:none;');
                                $(".aordlearner").attr('style', 'display:table;');
                                $(".backtodetial").attr('style', 'display:none;');
                                $(".courseaord").attr('style', 'display:none;');
                                $.ajax({
                                	
                                    type: "POST",
                                    url: "http://46y7i4.natappfree.cc/guide/userPandect.action",
                                    async: false,
                                    success: function(data) {
                                    	IsAjaxall6=false;
                                        $('.class0').attr('id', '');
                                        document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].setAttribute("id", "yearhover");
                                        var lc = document.getElementsByClassName("learners")[0];
                                        var txt = data;
                                        var obj = JSON.parse(txt);
                                        var txttable = "";
                                        document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].innerText = c0[k].innerText;
                                        var lcp = document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0];

                                        function forin(json) {
                                            for (var i = 0; i < json.length; i++) {
                                                var jsonObj = json[i];
                                                for (var j = 0; j < everyPhone.length; j++) {
                                                    if (jsonObj.phoneNumber == everyPhone[j]) {
                                                        txttable = txttable + "<div class=\"everylearner\">";
                                                        txttable = txttable + "<p class=\"learnerp\">" + jsonObj.userName + "</p>";
                                                        txttable = txttable + "<p class=\"learnerp learnerppn\">" + jsonObj.phoneNumber + "</p>";
                                                        txttable = txttable + "<p class=\"learnerp everylearnerp\">" + "详细信息" + "</p></div>";
                                                    }
                                                }
                                            }
                                        }
                                        forin(obj);
                                        lc.innerHTML = txttable;
                                    },
                                    error: function(jqXHR) {
                                    	IsAjaxall6=false;
                                        alert("发生错误：" + jqXHR.status);
                                    },
                                });
                                oneinfo()
                                $(".addlearnerimg").attr('style', 'display:none;');
                                $(".aordlearner").attr('style', 'display:table;');
                                $(".backtodetial").attr('style', 'display:none;');
                                $(".courseaord").attr('style', 'display:none;');
                                
                            }
                            document.getElementsByClassName("backtodetial")[0].onclick = function() {
                            	var IsAjaxall7;
                            	if(IsAjaxall7==true){return;}
                            	IsAjaxall7=true;
                            	
                                var a1 = document.getElementsByClassName("everylearnerpa1");
                                var d1 = document.getElementsByClassName("everylearnerpd1");
                                var theId = document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].innerText;
                                var everyId = theId.split("-");
                                var a11 = "";
                                var d11 = "";
                                if (a1.length != 0 || d1.length != 0) {
                                    if (d1.length != 0) {
                                        for (var i = 0; i < d1.length; i++) {
                                            d11 += d1[i].previousSibling.innerText + ";"
                                        }
                                        $.ajax({
                                            type: "POST",
                                            url: "http://46y7i4.natappfree.cc/guide/addStuByCor.action",
                                            async: false,
                                            data: { courseId: everyId[1], studPhone: d11 },
                                            success: function(data) {
                                            	IsAjaxall7=false;
                                                if (data == "success") {
                                                    alert("添加成功");
                                                } else {
                                                    alert("添加失败");
                                                }
                                            },
                                            error: function() {
                                            	IsAjaxall7=false;
                                                var detailed = document.getElementsByClassName("detailed")[0];
                                                detailed.innerHTML = "查找失败:无效字符串";
                                            },
                                        });
                                        $.ajax({
                                        	
                                            type: "POST",
                                            url: "http://46y7i4.natappfree.cc/guide/courseOverview.action",
                                            async: false,
                                            success: function(data) {
                                            	IsAjaxall7=false;
                                                var lc = document.getElementsByClassName("classes")[0];
                                                var txt = data;
                                                var obj = JSON.parse(txt);
                                                var txttable = "";

                                                function forin(json) {
                                                    for (var i = 0; i < json.length; i++) {
                                                        var jsonObj = json[i];
                                                        /*txttable = txttable + "<div class=\"everyclass\">";
                                                        txttable = txttable + "<div><p>" + jsonObj.courseName + "</p></div>";
                                                        txttable = txttable + "<div><p>" + jsonObj.teacherName + "</p></div>";
                                                        txttable = txttable + "<div><p>" + jsonObj.location + "</p></div>";
                                                        txttable = txttable + "<div><p>" + jsonObj.courseSeq + "</p></div>";*
                                                        txttable = txttable + "<div><div class=\"likeap likeap1\">" + jsonObj.courseId + "</div></div></div>";*/
                                                        if (c0[k].getElementsByTagName("p")[0].getElementsByTagName("span")[1].innerText == jsonObj.courseId) {
                                                            everyPhone = jsonObj.studPhone.split(";");
                                                        }
                                                    }
                                                }
                                                forin(obj);
                                                lc.innerHTML = txttable;
                                                changetext();
                                            },
                                            error: function(jqXHR) {
                                            	IsAjaxall7=false;
                                                alert("发生错误：" + jqXHR.status);
                                            },
                                        });
                                        $.ajax({
                                            type: "POST",
                                            url: "http://46y7i4.natappfree.cc/guide/userPandect.action",
                                            async: false,
                                            success: function(data) {
                                            	IsAjaxall7=false;
                                                $('.class0').attr('id', '');
                                                document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].setAttribute("id", "yearhover");
                                                var lc = document.getElementsByClassName("learners")[0];
                                                var txt = data;
                                                var obj = JSON.parse(txt);
                                                var txttable = "";
                                                document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].innerText = c0[k].innerText;
                                                var lcp = document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0];

                                                function forin(json) {
                                                    for (var i = 0; i < json.length; i++) {
                                                        var jsonObj = json[i];
                                                        for (var j = 0; j < everyPhone.length; j++) {
                                                            if (jsonObj.phoneNumber == everyPhone[j]) {
                                                                txttable = txttable + "<div class=\"everylearner\">";
                                                                txttable = txttable + "<p class=\"learnerp\">" + jsonObj.userName + "</p>";
                                                                txttable = txttable + "<p class=\"learnerp learnerppn\">" + jsonObj.phoneNumber + "</p>";
                                                                txttable = txttable + "<p class=\"learnerp everylearnerp\">" + "详细信息" + "</p></div>";
                                                            }
                                                        }
                                                    }
                                                }
                                                forin(obj);
                                                lc.innerHTML = txttable;
                                            },
                                            error: function(jqXHR) {
                                            	IsAjaxall7=false;
                                                alert("发生错误：" + jqXHR.status);
                                            },
                                        });
                                        oneinfo()
                                        $(".addlearnerimg").attr('style', 'display:none;');
                                        $(".aordlearner").attr('style', 'display:table;');
                                        $(".backtodetial").attr('style', 'display:none;');
                                        $(".courseaord").attr('style', 'display:none;');
                                        
                                    }
                                    if (a1.length != 0) {
                                        for (var i = 0; i < a1.length; i++) {
                                            a11 += a1[i].previousSibling.innerText + ";"
                                            }
                                            $.ajax({
                                                type: "POST",
                                                url: "http://46y7i4.natappfree.cc/guide/delStuByCor.action",
                                                async: false,
                                                data: { courseId: everyId[1], studPhone: a11 },
                                                success: function(data) {
                                                	IsAjaxall7=false;
                                                    if (data == "success") {
                                                        alert("删除成功");
                                                    } else {
                                                        alert("删除失败")
                                                    }
                                                },
                                                error: function() {
                                                	IsAjaxall7=false;
                                                    var detailed = document.getElementsByClassName("detailed")[0];
                                                    detailed.innerHTML = "查找失败:无效字符串";
                                                },
                                            });
                                            $.ajax({
                                                type: "POST",
                                                url: "http://46y7i4.natappfree.cc/guide/courseOverview.action",
                                                async: false,
                                                success: function(data) {
                                                	IsAjaxall7=false;
                                                    var lc = document.getElementsByClassName("classes")[0];
                                                    var txt = data;
                                                    var obj = JSON.parse(txt);
                                                    var txttable = "";

                                                    function forin(json) {
                                                        for (var i = 0; i < json.length; i++) {
                                                            var jsonObj = json[i];
                                                            /*txttable = txttable + "<div class=\"everyclass\">";
                                                            txttable = txttable + "<div><p>" + jsonObj.courseName + "</p></div>";
                                                            txttable = txttable + "<div><p>" + jsonObj.teacherName + "</p></div>";
                                                            txttable = txttable + "<div><p>" + jsonObj.location + "</p></div>";
                                                            txttable = txttable + "<div><p>" + jsonObj.courseSeq + "</p></div>";*
                                                            txttable = txttable + "<div><div class=\"likeap likeap1\">" + jsonObj.courseId + "</div></div></div>";*/
                                                            if (c0[k].getElementsByTagName("p")[0].getElementsByTagName("span")[1].innerText == jsonObj.courseId) {
                                                                everyPhone = jsonObj.studPhone.split(";");
                                                            }
                                                        }
                                                    }
                                                    forin(obj);
                                                    lc.innerHTML = txttable;
                                                    changetext();
                                                },
                                                error: function(jqXHR) {
                                                	IsAjaxall=false;
                                                    alert("发生错误：" + jqXHR.status);
                                                },
                                            });
                                            $.ajax({
                                                type: "POST",
                                                url: "http://46y7i4.natappfree.cc/guide/userPandect.action",
                                                async: false,
                                                success: function(data) {
                                                	IsAjaxall=false;
                                                    $('.class0').attr('id', '');
                                                    document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].setAttribute("id", "yearhover");
                                                    var lc = document.getElementsByClassName("learners")[0];
                                                    var txt = data;
                                                    var obj = JSON.parse(txt);
                                                    var txttable = "";
                                                    document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0].innerText = c0[k].innerText;
                                                    var lcp = document.getElementsByClassName("Classes")[0].getElementsByTagName("p")[0];

                                                    function forin(json) {
                                                        for (var i = 0; i < json.length; i++) {
                                                            var jsonObj = json[i];
                                                            for (var j = 0; j < everyPhone.length; j++) {
                                                                if (jsonObj.phoneNumber == everyPhone[j]) {
                                                                    txttable = txttable + "<div class=\"everylearner\">";
                                                                    txttable = txttable + "<p class=\"learnerp\">" + jsonObj.userName + "</p>";
                                                                    txttable = txttable + "<p class=\"learnerp learnerppn\">" + jsonObj.phoneNumber + "</p>";
                                                                    txttable = txttable + "<p class=\"learnerp everylearnerp\">" + "详细信息" + "</p></div>";
                                                                }
                                                            }
                                                        }
                                                    }
                                                    forin(obj);
                                                    lc.innerHTML = txttable;
                                                },
                                                error: function(jqXHR) {
                                                	IsAjaxall=false;
                                                    alert("发生错误：" + jqXHR.status);
                                                },
                                            });
                                            oneinfo()
                                        }
                                    
                                    $(".addlearnerimg").attr('style', 'display:none;');
                                    $(".aordlearner").attr('style', 'display:table;');
                                    $(".backtodetial").attr('style', 'display:none;');
                                    $(".courseaord").attr('style', 'display:none;');
                                    
                                } else {
                                    alert("无修改");
                                }
                            }
                        }
                        var everylearners = document.getElementsByClassName("everylearner");
                        var everylearnerps = document.getElementsByClassName("everylearnerp");
                        var learnerps = document.getElementsByClassName("learnerppn");
                        for (var i = 0; i <= everylearners.length - 1; i++) {
                            (function() {
                                var k = i;
                                var el = everylearners[k];
                                var elp = everylearnerps[k];
                                var ls = learnerps[k].innerText.toString();
                                var dr = document.getElementsByClassName("detailedpright");
                                elp.onclick = function() {
                                	var IsAjaxall8;
                                	if(IsAjaxall8==true){return;}
                                	IsAjaxall8=true;
                                    $(".detailed").attr('style', 'display:block;');
                                    $(".learnerscontainer").attr('style', 'display:none;');
                                    $(".Addlearnercontainer").attr('style', 'display:none;');
                                    $.ajax({
                                        type: "POST",
                                        url: "http://46y7i4.natappfree.cc/guide/getPersionalInfo.action",
                                        data: { phoneNumber: ls },
                                        success: function(data) {
                                        	IsAjaxall8=false;
                                            var txt = data;
                                            var obj = JSON.parse(txt);
                                            /* function forin(json) {
                                                 for (var key in json) {*/
                                            dr[0].innerHTML = obj.userName;
                                            dr[1].innerHTML = obj.gender;
                                            dr[2].innerHTML = obj.IDNumber;
                                            dr[3].innerHTML = obj.email;
                                            dr[4].innerText = obj.phoneNumber;
                                        },
                                        error: function() {
                                        	IsAjaxall8=false;
                                            var detailed = document.getElementsByClassName("detailed")[0];
                                            detailed.innerHTML = "查找失败:无效字符串";
                                        },
                                    });
                                }
                            })();
                        }
                    }
                })()
            }
        },
        error: function(jqXHR) {
        	IsAjaxall=false;
            alert("发生错误：" + jqXHR.status);
        },
    });
    $.ajax({
        type: "POST",
        url: "http://46y7i4.natappfree.cc/guide/userPandect.action",
        async: false,
        success: function(data) {
        	IsAjaxall=false;
            var lc = document.getElementsByClassName("learners")[0];
            var txt = data;
            var obj = JSON.parse(txt);
            var txttable = "";

            function forin(json) {
                for (var i = 0; i < json.length; i++) {
                    var jsonObj = json[i];
                    txttable = txttable + "<div class=\"everylearner\">";
                    txttable = txttable + "<p class=\"learnerp\">" + jsonObj.userName + "</p>";
                    txttable = txttable + "<p class=\"learnerp learnerppn\">" + jsonObj.phoneNumber + "</p>";
                    txttable = txttable + "<p class=\"learnerp everylearnerp\">" + "详细信息" + "</p></div>";
                }
            }

            forin(obj);
            lc.innerHTML = txttable;
        },
        error: function(jqXHR) {
        	IsAjaxall=false;
            alert("发生错误：" + jqXHR.status);
        },
    });

};
//搜索和点击查看个人信息
function oneinfo() {
	
    document.getElementsByClassName("searchbt")[0].onclick = function() {
    	var IsAjaxone;
    	if(IsAjaxone==true){return;}
    	IsAjaxone=true;
        var sp = document.getElementsByClassName("searchput")[0].value;
        var reg5 = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
        var dr = document.getElementsByClassName("detailedpright");
        if (reg5.test(sp) == false) { alert("手机号输入不合法") } else {
            $(".detailed").attr('style', 'display:block;');
            $(".learnerscontainer").attr('style', 'display:none;');
            $(".addClass").attr('style', 'display:none;');
            $.ajax({
                type: "POST",
                url: "http://46y7i4.natappfree.cc/guide/getPersionalInfo.action",
                data: { phoneNumber: sp },
                success: function(data) {
                	IsAjaxone=false;
                    var txt = data;
                    var obj = JSON.parse(txt);
                    /* function forin(json) {
                         for (var key in json) {*/
                    dr[0].innerHTML = obj.userName;
                    dr[1].innerHTML = obj.gender;
                    dr[2].innerHTML = obj.IDNumber;
                    dr[3].innerHTML = obj.email;
                    dr[4].innerHTML = obj.phoneNumber;
                    /* }
                    }
                    forin(obj); */
                },
                error: function() {
                	IsAjaxone=false;
                    var detailed = document.getElementsByClassName("detailed")[0];
                    detailed.innerHTML = "查找失败:无效字符串";
                },
            });
        }
        document.getElementsByClassName("searchput")[0].value = "";
    };
    var everylearners = document.getElementsByClassName("everylearner");
    var everylearnerps = document.getElementsByClassName("everylearnerp");
    var learnerps = document.getElementsByClassName("learnerppn");
    for (var i = 0; i <= everylearners.length - 1; i++) {
        (function() {
            var k = i;
            var el = everylearners[k];
            var elp = everylearnerps[k];
            var ls = learnerps[k].innerText.toString();
            var dr = document.getElementsByClassName("detailedpright");
            elp.onclick = function() {
            	var IsAjaxone1;
            	if(IsAjaxone1==true){return;}
            	IsAjaxone1=true;
                $(".detailed").attr('style', 'display:block;');
                $(".learnerscontainer").attr('style', 'display:none;');
                $.ajax({
                    type: "POST",
                    url: "http://46y7i4.natappfree.cc/guide/getPersionalInfo.action",
                    data: { phoneNumber: ls },
                    success: function(data) {
                    	IsAjaxone1=false;
                        var txt = data;
                        var obj = JSON.parse(txt);
                        /* function forin(json) {
                             for (var key in json) {*/
                        dr[0].innerHTML = obj.userName;
                        dr[1].innerHTML = obj.gender;
                        dr[2].innerHTML = obj.IDNumber;
                        dr[3].innerHTML = obj.email;
                        dr[4].innerHTML = obj.phoneNumber;
                    },
                    error: function() {
                    	IsAjaxone1=false;
                        var detailed = document.getElementsByClassName("detailed")[0];
                        detailed.innerHTML = "查找失败:无效字符串";
                    },
                });
            }
        })();
    }
};
//添加学员
function oneinfo1() {
    document.getElementsByClassName("addlearnerimg")[0].onclick = function() {
    	var IsAjaxone11;
    	if(IsAjaxone11==true){return;}
    	IsAjaxone11=true;
        $(".detailed").attr('style', 'display:none;');
        $(".Addlearnercontainer").attr('style', 'display:block;');
        $(".learnerscontainer").attr('style', 'display:none;');
        $(".addClass").attr('style', 'display:none;');
        document.getElementsByClassName("Addlearnersubmit")[0].onclick = function() {
            var a1 = document.getElementsByClassName("Addlearnerinput")[0].value;
            var a2 = document.getElementsByClassName("Addlearnerinput")[1].value;
            var a3 = document.getElementsByClassName("Addlearnerinput")[2].value;
            var reg3 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            var a4 = document.getElementsByClassName("Addlearnerinput")[3].value;
            var reg4 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
            var a5 = document.getElementsByClassName("Addlearnerinput")[4].value;
            var reg5 = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
            if (a1 == "") { alert("请输入姓名") } else if (a2 != "男" && a2 != "女") { alert("请输入“男”或“女”") } else if (reg3.test(a3) == false) { alert("身份证输入不合法") } else if (reg4.test(a4) == false) { alert("电子邮箱输入不合法") } else if (reg5.test(a5) == false) { alert("手机号输入不合法") } else {
                $.ajax({
                    type: "POST",
                    url: "http://46y7i4.natappfree.cc/guide/addUserByAdmin.action",
                    data: {
                        userName: a1,
                        gender: a2,
                        IDNumber: a3,
                        email: a4,
                        phoneNumber: a5,
                    },
                    success: function(data) {
                    	IsAjaxone11=false;
                        if (data = "success") {
                            alert("添加成功");
                        } else {
                            allinfo();
                        }
                    },
                    error: function(jqXHR) {
                    	IsAjaxone11=false;
                        alert("发生错误：" + jqXHR.status);
                    },
                });
            }
        }
    }
}
//课程
function course() {
	var IsAjaxcou11=true;
    $.ajax({
        type: "POST",
        url: "http://46y7i4.natappfree.cc/guide/courseOverview.action",
        async: false,
        success: function(data) {
        	IsAjaxcou11=false;
            var lc = document.getElementsByClassName("classes")[0];
            var txt = data;
            var obj = JSON.parse(txt);
            var txttable = "";

            function forin(json) {
                for (var i = 0; i < json.length; i++) {
                    var jsonObj = json[i];
                    txttable = txttable + "<div class=\"everyclass\">";
                    txttable = txttable + "<div><p>" + jsonObj.courseName + "</p></div>";
                    txttable = txttable + "<div><p>" + jsonObj.teacherName + "</p></div>";
                    txttable = txttable + "<div><p>" + jsonObj.courseSeq + "</p></div>";
                    txttable = txttable + "<div><p>" + jsonObj.location + "</p></div>";
                    txttable = txttable + "<div><div class=\"likeap likeap1\">" + jsonObj.courseId + "</div></div></div>";
                }
            }
            forin(obj);
            lc.innerHTML = txttable;
            changetext()
        },
        error: function(jqXHR) {
        	IsAjaxcou11=false;
            alert("发生错误：" + jqXHR.status);
        },
    });

    document.getElementsByClassName("searchbt")[1].onclick = function() {
    	var IsAjaxcou1;
    	if(IsAjaxcou1==true){return}
    	IsAjaxcou1=true;
        var sp = document.getElementsByClassName("searchput")[1].value;
        var lc = document.getElementsByClassName("classes")[0];
        $.ajax({
            type: "POST",
            url: "http://46y7i4.natappfree.cc/guide/courseOverview.action",
            success: function(data) {
            	IsAjaxcou1=false;
                var txt = data;
                var obj = JSON.parse(txt);
                var txttable = "";

                function forin(json) {
                    for (var i = 0; i < json.length; i++) {
                        var jsonObj = json[i];
                        if (jsonObj.courseName == sp) {
                            txttable = txttable + "<div class=\"everyclass\">";
                            txttable = txttable + "<div><p>" + jsonObj.courseName + "</p></div>";
                            txttable = txttable + "<div><p>" + jsonObj.teacherName + "</p></div>";
                            txttable = txttable + "<div><p>" + jsonObj.courseSeq + "</p></div>";
                            txttable = txttable + "<div><p>" + jsonObj.location + "</p></div>";
                            txttable = txttable + "<div><div class=\"likeap likeap1\">" + jsonObj.courseId + "</div></div></div>";
                        }
                    }
                }
                forin(obj);
                lc.innerHTML = txttable;
            },
            error: function() {
            	IsAjaxcou1=false;
                var detailed = document.getElementsByClassName("detailed")[0];
                detailed.innerHTML = "查找失败:无效字符串";
            },
        });
        document.getElementsByClassName("searchput")[1].value = "";
        changetext()
    };
    document.getElementsByClassName("addcourse")[0].onclick = function() {
    	
        $(".overchange").attr('style', 'display:none;');
        $(".addcourse").attr('style', 'display:none;');
        $(".overAdd").attr('style', 'display:table;');
        $(".noAdd").attr('style', 'display:table;');
        var lc = document.getElementsByClassName("classes")[0];
        var bc = document.getElementsByClassName("becareful")[0].getElementsByTagName("p")[0];
        var txt = "";
        txt = txt + "<div class=\"everyclass\">";
        txt = txt + "<div><p>" + "双击此处输入" + "</p></div>";
        txt = txt + "<div><p>" + "双击此处输入" + "</p></div>";
        txt = txt + "<div><p>" + "格式：第X周第X节" + "</p></div>";
        txt = txt + "<div><p>" + "双击此处输入" + "</p></div>";
        txt = txt + "<div><div class=\"likeap likeap1\">" + "无需填写" + "</div></div></div>";
        lc.innerHTML = txt;
        bc.innerText = "添加完成后请点击添加完成,上课节次格式：第X周第X节";
    }
    document.getElementsByClassName("noAdd")[0].onclick = function() {
        $(".overchange").attr('style', 'display:table;');
        $(".addcourse").attr('style', 'display:table;');
        $(".overAdd").attr('style', 'display:none;');
        $(".noAdd").attr('style', 'display:none;');
        course();
        var bc = document.getElementsByClassName("becareful")[0].getElementsByTagName("p")[0];
        bc.innerText = "双击属性可以修改，修改完成后点击“修改完成”，上课节次格式：第X周第X节";
    }
    document.getElementsByClassName("overAdd")[0].onclick = function() {
    	var IsAjaxcou2;
    	if(IsAjaxcou2==true){return}
    	IsAjaxcou2=true;
        var p1 = document.getElementsByClassName("everyclass")[0].getElementsByTagName("div")[0].getElementsByTagName("p")[0].innerText;
        var p2 = document.getElementsByClassName("everyclass")[0].getElementsByTagName("div")[1].getElementsByTagName("p")[0].innerText;
        var p3 = document.getElementsByClassName("everyclass")[0].getElementsByTagName("div")[2].getElementsByTagName("p")[0].innerText;
        var p4 = document.getElementsByClassName("everyclass")[0].getElementsByTagName("div")[3].getElementsByTagName("p")[0].innerText;
        if (p1 == "双击此处输入") { alert("请输入课程名称"); } else if (p2 == "双击此处输入") { alert("请输入教师姓名"); } else if (p3 == "格式：第X周第X节") { alert("请输入上课节次"); } else if (p4 == "双击此处输入") { alert("请输入上课地点"); } else {
            $.ajax({
                type: "POST",
                url: "http://46y7i4.natappfree.cc/guide/addCourse.action",
                data: {
                    courseName: p1,
                    teacherName: p2,
                    courseSeq: p3,
                    location: p4,
                },
                success: function(data) {
                	IsAjaxcou2=false;
                    if (data = "success") {

                        alert("添加成功");
                        $(".overchange").attr('style', 'display:table;');
                        $(".addcourse").attr('style', 'display:table;');
                        $(".overAdd").attr('style', 'display:none;');
                        course();
                    } else {
                        alert("添加失败");
                    }
                },
                error: function(jqXHR) {
                	IsAjaxcou2=false;
                    alert("发生错误：" + jqXHR.status);
                },
            });
        }
        changetext();
    }
    document.getElementsByClassName("overchange")[0].onclick = function() {
    	var IsAjaxcou3;
    	if(IsAjaxcou3==true){return}
    	IsAjaxcou3=true;
        $.ajax({
            type: "POST",
            url: "http://46y7i4.natappfree.cc/guide/courseOverview.action",
            success: function(data) {
            	IsAjaxcou3=false;
                var lc = document.getElementsByClassName("classes")[0];
                var txt = data;
                var obj = JSON.parse(txt);

                function forin(json) {
                    for (var i = 0; i < json.length; i++) {
                        var jsonObj = json[i];
                        var pi = document.getElementsByClassName("everyclass")[i];
                        var picn1 = pi.getElementsByTagName("div")[0].getElementsByTagName("p")[0].innerText;
                        var picn2 = pi.getElementsByTagName("div")[1].getElementsByTagName("p")[0].innerText;
                        var picn3 = pi.getElementsByTagName("div")[2].getElementsByTagName("p")[0].innerText;
                        var picn4 = pi.getElementsByTagName("div")[3].getElementsByTagName("p")[0].innerText;
                        var picn5 = pi.getElementsByTagName("div")[4].getElementsByTagName("div")[0].innerText;
                        /*var picn6 = jsonObj.courseId;*/
                        if (picn1 != jsonObj.courseName || picn2 != jsonObj.teacherName || picn3 != jsonObj.courseSeq || picn4 != jsonObj.location /*|| picn5 != jsonObj.courseId*/ ) {

                            (function() {
                                var pic1 = picn1;
                                var pic2 = picn2;
                                var pic3 = picn3;
                                var pic4 = picn4;
                                var pic5 = picn5;
                                /*var pic6 = picn6;*/
                                $.ajax({
                                    type: "POST",
                                    url: "http://46y7i4.natappfree.cc/guide/addCourse.action",
                                    data: {
                                        courseName: pic1,
                                        teacherName: pic2,
                                        courseSeq: pic3,
                                        location: pic4,
                                        courseId: pic5
                                    },
                                    success: function(data) {
                                        alert(pic1 + "修改成功");
                                    },
                                    error: function(jqXHR) {
                                        alert(pic1 + "修改失败");
                                    },
                                });
                            })()
                        }
                    }
                }
                forin(obj);
            },
            error: function(jqXHR) {
            	IsAjaxcou3=false;
                alert("发生错误：" + jqXHR.status);
            },
        });
        course;
    }
    changetext()
}

function message() {
	var IsAjaxme=true;
    $.ajax({
        type: "POST",
        url: "http://46y7i4.natappfree.cc/guide/courseOverview.action",
        async: false,
        success: function(data) {
        	IsAjaxme=false;
            var lc = document.getElementById("choiceClass1");
            var txt = data;
            var obj = JSON.parse(txt);
            var txttable = "";
            for (var i = 0; i < obj.length; i++) {
                var jsonObj = obj[i];
                txttable = txttable + " <div class=\"CC1\"><p>" + "<span>" + jsonObj.courseName + "</span>" + "-" + jsonObj.courseId + "</p></div>";
            }
            lc.innerHTML = "<div style=\"background-color: white;height:14%\"><img style=\"height: 100%;width: auto;margin:0 auto;display: block;\" src=\"image1/sanjiao.png\"></div>"+txttable;
            if (obj.length >= 5) {
                $("#choiceClass1").attr('style', 'height:500%;overflow-y:auto');
                var cCd = document.getElementById("choiceClass1").getElementsByTagName("div");
                for (var i = 0; i < cCd.length; i++) {
                    cCd[i].setAttribute("style", "height:20%");
                    document.getElementById("choiceClass1").getElementsByTagName("div")[0].setAttribute("style", "background-color: white;height:7%");
                }
            } else {
                $("#choiceClass1").attr('style', 'height:200%;overflow-y:none');
                var cCd = document.getElementById("choiceClass1").getElementsByTagName("div");
                for (var i = 0; i < cCd.length; i++) {
                    cCd[i].setAttribute("style", "height:50%");
                }
            }
            var c0 = document.getElementsByClassName("CC1");
            for (var i = 0; i <= c0.length - 1; i++) {
                (function() {
                    var k = i;
                    c0[k].onclick = function() {
                        document.getElementsByClassName("Classes1")[0].getElementsByTagName("p")[0].innerText = c0[k].getElementsByTagName("p")[0].innerText;
                        $('.textclass').attr('id', '');
                        $(".Classes1").attr('id', 'yearhover1');
                    }
                })();
            }
            document.getElementsByClassName("textclass")[0].onclick = function() {
                $('.textclass').attr('id', 'yearhover1');
                $(".Classes1").attr('id', '');
                document.getElementsByClassName("Classes1")[0].getElementsByTagName("p")[0].innerText = "选择课程";
            }
        },
        error: function(jqXHR) {
        	IsAjaxme=false;
            alert("发生错误：" + jqXHR.status);
        },
    });
    document.getElementsByClassName("stsend1")[0].onclick = function() {
    	var IsAjaxme1;
    	if(IsAjaxme1==true){return}
    	IsAjaxme1=true;
        var calend = document.getElementsByClassName("calend")[0].innerText;
        var a1 = document.getElementsByClassName("editinput")[0].getElementsByTagName("textarea")[0].value;
        var a2 = calend.match(/\d+/g)[1];
        var a3 = calend.match(/\d+/g)[2];
        var a4 = document.getElementsByClassName("specifictime")[0].getElementsByTagName("input")[0].value;
        var a5 = document.getElementsByClassName("specifictime")[0].getElementsByTagName("input")[1].value;
        var theId = document.getElementsByClassName("Classes1")[0].getElementsByTagName("p")[0].innerText;     
        if (theId == "选择课程") {
            var a6 = "";
        }
        else{
        	var a61 = theId.split("-");
        	var a6=a61[1];
        }
        $.ajax({
            type: "POST",
            url: "http://46y7i4.natappfree.cc/guide/sendMessage.action",
            data: {
                content: a1,
                month: a2,
                day: a3,
                hour: a4,
                miniutes: a5,
                courseId: a6
            },
            success: function(data) {
            	IsAjaxme1=false;
                if (data = "success") {
                    alert("发送成功")
                } else {
                    alert("发送失败")
                }

            },
            error: function(jqXHR) {
            	IsAjaxme1=false;
                alert("发生错误：" + jqXHR.status);
            },
        });
    }
    document.getElementsByClassName("tosend")[0].getElementsByTagName("p")[0].onclick = function() {
    	var IsAjaxme2;
    	if(IsAjaxme2==true){return}
    	IsAjaxme2=true;
        var myDate = new Date();
        var a1 = document.getElementsByClassName("editinput")[0].getElementsByTagName("textarea")[0].value;
        var a2 = myDate.getMonth() + 1;
        var a3 = myDate.getDate();
        var a4 = myDate.getHours();
        var a5 = myDate.getMinutes();
        var theId = document.getElementsByClassName("Classes1")[0].getElementsByTagName("p")[0].innerText;     
        if (theId == "选择课程") {
            var a6 = "";
        }
        else{
        	var a61 = theId.split("-");
        	var a6=a61[1];
        }
        $.ajax({
            type: "POST",
            url: "http://46y7i4.natappfree.cc/guide/sendMessage.action",
            data: {
                content: a1,
                month: a2,
                day: a3,
                hour: a4,
                miniutes: a5,
                courseId: a6
            },
            success: function(data) {
            	IsAjaxme2=false;
                alert("发送成功");
            },
            error: function(jqXHR) {
            	IsAjaxme2=false;
                alert("发生错误：" + jqXHR.status);
            },
        });

    }
}

function messaged() {
    var i = 0;
    var ol;
    var obj
    function showHint1() {
        $.ajax({
            type: "POST",
            url: "http://46y7i4.natappfree.cc/guide/messageOverview.action",
            success: function(data) {
                var lc = document.getElementsByClassName("theClass")[0];
                var txt = data;
                obj = JSON.parse(txt);
                ol = obj.length;
                var t = i + 1;
                for (; i <= t; i++) {
                    document.getElementsByClassName("editinputed")[i].getElementsByTagName("textarea")[0].value = obj[i].content;
                    document.getElementsByClassName("edittime")[i].getElementsByTagName("p")[0].getElementsByTagName("span")[1].innerText = obj[i].month;
                    document.getElementsByClassName("edittime")[i].getElementsByTagName("p")[0].getElementsByTagName("span")[2].innerText = obj[i].day;
                    document.getElementsByClassName("edittime")[i].getElementsByTagName("p")[0].getElementsByTagName("span")[3].innerText = obj[i].hour;
                    document.getElementsByClassName("edittime")[i].getElementsByTagName("p")[0].getElementsByTagName("span")[4].innerText = obj[i].minutes;
                    document.getElementsByClassName("edittime")[i].getElementsByTagName("p")[0].getElementsByTagName("span")[0].innerText = obj[i].year;
                }
            },
            error: function(jqXHR) {
                alert("没有更多信息了1");
            },
        });
    }
    showHint1();
    document.getElementsByClassName("sended")[0].onclick = function() {
        function showHint2() {
            /*$.ajax({
                type: "POST",
                url: "http://46y7i4.natappfree.cc/guide/messageOverview.action",
                success: function(data) {
                    var lc = document.getElementsByClassName("theClass")[0];
                    var txt = data;
                    var obj = JSON.parse(txt);*/
                    document.getElementsByClassName("editinputed")[i].getElementsByTagName("textarea")[0].value = obj[i].content;
                    document.getElementsByClassName("edittime")[i].getElementsByTagName("p")[0].getElementsByTagName("span")[1].innerText = obj[i].month;
                    document.getElementsByClassName("edittime")[i].getElementsByTagName("p")[0].getElementsByTagName("span")[2].innerText = obj[i].day;
                    document.getElementsByClassName("edittime")[i].getElementsByTagName("p")[0].getElementsByTagName("span")[3].innerText = obj[i].hour;
                    document.getElementsByClassName("edittime")[i].getElementsByTagName("p")[0].getElementsByTagName("span")[4].innerText = obj[i].minutes;
                    document.getElementsByClassName("edittime")[i].getElementsByTagName("p")[0].getElementsByTagName("span")[0].innerText = obj[i].year;
                    i++;
                /*},
                error: function(jqXHR) {
                    alert("发生错误：" + jqXHR.status);
                },
            });*/
        }
        $(".morem").unbind("click");
        $(".morem").click(function() {
            /*$(".more").before(" <div class=\"edittime\"> <p>2017-<span>9</span>-<span>30</span>&nbsp;&nbsp;&nbsp;<span></span>:<span></span></p> </div> <div class = \"editinputed\" ><textarea readonly> </textarea> </div>");*/
            if (i <= ol - 2) {
                for (var a = 3; a <= ol; a++) {
                    $(".more").before(" <div class=\"edittime\"> <p><span>2017</span>-<span>9</span>-<span>30</span>&nbsp;&nbsp;&nbsp;<span></span>:<span></span></p> </div> <div class = \"editinputed\" ><textarea readonly> </textarea> </div>");
                    showHint2();
                }
            } else {
                alert("没有更多信息了");
            }
        });
    }
}

function login() {
    document.getElementsByClassName("tologin")[0].onclick = function() {
        var un = document.getElementById("username").value;
        var pn = document.getElementById("password").value;
        $.ajax({
            type: "POST",
            url: "http://46y7i4.natappfree.cc/guide/adminLogin.action",
            data: {
                phoneNumber: un,
                password: pn
            },
            success: function(data) {
                if (data == "success") {
                    $(".page").attr('style', 'display:none;');
                } else {
                    alert("用户名/密码错误");
                }
            },
            error: function(jqXHR) {
                alert("发生错误：" + jqXHR.status);
            },
        });
    }
}
function clicktodo(){
    document.getElementsByClassName("learner")[0].onclick=function(){
        oneinfo();
        oneinfo1()
    }   
    document.getElementsByClassName("info")[0].onclick=function(){
        course();
    } 
    document.getElementsByClassName("send")[0].onclick=function(){
        message()
    } 
    document.getElementsByClassName("sended")[0].onclick=function(){
        messaged()
    } 
};
//立即执行的函数
$(document).ready(function() {
    allinfo();
    /*colorchange(".sended", ".sended", ".boarder", ".info", ".send", ".learner", "stitledivhover");*/
    show(".learner", ".learnerright", ".boarderright", ".inforight", ".sendright", ".sendedright");
    show(".boarder", ".boarderright", ".inforight", ".sendright", ".sendedright", ".learnerright");
    show(".info", ".inforight", ".learnerright", ".boarderright", ".sendright", ".sendedright");
    show(".send", ".sendright", ".learnerright", ".boarderright", ".inforight", ".sendedright");
    show(".sended", ".sendedright", ".learnerright", ".boarderright", ".inforight", ".sendright");
    searchfloor();
    settimetosend();
    searchclass();
    clicktodo();
    oneinfo();
    oneinfo1();
    course();
    changetext();
    message();
    login();
    messaged();
    
});











/*以下部分是一个插件。。。*/
window.calender = (function(win, doc) {
    function C(str) {
        this.dom = doc.querySelector(str);
        this.s = {
            date: [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()],
            button: false,
            format: 'yyyy年MM月dd日',
            left: 0,
            top: 0,
            onload: function() {}
        }
    };
    C.prototype = {
        init: function() {
            var t = this;
            if (typeof arguments[0] == 'function') {
                t.cb = arguments[0];
            } else {
                t.newS = arguments[0];
                t.cb = arguments[1] || function() {}
            };
            t.yoff = false;
            t.moff = false;
            t.extend(t.s, t.newS);
            t.nt = new Date();
            t.nt.setFullYear(t.s.date[0]);
            t.nt.setMonth(t.s.date[1] - 1);
            var len = this.getDateLength(t.nt.getFullYear(), t.nt.getMonth())
            t.nt.setDate(t.s.date[2] > len ? len : t.s.date[2]);
            t.day = t.nt.getDate();
            t.dom.onclick = function(ev) {
                var e = ev || event;
                t.create();
                t.bind();
                t.s.onload.call(this)
                e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true)
            };
        },
        hide: function() {
            var t = this;
            t.cb.call(t.dom, t.format(t.nt.getFullYear() + '/' + (t.nt.getMonth() + 1) + '/' + t.day + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(), t.s.format));
            if (g('.calender-wrap')) doc.body.removeChild(g('.calender-wrap'))
        },
        bind: function() {
            var t = this;
            var Content = g('.calender-content');
            t.createDay();
            var Prev = g('#calender-prev'),
                Next = g('#calender-next'),
                Year = g('#calender-year'),
                Mon = g('#calender-mon');
            if (t.s.button) {
                var today = g('.calender-today');
                var enter = g('.calender-ent');
                today.onclick = function() {
                    t.nt.setFullYear(new Date().getFullYear());
                    t.nt.setMonth(new Date().getMonth());
                    t.nt.setDate(new Date().getDate());
                    t.s.date[2] = t.day = new Date().getDate()
                    t.createYear()
                    t.createDay()
                    t.createMon()
                };
                enter.onclick = function() {
                    t.hide();
                }
            }
            Content.onclick = function(ev) {
                var ev = ev || event;
                var _target = ev.target || ev.srcElement;
                if (!t.has(_target, 'calender-cell-dark')) {
                    var chl = this.children;
                    for (var i = 0; i < chl.length; i++) {
                        t.del(chl[i], 'active');
                    };
                    t.add(_target, 'active');
                    t.nt.setDate(_target.getAttribute('data-n'));
                    t.s.date[2] = t.day = _target.getAttribute('data-n')
                    if (!t.s.button) {
                        t.hide();
                    }
                }
            }
            Prev.onclick = Next.onclick = function() {
                var y = t.nt.getFullYear(),
                    m = t.nt.getMonth();
                if (t.moff) return
                if (t.yoff) {
                    t.nt.setFullYear(this.id == "calender-prev" ? y -= 9 : y += 9)
                    t.createYear()
                } else {
                    this.id == "calender-prev" ? m-- : m++;
                    t.nt.setDate(1);
                    t.nt.setMonth(m);
                    t.createDay()
                }
            }
            Year.onclick = function() {
                t.createYear();
                t.yoff = true;
                t.moff = false;
                t.del(g('.calender-wrap'), 'month');
                t.add(g('.calender-wrap'), 'year');
            };
            Mon.onclick = function() {
                t.createMon();
                t.moff = true;
                t.yoff = false;
                t.del(g('.calender-wrap'), 'year');
                t.add(g('.calender-wrap'), 'month');
            };
        },
        getDateLength: function(year, month) {
            //获取某一月有多少天, month为实际月份，一月即为1
            return new Date(year, month, 0).getDate();
        },
        getFirstDay: function(year, month) {
            //获取某一月第一天是周几,month为实际月份，一月即为1,返回0即为周日
            return new Date(year, month - 1, 0).getDay();
        },
        createMon: function() {
            var t = this,
                html = '';
            var m = t.nt.getMonth() + 1;
            m = m == 0 ? 12 : m;
            for (var i = 1; i <= 12; i++) {
                html += '<div class="calender-mon-cell ' + (m == i ? 'active' : '') + ' ">' + (i) + '</div>';
            };
            g('.calender-list3').innerHTML = html;
            var cells = doc.querySelectorAll('.calender-mon-cell');
            for (var i2 = 0; i2 < cells.length; i2++) {
                cells[i2].onclick = function() {
                    t.moff = false
                    t.del(g('.calender-wrap'), 'month');
                    t.nt.setDate(1)
                    t.nt.setMonth(+this.innerHTML - 1);
                    t.createDay();
                }
            }
        },
        createYear: function() {
            var t = this,
                html = '',
                y = (t.nt.getFullYear());
            var Year = g('#calender-year');
            for (var i = 0; i < 9; i++) {
                html += '<div class="calender-year-cell ' + ((y - (4 - i)) == y ? 'active' : '') + ' ">' + (y - (4 - i)) + '</div>';
            }
            Year.innerHTML = y
            g('.calender-list2').innerHTML = html;
            var cells = doc.querySelectorAll('.calender-year-cell');
            for (var i2 = 0; i2 < cells.length; i2++) {
                cells[i2].onclick = function() {
                    t.yoff = false;
                    t.del(g('.calender-wrap'), 'year');
                    t.nt.setFullYear(+this.innerHTML);
                    t.createDay();
                }
            }
        },
        createDay: function(n) {
            var t = this,
                y = t.nt.getFullYear(),
                m = (t.nt.getMonth()) + 1;
            g('#calender-year').innerHTML = m === 0 ? y - 1 : y;
            g('#calender-mon').innerHTML = m === 0 ? 12 : two(m);
            // if(t.nt.getMonth()+1 == t.s.date[1] && t.nt.getFullYear()==t.s.date[0] ){
            //  t.nt.setDate(t.s.date[2]);
            // };
            var firstDay = this.getFirstDay(y, m),
                length = this.getDateLength(y, m),
                lastMonthLength = this.getDateLength(y, m - 1),
                i, html = '';
            t.day = t.s.date[2] > length ? length : t.s.date[2];
            //循环输出月前空格
            if (firstDay === 0) firstDay = 7;
            for (i = 1; i < firstDay + 1; i++) {
                html += '<div class="calender-cell calender-cell-dark">' + (lastMonthLength - firstDay + i) + '</div>';
            }
            //循环输出当前月所有天
            for (i = 1; i < length + 1; i++) {
                html += '<div data-n=' + i + ' class="calender-cell ' + (i == t.day ? 'active' : '') + '">' + i + '</div>';
            }
            //if(8-(length+firstDay)%7 !=8){
            for (i = 1; i <= (41 - (length + (firstDay == 0 ? 7 : firstDay) - 1)); i++) {
                html += '<div class="calender-cell calender-cell-dark">' + i + '</div>';
            };
            doc.querySelector('.calender-content').innerHTML = html
        },
        create: function() {
            var t = this;
            if (g('.calender-wrap')) doc.body.removeChild(g('.calender-wrap'))
            var private_Day_title = ['一', '二', '三', '四', '五', '六', '日'];
            //内容
            var html = '<div class="calender-wrap">';
            html += '<div id="calender-header" class="calender-header none-btn "><a id="calender-prev" href="javascript:;"><</a><a id="calender-next" href="javascript:;">></a> <span id="calender-year">2016</span>年<span id="calender-mon">10</span>月</div>'
            //星期
            html += '<div class="calender-list"><div class="calender-caption">';
            for (i = 0; i < 7; i++) {
                html += '<div class="calender-cell">' + private_Day_title[i] + '</div>';
            };
            html += '</div><div class="calender-content"></div>';
            if (this.s.button) {
                html += '<div class="calender-button"><a href="javascript:;" class="calender-ent">确定</a><a href="javascript:;" class="calender-today">今天</a></div>';
            };
            html += '</div><div class="calender-list calender-list2"></div><div class="calender-list calender-list3"></div>'
            doc.body.insertAdjacentHTML("beforeend", html);
            var wrap = g('.calender-wrap');

            function setPosi() {
                var _top = doc.documentElement.scrollTop || doc.body.scrollTop;
                wrap.style.left = t.dom.getBoundingClientRect().left + t.s.left + 'px';;
                wrap.style.top = t.dom.getBoundingClientRect().top + _top + t.dom.offsetHeight + t.s.top + 15 + 'px';
            };
            setPosi();
            addEvent(window, 'resize', function() { setPosi() })
            wrap.onclick = function(ev) {
                var e = ev || event;
                e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true)
            }
        },
        format: function(da, format) {
            var _newDate = new Date(da);
            var WeekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            var o = {
                'M+': _newDate.getMonth() + 1, //month 
                'd+': _newDate.getDate(), //day 
                'h+': _newDate.getHours(), //hour 
                'm+': _newDate.getMinutes(), //minute 
                's+': _newDate.getSeconds(), //second 
                'q+': Math.floor((_newDate.getMonth() + 3) / 3), //quarter 
                'S': _newDate.getMilliseconds(), //millisecond 
                'E': WeekArr[_newDate.getDay()],
                'e+': _newDate.getDay()
            };
            if (/(y+)/.test(format)) {
                format = format.replace(RegExp.$1, (_newDate.getFullYear() + "").substr(4 - RegExp.$1.length));
            };
            for (var k in o) {
                if (new RegExp('(' + k + ')').test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
                };
            };
            return format;
        },
        extend: function(n, n1) {
            for (var i in n1) { n[i] = n1[i] };
        },
        has: function(o, n) {
            return new RegExp('\\b' + n + '\\b').test(o.className);
        },
        add: function(o, n) {
            if (!this.has(o, n)) o.className += ' ' + n;
        },
        del: function(o, n) {
            if (this.has(o, n)) {
                o.className = o.className.replace(new RegExp('(?:^|\\s)' + n + '(?=\\s|$)'), '').replace(/^\s*|\s*$/g, '');
            };
        }
    };

    function g(str) { return doc.querySelector(str) };

    function addEvent(obj, name, fn) { obj.addEventListener ? obj.addEventListener(name, fn, false) : obj.attachEvent('on' + name, fn); };

    function two(num) { return num < 10 ? ('0' + num) : ('' + num) };
    addEvent(doc, 'click', function() {
        if (g('.calender-wrap')) doc.body.removeChild(g('.calender-wrap'))
    });

    function c(o) { return new C(o) };
    return c;
})(window, document);

;
(function() {
    /*calender('#calend').init(function(date){
          this.innerHTML = date
      });*/
    calender('#calend1').init({
        format: 'yyyy-MM-dd',
        date: [2020, 5, 12],
        button: true
    }, function(date) {
        this.innerHTML = date
    });
})();
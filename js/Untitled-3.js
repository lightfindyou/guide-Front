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

function colorchange(Click, TOT, RE1, RE2, RE3, RE4, NEWCLASS) {
    $(Click).click(function() {
        $(TOT).toggleClass(NEWCLASS);
        $(RE1).removeClass(NEWCLASS);
        $(RE2).removeClass(NEWCLASS);
        $(RE3).removeClass(NEWCLASS);
        $(RE4).removeClass(NEWCLASS);
    });
};

function colorchange1(Click, RE1, RE2, RE3, ID, SHU) {
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
};

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

function changetext() {
    var theclasses = document.getElementsByClassName("classes")[0];
    var theclass = theclasses.getElementsByTagName("p");
    for (var i = 0; i < theclass.length; i++) {
        (function() {
            var k = i;
            var tc = theclass[k];
            tc.ondblclick = function() {
                var oldhtml = tc.innerHTML;
                var newobj = document.createElement('input');
                //创建新的input元素
                newobj.type = 'text';
                //为新增元素添加类型
                newobj.onblur = function() {
                    tc.innerHTML = this.value ? this.value : oldhtml;
                    //当触发时判断新增元素值是否为空，为空则不修改，并返回原有值 
                }
                tc.innerHTML = '';
                tc.appendChild(newobj);
                newobj.focus();
            };
        })();
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
//直接执行：获取全部学员信息
function allinfo() {
    var lc = document.getElementsByClassName("learners")[0];
    var openvalue = "http://localhost:8080/guide/userPandect.action";
    var xmlhttp;

    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
       
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
    	
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var txt = xmlhttp.responseText;
            var obj = JSON.parse(txt);
            var txttable="";
            function forin(json) {
                for (var i=0;i<json.length;i++){
                    	 var jsonObj = json[i];
                        txttable = txttable + "<div class=\"everylearner\">";
                        txttable = txttable + "<p class=\"learnerp\">" + jsonObj.userName + "</p>";
                        txttable = txttable + "<p class=\"learnerp learnerppn\">" + jsonObj.phoneNumber + "</p>";
                        txttable = txttable + "<p class=\"learnerp\">" + "详细信息" + "</p></div>";
                }
            }

            forin(obj);
            lc.innerHTML = txttable;
          
        } else {
            lc.style = 'color:red;';
            lc.innerHTML = "查找失败";
        }
    }
    xmlhttp.open("GET", openvalue, false);
    xmlhttp.send();
}
//查找一个学员信息
function oneinfo() {
	
	var isAjax = false;
    var detailed = document.getElementsByClassName("detailed")[0];
    var dr = document.getElementsByClassName("detailedpright");
    
    document.getElementsByClassName("searchbt")[0].onclick = function() {
    	var isAjax = false;
        $(".detailed").attr('style', 'display:block;');
        $(".learnerscontainer").attr('style', 'display:none;');
        var str = document.getElementsByClassName("searchput")[0].value;
        
        if (isAjax) { return; } else {
            isAjax = true;
            
            function showHint1(s) {
            	
                var openvalue = "http://localhost:8080/guide/getPersionalInfo.action?phoneNumber=";
                var xmlhttp;

                if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
                    xmlhttp = new XMLHttpRequest();
                } else { // code for IE6, IE5
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                if (str.length == 0) {

                    detailed.style = 'color:red;'
                    $(".detailed").attr('style', 'display:block;');
                    detailed.innerHTML = "查找失败：空字符串";
                    isAjax = false;
                } else {

                    xmlhttp.onreadystatechange = function() {
                    	
                        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                            var txt = xmlhttp.responseText;
                            var obj = JSON.parse(txt);
                            
                            if (obj.phoneNumber == s) {
                                function forin(json) {
                                    for (var key in json) {
                                            dr[0].innerHTML = json.userName;
                                            dr[1].innerHTML = json.gender;
                                            dr[2].innerHTML = json.IDNumber;
                                            dr[3].innerHTML = json.email;
                                            dr[4].innerHTML = json.openId;
                                            dr[5].innerHTML = json.phoneNumber;
                                    }
                                }
                                forin(obj);


                                isAjax = false;

                            } else {
                                detailed.innerHTML = "查找失败:无效字符串";
                                isAjax = false;
                            }
                        }
                    }
                }
                xmlhttp.open("GET", openvalue + s , true);
                xmlhttp.send();
            }
            showHint1(str);
        }
    }
}
//点击学员信息显示学员详细信息
function oneinfo1() {
    var everylearners = document.getElementsByClassName("everylearner");
    var learnerps = document.getElementsByClassName("learnerppn");
    var dr = document.getElementsByClassName("detailedpright");
    for (var i = 0; i <= everylearners.length - 1; i++) {
        (function() {
            var k = i;
            var el = everylearners[k];
            var ls = learnerps[k].innerText.toString();
            var dr1 = dr;
            el.onclick =
                function() {
                    $(".detailed").attr('style', 'display:block;');
                    $(".learnerscontainer").attr('style', 'display:none;');

                    function showHint1(s) {
                        var openvalue = "http://localhost:8080/guide/getPersionalInfo.action?phoneNumber=";
                        var xmlhttp;
                        if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari

                            xmlhttp = new XMLHttpRequest();
                        } else { // code for IE6, IE5
                            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                        }
                        if (s.length == 0) {
                            detailed.style = 'color:red;'
                            $(".detailed").attr('style', 'display:block;');
                            detailed.innerHTML = "查找失败：空字符串";
                        } else {
                        	
                            xmlhttp.onreadystatechange = function() {
                                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                                    var txt = xmlhttp.responseText;
                                    var obj = JSON.parse(txt);
                                    if (obj.phoneNumber == s) {
                                        function forin(json) {
                                            for (var key in json) {
                                                
                                                    dr1[0].innerHTML = json.userName;
                                                    dr1[1].innerHTML = json.gender;
                                                    dr1[2].innerHTML = json.IDNumber;
                                                    dr1[3].innerHTML = json.email;
                                                    dr1[4].innerHTML = json.openId;
                                                    dr1[5].innerHTML = json.phoneNumber;
                              
                                            }
                                        }
                                        forin(obj);
                                    } else {
                                        detailed.innerHTML = "查找失败:无效字符串";
                                    }
                                }
                            }
                        }
                        xmlhttp.open("GET", openvalue + s , true);
                        xmlhttp.send();
                    }
                    showHint1(ls);
                }
        })();
    }
}
//添加学员信息
function oneinfo2() {
    
    document.getElementsByClassName("Addlearnersubmit")[0].onclick = function() {
    	
    	var isAjax1 = false;
        if (isAjax1) { return; } else {
        	
            isAjax1 = true;
            var a1 = document.getElementsByClassName("Addlearnerinput")[0].value.toString();
            var a2 = document.getElementsByClassName("Addlearnerinput")[1].value.toString();
            var a3 = document.getElementsByClassName("Addlearnerinput")[2].value.toString();
            var a4 = document.getElementsByClassName("Addlearnerinput")[3].value.toString();
            var a5 = document.getElementsByClassName("Addlearnerinput")[4].value.toString();
            var a6 = document.getElementsByClassName("Addlearnerinput")[5].value.toString();

            function showHint1(s1, s2, s3, s4, s5) {
                var openvalue0 = "http://localhost:8080/guide/addUserByAdmin.action?userName=";
                var openvalue1 = "&gender=";
                var openvalue2 = "&IDNumber=";
                var openvalue3 = "&email=";
                var openvalue4 = "&phoneNumber=";
                var xmlhttp;
                if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
                    xmlhttp = new XMLHttpRequest();
                } else { // code for IE6, IE5
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                if (a1.length == 0) {
                    detailed.style = 'color:red;'
                    $(".detailed").attr('style', 'display:block;');
                    detailed.innerHTML = "空字符串";
                    isAjax1 = false;
                } else {
                    xmlhttp.onreadystatechange = function() {
                        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                            var txt0 = xmlhttp.responseText;
                            if (txt0 == 'success') {
                                alert("添加成功");
                                allinfo();
                                isAjax1 = false;
                            } else {
                                alert("添加失败");
                                isAjax1 = false;
                            }
                        }
                    }
                    xmlhttp.open("POST", openvalue0 + s1 + openvalue1 + s2 + openvalue2 + s3 + openvalue3 + s4 + openvalue4 + s5, true);
                    xmlhttp.send();
                }
            }
            showHint1(a1, a2, a3, a4, a6);
        }
    }
}
//发送短信
function message() {
    document.getElementsByClassName("stsend1")[0].onclick = function() {
        var calend = document.getElementsByClassName("calend")[0].innerText;
        var a1 = document.getElementsByClassName("editinput")[0].getElementsByTagName("textarea")[0].value;
        var a2 = calend.match(/\d+/g)[1];
        var a3 = calend.match(/\d+/g)[2];
        var a4 = document.getElementsByClassName("specifictime")[0].getElementsByTagName("input")[0].value;
        var a5 = document.getElementsByClassName("specifictime")[0].getElementsByTagName("input")[1].value;

        function showHint1(s1, s2, s3, s4, s5) {
            var openvalue = "http://localhost:8080/guide/sendMessage.action?content=";
            var openvalue1 = "&month=";
            var openvalue2 = "&day=";
            var openvalue3 = "&hour=";
            var openvalue4 = "&miniutes=";
            var xmlhttp;
            if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
                
            } else { // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            if (a1.length == 0) {
                alert("发送失败：空字符串");
            } else if (a2.length == 0) {
                alert("请选择时间");
            } else {
            	
                xmlhttp.onreadystatechange = function() {
          
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        var txt = xmlhttp.responseText;
                        if (txt == 'success') {
                            alert("发送成功");
                            $(".settime").hide();
                            $(".tohide").hide();
                        } else {
                            alert("发送失败");
                            $(".settime").hide();
                            $(".tohide").hide();
                        }
                    }
                }
                xmlhttp.open("GET", openvalue + s1 + openvalue1 + s2 + openvalue2 + s3 + openvalue3 + s4 + openvalue4 + s5, true);
                xmlhttp.send();
            }
        }
        showHint1(a1, a2, a3, a4, a5);
    }

    document.getElementsByClassName("tosend")[0].getElementsByTagName("p")[0].onclick = function() {
        var myDate = new Date();
        var a1 = document.getElementsByClassName("editinput")[0].getElementsByTagName("textarea")[0].value;
        var a2 = myDate.getMonth() + 1;
        var a3 = myDate.getDate();
        var a4 = myDate.getHours();
        var a5 = myDate.getMinutes();

        function showHint1(s1, s2, s3, s4, s5) {
        	var openvalue = "http://localhost:8080/guide/sendMessage.action?content=";
            var openvalue1 = "&month=";
            var openvalue2 = "&day=";
            var openvalue3 = "&hour=";
            var openvalue4 = "&miniutes=";
            var xmlhttp;
            if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else { // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            if (a1.length == 0) {
                alert("发送失败：空字符串");
            } else {
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        var txt = xmlhttp.responseText;
                        if (txt == 'success') {
                            alert("发送成功");
                        } else {
                            alert("发送失败");
                        }
                    }
                }
                xmlhttp.open("GET", openvalue + s1 + openvalue1 + s2 + openvalue2 + s3 + openvalue3 + s4 + openvalue4 + s5, true);
                xmlhttp.send();
            }
        }
        showHint1(a1, a2, a3, a4, a5);
    }
}
//以往短信
function messaged() {
    var i = 0;

    function showHint1() {
        var openvalue = "http://localhost:8080/guide/messageOverview.action";
        var xmlhttp;
        if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else { // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var txt = xmlhttp.responseText;
                var obj = JSON.parse(txt);
                var t = i + 1;
                if (obj[t].content) {
                    for (; i <= t; i++) {
                        document.getElementsByClassName("editinputed")[i].getElementsByTagName("textarea")[0].value = obj[i].content;
                    }
                } else {
                    alert("没有更多信息了");
                }
            } 
        }
        xmlhttp.open("GET", openvalue, true);
        xmlhttp.send();
    }
    showHint1();
    $(".morem").click(function() {
        $(".more").before(" <div class=\"edit\"> <p> 2017-9-30 </p> </div> <div class = \"editinputed\" ><textarea> </textarea> </div>");
        $(".more").before(" <div class=\"edit\"> <p> 2017-9-30 </p> </div> <div class = \"editinputed\" ><textarea> </textarea> </div>");
        showHint1();
    });
}
//立即执行的函数
$(document).ready(function() {
    allinfo();
    colorchange(".sended", ".sended", ".boarder", ".info", ".send", ".learner", "stitledivhover");
    colorchange1(".year01", ".year02", ".year03", ".year04", "yearhover", "7");
    colorchange1(".year02", ".year01", ".year03", ".year04", "yearhover", "6");
    colorchange1(".year03", ".year02", ".year01", ".year04", "yearhover", "5");
    colorchange1(".year04", ".year02", ".year01", ".year03", "yearhover", "4");
    colorchange1(".class01", ".class02", ".class03", ".class04", "yearhover");
    colorchange1(".class02", ".class01", ".class03", ".class04", "yearhover");
    colorchange1(".class03", ".class02", ".class01", ".class04", "yearhover");
    colorchange1(".class04", ".class02", ".class01", ".class03", "yearhover");
    show(".addlearnerimg", ".Addlearnercontainer", ".learnerscontainer");
    show(".learner", ".learnerright", ".boarderright", ".inforight", ".sendright", ".sendedright");
    show(".boarder", ".boarderright", ".inforight", ".sendright", ".sendedright", ".learnerright");
    show(".info", ".inforight", ".learnerright", ".boarderright", ".sendright", ".sendedright");
    show(".send", ".sendright", ".learnerright", ".boarderright", ".inforight", ".sendedright");
    show(".sended", ".sendedright", ".learnerright", ".boarderright", ".inforight", ".sendright");
    searchfloor();
    changetext();
    settimetosend();
    oneinfo();
    oneinfo1();
    oneinfo2();
    message();
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
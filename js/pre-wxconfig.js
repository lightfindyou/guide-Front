var url = location.href;
//只保留相对路径
var rawUrl = url.replace(location.protocol + "//" + location.hostname + "/", "");

//微信后台服务器所在地址
var wechat_backend_host = "http://39.108.180.240:8383";

$.get(wechat_backend_host + "/Main/GetBaseInfo", {
        rawUrl: rawUrl
    },
    function (baseInfo) {

        //验证配置
        wx.config({
            appId: baseInfo.appId,
            timestamp: baseInfo.timestamp,
            nonceStr: baseInfo.nonceStr,
            signature: baseInfo.signature,
            jsApiList: [
                'checkJsApi',
                'getLocation',
            ] // 需要检测的JS接口列表
        });

        wx.error(function (res) {
            //alert('微信验证失败：\n' + JSON.stringify(res));
        });

        wx.ready(function () {
            wx.checkJsApi({
                jsApiList: [
                    'getLocation',
                ], // 需要检测的JS接口列表
                success: function (res) {
                   // alert('接口检测结果：\n' + JSON.stringify(res));
                }
            });
        });
    });
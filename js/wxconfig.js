var baseInfo = JSON.parse(localStorage.getItem("baseInfo"));
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
    alert('微信验证失败:' + JSON.stringify(res));
    //alert(JSON.stringify(res));
});

wx.ready(function () {
    wx.checkJsApi({
        jsApiList: [
            'getLocation',
        ], // 需要检测的JS接口列表
        success: function (res) {
            alert('微信验证成功');
            //alert(JSON.stringify(res));
        }
    });
});
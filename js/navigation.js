//定义点数据类型
function Point(LocX, LocY) {
    this.LocX = LocX;
    this.LocY = LocY;
}

//定义边数据类型(包括起始点和终点对象)
function Edge(p1, p2) {
    this.begin = p1;
    this.end = p2;
}

/*
    功能：吸附纠正
    参数：p 需要纠正的点
         points 路线经过的点集合
    返回值：能够纠正返回纠正后的点,不能则返回null
*/
var adsorption_rectify = function (p, points) {
    var ad_deviation = 0.00005; //吸附修正允許偏差
    var minD = 999999999,
        temp = 0; //与端点的距离
    //var result = new Point(); //纠正后的点
    var rectifyPointIndex = -1;
    var viaPoints = new Array();

    //遍历所有点，获取距离最短的端点
    for (var i = 0; i < points.length; i++) {
        var item = points[i];
        temp = Math.sqrt(Math.pow((p.LocX - item.LocX), 2) + Math.pow((p.LocY - item.LocY), 2)); //两点距离公式
        if (temp < minD) {
            minD = temp;
            //result = item;
            rectifyPointIndex = i;
        }
    };

    //判断最短距离是否小于允许偏差
    if (minD < ad_deviation && rectifyPointIndex != -1) {
        // return result;
        //将经过的点放置到数组中返回
        for (var i = 0; i <= rectifyPointIndex; i++) {
            viaPoints.push(points[i]);
        }
        return viaPoints;
    } else {
        return null;
    }
};

/*
    功能：投影纠正
    参数：p 需要纠正的点
         points 路线经过的点集合
    返回值：能够纠正返回纠正后的点,不能则返回null
*/
var projection_rectify = function (p, points) {
    var equel_deviation = 0.00003; //相等修正允許偏差
    var pro_deviation = 0.00013; //投影修正允許偏差
    var edges = new Array();
    for (var i = 0; i < points.length - 1; i++) {
        edges[i] = new Edge(points[i], points[i + 1]);
    }
    var result = new Point();
    try {
        var minD = 999999999,
            temp = 0; //投影距离

        //临时保存边的起始点和终点
        var begin = null,
            end = null;
        var rectifyPointIndex = -1;

        //遍历所有边，找出最小投影边
        for (var i = 0; i < edges.length; i++) {
            var item = edges[i];
            begin = item.begin;
            end = item.end;

            var xp = 0,
                yp = 0; //投影点的x,y坐标
            if (Math.abs(begin.LocY - end.LocY) <= equel_deviation && Math.abs(begin.LocX - end.LocX) > equel_deviation) {
                xp = p.LocX;
                yp = begin.LocY;
            } else if (Math.abs(begin.LocX - end.LocX) <= equel_deviation && Math.abs(begin.LocY - end.LocY) > equel_deviation) {
                xp = begin.LocX;
                yp = p.LocY;
            } else if (Math.abs(begin.LocX - end.LocX) > equel_deviation && Math.abs(begin.LocY - end.LocY) > equel_deviation) {
                var k = (begin.LocY - end.LocY) / (begin.LocX - end.LocX); //该条边的斜率
                var b = p.LocY - k * p.LocX; //该条边的截距
                var rk = -1 / k; //该条边的垂直平分线的斜率
                xp = (p.LocY - rk * p.LocX - b) / (k - rk);
                yp = k * xp + b;
            } else
                continue;

            //计算投影距离
            temp = Math.sqrt(Math.pow((xp - p.LocX), 2) + Math.pow((yp - p.LocY), 2));
            //满足条件时才更新minD的值
            if (temp < minD &&
                xp >= Math.min(begin.LocX, end.LocX) - equel_deviation &&
                xp <= Math.max(begin.LocX, end.LocX) + equel_deviation &&
                yp >= Math.min(begin.LocY, end.LocY) - equel_deviation &&
                yp <= Math.max(begin.LocY, end.LocY) + equel_deviation) {
                minD = temp;
                rectifyPointIndex = i;
                result.LocX = xp;
                result.LocY = yp;
            }
        }

        //判断最短距离是否小于允许偏差
        if (minD < pro_deviation && rectifyPointIndex != -1) {
            //return result;
            //将经过的定点放置到数组中返回
            var viaPoints = new Array();
            for (var i = 0; i <= rectifyPointIndex; i++) {
                viaPoints.push(points[i]);
            }
            //同时将当前纠正后的点放进集合中
            viaPoints.push(result);

            return viaPoints;
        } else {
            return null;
        }

    } catch (e) {
        return p;
    }
};


/*
    功能：将gps坐标转换为腾讯地图坐标
    参数：p_Lng 经度
         p_Lat 纬度
    返回值：能够纠正返回纠正后的点,不能则返回null
    依赖：outOfChina、transformLat、transformLon
*/
var convert = function (p_Lng, p_Lat) {
    var outOfChina = function (lat, lon) {
        if (lon < 72.004 || lon > 137.8347) {
            return true;
        }
        if (lat < 0.8293 || lat > 55.8271) {
            return true;
        }
        return false;
    }

    var pi = 3.1415926535897931;
    var transformLat = function (x, y) {
        var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
        ret += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(y * pi) + 40.0 * Math.sin(y / 3.0 * pi)) * 2.0 / 3.0;
        ret += (160.0 * Math.sin(y / 12.0 * pi) + 320 * Math.sin(y * pi / 30.0)) * 2.0 / 3.0;
        return ret;
    }

    var transformLon = function (x, y) {
        var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
        ret += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(x * pi) + 40.0 * Math.sin(x / 3.0 * pi)) * 2.0 / 3.0;
        ret += (150.0 * Math.sin(x / 12.0 * pi) + 300.0 * Math.sin(x / 30.0 * pi)) * 2.0 / 3.0;
        return ret;
    }
    var a = 6378245.0;
    var ee = 0.0066934216229659433;
    var wgLon = p_Lng,
        wgLat = p_Lat;
    if (outOfChina(wgLat, wgLon)) {
        return new Point(p_Lng, p_Lat);
    }
    var dLat = transformLat(wgLon - 105.0, wgLat - 35.0);
    var dLon = transformLon(wgLon - 105.0, wgLat - 35.0);
    var radLat = wgLat / 180.0 * pi;
    var magic = Math.sin(radLat);
    magic = 1 - ee * magic * magic;
    var sqrtMagic = Math.sqrt(magic);
    dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi);
    dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * pi);
    return new Point(parseFloat(wgLon) + dLon, parseFloat(wgLat) + dLat);
}
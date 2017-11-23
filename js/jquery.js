;(function($){
var Carousel=function(poster){
alert(poster);
console.log(poster.attr("data-setting"));
//保存单个旋转木马对象
this.poster=poster;
this.posterItemMain=poster.find("ul .poster-list");
this.nextBtn=poster.find("div .poster-next-btn");
this.prevBtn=poster.find("div .poster-prev-btn-btn");
this.posterItems=poster.find("li .poster-item");
this.posterFirstItem=this.posterItems.eq(0);
//默认配置参数
this.setting={
	    "width":1000,
        "height":270,
        "posterWidth":640,
       " posterHeight":270,
        "verticalAlign":"middle",
        "speed":500,
        "scale":0.9,
};
$.extend(this.setting,this.getSetting());
//设置配置参数值
this.setSettingValue();
this.setPosterPos();

};
Carousel.prototype={
	//设置剩余帧的位置关系
	setPosterPos:function(){
		var self=this;
		var sliceItems=this.posterItems.slice(1),//把剩余的li个数获取
            sliceSize=sliceItems.size()/2,
		    rightSlice=sliceItems.slice(0,sliceSize),
		    level=Math.floor(this.posterItems.size()/2);
             
        var rw=this.setting.posterWidth,
            rh=this.setting.posterHeight,
            gap=((this.setting.width-this.setting.posterWidth)/2)/level;
            alert(gap)

			var firstLeft=(this.setting.width-this.setting.posterWidth)/2;
			var	fixOffsetLeft=firstLeft+rw;         
			//设置右边真的位置关系
			rightSlice.each(function(i){
				level--;
				rw=rw*self.setting.scale;
				rh=rh*self.setting.scale;
			    var j=i;
				$(this).css({
					zIndex:level,//设置层级关系
					width:rw,
					height:rh,
					opacity:1/(++i),
					left:fixOffsetLeft+(++j)*gap-rw,
					top:(self.setting.height-rh)/2
				});
			});

	},
//设置参数值去控制基本的狂度高的
setSettingValue:function(){
	this.poster.css({
		width:this.setting.width,
		height:this.setting.height,
	})
	this.posterItemMain.css({
		width:this.setting.width,
		height:this.setting.height,
	})
	//计算上下按钮的宽度
	var w=(this.setting.width-this.setting.posterWidth)/2;
	this.nextBtn.css({
			width:w,
			height:this.setting.height,
			zIndex:Math.ceil(this.posterItems.size()/2),//向上取整
			//z-index不能为小数
		});
	this.prevBtn.css({
			width:this.setting.posterWidth,
			height:this.setting.posterHeight,
			width:w,
			height:this.setting.height,
			zIndex:Math.ceil(this.posterItems.size()/2),
		});
	this.posterFirstItem.css({

		left:w,
		zIndex:Math.floor(this.posterItems.size()/2),//从0开始
	})
},
getSetting:function() {
	var setting=this.poster.attr("data-setting");
	if(setting&&setting==""){
		return $.parseJSON(setting);
	}else{
		return {};
	}
}
};
Carousel.init=function(posters){
	var _this_=this;
	posters.each(function(){
		new _this_($(this));
		//this只是dom结点，$(this)包装成jquery对象
	});
}
window["Carousel"]=Carousel;

  })(jQuery);

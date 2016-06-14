;
(function($, _win) {
	//定义对象
	var scrollPic = function(obj) {
		this.obj = obj;
		var _this = this;
		this.seting = {
			"width": 1300,
			"height": 400,
			"speed": 500,
			"viewWith": 800,
			"viewHeight": 400,
			"scale": 0.2,
			"vertical": "middle"
		}
		$.extend(this.seting, this.getSeting());
		this.setLayout();
		this.obj.find(".pre_btn").click(function() {
			_this.scroll("left");
		});
		this.obj.find(".next_btn").click(function() {
			_this.scroll("right");
		});
	}

	//对象的原型
	scrollPic.prototype = {
		getSeting: function() {
			return $.parseJSON(this.obj.attr("dataSeting"));
		},
		setLayout: function() {
			_this_ = this;
			var btnWidth = (this.seting.width - this.seting.viewWith) / 2;
			this.obj.css({
				width: this.seting.width,
				height: this.seting.height
			});
			this.obj.find("ul").css({
				width: this.seting.width,
				height: this.seting.height
			});
			this.obj.find(".scroll_btn").eq(0).css({
				width: btnWidth,
				height: this.seting.height
			});
			this.obj.find(".scroll_btn").eq(1).css({
				width: btnWidth,
				height: this.seting.height
			});
			this.obj.find("ul li").eq(0).css({
				width: this.seting.viewWith,
				height: this.seting.viewHeight,
				zIndex: this.obj.find("ul li").size(),
				left: btnWidth,
				opacity: 1
			});
			var liSize = this.obj.find("ul li").slice(1).size();
			var r_dom = this.obj.find("ul li").slice(1, Math.floor(liSize / 2) + 1);
			var l_dom = this.obj.find("ul li").slice(Math.floor(liSize / 2) + 1);
			//alert(_this_.seting.viewHeight);
			//给左右dom定位置  
			r_dom.each(function(i, n) {
				var i = (++i);
				var _h = _this_.seting.viewHeight - (50 * i);
				var _t = (_this_.seting.height - _h) / 2;
				var _l = btnWidth + ((btnWidth) / r_dom.size()) * i;
				var _o = 1 - i * 0.1;
				$(n).css({
					width: _this_.seting.viewWith,
					height: _h,
					opacity: _o,
					top: _t,
					left: _l,
					zIndex: r_dom.size() - i
				});
			});
			var max = l_dom.size();
			l_dom.each(function(i, n) {
				var i = (++i);
				var _h = _this_.seting.viewHeight - (50 * max);
				var _t = (_this_.seting.height - _h) / 2;
				var _l = btnWidth - ((btnWidth) / l_dom.size()) * max;
				var _o = 1 / max;
				$(n).css({
					width: _this_.seting.viewWith,
					height: _h,
					opacity: _o,
					top: _t,
					left: _l,
					zIndex: i
				});
				max--;
			});
		},
		scroll: function(point) {
			var _this_ = this;
			if (point == "left") {
				//控制第一针的运动效果
				this.obj.find("ul li").each(function() {
					var pre = $(this).prev().get(0) ? $(this).prev() : _this_.obj.find("ul li").last();
					$(this).animate({
						width: pre.width(),
						height: pre.height(),
						top: pre.css("top"),
						left: pre.css("left"),
						opacity: pre.css("opacity"),
						zIndex: pre.css("zIndex")
					});
				});
			} else {
				//控制第一针的运动效果
				this.obj.find("ul li").each(function() {
					var next = $(this).next().get(0) ? $(this).next() : _this_.obj.find("ul li").first();
					$(this).animate({
						width: next.width(),
						height: next.height(),
						top: next.css("top"),
						left: next.css("left"),
						opacity: next.css("opacity"),
						zIndex: next.css("zIndex")
					});
				});
			}
		}
	}
	scrollPic._init = function(objs) {
		var _this_ = this; 
		objs.each(function() {
		   new _this_($(this));
		})
	}
	_win["scrollPic"] = scrollPic;
})(jQuery, window)
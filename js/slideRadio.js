(function($) {
	var opt = {
		width: 100,
		height: 30,
		speed: 500
	}
	var Sr = function(options, _fn) {
		Sr.setings = $.extend(opt, options);
		//滑动圆圈的大小
		Sr._slideW = (Sr.setings.height);
		//滑动块的总长度
		Sr._w = (Sr.setings.width * 2) - Sr._slideW;
		//定义静态方法
         Sr._init(this,_fn); 
         return Sr;
	}  
	Sr._init = function(this_,_fn) {
		this_.each(function() {
			//初始化一写方法
			var slideBlock = document.createElement("div");
			var leftdiv = document.createElement("div");
			var rightdiv = document.createElement("div");
			var slidebtn = document.createElement("div");
			//定义总得容器 
			$(this).css({
				width: Sr.setings.width,
				height: Sr.setings.height,
				border: "1px solid #E8E8E8"
			});
			//定义滑块容器  
			$(slideBlock).css({
				width: Sr._w,
				height: Sr.setings.height,
				position: "absolute",
				right: "0px",
				top: "0px",
			});
			$(slideBlock).attr("class", "slideBlock");
			$(leftdiv).css({
				width: Sr._w / 2,
				height: Sr.setings.height,
				background: "#21A0E7",
				cssFloat: "left",
				color: "black",
				textAlign: "center",
				float: "left"
			});
			$(leftdiv).html("开");
			$(rightdiv).css({
				width: Sr._w / 2,
				height: Sr.setings.height,
				background: "#fff",
				cssFloat: "left",
				color: "black",
				textAlign: "center",
				float: "left"
			});
			$(rightdiv).html("关");
			//定义滑动按钮  
			$(slidebtn).css({
				height: Sr._slideW,
				width: Sr._slideW,
				position: "absolute",
				border: "1px solid #E4E4E4",
				borderTop: 0,
				borderBottom: 0,
				background: "#fff",
				top: "0px",
				cursor: "pointer",
				left: Sr._w / 2 - (Sr._slideW / 2)
			});
			$(slidebtn).attr("class", "slidebtn");
			$(slideBlock).append(slidebtn);
			$(slideBlock).append(leftdiv);
			$(slideBlock).append(rightdiv);
			$(this).find("input").before(slideBlock);
			$(this).find("input").hide();
			//判断单选按钮是否选中
			Sr.methods.verdictCheck($(this));
			
			slidebtn.onclick = function() {
				/*if ($(this).parent().parent().find("input").attr("checked") == "checked") {
					Sr.methods.close($(this));
				} else {
					Sr.methods.open($(this));
				}*/
				_fn($(this),$(this).parent().parent().find("input"));
			};  
		});
	}
	Sr.methods = {
		verdictCheck: function(obj) {
			var flag = false;
			if (obj.find("input").attr("checked")) {
				obj.find(".slideBlock").css({
					left: 0
				})
				flag = true;
			} else {
				obj.find(".slideBlock").css({
					left: -Sr._w / 2 + (Sr._slideW / 2) - 2
				})
				flag = false;
			}
			return flag;
		},
		close: function(_this) { 
			_this.parent().parent().find("input").removeAttr("checked");
			_this.parent().animate({
				left: -Sr._w / 2 + (Sr._slideW / 2) - 2
			}, Sr.setings.speed);
		},
		open: function(_this) {
			_this.parent().parent().find("input").attr("checked", "checked");
			_this.parent().animate({
				left: 0
			}, Sr.setings.speed);
		}
	}
	$.fn.slideRadio=Sr;
	 
})(jQuery);
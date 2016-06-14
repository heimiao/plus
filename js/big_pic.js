(function(_w, $) {
	function mui_alert() {
		var _this=this;
		this.defualt = {
			"width": "100%",
			"height": "100%",
			"background": "grey",
			"opacity": 0.5,
			"src":""
		};
		this.alert = function(ops) {
			this.option = $.extend(true, this.defualt, {src:ops});
			var _shade = document.createElement("div");
			//取消body滚动
			with($(_shade)) {
				attr("id", "window_alert");
				css({
					"z-index": 99999999,
					"top": "0px",
					"left": "0px",
					"position": "fixed",
					"textAlign": "center",
					"width": this.option.width,
					"height": this.option.height,
					"background": this.option.background,
					"opacity": this.option.opacity,
					"filter": "alpha(opacity=" + (this.option.opacity * 100) + ")",
				});
			};
			var _cont = document.createElement("div");
			with($(_cont)) {
				css({
					"width": "60%",
					"height": "60%",
					"position":"relative",
					"border":"6px solid #fff",
					"margin": ($(window).height()-$(window).height()*0.6)/2+"px auto",
				});
			}
			var _close = document.createElement("img");
			_close.onclick=function(){_this.rm_alert()};
			with($(_close)) {
				attr("src", "/resource/images/layer_close.png");
				css({
					"width": "30px",
					"height": "30px",
					"position":"absolute",
					"right": "-15px",
					"top": "-15px",
					"border":"1px solid red"
				});
			}
			
			var _animalGif = document.createElement("img");
			with($(_animalGif)) {
				attr("src", this.option.src);
				css({
					"width": "100%",
					"maxHeight": "100%",
				});
			}
			
			$(_cont).append($(_animalGif)).append($(_close));
			$(_shade).append($(_cont));
			$("body").append(_shade).css({
				"overflow": "hidden"
			});
		};
		
		this.rm_alert = function() {
			//放开body滚动
			$("body").css({"overflow": "auto"});
			$("#window_alert").remove();
				$(_close).unbind();
		}
		
	}
	_w.mui_alert = new mui_alert();
})(window, jQuery);
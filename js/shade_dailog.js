(function(_w, $) {
	function mui_alert() {
		this.defualt = {
			"width": "100%",
			"height": "100%",
			"background": "#E8E7EA",
			"opacity": 0.5
		};
		this.alert = function(ops) {
			this.option = $.extend(true, this.defualt, ops);
			var _shade = document.createElement("div");
			var _animalGif = document.createElement("div");
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
			with($(_animalGif)) {
				css({
					"background":"url(/summary/img/upload_waite.gif)",
					"width": "64px",
					"height": "64px",
					"margin": "20% auto" 
				});
			}

			$(_shade).append($(_animalGif));
			$("body").append(_shade).css({
				"overflow": "hidden"
			});
		};
		this.rm_alert = function(ops) {
			//放开body滚动
			$("body").css({
				"overflow": "auto"
			});
			$("#window_alert").remove();
		}
	}
	_w.mui_alert = new mui_alert();
})(window, jQuery);
(function() {
	var opt = {
		"color": "black",
		"background": "#fff",
		"width": 13,
		"height": 13
	}
	var colorCk = function(_option) {
		var setings = $.extend(opt, _option);
		this.each(function(i, m) {
			$(m).find("input")[0].style.visibility = "hidden";
			$(m).width(setings.width);
			$(m).height(setings.height);
			$(m).find("div").width(setings.width);
			$(m).find("div").height(setings.height);
			$(m).find("div").html("&#10004");
			$(m).find("div").css({
				"color": setings.color,
				"textAlign": "center",
				"cursor": "pointer",
				"background": setings.background
			});
			$(m).find("div").click(function() {
				if ($(this).next("input").attr("checked") == "checked") {
					$(this).html("");
					$(this).next("input").removeAttr("checked");
				} else {
					$(this).html("&#10004");
					$(this).next("input").attr("checked", "checked");
				}
			});
		})
	}
	$.fn.checkColorcolor = colorCk;
})($);
// Scroll Check
$("#scrollcheck").hide();
$(document).scroll(function() {
	if ($(window).scrollTop() > 0) {
		$("#scrollcheck").show();
	} else {
		$("#scrollcheck").hide();
	}
})

// Speed Slider
function speedSlider (slider, boundTextField) {
	slider.slider({
		orientation: "horizontal",
		range: "min",
		min: 0,
		max: 30,
		slide: function (event, ui) {
			boundTextField.val(ui.value);
			startAnimation(ui.value)
		}
	})
}
$(function() {
    speedSlider($("#speed-slider"), $("#speed-box"));
})
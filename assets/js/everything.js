"use strict";
// Scroll Check
$("#scrollcheck").hide();
$(document).scroll(function() {
    if ($(window).scrollTop() > 0) {
        $("#scrollcheck").show();
    } else {
        $("#scrollcheck").hide();
    }
});

// Speed Slider
function speedSlider (slider, boundTextField) {
    slider.slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 30,
        slide: function (event, ui) {
            boundTextField.val(ui.value);
            startAnimation(ui.value);
        }
    });
}
$(function() {
    speedSlider($("#speed-slider"), $("#speed-box"));
});

// Rainbow Button
var rainbow_on = 0;
$("#rainbow_button").click(function() {
    if (rainbow_on === 0) {
        $("#rainbow_button").css({
            "color": "#1d9c5a"
        });
        rainbow_on = 1;
    } else {
        $("#rainbow_button").css({
            "color": "#ff0000"
        });
        rainbow_on = 0;
    }
});

// Super Rainbow Button
var super_rainbow_on = 0;
$("#super_rainbow_button").click(function() {
    if (super_rainbow_on === 0) {
        $("#super_rainbow_button").css({
            "color": "#1d9c5a"
        });
        super_rainbow_on = 1;
    } else {
        $("#super_rainbow_button").css({
            "color": "#ff0000"
        });
        super_rainbow_on = 0;
    }
});

// Theme Switcher
var ctx_color = 0;
function themeswitch() {
    var game_grid = document.getElementById("myCanvas");
    var themes = document.getElementById("theme");
    var current = themes.options[themes.selectedIndex].value;
    if (current === "default" || current === "none") {
        game_grid.setAttribute("style", "background-image: url('assets/images/grid.png');");
        ctx_color = 0;
    } else if (current === "matrix") {
        game_grid.setAttribute("style", "background-image: url('assets/images/grid_matrix.png');");
        ctx_color = 1;
    } else if (current === "inverted") {
        game_grid.setAttribute("style", "background-image: url('assets/images/grid_inverted.png');");
        ctx_color = 2;
    }
    drawGrid();
}

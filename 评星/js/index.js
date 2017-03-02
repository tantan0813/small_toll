"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by Administrator on 2017/2/28.
 */
window.onload = function () {
    score();
    function score() {
        var target = $(".star>li");
        var can = $("#star_cancel");
        var sure = $("#star_determine");
        var toll = $("#star_alter");
        var name = "active";
        star(target, can, sure, toll, name);
        //五星评分，star是点星区域；cancel取消；determine确定；toll整个评分界面
        function star(star, cancel, determine, toll, class_name) {
            var count = 0;
            var staring = []; //点亮
            var dark = []; //不点亮
            star.on("click", function () {
                var index = $(this).index();
                count = index + 1;
                staring = star.slice(0, count);
                dark = star.slice(count);
                [].concat(_toConsumableArray(staring)).forEach(function (a) {
                    a.className = class_name;
                });
                Array.prototype.forEach.call(dark, function (a) {
                    a.className = "";
                });
            });
            cancel.on("click", function () {
                toll.css("display", "none");
            });
            determine.on("click", function () {
                return count;
            });
        }
    }
};
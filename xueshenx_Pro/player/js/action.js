﻿function getLight(pars) {
    if (pars == "open") {
        close_light(this)
    } else {
        close_light(this)
    }
};function thisMovie(movieName) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[movieName]
    } else {
        return document[movieName]
    }
}
function close_light(d) {
    if ($("#close_light_bg").css("display") == "none") {
        d.id = "light_a";
        document.getElementById("CuPlayer").style.zIndex = "1000";
        document.getElementById("close_light_bg").style.position = "absolute";
        document.getElementById("close_light_bg").style.zIndex = "999";
        var b = document.documentElement.scrollWidth;
        var c = $(document).height();
        $("#close_light_bg").css({width: b, height: c});
        $("#close_light_bg").show();
        var a = document.createElement("div");
        a.id = "light_div";
        a.innerHTML = "开灯";
        a.style.width = "28px";
        a.style.height = "22px";
        a.style.lineHeight = "22px";
        a.style.paddingLeft = "15px";
        a.style.background = "url(filmbase100401.jpg) no-repeat scroll 0 -176px";
        a.style.color = "#656565";
        a.style.position = "absolute";
        a.style.left = getLeft(d) + "px";
        a.style.top = getTop(d) + "px";
        a.style.zIndex = "1000";
        a.style.cursor = "pointer";
        a.onclick = function () {
            _detachEvent(window, "resize", setposition);
            document.body.removeChild(a);
            close_light(d)
        };
        a.onmouseover = function () {
            light_bgch(0, a)
        };
        a.onmouseout = function () {
            light_bgch(1, a)
        };
        document.body.appendChild(a);
        _attachEvent(window, "resize", setposition)
    } else {
        document.getElementById("CuPlayer").style.zIndex = "0";
        $("#close_light_bg").hide()
    }
}
function close_light_play(d) {
    if ($("#close_light_bg").css("display") == "none") {
        d.id = "light_a";
        document.getElementById("CuPlayer").style.zIndex = "1000";
        document.getElementById("close_light_bg").style.position = "absolute";
        document.getElementById("close_light_bg").style.zIndex = "999";
        var b = document.documentElement.scrollWidth;
        var c = $(document).height();
        $("#close_light_bg").css({width: b, height: c});
        $("#close_light_bg").show();
        var a = document.createElement("div");
        a.id = "light_div";
        a.innerHTML = "开灯";
        a.style.width = "28px";
        a.style.height = "22px";
        a.style.lineHeight = "22px";
        a.style.paddingLeft = "15px";
        a.style.background = "url(/playbase100402.jpg) no-repeat scroll -1px -240px";
        a.style.color = "#656565";
        a.style.position = "absolute";
        a.style.left = getLeft(d) + "px";
        a.style.top = getTop(d) + "px";
        a.style.zIndex = "1000";
        a.style.cursor = "pointer";
        a.onclick = function () {
            _detachEvent(window, "resize", setposition);
            document.body.removeChild(a);
            close_light_play(d)
        };
        a.onmouseover = function () {
            light_bgch_db(0, a)
        };
        a.onmouseout = function () {
            light_bgch_db(1, a)
        };
        document.body.appendChild(a);
        _attachEvent(window, "resize", setposition)
    } else {
        document.getElementById("CuPlayer").style.zIndex = "10";
        $("#close_light_bg").hide()
    }
}
function _detachEvent(obj, evt, func) {
    if (obj.removeEventListener) {
        obj.removeEventListener(evt, func, true)
    } else {
        if (obj.detachEvent) {
            obj.detachEvent("on" + evt, func)
        } else {
            eval(obj + ".on" + evt + "=old" + func + ";")
        }
    }
}
function _attachEvent(obj, evt, func) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, func, true)
    } else {
        if (obj.attachEvent) {
            obj.attachEvent("on" + evt, func)
        } else {
            eval("var old" + func + "=" + obj + ".on" + evt + ";");
            eval(obj + ".on" + evt + "=" + func + ";")
        }
    }
}
function setposition() {
    $("#light_div").css("left", getLeft(document.getElementById("light_a")) + "px");
    var a = document.documentElement.scrollWidth;
    var b = $(document).height();
    $("#close_light_bg").css({width: a, height: b})
}
function light_bgch(b, a) {
    if (b == 0) {
        if (a.currentStyle) {
            $(a).css({backgroundPositionX: "0", backgroundPositionY: "-176px"})
        } else {
            a.style.backgroundPosition = "0 -176px"
        }
        $(a).css({color: "#ff6523"});
        $(a).css({textDecoration: "underline "})
    } else {
        if (a.currentStyle) {
            $(a).css({backgroundPositionX: "-57px", backgroundPositionY: "-176px"})
        } else {
            a.style.backgroundPosition = "-57px -176px"
        }
        $(a).css({color: "#656565"});
        $(a).css({textDecoration: "none "})
    }
}
function light_bgch_db(b, a) {
    if (b == 0) {
        if (a.currentStyle) {
            $(a).css({backgroundPositionX: "-1px", backgroundPositionY: "-240px"})
        } else {
            a.style.backgroundPosition = "-1px -240px"
        }
        $(a).css({color: "#54990b"});
        $(a).css({textDecoration: "underline "})
    } else {
        if (a.currentStyle) {
            $(a).css({backgroundPositionX: "-58px", backgroundPositionY: "-240px"})
        } else {
            a.style.backgroundPosition = "-58px -240px"
        }
        $(a).css({color: "#656565"});
        $(a).css({textDecoration: "none"})
    }
}

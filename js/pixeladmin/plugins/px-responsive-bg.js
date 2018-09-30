!function(e, t) {
    if ("function" == typeof define && define.amd)
        define(["module", "exports", "jquery", "px/util"], t);
    else if ("undefined" != typeof exports)
        t(module, exports, require("jquery"), require("px/util"));
    else {
        var n = {
            exports: {}
        };
        t(n, n.exports, e.jquery, e.util),
            e.pxResponsiveBg = n.exports
    }
}(this, function(e, t, n, i) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o(n)
        , a = o(i)
        , u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        , f = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
                t
        }
    }()
        , c = function(e) {
        var t = "pxResponsiveBg"
            , n = "px.responsiveBg"
            , i = e.fn[t]
            , o = {
            backgroundImage: null,
            backgroundPosition: "center middle",
            overlay: !1,
            overlayOpacity: .2
        }
            , s = {
            CONTAINER: "px-responsive-bg-container",
            IMAGE: "px-responsive-bg",
            OVERLAY: "px-responsive-bg-overlay"
        }
            , c = {
            RESIZE: "resize.px.responsiveBg"
        }
            , l = function() {
            function i(e, t) {
                var n = this;
                r(this, i),
                    this.uniqueId = a.default.generateUniqueId(),
                    this.element = e,
                    this.config = this._getConfig(t),
                null !== this.config.backgroundImage && this._loadImage(this.config.backgroundImage, function(e) {
                    n._sizeRatio = e.height / e.width,
                        n._setupMarkup(e),
                        n._setListeners(),
                        n.update()
                })
            }
            return f(i, [{
                key: "update",
                value: function() {
                    var t = this.image.parentNode
                        , n = e(t).height()
                        , i = e(t).width()
                        , o = void 0
                        , r = void 0
                        , s = void 0
                        , a = void 0;
                    i * this._sizeRatio > n ? (r = "100%",
                        o = Math.ceil(i * this._sizeRatio),
                        a = 0,
                        s = "top" === this.config.backgroundPosition[1] ? 0 : "bottom" === this.config.backgroundPosition[1] ? -1 * (o - n) : Math.floor(-1 * (o - n) / 2)) : (r = Math.ceil(n / this._sizeRatio),
                        o = n,
                        s = 0,
                        a = "left" === this.config.backgroundPosition[0] ? 0 : "right" === this.config.backgroundPosition[0] ? -1 * (r - i) : Math.floor(-1 * (r - i) / 2)),
                        this.image.style.width = "100%" === r ? r : r + "px",
                        this.image.style.height = o + "px",
                        this.image.style.top = s + "px",
                        this.image.style.left = a + "px"
                }
            }, {
                key: "destroy",
                value: function(t) {
                    this._unsetListeners(),
                    t && e(this.element).removeClass(s.CONTAINER).find("> ." + s.IMAGE).remove(),
                        e(this.element).removeData(n)
                }
            }, {
                key: "_loadImage",
                value: function(e, t) {
                    var n = new Image;
                    n.onload = function() {
                        return t(n)
                    }
                        ,
                        n.src = e
                }
            }, {
                key: "_setupMarkup",
                value: function(t) {
                    a.default.addClass(this.element, s.CONTAINER);
                    var n = e(this.element).find("> ." + s.IMAGE);
                    if (n.length || (n = e('<div class="' + s.IMAGE + '"></div>').appendTo(this.element)).append('<img alt="">'),
                            this.image = n.find("> img")[0],
                            !this.image)
                        throw new Error("Background <img> element not found!");
                    e(this.image).attr("src", t.src),
                        !1 !== this.config.overlay ? (n.find("." + s.OVERLAY).remove(),
                            n.prepend("string" == typeof this.config.overlay && "<" === this.config.overlay[0] ? e(this.config.overlay).addClass(s.OVERLAY).css("opacity", this.config.overlayOpacity) : e('<div class="' + s.OVERLAY + '"></div>').css({
                                background: "boolean" == typeof this.config.overlay ? "#000" : this.config.overlay,
                                opacity: this.config.overlayOpacity
                            }))) : n.find("> ." + s.OVERLAY).remove()
                }
            }, {
                key: "_setListeners",
                value: function() {
                    e(window).on(this.constructor.Event.RESIZE + "." + this.uniqueId, e.proxy(this.update, this))
                }
            }, {
                key: "_unsetListeners",
                value: function() {
                    e(window).off(this.constructor.Event.RESIZE + "." + this.uniqueId)
                }
            }, {
                key: "_getConfig",
                value: function(t) {
                    var n = e.extend({}, this.constructor.Default, e(this.element).data(), t);
                    if (!n.backgroundImage && null !== n.backgroundImage)
                        throw new Error("Background image is not specified.");
                    var i = String(n.backgroundPosition).split(" ").slice(0, 2);
                    return "center" !== i[0] && "left" !== i[0] && "right" !== i[0] && (i[0] = "center"),
                    "middle" !== i[1] && "top" !== i[1] && "bottom" !== i[1] && (i[1] = "middle"),
                        n.backgroundPosition = i,
                        n
                }
            }], [{
                key: "_jQueryInterface",
                value: function(t) {
                    for (var o = arguments.length, r = Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
                        r[s - 1] = arguments[s];
                    return this.each(function() {
                        var o = e(this).data(n)
                            , s = "object" === (void 0 === t ? "undefined" : u(t)) ? t : null;
                        if (o || "destroy" === t || (o = new i(this,s),
                                e(this).data(n, o)),
                            o && "string" == typeof t) {
                            var a;
                            if (!o[t])
                                throw new Error('No method named "' + t + '"');
                            (a = o)[t].apply(a, r)
                        }
                    })
                }
            }, {
                key: "Default",
                get: function() {
                    return o
                }
            }, {
                key: "NAME",
                get: function() {
                    return t
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return n
                }
            }, {
                key: "Event",
                get: function() {
                    return c
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".px.responsiveBg"
                }
            }]),
                i
        }();
        return e.fn[t] = l._jQueryInterface,
            e.fn[t].Constructor = l,
            e.fn[t].noConflict = function() {
                return e.fn[t] = i,
                    l._jQueryInterface
            }
            ,
            l
    }(s.default);
    t.default = c,
        e.exports = t.default
});

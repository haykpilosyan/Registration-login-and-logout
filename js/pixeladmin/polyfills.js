!function(t, o) {
    if ("function" == typeof define && define.amd)
        define([], o);
    else if ("undefined" != typeof exports)
        o();
    else {
        o(),
            t.polyfills = {
                exports: {}
            }.exports
    }
}(this, function() {
    "use strict";
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
    ;
    Object.keys || (Object.keys = function() {
        var o = Object.prototype.hasOwnProperty
            , e = !{
            toString: null
        }.propertyIsEnumerable("toString")
            , n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
            , r = n.length;
        return function(f) {
            if ("object" !== (void 0 === f ? "undefined" : t(f)) && ("function" != typeof f || null === f))
                throw new TypeError("Object.keys called on non-object");
            var i, l, y = [];
            for (i in f)
                o.call(f, i) && y.push(i);
            if (e)
                for (l = 0; l < r; l++)
                    o.call(f, n[l]) && y.push(n[l]);
            return y
        }
    }())
});

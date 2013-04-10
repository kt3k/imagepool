/**
 * imagepool.js 0.1
 * author: Yosiya Hinosawa ( @kt3k )
 */

window.ImagePool = (function () {
    'use strict';

    var ImagePool = function () {
        this.pool = {};
    };

    var createImageElement = function (src, attrs, styles) {
        var img = new Image();
        img.src = src;

        Object.keys(attrs || {}).forEach(function (k) {
            console.log(k);
            img.setAttribute(k, attrs[k]);
        });

        Object.keys(styles || {}).forEach(function (k) {
            img.style[k] = styles[k];
        });

        return img;
    };

    var createImageElementsList = function (src, num, attrs, styles) {
        var list = [];
        console.log(attrs);

        for (var i = 0; i < num; i++) {
            list.push(createImageElement(src, attrs, styles));
        }

        return list;
    };

    var pt = {};

    pt.createCache = function (src, num, attrs, styles) {
        // num's default is 1
        num = num == null ? 1 : num;

        this.pool[src] = {
            index: 0,
            list: createImageElementsList(src, num, attrs, styles)
        };

        return this;
    };

    pt.get = function (src) {
        var data = this.pool[src];

        data.index += 1;
        data.index %= data.list.length;

        return data.list[data.index]
    };

    var exports = pt.constructor = function () {
        return new ImagePool();
    };

    exports.prototype = ImagePool.prototype = pt;

    return exports;
}());
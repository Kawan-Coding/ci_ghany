/*
 CanvasJS HTML5 & JavaScript Charts - v1.7.0 GA - http://canvasjs.com/ 
 Copyright 2013 fenopix
*/
(function() {
    function O(a, b) {
        a.prototype = Ba(b.prototype);
        a.prototype.constructor = a;
        a.base = b.prototype
    }

    function Ba(a) {
        function b() {}
        b.prototype = a;
        return new b
    }

    function ua(a, b, c) {
        "millisecond" === c ? a.setMilliseconds(a.getMilliseconds() + 1 * b) : "second" === c ? a.setSeconds(a.getSeconds() + 1 * b) : "minute" === c ? a.setMinutes(a.getMinutes() + 1 * b) : "hour" === c ? a.setHours(a.getHours() + 1 * b) : "day" === c ? a.setDate(a.getDate() + 1 * b) : "week" === c ? a.setDate(a.getDate() + 7 * b) : "month" === c ? a.setMonth(a.getMonth() + 1 * b) : "year" === c && a.setFullYear(a.getFullYear() +
            1 * b);
        return a
    }

    function $(a, b) { return B[b + "Duration"] * a }

    function L(a, b) {
        var c = !1;
        0 > a && (c = !0, a *= -1);
        a = "" + a;
        for (b = b ? b : 1; a.length < b;) a = "0" + a;
        return c ? "-" + a : a
    }

    function aa(a) {
        if (!a) return a;
        a = a.replace(/^\s\s*/, "");
        for (var b = /\s/, c = a.length; b.test(a.charAt(--c)););
        return a.slice(0, c + 1)
    }

    function Ca(a) {
        a.roundRect = function(a, c, d, e, f, g, k, p) {
            k && (this.fillStyle = k);
            p && (this.strokeStyle = p);
            "undefined" === typeof f && (f = 5);
            this.lineWidth = g;
            this.beginPath();
            this.moveTo(a + f, c);
            this.lineTo(a + d - f, c);
            this.quadraticCurveTo(a +
                d, c, a + d, c + f);
            this.lineTo(a + d, c + e - f);
            this.quadraticCurveTo(a + d, c + e, a + d - f, c + e);
            this.lineTo(a + f, c + e);
            this.quadraticCurveTo(a, c + e, a, c + e - f);
            this.lineTo(a, c + f);
            this.quadraticCurveTo(a, c, a + f, c);
            this.closePath();
            k && this.fill();
            p && 0 < g && this.stroke()
        }
    }

    function va(a, b) { return a - b }

    function Da(a, b) { return a.x - b.x }

    function A(a) {
        var b = ((a & 16711680) >> 16).toString(16),
            c = ((a & 65280) >> 8).toString(16);
        a = ((a & 255) >> 0).toString(16);
        b = 2 > b.length ? "0" + b : b;
        c = 2 > c.length ? "0" + c : c;
        a = 2 > a.length ? "0" + a : a;
        return "#" + b + c + a
    }

    function Ea(a,
        b) {
        var c = this.length >>> 0,
            d = Number(b) || 0,
            d = 0 > d ? Math.ceil(d) : Math.floor(d);
        for (0 > d && (d += c); d < c; d++)
            if (d in this && this[d] === a) return d;
        return -1
    }

    function fa(a, b, c) {
        c = c || "normal";
        var d = a + "_" + b + "_" + c,
            e = wa[d];
        if (isNaN(e)) {
            try {
                a = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" + a + "; font-size:" + b + "px; font-weight:" + c + ";";
                if (!S) {
                    var f = document.body;
                    S = document.createElement("span");
                    S.innerHTML = "";
                    var g = document.createTextNode("Mpgyi");
                    S.appendChild(g);
                    f.appendChild(S)
                }
                S.style.display = "";
                S.setAttribute("style", a);
                e = Math.round(S.offsetHeight);
                S.style.display = "none"
            } catch (k) { e = Math.ceil(1.1 * b) }
            e = Math.max(e, b);
            wa[d] = e
        }
        return e
    }

    function M(a, b) {
        var c = [];
        lineDashTypeMap = { solid: [], shortDash: [3, 1], shortDot: [1, 1], shortDashDot: [3, 1, 1, 1], shortDashDotDot: [3, 1, 1, 1, 1, 1], dot: [1, 2], dash: [4, 2], dashDot: [4, 2, 1, 2], longDash: [8, 2], longDashDot: [8, 2, 1, 2], longDashDotDot: [8, 2, 1, 2, 1, 2] };
        if (c = lineDashTypeMap[a || "solid"])
            for (var d = 0; d < c.length; d++) c[d] *= b;
        else c = [];
        return c
    }

    function E(a, b, c, d) {
        if (a.addEventListener) a.addEventListener(b, c, d || !1);
        else if (a.attachEvent) a.attachEvent("on" + b, function(b) {
            b = b || window.event;
            b.preventDefault = b.preventDefault || function() { b.returnValue = !1 };
            b.stopPropagation = b.stopPropagation || function() { b.cancelBubble = !0 };
            c.call(a, b)
        });
        else return !1
    }

    function xa(a, b, c) {
        a *= J;
        b *= J;
        a = c.getImageData(a, b, 2, 2).data;
        b = !0;
        for (c = 0; 4 > c; c++)
            if (a[c] !== a[c + 4] | a[c] !== a[c + 8] | a[c] !== a[c + 12]) { b = !1; break }
        return b ? a[0] << 16 | a[1] << 8 | a[2] : 0
    }

    function N(a,
        b, c) { return a in b ? b[a] : c[a] }

    function ga(a, b, c) {
        if (t && ya) {
            var d = a.getContext("2d");
            ha = d.webkitBackingStorePixelRatio || d.mozBackingStorePixelRatio || d.msBackingStorePixelRatio || d.oBackingStorePixelRatio || d.backingStorePixelRatio || 1;
            J = oa / ha;
            a.width = b * J;
            a.height = c * J;
            oa !== ha && (a.style.width = b + "px", a.style.height = c + "px", d.scale(J, J))
        } else a.width = b, a.height = c
    }

    function V(a, b) {
        var c = document.createElement("canvas");
        c.setAttribute("class", "canvasjs-chart-canvas");
        ga(c, a, b);
        t || "undefined" === typeof G_vmlCanvasManager ||
            G_vmlCanvasManager.initElement(c);
        return c
    }

    function za(a, b, c) {
        if (a && b && c) {
            c = c + "." + ("jpeg" === b ? "jpg" : b);
            var d = "image/" + b;
            a = a.toDataURL(d);
            var e = !1,
                f = document.createElement("a");
            f.download = c;
            f.href = a;
            f.target = "_blank";
            if ("undefined" !== typeof Blob && new Blob) {
                for (var g = a.replace(/^data:[a-z/]*;base64,/, ""), g = atob(g), k = new ArrayBuffer(g.length), p = new Uint8Array(k), l = 0; l < g.length; l++) p[l] = g.charCodeAt(l);
                b = new Blob([k], { type: "image/" + b });
                try { window.navigator.msSaveBlob(b, c), e = !0 } catch (h) {
                    f.dataset.downloadurl = [d, f.download, f.href].join(":"), f.href = window.URL.createObjectURL(b)
                }
            }
            if (!e) try { event = document.createEvent("MouseEvents"), event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), f.dispatchEvent ? f.dispatchEvent(event) : f.fireEvent && f.fireEvent("onclick") } catch (n) { b = window.open(), b.document.write("<img src='" + a + "'></img><div>Please right click on the image and save it to your device</div>"), b.document.close() }
        }
    }

    function P(a, b, c) {
        b.getAttribute("state") !== c && (b.setAttribute("state", c),
            b.setAttribute("type", "button"), b.style.position = "relative", b.style.margin = "0px 0px 0px 0px", b.style.padding = "3px 4px 0px 4px", b.style.cssFloat = "left", b.setAttribute("title", a._cultureInfo[c + "Text"]), b.innerHTML = "<img style='height:16px;' src='" + Fa[c].image + "' alt='" + a._cultureInfo[c + "Text"] + "' />")
    }

    function pa() { for (var a = null, b = 0; b < arguments.length; b++) a = arguments[b], a.style && (a.style.display = "inline") }

    function T() {
        for (var a = null, b = 0; b < arguments.length; b++)(a = arguments[b]) && a.style && (a.style.display =
            "none")
    }

    function F(a, b, c, d) {
        this._defaultsKey = a;
        this.parent = d;
        this._eventListeners = [];
        d = {};
        c && (Y[c] && Y[c][a]) && (d = Y[c][a]);
        this._options = b ? b : {};
        this.setOptions(this._options, d)
    }

    function w(a, b, c) {
        this._publicChartReference = c;
        b = b || {};
        w.base.constructor.call(this, "Chart", b, b.theme ? b.theme : "theme1");
        var d = this;
        this._containerId = a;
        this._objectsInitialized = !1;
        this.overlaidCanvasCtx = this.ctx = null;
        this._indexLabels = [];
        this._panTimerId = 0;
        this._lastTouchEventType = "";
        this._lastTouchData = null;
        this.isAnimating = !1;
        this.renderCount = 0;
        this.panEnabled = this.disableToolTip = this.animatedRender = !1;
        this._defaultCursor = "default";
        this.plotArea = { canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
        this._dataInRenderedOrder = [];
        (this._container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this._container.innerHTML = "", b = a = 0, a = this._options.width ? this.width : 0 < this._container.clientWidth ? this._container.clientWidth : this.width, b = this._options.height ? this.height :
            0 < this._container.clientHeight ? this._container.clientHeight : this.height, this.width = a, this.height = b, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this._selectedColorSet = "undefined" !== typeof W[this.colorSet] ? W[this.colorSet] : W.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor =
            "auto", t || (this._canvasJSContainer.style.height = "0px"), this._container.appendChild(this._canvasJSContainer), this.canvas = V(a, b), this.canvas.style.position = "" /* replace absolute*/ , this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Ca(this.ctx), t ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = V(a, b), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas),
                    this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = V(a, b), this.overlaidCanvas.style.position = "absolute", this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", this._eventManager = new ba(this), E(window, "resize", function() { d._updateSize() && d.render() }), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), this._toolBar.style.cssText =
                "position: absolute; right: 1px; top: 1px;", this._canvasJSContainer.appendChild(this._toolBar), this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height }, E(this.overlaidCanvas, "click", function(a) { d._mouseEventHandler(a) }), E(this.overlaidCanvas, "mousemove", function(a) { d._mouseEventHandler(a) }), E(this.overlaidCanvas, "mouseup", function(a) { d._mouseEventHandler(a) }), E(this.overlaidCanvas, "mousedown", function(a) {
                    d._mouseEventHandler(a);
                    T(d._dropdownMenu)
                }), E(this.overlaidCanvas, "mouseout", function(a) { d._mouseEventHandler(a) }),
                E(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a) { d._touchEventHandler(a) }), E(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a) { d._touchEventHandler(a) }), E(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a) { d._touchEventHandler(a) }), E(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a) { d._touchEventHandler(a) }), this._creditLink ||
                (this._creditLink = document.createElement("a"), this._creditLink.setAttribute("class", "canvasjs-chart-credit"), this._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:3px;top:" + (this.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"), this._creditLink.setAttribute("tabIndex", -1), this._creditLink.setAttribute("target", "_blank")), this._toolTip = new Q(this, this._options.toolTip, this.theme), this.axisY2 =
                this.axisY = this.axisX = this.data = null, this.sessionVariables = { axisX: { internalMinimum: null, internalMaximum: null }, axisY: { internalMinimum: null, internalMaximum: null }, axisY2: { internalMinimum: null, internalMaximum: null } })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found')
    }

    function ia(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            if (0 == d) c.push(a[0]);
            else {
                var e, f, g;
                g = d - 1;
                e = 0 === g ? 0 : g - 1;
                f = g === a.length - 1 ? g : g + 1;
                c[c.length] = {
                    x: a[g].x + (a[f].x - a[e].x) / b / 3,
                    y: a[g].y +
                        (a[f].y - a[e].y) / b / 3
                };
                g = d;
                e = 0 === g ? 0 : g - 1;
                f = g === a.length - 1 ? g : g + 1;
                c[c.length] = { x: a[g].x - (a[f].x - a[e].x) / b / 3, y: a[g].y - (a[f].y - a[e].y) / b / 3 };
                c[c.length] = a[d]
            }
        return c
    }

    function Z(a, b, c, d, e) {
        "undefined" === typeof e && (e = 0);
        this._padding = e;
        this._x1 = a;
        this._y1 = b;
        this._x2 = c;
        this._y2 = d;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    }

    function G(a, b) {
        G.base.constructor.call(this, "TextBlock", b);
        this.ctx = a;
        this._isDirty = !0;
        this._wrappedText = null;
        this._lineHeight = fa(this.fontFamily,
            this.fontSize, this.fontWeight)
    }

    function ca(a, b) {
        ca.base.constructor.call(this, "Title", b, a.theme);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        "undefined" === typeof this._options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null }
    }

    function ja(a, b) {
        ja.base.constructor.call(this, "Subtitle", b, a.theme);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        "undefined" === typeof this._options.fontSize &&
            (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null }
    }

    function ka(a, b, c) {
        ka.base.constructor.call(this, "Legend", b, c);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.ghostCtx = this.chart._eventManager.ghostCtx;
        this.items = [];
        this.height = this.width = 0;
        this.orientation = null;
        this.dataSeries = [];
        this.bounds = { x1: null, y1: null, x2: null, y2: null };
        "undefined" === typeof this._options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.lineHeight = fa(this.fontFamily, this.fontSize, this.fontWeight);
        this.horizontalSpacing = this.fontSize
    }

    function qa(a, b) {
        qa.base.constructor.call(this, b);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx
    }

    function R(a, b, c, d, e) {
        R.base.constructor.call(this, "DataSeries", b, c);
        this.chart = a;
        this.canvas = a.canvas;
        this._ctx = a.canvas.ctx;
        this.index = d;
        this.noDataPointsInPlotArea = 0;
        this.id = e;
        this.chart._eventManager.objectMap[e] = { id: e, objectType: "dataSeries", dataSeriesIndex: d };
        this.dataPointIds = [];
        this.plotUnit = [];
        this.axisY = this.axisX = null;
        null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity = 1);
        this.axisPlacement = this.getDefaultAxisPlacement();
        "undefined" === typeof this._options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
    }

    function x(a, b, c, d) {
        x.base.constructor.call(this, "Axis", b, a.theme);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = a.ctx;
        this.intervalstartTimePercent = this.maxHeight = this.maxWidth = 0;
        this.labels = [];
        this._labels =
            null;
        this.dataInfo = { min: Infinity, max: -Infinity, viewPortMin: Infinity, viewPortMax: -Infinity, minDiff: Infinity };
        "axisX" === c ? (this.sessionVariables = this.chart.sessionVariables[c], this._options.interval || (this.intervalType = null)) : this.sessionVariables = "left" === d || "top" === d ? this.chart.sessionVariables.axisY : this.chart.sessionVariables.axisY2;
        "undefined" === typeof this._options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
        "undefined" === typeof this._options.labelFontSize &&
            (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
        this.type = c;
        "axisX" !== c || b && "undefined" !== typeof b.gridThickness || (this.gridThickness = 0);
        this._position = d;
        this.lineCoordinates = { x1: null, y1: null, x2: null, y2: null, width: null };
        this.labelAngle = (this.labelAngle % 360 + 360) % 360;
        90 < this.labelAngle && 270 >= this.labelAngle ? this.labelAngle -= 180 : 180 < this.labelAngle && 270 >= this.labelAngle ? this.labelAngle -= 180 : 270 < this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
        if (this._options.stripLines &&
            0 < this._options.stripLines.length)
            for (this.stripLines = [], b = 0; b < this._options.stripLines.length; b++) this.stripLines.push(new la(this.chart, this._options.stripLines[b], a.theme, ++this.chart._eventManager.lastObjectId, this));
        this._absoluteMaximum = this._absoluteMinimum = this._titleTextBlock = null;
        this.hasOptionChanged("minimum") && (this.sessionVariables.internalMinimum = this.minimum);
        this.hasOptionChanged("maximum") && (this.sessionVariables.internalMaximum = this.maximum);
        this.trackChanges("minimum");
        this.trackChanges("maximum")
    }

    function la(a, b, c, d, e) {
        la.base.constructor.call(this, "StripLine", b, c, e);
        this.id = d;
        this.chart = a;
        this.ctx = this.chart.ctx;
        this.label = this.label;
        this._thicknessType = "pixel";
        null !== this.startValue && null !== this.endValue && (this.value = ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this.thickness = Math.max(this.endValue - this.startValue), this._thicknessType = "value")
    }

    function Q(a, b, c) {
        Q.base.constructor.call(this, "ToolTip",
            b, c);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.currentDataPointIndex = this.currentSeriesIndex = -1;
        this._timerId = 0;
        this._prevY = this._prevX = NaN;
        this._initialize()
    }

    function ba(a) {
        this.chart = a;
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.ghostCanvas = V(this.chart.width, this.chart.height);
        this.ghostCtx = this.ghostCanvas.getContext("2d");
        this.mouseoveredObjectMaps = []
    }

    function da(a) {
        var b;
        a && ea[a] && (b = ea[a]);
        da.base.constructor.call(this, "CultureInfo", b)
    }

    function ra(a) {
        this.chart = a;
        this.ctx = this.chart.plotArea.ctx;
        this.animations = [];
        this.animationRequestId = null
    }
    var t = !!document.createElement("canvas").getContext,
        ma = {
            Chart: { width: 500, height: 400, zoomEnabled: !1, backgroundColor: "white", theme: "theme1", animationEnabled: !1, animationDuration: 1200, dataPointMaxWidth: null, colorSet: "colorSet1", culture: "en", creditText: "CanvasJS.com", interactivityEnabled: !0, exportEnabled: !1, exportFileName: "Chart" },
            Title: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 20,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 5,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1
            },
            Subtitle: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 14,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 2,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1
            },
            Legend: { name: null, verticalAlign: "center", horizontalAlign: "right", fontSize: 14, fontFamily: "calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", cursor: null, itemmouseover: null, itemmouseout: null, itemmousemove: null, itemclick: null, dockInsidePlotArea: !1, reversed: !1, maxWidth: null, maxHeight: null, itemMaxWidth: null, itemWidth: null, itemWrap: !0, itemTextFormatter: null },
            ToolTip: {
                enabled: !0,
                shared: !1,
                animationEnabled: !0,
                content: null,
                contentFormatter: null,
                reversed: !1,
                backgroundColor: null,
                borderColor: null,
                borderThickness: 2,
                cornerRadius: 5,
                fontSize: 14,
                fontColor: "#000000",
                fontFamily: "Calibri, Arial, Georgia, serif;",
                fontWeight: "normal",
                fontStyle: "italic"
            },
            Axis: {
                minimum: null,
                maximum: null,
                interval: null,
                intervalType: null,
                title: null,
                titleFontColor: "black",
                titleFontSize: 20,
                titleFontFamily: "arial",
                titleFontWeight: "normal",
                titleFontStyle: "normal",
                labelAngle: 0,
                labelFontFamily: "arial",
                labelFontColor: "black",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelAutoFit: !1,
                labelWrap: !0,
                labelMaxWidth: null,
                labelFormatter: null,
                prefix: "",
                suffix: "",
                includeZero: !0,
                tickLength: 5,
                tickColor: "black",
                tickThickness: 1,
                lineColor: "black",
                lineThickness: 1,
                lineDashType: "solid",
                gridColor: "A0A0A0",
                gridThickness: 0,
                gridDashType: "solid",
                interlacedColor: null,
                valueFormatString: null,
                margin: 2,
                stripLines: []
            },
            StripLine: {
                value: null,
                startValue: null,
                endValue: null,
                color: "orange",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelBackgroundColor: "#EEEEEE",
                labelFontFamily: "arial",
                labelFontColor: "orange",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                showOnTop: !1
            },
            DataSeries: {
                name: null,
                dataPoints: null,
                label: "",
                bevelEnabled: !1,
                highlightEnabled: !0,
                cursor: null,
                indexLabel: "",
                indexLabelPlacement: "auto",
                indexLabelOrientation: "horizontal",
                indexLabelFontColor: "black",
                indexLabelFontSize: 12,
                indexLabelFontStyle: "normal",
                indexLabelFontFamily: "Arial",
                indexLabelFontWeight: "normal",
                indexLabelBackgroundColor: null,
                indexLabelLineColor: null,
                indexLabelLineThickness: 1,
                indexLabelLineDashType: "solid",
                indexLabelMaxWidth: null,
                indexLabelWrap: !0,
                indexLabelFormatter: null,
                lineThickness: 2,
                lineDashType: "solid",
                color: null,
                risingColor: "white",
                fillOpacity: null,
                startAngle: 0,
                type: "column",
                xValueType: "number",
                axisYType: "primary",
                xValueFormatString: null,
                yValueFormatString: null,
                zValueFormatString: null,
                percentFormatString: null,
                showInLegend: null,
                legendMarkerType: null,
                legendMarkerColor: null,
                legendText: null,
                legendMarkerBorderColor: null,
                legendMarkerBorderThickness: null,
                markerType: "circle",
                markerColor: null,
                markerSize: null,
                markerBorderColor: null,
                markerBorderThickness: null,
                mouseover: null,
                mouseout: null,
                mousemove: null,
                click: null,
                toolTipContent: null,
                visible: !0
            },
            TextBlock: { x: 0, y: 0, width: null, height: null, maxWidth: null, maxHeight: null, padding: 0, angle: 0, text: "", horizontalAlign: "center", fontSize: 12, fontFamily: "calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", borderThickness: 0, borderColor: "black", cornerRadius: 0, backgroundColor: null, textBaseline: "top" },
            CultureInfo: {
                decimalSeparator: ".",
                digitGroupSeparator: ",",
                zoomText: "Zoom",
                panText: "Pan",
                resetText: "Reset",
                menuText: "More Options",
                saveJPGText: "Save as JPG",
                savePNGText: "Save as PNG",
                days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
            }
        },
        ea = { en: {} },
        W = {
            colorSet1: "#369EAD #C24642 #7F6084 #86B402 #A2D1CF #C8B631 #6DBCEB #52514E #4F81BC #A064A1 #F79647".split(" "),
            colorSet2: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #33558B".split(" "),
            colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
        },
        Y = {
            theme1: {
                Chart: { colorSet: "colorSet1" },
                Title: { fontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri", fontSize: 33, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "top", margin: 5 },
                Subtitle: {
                    fontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    fontSize: 16,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Axis: { titleFontSize: 26, titleFontColor: "#666666", titleFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri", labelFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri", labelFontSize: 18, labelFontColor: "grey", tickColor: "#BBBBBB", tickThickness: 2, gridThickness: 2, gridColor: "#BBBBBB", lineThickness: 2, lineColor: "#BBBBBB" },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: t ? "monospace, sans-serif,arial black" : "calibri"
                },
                DataSeries: { indexLabelFontColor: "grey", indexLabelFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri", indexLabelFontSize: 18, indexLabelLineThickness: 1 }
            },
            theme2: {
                Chart: { colorSet: "colorSet2" },
                Title: { fontFamily: "impact, charcoal, arial black, sans-serif", fontSize: 32, fontColor: "#333333", verticalAlign: "top", margin: 5 },
                Subtitle: {
                    fontFamily: "impact, charcoal, arial black, sans-serif",
                    fontSize: 14,
                    fontColor: "#333333",
                    verticalAlign: "top",
                    margin: 5
                },
                Axis: { titleFontSize: 22, titleFontColor: "rgb(98,98,98)", titleFontFamily: t ? "monospace, sans-serif,arial black" : "arial", titleFontWeight: "bold", labelFontFamily: t ? "monospace, Courier New, Courier" : "arial", labelFontSize: 16, labelFontColor: "grey", labelFontWeight: "bold", tickColor: "grey", tickThickness: 2, gridThickness: 2, gridColor: "grey", lineColor: "grey", lineThickness: 0 },
                Legend: { verticalAlign: "bottom", horizontalAlign: "center", fontFamily: t ? "monospace, sans-serif,arial black" : "arial" },
                DataSeries: {
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: t ? "Courier New, Courier, monospace" : "arial",
                    indexLabelFontWeight: "bold",
                    indexLabelFontSize: 18,
                    indexLabelLineThickness: 1
                }
            },
            theme3: {
                Chart: { colorSet: "colorSet1" },
                Title: { fontFamily: t ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri", fontSize: 32, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "top", margin: 5 },
                Subtitle: {
                    fontFamily: t ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri",
                    fontSize: 16,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Axis: { titleFontSize: 22, titleFontColor: "rgb(98,98,98)", titleFontFamily: t ? "Verdana, Geneva, Calibri, sans-serif" : "calibri", labelFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri", labelFontSize: 18, labelFontColor: "grey", tickColor: "grey", tickThickness: 2, gridThickness: 2, gridColor: "grey", lineThickness: 2, lineColor: "grey" },
                Legend: { verticalAlign: "bottom", horizontalAlign: "center", fontFamily: t ? "monospace, sans-serif,arial black" : "calibri" },
                DataSeries: { bevelEnabled: !0, indexLabelFontColor: "grey", indexLabelFontFamily: t ? "Candara, Optima, Calibri, Verdana, Geneva, sans-serif" : "calibri", indexLabelFontSize: 18, indexLabelLineColor: "lightgrey", indexLabelLineThickness: 2 }
            }
        },
        B = { numberDuration: 1, yearDuration: 314496E5, monthDuration: 2592E6, weekDuration: 6048E5, dayDuration: 864E5, hourDuration: 36E5, minuteDuration: 6E4, secondDuration: 1E3, millisecondDuration: 1, dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ") },
        wa = {},
        S =
        null,
        sa = function() {
            var a = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
                b = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                c = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                d = "January February March April May June July August September October November December".split(" "),
                e = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                f = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                g = /[^-+\dA-Z]/g;
            return function(k, p, l) {
                var h = l ? l.days : b,
                    n = l ? l.months : d,
                    m = l ? l.shortDays : c,
                    q = l ? l.shortMonths : e;
                l = "";
                var r = !1;
                k = k && k.getTime ? k : k ? new Date(k) : new Date;
                if (isNaN(k)) throw SyntaxError("invalid date");
                "UTC:" === p.slice(0, 4) && (p = p.slice(4), r = !0);
                l = r ? "getUTC" : "get";
                var s = k[l + "Date"](),
                    t = k[l + "Day"](),
                    u = k[l + "Month"](),
                    v = k[l + "FullYear"](),
                    C = k[l + "Hours"](),
                    H = k[l + "Minutes"](),
                    D = k[l + "Seconds"](),
                    w = k[l + "Milliseconds"](),
                    y = r ? 0 : k.getTimezoneOffset();
                return l = p.replace(a, function(a) {
                    switch (a) {
                        case "D":
                            return s;
                        case "DD":
                            return L(s, 2);
                        case "DDD":
                            return m[t];
                        case "DDDD":
                            return h[t];
                        case "M":
                            return u + 1;
                        case "MM":
                            return L(u + 1, 2);
                        case "MMM":
                            return q[u];
                        case "MMMM":
                            return n[u];
                        case "Y":
                            return parseInt(String(v).slice(-2));
                        case "YY":
                            return L(String(v).slice(-2), 2);
                        case "YYY":
                            return L(String(v).slice(-3), 3);
                        case "YYYY":
                            return L(v, 4);
                        case "h":
                            return C % 12 || 12;
                        case "hh":
                            return L(C % 12 || 12, 2);
                        case "H":
                            return C;
                        case "HH":
                            return L(C, 2);
                        case "m":
                            return H;
                        case "mm":
                            return L(H, 2);
                        case "s":
                            return D;
                        case "ss":
                            return L(D, 2);
                        case "f":
                            return String(w).slice(0, 1);
                        case "ff":
                            return L(String(w).slice(0, 2), 2);
                        case "fff":
                            return L(String(w).slice(0, 3), 3);
                        case "t":
                            return 12 > C ? "a" : "p";
                        case "tt":
                            return 12 > C ? "am" : "pm";
                        case "T":
                            return 12 > C ? "A" : "P";
                        case "TT":
                            return 12 > C ? "AM" : "PM";
                        case "K":
                            return r ? "UTC" : (String(k).match(f) || [""]).pop().replace(g, "");
                        case "z":
                            return (0 < y ? "-" : "+") + Math.floor(Math.abs(y) / 60);
                        case "zz":
                            return (0 < y ? "-" : "+") + L(Math.floor(Math.abs(y) / 60), 2);
                        case "zzz":
                            return (0 < y ? "-" : "+") + L(Math.floor(Math.abs(y) / 60), 2) + L(Math.abs(y) %
                                60, 2);
                        default:
                            return a.slice(1, a.length - 1)
                    }
                })
            }
        }(),
        X = function(a, b, c) {
            if (null === a) return "";
            a = Number(a);
            var d = 0 > a ? !0 : !1;
            d && (a *= -1);
            var e = c ? c.decimalSeparator : ".",
                f = c ? c.digitGroupSeparator : ",",
                g = "";
            b = String(b);
            var g = 1,
                k = c = "",
                p = -1,
                l = [],
                h = [],
                n = 0,
                m = 0,
                q = 0,
                r = !1,
                s = 0,
                k = b.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
            b = null;
            for (var t = 0; k && t < k.length; t++)
                if (b = k[t], "." === b && 0 > p) p = t;
                else {
                    if ("%" === b) g *= 100;
                    else if ("\u2030" === b) { g *= 1E3; continue } else if ("," === b[0] && "." === b[b.length - 1]) {
                        g /= Math.pow(1E3, b.length -
                            1);
                        p = t + b.length - 1;
                        continue
                    } else "E" !== b[0] && "e" !== b[0] || "0" !== b[b.length - 1] || (r = !0);
                    0 > p ? (l.push(b), "#" === b || "0" === b ? n++ : "," === b && q++) : (h.push(b), "#" !== b && "0" !== b || m++)
                }
            r && (b = Math.floor(a), s = (0 === b ? "" : String(b)).length - n, g /= Math.pow(10, s));
            0 > p && (p = t);
            g = (a * g).toFixed(m);
            b = g.split(".");
            g = (b[0] + "").split("");
            a = (b[1] + "").split("");
            g && "0" === g[0] && g.shift();
            for (t = r = k = m = p = 0; 0 < l.length;)
                if (b = l.pop(), "#" === b || "0" === b)
                    if (p++, p === n) {
                        var u = g,
                            g = [];
                        if ("0" === b)
                            for (b = n - m - (u ? u.length : 0); 0 < b;) u.unshift("0"), b--;
                        for (; 0 <
                            u.length;) c = u.pop() + c, t++, 0 === t % r && (k === q && 0 < u.length) && (c = f + c);
                        d && (c = "-" + c)
                    } else 0 < g.length ? (c = g.pop() + c, m++, t++) : "0" === b && (c = "0" + c, m++, t++), 0 === t % r && (k === q && 0 < g.length) && (c = f + c);
            else "E" !== b[0] && "e" !== b[0] || "0" !== b[b.length - 1] || !/[eE][+-]*[0]+/.test(b) ? "," === b ? (k++, r = t, t = 0, 0 < g.length && (c = f + c)) : c = 1 < b.length && ('"' === b[0] && '"' === b[b.length - 1] || "'" === b[0] && "'" === b[b.length - 1]) ? b.slice(1, b.length - 1) + c : b + c : (b = 0 > s ? b.replace("+", "").replace("-", "") : b.replace("-", ""), c += b.replace(/[0]+/, function(a) {
                return L(s,
                    a.length)
            }));
            d = "";
            for (f = !1; 0 < h.length;) b = h.shift(), "#" === b || "0" === b ? 0 < a.length && 0 !== Number(a.join("")) ? (d += a.shift(), f = !0) : "0" === b && (d += "0", f = !0) : 1 < b.length && ('"' === b[0] && '"' === b[b.length - 1] || "'" === b[0] && "'" === b[b.length - 1]) ? d += b.slice(1, b.length - 1) : "E" !== b[0] && "e" !== b[0] || "0" !== b[b.length - 1] || !/[eE][+-]*[0]+/.test(b) ? d += b : (b = 0 > s ? b.replace("+", "").replace("-", "") : b.replace("-", ""), d += b.replace(/[0]+/, function(a) { return L(s, a.length) }));
            return c + ((f ? e : "") + d)
        },
        na = function(a) {
            var b = 0,
                c = 0;
            a = a || window.event;
            a.offsetX || 0 === a.offsetX ? (b = a.offsetX, c = a.offsetY) : a.layerX || 0 == a.layerX ? (b = a.layerX, c = a.layerY) : (b = a.pageX - a.target.offsetLeft, c = a.pageY - a.target.offsetTop);
            return { x: b, y: c }
        },
        ya = !0,
        oa = window.devicePixelRatio || 1,
        ha = 1,
        J = ya ? oa / ha : 1,
        Fa = {
            reset: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKRSURBVEiJrdY/iF1FFMfxzwnZrGISUSR/JLGIhoh/QiRNBLWxMLIWEkwbgiAoFgoW2mhlY6dgpY2IlRBRxBSKhSAKIklWJRYuMZKAhiyopAiaTY7FvRtmZ+/ed9/zHRjezLw5v/O9d86cuZGZpmURAfdn5o9DfdZNLXpjz+LziPgyIl6MiG0jPTJzZBuyDrP4BVm0P/AKbljTb4ToY/gGewYA7KyCl+1b3DUYANvwbiHw0gCAGRzBOzjTAXEOu0cC4Ch+r5x/HrpdrcZmvIDFSucMtnYCYC++6HmNDw8FKDT34ETrf639/azOr5vwRk/g5fbeuABtgC04XWk9VQLciMP4EH/3AFzErRNC7MXlQmsesSoHsGPE23hmEoBW+61K66HMXFmIMvN8myilXS36R01ub+KfYvw43ZXwYDX+AHP4BAci4pFJomfmr/ihmNofESsBImJGk7mlncrM45n5JPbhz0kAWpsv+juxaX21YIPmVJS2uNzJMS6ZNexC0d+I7fUWXLFyz2kSZlpWPvASlmqAf/FXNXf3FAF2F/1LuFifAlionB6dRuSI2IwHi6lzmXmp6xR8XY0fiIh7psAwh+3FuDkRHQVjl+a8lkXjo0kLUKH7XaV5oO86PmZ1FTzyP4K/XGl9v/zwfbW7BriiuETGCP5ch9bc9f97HF/vcFzCa5gdEPgWq+t/4v0V63oE1uF4h0DiFJ7HnSWMppDdh1dxtsPvJ2wcBNAKbsJXa0Ck5opdaBPsRNu/usba09i1KsaAVzmLt3sghrRjuK1Tf4xkegInxwy8gKf7dKMVH2QRsV5zXR/Cftyu+aKaKbbkQrsdH+PTzLzcqzkOQAVzM+7FHdiqqe2/YT4zF/t8S/sPmawyvC974vcAAAAASUVORK5CYII=" },
            pan: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAJVSURBVFiFvZe7a1RBGMV/x2hWI4JpfKCIiSBKOoOCkID/wP4BFqIIFkE02ChIiC8QDKlSiI3YqRBsBVGwUNAUdiIEUgjiAzQIIsuKJsfizsXr5t7d+8jmwLDfzHz3nLOzc7+ZxTZlGyDgZiWOCuJ9wH2gCUyuqQFgF/AGcKJNrYkBYBj40CIet+muGQi/96kM4WS7C/Tm5VUg7whJg8BkEGkCR4BDYfodsADUgP6wErO5iCtswsuJb32hdbXy8qzL5TIdmzJinHdZoZIBZcSFkGlAKs1Z3YCketZcBtouuaQNkrblMiBpBrhme7mAgU4wMCvpcFsDkq4C54DFVRTH9h+i6vlE0r5UA5ImgCuh28jB28iIs7BIVCOeStoZD64P4uPAjUTygKSx2FsK2TIwkugfk9Qkfd/E+yMWHQCeSRqx/R3gOp3LazfaS2C4B5gHDgD7U9x3E3uAH7KNpC3AHHAwTL4FHgM9GQ8vAaPA0dB/Abxqk2/gBLA9MXba9r1k/d4LfA3JtwueBeM58ucS+edXnAW23wP10N3advEi9CXizTnyN4bPS7Zn4sH/dq3t18AY4e1YLYSy3g/csj2VnFshZPuOpOeSKHCodUINuGj7YetE6je1PV9QoNPJ9StNHKodx7nRbiWrGHBGXAi5DUiqtQwtpcWK0Jubt8CltA5MEV1IfwO7+VffPwGfia5m34CT4bXujIIX0Qna1/cGMNqV/wUJE2czxD8CQ4X5Sl7Jz7SILwCDpbjKPBRMHAd+EtX4HWV5Spdc2w8kDQGPbH8py/MXMygM69/FKz4AAAAASUVORK5CYII=" },
            zoom: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAMqSURBVFiFvdfbj91TFMDxz57U6GUEMS1aYzyMtCSSDhWjCZMInpAI3khE/QHtgzdRkXgSCS8SES9epKLi0oRKNETjRahREq2KS1stdRujtDPtbA97n5zdn9+5zJxTK9k5v3POXmt991p7r71+IcaoGwkhTOIebMRqzOBTvIG3Y4zTXRmqSoyx5cAKbMJOHMFJnMZ8/jyFaXyMR7G6nb1aH22cP4BvcBxziG3GKfyTIR9D6BYg1KUghPBCDveFlb/24Av8iuUYw41YVsz5G7uxKcZ4aMEpwGt5NY3V/YbHsQ6rcAHOw/kYxigewr5CZw4fYGxBKcCLOFEYehXrMdRhr5yLETxVScsOLOkKAPfn1TYMPIvLFrShUlS2FDZm8XRHACzFAWl3R2xbqPMCYhmeLCAOYEMngAczbcTvuHYxzguIy/FesR9e6gSwU/OoPYHBHgHgviIKX2Flq7k34KhmcVnbi/PC8JX4MgMcxb118wZwdz5aISscqx7VRcox7MrPQ7i+btIAJrAkf9+bI9EPmZY2IAxiTSuAldLq4Y9+AcSUh78KP0tbAcwU35cXMD1JCIFUoGiehlqAz6TNB1f1C0DK+0h+nsNPrQC2a4bqGmlD9kOGcWt+Po6pVgDvSxfJaSkFd4UQBvoAsBYbCoB3a2flM7slA0R8iyt6rAFDeDPbm8eOTpVwGD9qVq7nLbIaZnmksPU1JtsCZMXNmpdRxFasWITzh6Xj3LCzra1OxcD2QjHiGVzdpfORnMqZio2PcF23ABdJF1Np4BPptlyPi6WzPYBzpJZtHe7A6xW9cnyP8TqA//SEIYRL8Bxul7rihvwgtVn78WcGGZXa9HGd5TDujDHuOePXNiHdKjWgZX/YbsxLx/ktqbjVzTlcjUSnvI5JrdlUVp6WesZZ6R1hRrpq9+EVTGS9jTjYAuKIouGpbcurEkIYxC051KNSamazsc+xK8b4S0VnEi/j0hqTP+M27O258egQwZuzs7pI7Mf4WQXIEDc5s9sux+5+1Py2EmP8UOq6GvWhIScxfdYjUERiAt9Jd84J6a16zf8JEKT3yCm8g1UxRv8CC4pyRhzR1uUAAAAASUVORK5CYII=" },
            menu: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMTUvMTTPsvU0AAAAP0lEQVRIie2SMQoAIBDDUvH/X667g8sJJ9KOhYYOkW0qGaU1MPdC0vGSbV19EACo3YMPAFH5BUBUjsqfAPpVXtNgGDfxEDCtAAAAAElFTkSuQmCC" }
        };
    F.prototype.setOptions = function(a, b) {
        if (ma[this._defaultsKey]) {
            var c = ma[this._defaultsKey],
                d;
            for (d in c) this[d] = a && d in a ? a[d] : b && d in b ? b[d] : c[d]
        }
    };
    F.prototype.updateOption =
        function(a) {
            var b = ma[this._defaultsKey],
                c = this._options.theme ? this._options.theme : this.chart && this.chart._options.theme ? this.chart._options.theme : "theme1",
                d = {},
                e = this[a];
            c && (Y[c] && Y[c][this._defaultsKey]) && (d = Y[c][this._defaultsKey]);
            a in b && (e = a in this._options ? this._options[a] : d && a in d ? d[a] : b[a]);
            if (e === this[a]) return !1;
            this[a] = e;
            return !0
        };
    F.prototype.trackChanges = function(a) {
        this._options._oldOptions || (this._options._oldOptions = {});
        this._options._oldOptions[a] = this._options[a]
    };
    F.prototype.isBeingTracked =
        function(a) { this._options._oldOptions || (this._options._oldOptions = {}); return this._options._oldOptions[a] ? !0 : !1 };
    F.prototype.hasOptionChanged = function(a) { this._options._oldOptions || (this._options._oldOptions = {}); return this._options._oldOptions[a] !== this._options[a] };
    F.prototype.addEventListener = function(a, b, c) { a && b && (this._eventListeners[a] = this._eventListeners[a] || [], this._eventListeners[a].push({ context: c || this, eventHandler: b })) };
    F.prototype.removeEventListener = function(a, b) {
        if (a && b && this._eventListeners[a])
            for (var c =
                    this._eventListeners[a], d = 0; d < c.length; d++)
                if (c[d].eventHandler === b) { c[d].splice(d, 1); break }
    };
    F.prototype.removeAllEventListeners = function() { this._eventListeners = [] };
    F.prototype.dispatchEvent = function(a, b) { if (a && this._eventListeners[a]) { b = b || {}; for (var c = this._eventListeners[a], d = 0; d < c.length; d++) c[d].eventHandler.call(c[d].context, b) } };
    O(w, F);
    w.prototype._updateOptions = function() {
        var a = this;
        this.updateOption("width");
        this.updateOption("height");
        this.updateOption("theme");
        this.updateOption("colorSet") &&
            (this._selectedColorSet = "undefined" !== typeof W[this.colorSet] ? W[this.colorSet] : W.colorSet1);
        this.updateOption("backgroundColor");
        this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
        this.updateOption("culture");
        this._cultureInfo = new da(this._options.culture);
        this.updateOption("animationEnabled");
        this.animationEnabled = this.animationEnabled && t;
        this._options.zoomEnabled ? (this._zoomButton || (T(this._zoomButton = document.createElement("button")), P(this, this._zoomButton, "pan"), this._toolBar.appendChild(this._zoomButton),
            E(this._zoomButton, "click", function() {
                a.zoomEnabled ? (a.zoomEnabled = !1, a.panEnabled = !0, P(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0, a.panEnabled = !1, P(a, a._zoomButton, "pan"));
                a.render()
            })), this._resetButton || (T(this._resetButton = document.createElement("button")), P(this, this._resetButton, "reset"), this._toolBar.appendChild(this._resetButton), E(this._resetButton, "click", function() {
            a._toolTip.hide();
            a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, P(a, a._zoomButton, "pan"), a._defaultCursor =
                "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !1, a.panEnabled = !1);
            a.sessionVariables.axisX.internalMinimum = a._options.axisX && a._options.axisX.minimum ? a._options.axisX.minimum : null;
            a.sessionVariables.axisX.internalMaximum = a._options.axisX && a._options.axisX.maximum ? a._options.axisX.maximum : null;
            a.resetOverlayedCanvas();
            T(a._zoomButton, a._resetButton);
            a.render()
        }), this.overlaidCanvas.style.cursor = a._defaultCursor), this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") ===
            a._cultureInfo.zoomText ? (this.panEnabled = !0, this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), pa(a._zoomButton, a._resetButton)) : (this.zoomEnabled = !0, this.panEnabled = !1))) : this.panEnabled = this.zoomEnabled = !1;
        "undefined" !== typeof this._options.exportFileName && (this.exportFileName = this._options.exportFileName);
        "undefined" !== typeof this._options.exportEnabled && (this.exportEnabled = this._options.exportEnabled);
        this._menuButton ? this.exportEnabled ? pa(this._menuButton) : T(this._menuButton) : this.exportEnabled &&
            t && (this._menuButton = document.createElement("button"), P(this, this._menuButton, "menu"), this._toolBar.appendChild(this._menuButton), E(this._menuButton, "click", function() { "none" !== a._dropdownMenu.style.display || a._dropDownCloseTime && 500 >= (new Date).getTime() - a._dropDownCloseTime.getTime() || (a._dropdownMenu.style.display = "block", a._menuButton.blur(), a._dropdownMenu.focus()) }, !0));
        if (!this._dropdownMenu && this.exportEnabled && t) {
            this._dropdownMenu = document.createElement("div");
            this._dropdownMenu.setAttribute("tabindex", -1);
            this._dropdownMenu.style.cssText = "position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 1px;top: 25px;min-width: 120px;outline: 0;border: 1px solid silver;font-size: 14px;font-family: Calibri, Verdana, sans-serif;padding: 5px 0px 5px 0px;text-align: left;background-color: #fff;line-height: 20px;box-shadow: 2px 2px 10px #888888;";
            a._dropdownMenu.style.display = "none";
            this._toolBar.appendChild(this._dropdownMenu);
            E(this._dropdownMenu,
                "blur",
                function() {
                    T(a._dropdownMenu);
                    a._dropDownCloseTime = new Date
                }, !0);
            var b = document.createElement("div");
            b.style.cssText = "padding: 2px 15px 2px 10px";
            b.innerHTML = this._cultureInfo.saveJPGText;
            this._dropdownMenu.appendChild(b);
            E(b, "mouseover", function() { this.style.backgroundColor = "#EEEEEE" }, !0);
            E(b, "mouseout", function() { this.style.backgroundColor = "transparent" }, !0);
            E(b, "click", function() {
                za(a.canvas, "jpg", a.exportFileName);
                T(a._dropdownMenu)
            }, !0);
            b = document.createElement("div");
            b.style.cssText =
                "padding: 2px 15px 2px 10px";
            b.innerHTML = this._cultureInfo.savePNGText;
            this._dropdownMenu.appendChild(b);
            E(b, "mouseover", function() { this.style.backgroundColor = "#EEEEEE" }, !0);
            E(b, "mouseout", function() { this.style.backgroundColor = "transparent" }, !0);
            E(b, "click", function() {
                za(a.canvas, "png", a.exportFileName);
                T(a._dropdownMenu)
            }, !0)
        }
        "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? P(a, a._zoomButton, "zoom") : P(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText &&
            P(a, a._resetButton, "reset"));
        if ("undefined" === typeof ma.Chart.creditHref) this.creditHref = "http://canvasjs.com/", this.creditText = "CanvasJS.com";
        else var c = this.updateOption("creditText"),
            d = this.updateOption("creditHref");
        if (0 === this.renderCount || c || d) this._creditLink.setAttribute("href", this.creditHref), this._creditLink.innerHTML = this.creditText;
        this.creditHref && this.creditText ? this._creditLink.parentElement || this._canvasJSContainer.appendChild(this._creditLink) : this._creditLink.parentElement && this._canvasJSContainer.removeChild(this._creditLink);
        this._options.toolTip && this._toolTip._options !== this._options.toolTip && (this._toolTip._options = this._options.toolTip);
        for (var e in this._toolTip._options) this._toolTip._options.hasOwnProperty(e) && this._toolTip.updateOption(e)
    };
    w.prototype._updateSize = function() {
        var a = 0,
            b = 0;
        this._options.width ? a = this.width : this.width = a = 0 < this._container.clientWidth ? this._container.clientWidth : this.width;
        this._options.height ? b = this.height : this.height = b = 0 < this._container.clientHeight ? this._container.clientHeight : this.height;
        return this.canvas.width !== a * J || this.canvas.height !== b * J ? (ga(this.canvas, a, b), ga(this.overlaidCanvas, a, b), ga(this._eventManager.ghostCanvas, a, b), !0) : !1
    };
    w.prototype._initialize = function() {
        this._animator ? this._animator.cancelAllAnimations() : this._animator = new ra(this);
        this.removeAllEventListeners();
        this.disableToolTip = !1;
        this.pieDoughnutClickHandler = null;
        this.animationRequestId && this.cancelRequestAnimFrame.call(window, this.animationRequestId);
        this._updateOptions();
        this.animatedRender = t && this.animationEnabled &&
            0 === this.renderCount;
        this._updateSize();
        this.clearCanvas();
        this.ctx.beginPath();
        this.axisY2 = this.axisY = this.axisX = null;
        this._indexLabels = [];
        this._dataInRenderedOrder = [];
        this._events = [];
        this._eventManager && this._eventManager.reset();
        this.plotInfo = { axisPlacement: null, axisXValueType: null, plotTypes: [] };
        this.layoutManager = new Z(0, 0, this.width, this.height, 2);
        this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
        this.data = [];
        for (var a = 0, b = 0; b < this._options.data.length; b++)
            if (a++, !this._options.data[b].type ||
                0 <= w._supportedChartTypes.indexOf(this._options.data[b].type)) {
                var c = new R(this, this._options.data[b], this.theme, a - 1, ++this._eventManager.lastObjectId);
                null === c.name && (c.name = "DataSeries " + a);
                null === c.color ? 1 < this._options.data.length ? (c._colorSet = [this._selectedColorSet[c.index % this._selectedColorSet.length]], c.color = this._selectedColorSet[c.index % this._selectedColorSet.length]) : c._colorSet = "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" ===
                    c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "candlestick" === c.type || "ohlc" === c.type ? [this._selectedColorSet[0]] : this._selectedColorSet : c._colorSet = [c.color];
                null === c.markerSize && (("line" === c.type || "stepLine" === c.type || "spline" === c.type) && c.dataPoints && c.dataPoints.length < this.width / 16 || "scatter" === c.type) && (c.markerSize = 8);
                "bubble" !== c.type && "scatter" !== c.type || !c.dataPoints || c.dataPoints.sort(Da);
                this.data.push(c);
                var d = c.axisPlacement,
                    e;
                "normal" === d ? "xySwapped" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === d ? "normal" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement &&
                    (this.plotInfo.axisPlacement = "xySwapped") : "none" == d && ("normal" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none"));
                if (e && window.console) { window.console.log(e); return }
            }
        this._objectsInitialized = !0
    };
    w._supportedChartTypes = function(a) { a.indexOf || (a.indexOf = Ea); return a }("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc rangeColumn rangeBar rangeArea rangeSplineArea pie doughnut funnel".split(" "));
    w.prototype.render = function(a) {
        a && (this._options = a);
        this._initialize();
        var b = [];
        for (a = 0; a < this.data.length; a++)
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) this.data[a].axisYType && "primary" !== this.data[a].axisYType ? "secondary" === this.data[a].axisYType && (this.axisY2 || ("normal" === this.plotInfo.axisPlacement ? this.axisY2 = new x(this, this._options.axisY2, "axisY", "right") : "xySwapped" === this.plotInfo.axisPlacement && (this.axisY2 = new x(this, this._options.axisY2, "axisY",
                    "top"))), this.data[a].axisY = this.axisY2) : (this.axisY || ("normal" === this.plotInfo.axisPlacement ? this.axisY = new x(this, this._options.axisY, "axisY", "left") : "xySwapped" === this.plotInfo.axisPlacement && (this.axisY = new x(this, this._options.axisY, "axisY", "bottom"))), this.data[a].axisY = this.axisY), this.axisX || ("normal" === this.plotInfo.axisPlacement ? this.axisX = new x(this, this._options.axisX, "axisX", "bottom") : "xySwapped" === this.plotInfo.axisPlacement && (this.axisX = new x(this, this._options.axisX, "axisX", "left"))),
                this.data[a].axisX = this.axisX;
        this._processData();
        this._options.title && (this._title = new ca(this, this._options.title), this._title.dockInsidePlotArea ? b.push(this._title) : this._title.render());
        if (this._options.subtitles)
            for (a = 0; a < this._options.subtitles.length; a++) {
                this.subtitles = [];
                var c = new ja(this, this._options.subtitles[a]);
                this.subtitles.push(c);
                c.dockInsidePlotArea ? b.push(c) : c.render()
            }
        this.legend = new ka(this, this._options.legend, this.theme);
        for (a = 0; a < this.data.length; a++)(this.data[a].showInLegend ||
            "pie" === this.data[a].type || "doughnut" === this.data[a].type) && this.legend.dataSeries.push(this.data[a]);
        this.legend.dockInsidePlotArea ? b.push(this.legend) : this.legend.render();
        if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) x.setLayoutAndRender(this.axisX, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
        else return;
        a = 0;
        for (a in b) b[a].render();
        var d = [];
        if (this.animatedRender) {
            var e =
                V(this.width, this.height);
            e.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height)
        }
        for (a = 0; a < this.plotInfo.plotTypes.length; a++)
            for (b = this.plotInfo.plotTypes[a], c = 0; c < b.plotUnits.length; c++) {
                var f = b.plotUnits[c],
                    g = null;
                f.targetCanvas = null;
                this.animatedRender && (f.targetCanvas = V(this.width, this.height), f.targetCanvasCtx = f.targetCanvas.getContext("2d"));
                "line" === f.type ? g = this.renderLine(f) : "stepLine" === f.type ? g = this.renderStepLine(f) : "spline" === f.type ? g = this.renderSpline(f) : "column" === f.type ?
                    g = this.renderColumn(f) : "bar" === f.type ? g = this.renderBar(f) : "area" === f.type ? g = this.renderArea(f) : "stepArea" === f.type ? g = this.renderStepArea(f) : "splineArea" === f.type ? g = this.renderSplineArea(f) : "stackedColumn" === f.type ? g = this.renderStackedColumn(f) : "stackedColumn100" === f.type ? g = this.renderStackedColumn100(f) : "stackedBar" === f.type ? g = this.renderStackedBar(f) : "stackedBar100" === f.type ? g = this.renderStackedBar100(f) : "stackedArea" === f.type ? g = this.renderStackedArea(f) : "stackedArea100" === f.type ? g = this.renderStackedArea100(f) :
                    "bubble" === f.type ? g = g = this.renderBubble(f) : "scatter" === f.type ? g = this.renderScatter(f) : "pie" === f.type ? this.renderPie(f) : "doughnut" === f.type ? this.renderPie(f) : "candlestick" === f.type ? g = this.renderCandlestick(f) : "ohlc" === f.type ? g = this.renderCandlestick(f) : "rangeColumn" === f.type ? g = this.renderRangeColumn(f) : "rangeBar" === f.type ? g = this.renderRangeBar(f) : "rangeArea" === f.type ? g = this.renderRangeArea(f) : "rangeSplineArea" === f.type && (g = this.renderRangeSplineArea(f));
                for (var k = 0; k < f.dataSeriesIndexes.length; k++) this._dataInRenderedOrder.push(this.data[f.dataSeriesIndexes[k]]);
                this.animatedRender && g && d.push(g)
            }
        this.animatedRender && 0 < this._indexLabels.length && (a = V(this.width, this.height).getContext("2d"), d.push(this.renderIndexLabels(a)));
        var p = this;
        0 < d.length ? (p.disableToolTip = !0, p._animator.animate(200, p.animationDuration, function(a) {
            p.ctx.clearRect(0, 0, p.width, p.height);
            p.ctx.drawImage(e, 0, 0, Math.floor(p.width * J), Math.floor(p.height * J), 0, 0, p.width, p.height);
            for (var c = 0; c < d.length; c++) g = d[c], 1 > a && "undefined" !== typeof g.startTimePercent ? a >= g.startTimePercent && g.animationCallback(g.easingFunction(a -
                g.startTimePercent, 0, 1, 1 - g.startTimePercent), g) : g.animationCallback(g.easingFunction(a, 0, 1, 1), g);
            p.dispatchEvent("dataAnimationIterationEnd", { chart: p })
        }, function() {
            d = [];
            for (var a = 0; a < p.plotInfo.plotTypes.length; a++)
                for (var c = p.plotInfo.plotTypes[a], b = 0; b < c.plotUnits.length; b++) c.plotUnits[b].targetCanvas = null;
            e = null;
            p.disableToolTip = !1
        })) : (0 < p._indexLabels.length && p.renderIndexLabels(), p.dispatchEvent("dataAnimationIterationEnd", { chart: p }));
        this.attachPlotAreaEventHandlers();
        this.zoomEnabled || (this.panEnabled ||
            !this._zoomButton || "none" === this._zoomButton.style.display) || T(this._zoomButton, this._resetButton);
        this._toolTip._updateToolTip();
        this.renderCount++
    };
    w.prototype.attachPlotAreaEventHandlers = function() { this.attachEvent({ context: this, chart: this, mousedown: this._plotAreaMouseDown, mouseup: this._plotAreaMouseUp, mousemove: this._plotAreaMouseMove, cursor: this.zoomEnabled ? "col-resize" : "move", cursor: this.panEnabled ? "move" : "default", capture: !0, bounds: this.plotArea }) };
    w.prototype.categoriseDataSeries = function() {
        for (var a =
                "", b = 0; b < this.data.length; b++)
            if (a = this.data[b], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= w._supportedChartTypes.indexOf(a.type)) {
                for (var c = null, d = !1, e = null, f = !1, g = 0; g < this.plotInfo.plotTypes.length; g++)
                    if (this.plotInfo.plotTypes[g].type === a.type) {
                        d = !0;
                        c = this.plotInfo.plotTypes[g];
                        break
                    }
                d || (c = { type: a.type, totalDataSeries: 0, plotUnits: [] }, this.plotInfo.plotTypes.push(c));
                for (g = 0; g < c.plotUnits.length; g++)
                    if (c.plotUnits[g].axisYType === a.axisYType) {
                        f = !0;
                        e = c.plotUnits[g];
                        break
                    }
                f || (e = {
                    type: a.type,
                    previousDataSeriesCount: 0,
                    index: c.plotUnits.length,
                    plotType: c,
                    axisYType: a.axisYType,
                    axisY: "primary" === a.axisYType ? this.axisY : this.axisY2,
                    axisX: this.axisX,
                    dataSeriesIndexes: [],
                    yTotals: []
                }, c.plotUnits.push(e));
                c.totalDataSeries++;
                e.dataSeriesIndexes.push(b);
                a.plotUnit = e
            }
        for (b = 0; b < this.plotInfo.plotTypes.length; b++)
            for (c = this.plotInfo.plotTypes[b], g = a = 0; g < c.plotUnits.length; g++) c.plotUnits[g].previousDataSeriesCount = a, a += c.plotUnits[g].dataSeriesIndexes.length
    };
    w.prototype.assignIdToDataPoints = function() {
        for (var a =
                0; a < this.data.length; a++) {
            var b = this.data[a];
            if (b.dataPoints)
                for (var c = b.dataPoints.length, d = 0; d < c; d++) b.dataPointIds[d] = ++this._eventManager.lastObjectId
        }
    };
    w.prototype._processData = function() {
        this.assignIdToDataPoints();
        this.categoriseDataSeries();
        for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
            for (var b = this.plotInfo.plotTypes[a], c = 0; c < b.plotUnits.length; c++) {
                var d = b.plotUnits[c];
                "line" === d.type || "stepLine" === d.type || "spline" === d.type || "column" === d.type || "area" === d.type || "stepArea" === d.type || "splineArea" ===
                    d.type || "bar" === d.type || "bubble" === d.type || "scatter" === d.type ? this._processMultiseriesPlotUnit(d) : "stackedColumn" === d.type || "stackedBar" === d.type || "stackedArea" === d.type ? this._processStackedPlotUnit(d) : "stackedColumn100" === d.type || "stackedBar100" === d.type || "stackedArea100" === d.type ? this._processStacked100PlotUnit(d) : "candlestick" !== d.type && "ohlc" !== d.type && "rangeColumn" !== d.type && "rangeBar" !== d.type && "rangeArea" !== d.type && "rangeSplineArea" !== d.type || this._processMultiYPlotUnit(d)
            }
    };
    w.prototype._processMultiseriesPlotUnit =
        function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var b = a.axisY.dataInfo, c = a.axisX.dataInfo, d, e, f = !1, g = 0; g < a.dataSeriesIndexes.length; g++) {
                    var k = this.data[a.dataSeriesIndexes[g]],
                        p = 0,
                        l = !1,
                        h = !1;
                    if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement) var n = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                        m = this.sessionVariables.axisX.internalMaximum ?
                        this.sessionVariables.axisX.internalMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                    if (k.dataPoints[p].x && k.dataPoints[p].x.getTime || "dateTime" === k.xValueType) f = !0;
                    for (p = 0; p < k.dataPoints.length; p++) {
                        "undefined" === typeof k.dataPoints[p].x && (k.dataPoints[p].x = p);
                        k.dataPoints[p].x.getTime ? (f = !0, d = k.dataPoints[p].x.getTime()) : d = k.dataPoints[p].x;
                        e = k.dataPoints[p].y;
                        d < c.min && (c.min = d);
                        d > c.max && (c.max = d);
                        e < b.min && (b.min = e);
                        e > b.max && (b.max = e);
                        if (0 < p) {
                            var q = d -
                                k.dataPoints[p - 1].x;
                            0 > q && (q *= -1);
                            c.minDiff > q && 0 !== q && (c.minDiff = q)
                        }
                        if (!(d < n) || l) {
                            if (!l && (l = !0, 0 < p)) { p -= 2; continue }
                            if (d > m && !h) h = !0;
                            else if (d > m && h) continue;
                            k.dataPoints[p].label && (a.axisX.labels[d] = k.dataPoints[p].label);
                            d < c.viewPortMin && (c.viewPortMin = d);
                            d > c.viewPortMax && (c.viewPortMax = d);
                            null !== e && (e < b.viewPortMin && (b.viewPortMin = e), e > b.viewPortMax && (b.viewPortMax = e))
                        }
                    }
                    this.plotInfo.axisXValueType = k.xValueType = f ? "dateTime" : "number"
                }
        };
    w.prototype._processStackedPlotUnit = function(a) {
        if (a.dataSeriesIndexes &&
            !(1 > a.dataSeriesIndexes.length)) {
            for (var b = a.axisY.dataInfo, c = a.axisX.dataInfo, d, e, f = !1, g = [], k = [], p = 0; p < a.dataSeriesIndexes.length; p++) {
                var l = this.data[a.dataSeriesIndexes[p]],
                    h = 0,
                    n = !1,
                    m = !1;
                if ("normal" === l.axisPlacement || "xySwapped" === l.axisPlacement) var q = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                    r = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum :
                    this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                if (l.dataPoints[h].x && l.dataPoints[h].x.getTime || "dateTime" === l.xValueType) f = !0;
                for (h = 0; h < l.dataPoints.length; h++) {
                    "undefined" === typeof l.dataPoints[h].x && (l.dataPoints[h].x = h);
                    l.dataPoints[h].x.getTime ? (f = !0, d = l.dataPoints[h].x.getTime()) : d = l.dataPoints[h].x;
                    e = l.dataPoints[h].y;
                    d < c.min && (c.min = d);
                    d > c.max && (c.max = d);
                    if (0 < h) {
                        var s = d - l.dataPoints[h - 1].x;
                        0 > s && (s *= -1);
                        c.minDiff > s && 0 !== s && (c.minDiff = s)
                    }
                    if (!(d < q) || n) {
                        if (!n &&
                            (n = !0, 0 < h)) { h -= 2; continue }
                        if (d > r && !m) m = !0;
                        else if (d > r && m) continue;
                        l.dataPoints[h].label && (a.axisX.labels[d] = l.dataPoints[h].label);
                        d < c.viewPortMin && (c.viewPortMin = d);
                        d > c.viewPortMax && (c.viewPortMax = d);
                        null !== e && (a.yTotals[d] = (a.yTotals[d] ? a.yTotals[d] : 0) + Math.abs(e), 0 <= e ? g[d] = g[d] ? g[d] + e : e : k[d] = k[d] ? k[d] + e : e)
                    }
                }
                this.plotInfo.axisXValueType = l.xValueType = f ? "dateTime" : "number"
            }
            for (h in g) isNaN(h) || (a = g[h], a < b.min && (b.min = a), a > b.max && (b.max = a), h < c.viewPortMin || h > c.viewPortMax || (a < b.viewPortMin && (b.viewPortMin =
                a), a > b.viewPortMax && (b.viewPortMax = a)));
            for (h in k) isNaN(h) || (a = k[h], a < b.min && (b.min = a), a > b.max && (b.max = a), h < c.viewPortMin || h > c.viewPortMax || (a < b.viewPortMin && (b.viewPortMin = a), a > b.viewPortMax && (b.viewPortMax = a)))
        }
    };
    w.prototype._processStacked100PlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var b = a.axisY.dataInfo, c = a.axisX.dataInfo, d, e, f = !1, g = !1, k = !1, p = [], l = 0; l < a.dataSeriesIndexes.length; l++) {
                var h = this.data[a.dataSeriesIndexes[l]],
                    n = 0,
                    m = !1,
                    q = !1;
                if ("normal" === h.axisPlacement ||
                    "xySwapped" === h.axisPlacement) var r = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                    s = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                if (h.dataPoints[n].x && h.dataPoints[n].x.getTime || "dateTime" === h.xValueType) f = !0;
                for (n = 0; n < h.dataPoints.length; n++) {
                    "undefined" ===
                    typeof h.dataPoints[n].x && (h.dataPoints[n].x = n);
                    h.dataPoints[n].x.getTime ? (f = !0, d = h.dataPoints[n].x.getTime()) : d = h.dataPoints[n].x;
                    e = h.dataPoints[n].y;
                    d < c.min && (c.min = d);
                    d > c.max && (c.max = d);
                    if (0 < n) {
                        var t = d - h.dataPoints[n - 1].x;
                        0 > t && (t *= -1);
                        c.minDiff > t && 0 !== t && (c.minDiff = t)
                    }
                    if (!(d < r) || m) {
                        if (!m && (m = !0, 0 < n)) { n -= 2; continue }
                        if (d > s && !q) q = !0;
                        else if (d > s && q) continue;
                        h.dataPoints[n].label && (a.axisX.labels[d] = h.dataPoints[n].label);
                        d < c.viewPortMin && (c.viewPortMin = d);
                        d > c.viewPortMax && (c.viewPortMax = d);
                        null !==
                            e && (a.yTotals[d] = (a.yTotals[d] ? a.yTotals[d] : 0) + Math.abs(e), 0 <= e ? g = !0 : k = !0, p[d] = p[d] ? p[d] + Math.abs(e) : Math.abs(e))
                    }
                }
                this.plotInfo.axisXValueType = h.xValueType = f ? "dateTime" : "number"
            }
            g && !k ? (b.max = 99, b.min = 1) : g && k ? (b.max = 99, b.min = -99) : !g && k && (b.max = -1, b.min = -99);
            b.viewPortMin = b.min;
            b.viewPortMax = b.max;
            a.dataPointYSums = p
        }
    };
    w.prototype._processMultiYPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var b = a.axisY.dataInfo, c = a.axisX.dataInfo, d, e, f, g, k = !1, p = 0; p < a.dataSeriesIndexes.length; p++) {
                var l =
                    this.data[a.dataSeriesIndexes[p]],
                    h = 0,
                    n = !1,
                    m = !1;
                if ("normal" === l.axisPlacement || "xySwapped" === l.axisPlacement) var q = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                    r = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                if (l.dataPoints[h].x && l.dataPoints[h].x.getTime ||
                    "dateTime" === l.xValueType) k = !0;
                for (h = 0; h < l.dataPoints.length; h++) {
                    "undefined" === typeof l.dataPoints[h].x && (l.dataPoints[h].x = h);
                    l.dataPoints[h].x.getTime ? (k = !0, d = l.dataPoints[h].x.getTime()) : d = l.dataPoints[h].x;
                    (e = l.dataPoints[h].y) && e.length && (f = Math.min.apply(null, e), g = Math.max.apply(null, e));
                    d < c.min && (c.min = d);
                    d > c.max && (c.max = d);
                    f < b.min && (b.min = f);
                    g > b.max && (b.max = g);
                    if (0 < h) {
                        var s = d - l.dataPoints[h - 1].x;
                        0 > s && (s *= -1);
                        c.minDiff > s && 0 !== s && (c.minDiff = s)
                    }
                    if (!(d < q) || n) {
                        if (!n && (n = !0, 0 < h)) { h -= 2; continue }
                        if (d >
                            r && !m) m = !0;
                        else if (d > r && m) continue;
                        l.dataPoints[h].label && (a.axisX.labels[d] = l.dataPoints[h].label);
                        d < c.viewPortMin && (c.viewPortMin = d);
                        d > c.viewPortMax && (c.viewPortMax = d);
                        null !== e && (f < b.viewPortMin && (b.viewPortMin = f), g > b.viewPortMax && (b.viewPortMax = g))
                    }
                }
                this.plotInfo.axisXValueType = l.xValueType = k ? "dateTime" : "number"
            }
    };
    w.prototype.getDataPointAtXY = function(a, b, c) {
        c = c || !1;
        for (var d = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
            var f = null;
            (f = this._dataInRenderedOrder[e].getDataPointAtXY(a, b, c)) &&
            d.push(f)
        }
        a = null;
        b = !1;
        for (c = 0; c < d.length; c++)
            if ("line" === d[c].dataSeries.type || "stepLine" === d[c].dataSeries.type || "area" === d[c].dataSeries.type || "stepArea" === d[c].dataSeries.type)
                if (e = N("markerSize", d[c].dataPoint, d[c].dataSeries) || 8, d[c].distance <= e / 2) { b = !0; break }
        for (c = 0; c < d.length; c++) b && "line" !== d[c].dataSeries.type && "stepLine" !== d[c].dataSeries.type && "area" !== d[c].dataSeries.type && "stepArea" !== d[c].dataSeries.type || (a ? d[c].distance <= a.distance && (a = d[c]) : a = d[c]);
        return a
    };
    w.prototype.getObjectAtXY =
        function(a, b, c) {
            var d = null;
            if (c = this.getDataPointAtXY(a, b, c || !1)) d = c.dataSeries.dataPointIds[c.dataPointIndex];
            else if (t) d = xa(a, b, this._eventManager.ghostCtx);
            else
                for (c = 0; c < this.legend.items.length; c++) {
                    var e = this.legend.items[c];
                    a >= e.x1 && (a <= e.x2 && b >= e.y1 && b <= e.y2) && (d = e.id)
                }
            return d
        };
    w.prototype.getAutoFontSize = function(a, b, c) { a /= 400; return Math.round(Math.min(this.width, this.height) * a) };
    w.prototype.resetOverlayedCanvas = function() { this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height) };
    w.prototype.clearCanvas =
        function() {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height))
        };
    w.prototype.attachEvent = function(a) { this._events.push(a) };
    w.prototype._touchEventHandler = function(a) {
        if (a.changedTouches && this.interactivityEnabled) {
            var b = [],
                c = a.changedTouches,
                d = c ? c[0] : a,
                e = null;
            switch (a.type) {
                case "touchstart":
                case "MSPointerDown":
                    b = ["mousemove", "mousedown"];
                    this._lastTouchData = na(d);
                    this._lastTouchData.time = new Date;
                    break;
                case "touchmove":
                case "MSPointerMove":
                    b = ["mousemove"];
                    break;
                case "touchend":
                case "MSPointerUp":
                    b = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType ? ["mouseup", "click"] : ["mouseup"];
                    break;
                default:
                    return
            }
            if (!(c && 1 < c.length)) {
                e = na(d);
                e.time = new Date;
                try {
                    var f = e.y - this._lastTouchData.y,
                        g = e.time - this._lastTouchData.time;
                    if (15 < Math.abs(f) && (this._lastTouchData.scroll || 200 > g)) {
                        this._lastTouchData.scroll = !0;
                        var k = window.parent || window;
                        k && k.scrollBy && k.scrollBy(0, -f)
                    }
                } catch (p) {}
                this._lastTouchEventType =
                    a.type;
                if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = !1;
                else
                    for (c = 0; c < b.length; c++) e = b[c], f = document.createEvent("MouseEvent"), f.initMouseEvent(e, !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), d.target.dispatchEvent(f), a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault()
            }
        }
    };
    w.prototype._mouseEventHandler = function(a) {
        if (this.interactivityEnabled)
            if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
            else {
                a.preventManipulation && a.preventManipulation();
                a.preventDefault && a.preventDefault();
                "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
                var b = na(a),
                    c = a.type,
                    d, e;
                a.which ? e = 3 == a.which : a.button && (e = 2 == a.button);
                if (!e) {
                    if (w.capturedEventParam) d = w.capturedEventParam, "mouseup" === c && (w.capturedEventParam = null, d.chart.overlaidCanvas.releaseCapture ? d.chart.overlaidCanvas.releaseCapture() : document.body.removeEventListener("mouseup", d.chart._mouseEventHandler, !1)), d.hasOwnProperty(c) &&
                        d[c].call(d.context, b.x, b.y);
                    else if (this._events) {
                        for (e = 0; e < this._events.length; e++)
                            if (this._events[e].hasOwnProperty(c)) {
                                d = this._events[e];
                                var f = d.bounds;
                                if (b.x >= f.x1 && b.x <= f.x2 && b.y >= f.y1 && b.y <= f.y2) {
                                    d[c].call(d.context, b.x, b.y);
                                    "mousedown" === c && !0 === d.capture ? (w.capturedEventParam = d, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.body.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === c && (d.chart.overlaidCanvas.releaseCapture ? d.chart.overlaidCanvas.releaseCapture() :
                                        document.body.removeEventListener("mouseup", this._mouseEventHandler, !1));
                                    break
                                } else d = null
                            }
                        a.target.style.cursor = d && d.cursor ? d.cursor : this._defaultCursor
                    }
                    this._toolTip && this._toolTip.enabled && (c = this.plotArea, (b.x < c.x1 || b.x > c.x2 || b.y < c.y1 || b.y > c.y2) && this._toolTip.hide());
                    this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a)
                }
            }
    };
    w.prototype._plotAreaMouseDown = function(a, b) {
        this.isDrag = !0;
        this.dragStartPoint = "none" !== this.plotInfo.axisPlacement ? {
            x: a,
            y: b,
            xMinimum: this.axisX.minimum,
            xMaximum: this.axisX.maximum
        } : { x: a, y: b }
    };
    w.prototype._plotAreaMouseUp = function(a, b) {
        var c, d;
        if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
            var e = 0,
                e = this.axisX.lineCoordinates,
                e = "xySwapped" === this.plotInfo.axisPlacement ? b - this.dragStartPoint.y : this.dragStartPoint.x - a;
            Math.abs(this.axisX.maximum - this.axisX.minimum);
            if (2 < Math.abs(e)) {
                if (this.panEnabled) e = !1, d = 0, this.axisX.sessionVariables.internalMinimum < this.axisX._absoluteMinimum ? (d = this.axisX._absoluteMinimum -
                    this.axisX.sessionVariables.internalMinimum, this.axisX.sessionVariables.internalMinimum += d, this.axisX.sessionVariables.internalMaximum += d, e = !0) : this.axisX.sessionVariables.internalMaximum > this.axisX._absoluteMaximum && (d = this.axisX.sessionVariables.internalMaximum - this.axisX._absoluteMaximum, this.axisX.sessionVariables.internalMaximum -= d, this.axisX.sessionVariables.internalMinimum -= d, e = !0), e && this.render();
                else if (this.zoomEnabled) {
                    this.resetOverlayedCanvas();
                    if (!this.dragStartPoint) return;
                    "xySwapped" ===
                    this.plotInfo.axisPlacement ? (c = Math.min(this.dragStartPoint.y, b), d = Math.max(this.dragStartPoint.y, b), 1 < Math.abs(c - d) && (e = this.axisX.lineCoordinates, d = this.axisX.maximum - (this.axisX.maximum - this.axisX.minimum) / e.height * (d - e.y1), e = this.axisX.maximum - (this.axisX.maximum - this.axisX.minimum) / e.height * (c - e.y1), d = Math.max(d, this.axisX.dataInfo.min), e = Math.min(e, this.axisX.dataInfo.max), Math.abs(e - d) > 2 * Math.abs(this.axisX.dataInfo.minDiff) && (this.axisX.sessionVariables.internalMinimum = d, this.axisX.sessionVariables.internalMaximum =
                        e, this.render()))) : "normal" === this.plotInfo.axisPlacement && (d = Math.min(this.dragStartPoint.x, a), c = Math.max(this.dragStartPoint.x, a), 1 < Math.abs(d - c) && (e = this.axisX.lineCoordinates, d = (this.axisX.maximum - this.axisX.minimum) / e.width * (d - e.x1) + this.axisX.minimum, e = (this.axisX.maximum - this.axisX.minimum) / e.width * (c - e.x1) + this.axisX.minimum, d = Math.max(d, this.axisX.dataInfo.min), e = Math.min(e, this.axisX.dataInfo.max), Math.abs(e - d) > 2 * Math.abs(this.axisX.dataInfo.minDiff) && (this.axisX.sessionVariables.internalMinimum =
                        d, this.axisX.sessionVariables.internalMaximum = e, this.render())))
                }
                this._ignoreNextEvent = !0;
                this.zoomEnabled && "none" === this._zoomButton.style.display && (pa(this._zoomButton, this._resetButton), P(this, this._zoomButton, "pan"), P(this, this._resetButton, "reset"))
            }
        }
        this.isDrag = !1
    };
    w.prototype._plotAreaMouseMove = function(a, b) {
        if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
            var c = 0,
                d = 0,
                d = this.axisX.lineCoordinates;
            "xySwapped" === this.plotInfo.axisPlacement ? (c = b - this.dragStartPoint.y, d = Math.abs(this.axisX.maximum -
                this.axisX.minimum) / d.height * c) : (c = this.dragStartPoint.x - a, d = Math.abs(this.axisX.maximum - this.axisX.minimum) / d.width * c);
            2 < Math.abs(c) && 8 > Math.abs(c) && (this.panEnabled || this.zoomEnabled) ? this._toolTip.hide() : this.panEnabled || this.zoomEnabled || this._toolTip.mouseMoveHandler(a, b);
            if (2 < Math.abs(c) && (this.panEnabled || this.zoomEnabled))
                if (this.panEnabled) {
                    this.axisX.sessionVariables.internalMinimum = this.dragStartPoint.xMinimum + d;
                    this.axisX.sessionVariables.internalMaximum = this.dragStartPoint.xMaximum + d;
                    c = 0;
                    this.axisX.sessionVariables.internalMinimum < this.axisX._absoluteMinimum - $(this.axisX.interval, this.axisX.intervalType) ? (c = this.axisX._absoluteMinimum - $(this.axisX.interval, this.axisX.intervalType) - this.axisX.sessionVariables.internalMinimum, this.axisX.sessionVariables.internalMinimum += c, this.axisX.sessionVariables.internalMaximum += c) : this.axisX.sessionVariables.internalMaximum > this.axisX._absoluteMaximum + $(this.axisX.interval, this.axisX.intervalType) && (c = this.axisX.sessionVariables.internalMaximum -
                        (this.axisX._absoluteMaximum + $(this.axisX.interval, this.axisX.intervalType)), this.axisX.sessionVariables.internalMaximum -= c, this.axisX.sessionVariables.internalMinimum -= c);
                    var e = this;
                    clearTimeout(this._panTimerId);
                    this._panTimerId = setTimeout(function() { e.render() }, 0)
                } else this.zoomEnabled && (c = this.plotArea, this.resetOverlayedCanvas(), d = this.overlaidCanvasCtx.globalAlpha, this.overlaidCanvasCtx.globalAlpha = 0.7, this.overlaidCanvasCtx.fillStyle = "#A0ABB8", "xySwapped" === this.plotInfo.axisPlacement ? this.overlaidCanvasCtx.fillRect(c.x1,
                    this.dragStartPoint.y, c.x2 - c.x1, b - this.dragStartPoint.y) : "normal" === this.plotInfo.axisPlacement && this.overlaidCanvasCtx.fillRect(this.dragStartPoint.x, c.y1, a - this.dragStartPoint.x, c.y2 - c.y1), this.overlaidCanvasCtx.globalAlpha = d)
        } else this._toolTip.mouseMoveHandler(a, b)
    };
    w.prototype.preparePlotArea = function() {
        var a = this.plotArea,
            b = this.axisY ? this.axisY : this.axisY2;
        !t && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
        this.axisX && b ? (a.x1 = this.axisX.lineCoordinates.x1 < this.axisX.lineCoordinates.x2 ? this.axisX.lineCoordinates.x1 :
            b.lineCoordinates.x1, a.y1 = this.axisX.lineCoordinates.y1 < b.lineCoordinates.y1 ? this.axisX.lineCoordinates.y1 : b.lineCoordinates.y1, a.x2 = this.axisX.lineCoordinates.x2 > b.lineCoordinates.x2 ? this.axisX.lineCoordinates.x2 : b.lineCoordinates.x2, a.y2 = this.axisX.lineCoordinates.y2 > this.axisX.lineCoordinates.y1 ? this.axisX.lineCoordinates.y2 : b.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1) : (b = this.layoutManager.getFreeSpace(), a.x1 = b.x1, a.x2 = b.x2, a.y1 = b.y1, a.y2 = b.y2, a.width = b.width, a.height = b.height);
        t || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
        a.layoutManager = new Z(a.x1, a.y1, a.x2, a.y2, 2)
    };
    w.prototype.getPixelCoordinatesOnPlotArea = function(a, b) { return { x: this.axisX.getPixelCoordinatesOnAxis(a).x, y: this.axisY.getPixelCoordinatesOnAxis(b).y } };
    w.prototype.renderIndexLabels = function(a) {
        a = a || this.plotArea.ctx;
        for (var b = this.plotArea, c = 0, d = 0, e = 0, f = 0, g = 0, k = d = g = e = 0, p = 0; p < this._indexLabels.length; p++) {
            var l =
                this._indexLabels[p],
                f = l.chartType.toLowerCase(),
                h, n, m = N("indexLabelFontColor", l.dataPoint, l.dataSeries),
                k = N("indexLabelFontSize", l.dataPoint, l.dataSeries);
            h = N("indexLabelFontFamily", l.dataPoint, l.dataSeries);
            n = N("indexLabelFontStyle", l.dataPoint, l.dataSeries);
            var g = N("indexLabelFontWeight", l.dataPoint, l.dataSeries),
                d = N("indexLabelBackgroundColor", l.dataPoint, l.dataSeries),
                e = N("indexLabelMaxWidth", l.dataPoint, l.dataSeries),
                q = N("indexLabelWrap", l.dataPoint, l.dataSeries),
                r = { percent: null, total: null },
                s = null;
            if (0 <= l.dataSeries.type.indexOf("stacked") || "pie" === l.dataSeries.type || "doughnut" === l.dataSeries.type) r = this.getPercentAndTotal(l.dataSeries, l.dataPoint);
            if (l.dataSeries.indexLabelFormatter || l.dataPoint.indexLabelFormatter) s = { chart: this._options, dataSeries: l.dataSeries, dataPoint: l.dataPoint, index: l.indexKeyword, total: r.total, percent: r.percent };
            var t = l.dataPoint.indexLabelFormatter ? l.dataPoint.indexLabelFormatter(s) : l.dataPoint.indexLabel ? this.replaceKeywordsWithValue(l.dataPoint.indexLabel,
                l.dataPoint, l.dataSeries, null, l.indexKeyword) : l.dataSeries.indexLabelFormatter ? l.dataSeries.indexLabelFormatter(s) : l.dataSeries.indexLabel ? this.replaceKeywordsWithValue(l.dataSeries.indexLabel, l.dataPoint, l.dataSeries, null, l.indexKeyword) : null;
            if (null !== t && "" !== t) {
                var c = N("indexLabelPlacement", l.dataPoint, l.dataSeries),
                    r = N("indexLabelOrientation", l.dataPoint, l.dataSeries),
                    s = l.direction,
                    u = l.dataSeries.axisX,
                    v = l.dataSeries.axisY,
                    m = new G(a, {
                        x: 0,
                        y: 0,
                        maxWidth: e ? e : 0.5 * this.width,
                        maxHeight: q ? 5 * k : 1.5 * k,
                        angle: "horizontal" ===
                            r ? 0 : -90,
                        text: t,
                        padding: 0,
                        backgroundColor: d,
                        horizontalAlign: "left",
                        fontSize: k,
                        fontFamily: h,
                        fontWeight: g,
                        fontColor: m,
                        fontStyle: n,
                        textBaseline: "top"
                    });
                m.measureText();
                if (0 <= f.indexOf("line") || 0 <= f.indexOf("area") || 0 <= f.indexOf("bubble") || 0 <= f.indexOf("scatter")) { if (l.dataPoint.x < u.minimum || l.dataPoint.x > u.maximum || l.dataPoint.y < v.minimum || l.dataPoint.y > v.maximum) continue } else if (l.dataPoint.x < u.minimum || l.dataPoint.x > u.maximum) continue;
                e = g = 2;
                "horizontal" === r ? (d = m.width, k = m.height) : (k = m.width, d = m.height);
                if ("normal" === this.plotInfo.axisPlacement) {
                    if (0 <= f.indexOf("line") || 0 <= f.indexOf("area")) c = "auto", g = 4;
                    else if (0 <= f.indexOf("stacked")) "auto" === c && (c = "inside");
                    else if ("bubble" === f || "scatter" === f) c = "inside";
                    h = l.point.x - d / 2;
                    "inside" !== c ? (d = b.y1, e = b.y2, 0 < s ? (n = l.point.y - k - g, n < d && (n = "auto" === c ? Math.max(l.point.y, d) + g : d + g)) : (n = l.point.y + g, n > e - k - g && (n = "auto" === c ? Math.min(l.point.y, e) - k - g : e - k - g))) : (d = Math.max(l.bounds.y1, b.y1), e = Math.min(l.bounds.y2, b.y2), c = 0 <= f.indexOf("range") ? 0 < s ? Math.max(l.bounds.y1,
                        b.y1) + k / 2 + g : Math.min(l.bounds.y2, b.y2) - k / 2 - g : (Math.max(l.bounds.y1, b.y1) + Math.min(l.bounds.y2, b.y2)) / 2, 0 < s ? (n = Math.max(l.point.y, c) - k / 2, n < d && ("bubble" === f || "scatter" === f) && (n = Math.max(l.point.y - k - g, b.y1 + g))) : (n = Math.min(l.point.y, c) - k / 2, n > e - k - g && ("bubble" === f || "scatter" === f) && (n = Math.min(l.point.y + g, b.y2 - k - g))))
                } else 0 <= f.indexOf("line") || 0 <= f.indexOf("area") || 0 <= f.indexOf("scatter") ? (c = "auto", e = 4) : 0 <= f.indexOf("stacked") ? "auto" === c && (c = "inside") : "bubble" === f && (c = "inside"), n = l.point.y - k / 2, "inside" !==
                    c ? (f = b.x1, g = b.x2, 0 > s ? (h = l.point.x - d - e, h < f && (h = "auto" === c ? Math.max(l.point.x, f) + e : f + e)) : (h = l.point.x + e, h > g - d - e && (h = "auto" === c ? Math.min(l.point.x, g) - d - e : g - d - e))) : (Math.max(l.bounds.x1, b.x1), Math.min(l.bounds.x2, b.x2), c = 0 <= f.indexOf("range") ? 0 > s ? Math.max(l.bounds.x1, b.x1) + d / 2 + e : Math.min(l.bounds.x2, b.x2) - d / 2 - e : (Math.max(l.bounds.x1, b.x1) + Math.min(l.bounds.x2, b.x2)) / 2, h = 0 > s ? Math.max(l.point.x, c) - d / 2 : Math.min(l.point.x, c) - d / 2);
                "vertical" === r && (n += k);
                m.x = h;
                m.y = n;
                m.render(!0)
            }
        }
        return {
            source: a,
            dest: this.plotArea.ctx,
            animationCallback: y.fadeInAnimation,
            easingFunction: y.easing.easeInQuad,
            animationBase: 0,
            startTimePercent: 0.7
        }
    };
    w.prototype.renderLine = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = this._eventManager.ghostCtx;
            b.save();
            var d = this.plotArea;
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            for (var d = [], e = 0; e < a.dataSeriesIndexes.length; e++) {
                var f = a.dataSeriesIndexes[e],
                    g = this.data[f];
                b.lineWidth = g.lineThickness;
                var k = g.dataPoints;
                b.setLineDash &&
                    b.setLineDash(M(g.lineDashType, g.lineThickness));
                var p = g.id;
                this._eventManager.objectMap[p] = { objectType: "dataSeries", dataSeriesIndex: f };
                p = A(p);
                c.strokeStyle = p;
                c.lineWidth = 0 < g.lineThickness ? Math.max(g.lineThickness, 4) : 0;
                p = g._colorSet[0];
                b.strokeStyle = p;
                var l = !0,
                    h = 0,
                    n, m;
                b.beginPath();
                if (0 < k.length) {
                    for (var q = !1, h = 0; h < k.length; h++)
                        if (n = k[h].x.getTime ? k[h].x.getTime() : k[h].x, !(n < a.axisX.dataInfo.viewPortMin || n > a.axisX.dataInfo.viewPortMax))
                            if ("number" !== typeof k[h].y) 0 < h && (b.stroke(), t && c.stroke()), q = !0;
                            else {
                                n = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (n - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                m = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (k[h].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var r = g.dataPointIds[h];
                                this._eventManager.objectMap[r] = { id: r, objectType: "dataPoint", dataSeriesIndex: f, dataPointIndex: h, x1: n, y1: m };
                                l || q ? (b.beginPath(), b.moveTo(n, m), t && (c.beginPath(), c.moveTo(n, m)), q = l = !1) : (b.lineTo(n, m), t && c.lineTo(n,
                                    m), 0 == h % 500 && (b.stroke(), b.beginPath(), b.moveTo(n, m), t && (c.stroke(), c.beginPath(), c.moveTo(n, m))));
                                if (0 < k[h].markerSize || 0 < g.markerSize) {
                                    var s = g.getMarkerProperties(h, n, m, b);
                                    d.push(s);
                                    r = A(r);
                                    t && d.push({ x: n, y: m, ctx: c, type: s.type, size: s.size, color: r, borderColor: r, borderThickness: s.borderThickness })
                                }(k[h].indexLabel || g.indexLabel || k[h].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({ chartType: "line", dataPoint: k[h], dataSeries: g, point: { x: n, y: m }, direction: 0 <= k[h].y ? 1 : -1, color: p })
                            }
                    b.stroke();
                    t && c.stroke()
                }
            }
            K.drawMarkers(d);
            b.restore();
            b.beginPath();
            t && c.beginPath();
            return { source: b, dest: this.plotArea.ctx, animationCallback: y.xClipAnimation, easingFunction: y.easing.linear, animationBase: 0 }
        }
    };
    w.prototype.renderStepLine = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = this._eventManager.ghostCtx;
            b.save();
            var d = this.plotArea;
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            for (var d = [], e = 0; e < a.dataSeriesIndexes.length; e++) {
                var f = a.dataSeriesIndexes[e],
                    g = this.data[f];
                b.lineWidth = g.lineThickness;
                var k = g.dataPoints;
                b.setLineDash && b.setLineDash(M(g.lineDashType, g.lineThickness));
                var p = g.id;
                this._eventManager.objectMap[p] = { objectType: "dataSeries", dataSeriesIndex: f };
                p = A(p);
                c.strokeStyle = p;
                c.lineWidth = 0 < g.lineThickness ? Math.max(g.lineThickness, 4) : 0;
                p = g._colorSet[0];
                b.strokeStyle = p;
                var l = !0,
                    h = 0,
                    n, m;
                b.beginPath();
                if (0 < k.length) {
                    for (var q = !1, h = 0; h < k.length; h++)
                        if (n = k[h].getTime ? k[h].x.getTime() : k[h].x, !(n < a.axisX.dataInfo.viewPortMin || n > a.axisX.dataInfo.viewPortMax))
                            if ("number" !==
                                typeof k[h].y) 0 < h && (b.stroke(), t && c.stroke()), q = !0;
                            else {
                                var r = m;
                                n = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (n - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                m = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (k[h].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var s = g.dataPointIds[h];
                                this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: f, dataPointIndex: h, x1: n, y1: m };
                                l || q ? (b.beginPath(), b.moveTo(n, m), t && (c.beginPath(),
                                    c.moveTo(n, m)), q = l = !1) : (b.lineTo(n, r), t && c.lineTo(n, r), b.lineTo(n, m), t && c.lineTo(n, m), 0 == h % 500 && (b.stroke(), b.beginPath(), b.moveTo(n, m), t && (c.stroke(), c.beginPath(), c.moveTo(n, m))));
                                if (0 < k[h].markerSize || 0 < g.markerSize) r = g.getMarkerProperties(h, n, m, b), d.push(r), s = A(s), t && d.push({ x: n, y: m, ctx: c, type: r.type, size: r.size, color: s, borderColor: s, borderThickness: r.borderThickness });
                                (k[h].indexLabel || g.indexLabel || k[h].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stepLine",
                                    dataPoint: k[h],
                                    dataSeries: g,
                                    point: { x: n, y: m },
                                    direction: 0 <= k[h].y ? 1 : -1,
                                    color: p
                                })
                            }
                    b.stroke();
                    t && c.stroke()
                }
            }
            K.drawMarkers(d);
            b.restore();
            b.beginPath();
            t && c.beginPath();
            return { source: b, dest: this.plotArea.ctx, animationCallback: y.xClipAnimation, easingFunction: y.easing.linear, animationBase: 0 }
        }
    };
    w.prototype.renderSpline = function(a) {
        function b(a) {
            a = ia(a, 2);
            if (0 < a.length) {
                c.beginPath();
                t && d.beginPath();
                c.moveTo(a[0].x, a[0].y);
                t && d.moveTo(a[0].x, a[0].y);
                for (var b = 0; b < a.length - 3; b += 3) c.bezierCurveTo(a[b + 1].x,
                    a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y), t && d.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y), 0 < b && 0 === b % 3E3 && (c.stroke(), c.beginPath(), c.moveTo(a[b + 3].x, a[b + 3].y), t && (d.stroke(), d.beginPath(), d.moveTo(a[b + 3].x, a[b + 3].y)));
                c.stroke();
                t && d.stroke()
            }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx;
            c.save();
            var e = this.plotArea;
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            for (var e = [], f = 0; f < a.dataSeriesIndexes.length; f++) {
                var g =
                    a.dataSeriesIndexes[f],
                    k = this.data[g];
                c.lineWidth = k.lineThickness;
                var p = k.dataPoints;
                c.setLineDash && c.setLineDash(M(k.lineDashType, k.lineThickness));
                var l = k.id;
                this._eventManager.objectMap[l] = { objectType: "dataSeries", dataSeriesIndex: g };
                l = A(l);
                d.strokeStyle = l;
                d.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                l = k._colorSet[0];
                c.strokeStyle = l;
                var h = 0,
                    n, m, q = [];
                c.beginPath();
                if (0 < p.length)
                    for (h = 0; h < p.length; h++)
                        if (n = p[h].getTime ? p[h].x.getTime() : p[h].x, !(n < a.axisX.dataInfo.viewPortMin || n > a.axisX.dataInfo.viewPortMax))
                            if ("number" !==
                                typeof p[h].y) 0 < h && (b(q), q = []);
                            else {
                                n = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (n - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                m = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (p[h].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var r = k.dataPointIds[h];
                                this._eventManager.objectMap[r] = { id: r, objectType: "dataPoint", dataSeriesIndex: g, dataPointIndex: h, x1: n, y1: m };
                                q[q.length] = { x: n, y: m };
                                if (0 < p[h].markerSize || 0 < k.markerSize) {
                                    var s = k.getMarkerProperties(h,
                                        n, m, c);
                                    e.push(s);
                                    r = A(r);
                                    t && e.push({ x: n, y: m, ctx: d, type: s.type, size: s.size, color: r, borderColor: r, borderThickness: s.borderThickness })
                                }(p[h].indexLabel || k.indexLabel || p[h].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "spline", dataPoint: p[h], dataSeries: k, point: { x: n, y: m }, direction: 0 <= p[h].y ? 1 : -1, color: l })
                            }
                b(q)
            }
            K.drawMarkers(e);
            c.restore();
            c.beginPath();
            t && d.beginPath();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: y.xClipAnimation,
                easingFunction: y.easing.linear,
                animationBase: 0
            }
        }
    };
    var I = function(a, b, c, d, e, f, g, k, p, l, h, n, m) {
        "undefined" === typeof m && (m = 1);
        g = g || 0;
        k = k || "black";
        var q = 15 < d - b && 15 < e - c ? 8 : 0.35 * Math.min(d - b, e - c);
        a.beginPath();
        a.moveTo(b, c);
        a.save();
        a.fillStyle = f;
        a.globalAlpha = m;
        a.fillRect(b, c, d - b, e - c);
        a.globalAlpha = 1;
        0 < g && (m = 0 === g % 2 ? 0 : 0.5, a.beginPath(), a.lineWidth = g, a.strokeStyle = k, a.moveTo(b, c), a.rect(b - m, c - m, d - b + 2 * m, e - c + 2 * m), a.stroke());
        a.restore();
        !0 === p && (a.save(), a.beginPath(), a.moveTo(b, c), a.lineTo(b + q, c + q), a.lineTo(d - q, c + q), a.lineTo(d, c), a.closePath(),
            g = a.createLinearGradient((d + b) / 2, c + q, (d + b) / 2, c), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, .4)"), a.fillStyle = g, a.fill(), a.restore());
        !0 === l && (a.save(), a.beginPath(), a.moveTo(b, e), a.lineTo(b + q, e - q), a.lineTo(d - q, e - q), a.lineTo(d, e), a.closePath(), g = a.createLinearGradient((d + b) / 2, e - q, (d + b) / 2, e), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, .4)"), a.fillStyle = g, a.fill(), a.restore());
        !0 === h && (a.save(), a.beginPath(), a.moveTo(b, c), a.lineTo(b + q, c + q), a.lineTo(b + q, e - q), a.lineTo(b, e),
            a.closePath(), g = a.createLinearGradient(b + q, (e + c) / 2, b, (e + c) / 2), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = g, a.fill(), a.restore());
        !0 === n && (a.save(), a.beginPath(), a.moveTo(d, c), a.lineTo(d - q, c + q), a.lineTo(d - q, e - q), a.lineTo(d, e), g = a.createLinearGradient(d - q, (e + c) / 2, d, (e + c) / 2), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = g, g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = g, a.fill(), a.closePath(), a.restore())
    };
    w.prototype.renderColumn = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = 0,
                f, g, k, p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                e = this.dataPointMaxWidth ? this.dataPointMaxWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0,
                l = a.axisX.dataInfo.minDiff,
                h = 0.9 * (d.width / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(l) /
                    a.plotType.totalDataSeries) << 0;
            h > e ? h = e : Infinity === l ? h = 0.9 * (e / a.plotType.totalDataSeries) : 1 > h && (h = 1);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var l = a.dataSeriesIndexes[d],
                    n = this.data[l],
                    m = n.dataPoints;
                if (0 < m.length)
                    for (var q = 5 < h && n.bevelEnabled ? !0 : !1, e = 0; e < m.length; e++)
                        if (m[e].getTime ? k = m[e].x.getTime() :
                            k = m[e].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && "number" === typeof m[e].y) {
                            f = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (k - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            g = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (m[e].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            f = f - a.plotType.totalDataSeries * h / 2 + (a.previousDataSeriesCount + d) * h << 0;
                            var r = f + h << 0,
                                s;
                            0 <= m[e].y ? s = p : (s = g, g = p);
                            g > s && (s = g = s);
                            c = m[e].color ?
                                m[e].color : n._colorSet[e % n._colorSet.length];
                            I(b, f, g, r, s, c, 0, null, q && 0 <= m[e].y, 0 > m[e].y && q, !1, !1, n.fillOpacity);
                            c = n.dataPointIds[e];
                            this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: l, dataPointIndex: e, x1: f, y1: g, x2: r, y2: s };
                            c = A(c);
                            t && I(this._eventManager.ghostCtx, f, g, r, s, c, 0, null, !1, !1, !1, !1);
                            (m[e].indexLabel || n.indexLabel || m[e].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "column",
                                dataPoint: m[e],
                                dataSeries: n,
                                point: {
                                    x: f + (r - f) / 2,
                                    y: 0 <= m[e].y ?
                                        g : s
                                },
                                direction: 0 <= m[e].y ? 1 : -1,
                                bounds: { x1: f, y1: Math.min(g, s), x2: r, y2: Math.max(g, s) },
                                color: c
                            })
                        }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.min(p, a.axisY.boundingRect.y2);
            return { source: b, dest: this.plotArea.ctx, animationCallback: y.yScaleAnimation, easingFunction: y.easing.easeOutQuart, animationBase: a }
        }
    };
    w.prototype.renderStackedColumn = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = [],
                f = [],
                g = 0,
                k, p = a.axisY.conversionParameters.reference +
                a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                g = this.dataPointMaxWidth ? this.dataPointMaxWidth : 0.15 * this.width << 0,
                l = a.axisX.dataInfo.minDiff,
                h = 0.9 * (d.width / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(l) / a.plotType.plotUnits.length) << 0;
            h > g ? h = g : Infinity === l ? h = g : 1 > h && (h = 1);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (l = 0; l < a.dataSeriesIndexes.length; l++) {
                var n = a.dataSeriesIndexes[l],
                    m = this.data[n],
                    q = m.dataPoints;
                if (0 < q.length) {
                    var r = 5 < h && m.bevelEnabled ? !0 : !1;
                    b.strokeStyle = "#4572A7 ";
                    for (g = 0; g < q.length; g++)
                        if (c = q[g].x.getTime ? q[g].x.getTime() : q[g].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[g].y) {
                            d = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (c - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            k = a.axisY.conversionParameters.reference +
                                a.axisY.conversionParameters.pixelPerUnit * (q[g].y - a.axisY.conversionParameters.minimum);
                            var s = d - a.plotType.plotUnits.length * h / 2 + a.index * h << 0,
                                z = s + h << 0,
                                u;
                            if (0 <= q[g].y) {
                                var v = e[c] ? e[c] : 0;
                                k -= v;
                                u = p - v;
                                e[c] = v + (u - k)
                            } else v = f[c] ? f[c] : 0, u = k + v, k = p + v, f[c] = v + (u - k);
                            c = q[g].color ? q[g].color : m._colorSet[g % m._colorSet.length];
                            I(b, s, k, z, u, c, 0, null, r && 0 <= q[g].y, 0 > q[g].y && r, !1, !1, m.fillOpacity);
                            c = m.dataPointIds[g];
                            this._eventManager.objectMap[c] = {
                                id: c,
                                objectType: "dataPoint",
                                dataSeriesIndex: n,
                                dataPointIndex: g,
                                x1: s,
                                y1: k,
                                x2: z,
                                y2: u
                            };
                            c = A(c);
                            t && I(this._eventManager.ghostCtx, s, k, z, u, c, 0, null, !1, !1, !1, !1);
                            (q[g].indexLabel || m.indexLabel || q[g].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedColumn", dataPoint: q[g], dataSeries: m, point: { x: d, y: 0 <= q[g].y ? k : u }, direction: 0 <= q[g].y ? 1 : -1, bounds: { x1: s, y1: Math.min(k, u), x2: z, y2: Math.max(k, u) }, color: c })
                        }
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.min(p, a.axisY.boundingRect.y2);
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.yScaleAnimation,
                easingFunction: y.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    w.prototype.renderStackedColumn100 = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = [],
                f = [],
                g = 0,
                k, p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                g = this.dataPointMaxWidth ? this.dataPointMaxWidth : 0.15 * this.width << 0,
                l = a.axisX.dataInfo.minDiff,
                h = 0.9 * (d.width / Math.abs(a.axisX.maximum - a.axisX.minimum) *
                    Math.abs(l) / a.plotType.plotUnits.length) << 0;
            h > g ? h = g : Infinity === l ? h = g : 1 > h && (h = 1);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (l = 0; l < a.dataSeriesIndexes.length; l++) {
                var n = a.dataSeriesIndexes[l],
                    m = this.data[n],
                    q = m.dataPoints;
                if (0 < q.length)
                    for (var r = 5 < h && m.bevelEnabled ? !0 : !1, g = 0; g < q.length; g++)
                        if (c = q[g].x.getTime ? q[g].x.getTime() : q[g].x, !(c <
                                a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[g].y) {
                            d = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (c - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            k = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * ((0 !== a.dataPointYSums[c] ? 100 * (q[g].y / a.dataPointYSums[c]) : 0) - a.axisY.conversionParameters.minimum);
                            var s = d - a.plotType.plotUnits.length * h / 2 + a.index * h << 0,
                                z = s + h << 0,
                                u;
                            if (0 <= q[g].y) {
                                var v = e[c] ? e[c] : 0;
                                k -=
                                    v;
                                u = p - v;
                                e[c] = v + (u - k)
                            } else v = f[c] ? f[c] : 0, u = k + v, k = p + v, f[c] = v + (u - k);
                            c = q[g].color ? q[g].color : m._colorSet[g % m._colorSet.length];
                            I(b, s, k, z, u, c, 0, null, r && 0 <= q[g].y, 0 > q[g].y && r, !1, !1, m.fillOpacity);
                            c = m.dataPointIds[g];
                            this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: n, dataPointIndex: g, x1: s, y1: k, x2: z, y2: u };
                            c = A(c);
                            t && I(this._eventManager.ghostCtx, s, k, z, u, c, 0, null, !1, !1, !1, !1);
                            (q[g].indexLabel || m.indexLabel || q[g].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedColumn100",
                                dataPoint: q[g],
                                dataSeries: m,
                                point: { x: d, y: 0 <= q[g].y ? k : u },
                                direction: 0 <= q[g].y ? 1 : -1,
                                bounds: { x1: s, y1: Math.min(k, u), x2: z, y2: Math.max(k, u) },
                                color: c
                            })
                        }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.min(p, a.axisY.boundingRect.y2);
            return { source: b, dest: this.plotArea.ctx, animationCallback: y.yScaleAnimation, easingFunction: y.easing.easeOutQuart, animationBase: a }
        }
    };
    w.prototype.renderBar = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = 0,
                f, g, k, p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                e = this.dataPointMaxWidth ? this.dataPointMaxWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0,
                l = a.axisX.dataInfo.minDiff,
                h = 0.9 * (d.height / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(l) / a.plotType.totalDataSeries) << 0;
            h > e ? h = e : Infinity === l ? h = 0.9 * (e / a.plotType.totalDataSeries) : 1 > h && (h = 1);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var l = a.dataSeriesIndexes[d],
                    n = this.data[l],
                    m = n.dataPoints;
                if (0 < m.length) {
                    var q = 5 < h && n.bevelEnabled ? !0 : !1;
                    b.strokeStyle = "#4572A7 ";
                    for (e = 0; e < m.length; e++)
                        if (m[e].getTime ? k = m[e].x.getTime() : k = m[e].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && "number" === typeof m[e].y) {
                            g = a.axisX.conversionParameters.reference +
                                a.axisX.conversionParameters.pixelPerUnit * (k - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            f = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (m[e].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            g = g - a.plotType.totalDataSeries * h / 2 + (a.previousDataSeriesCount + d) * h << 0;
                            var r = g + h << 0,
                                s;
                            0 <= m[e].y ? s = p : (s = f, f = p);
                            c = m[e].color ? m[e].color : n._colorSet[e % n._colorSet.length];
                            I(b, s, g, f, r, c, 0, null, q, !1, !1, !1, n.fillOpacity);
                            c = n.dataPointIds[e];
                            this._eventManager.objectMap[c] = {
                                id: c,
                                objectType: "dataPoint",
                                dataSeriesIndex: l,
                                dataPointIndex: e,
                                x1: s,
                                y1: g,
                                x2: f,
                                y2: r
                            };
                            c = A(c);
                            t && I(this._eventManager.ghostCtx, s, g, f, r, c, 0, null, !1, !1, !1, !1);
                            (m[e].indexLabel || n.indexLabel || m[e].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({ chartType: "bar", dataPoint: m[e], dataSeries: n, point: { x: 0 <= m[e].y ? f : s, y: g + (r - g) / 2 }, direction: 0 <= m[e].y ? 1 : -1, bounds: { x1: Math.min(s, f), y1: g, x2: Math.max(s, f), y2: r }, color: c })
                        }
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.max(p, a.axisX.boundingRect.x2);
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.xScaleAnimation,
                easingFunction: y.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    w.prototype.renderStackedBar = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = [],
                f = [],
                g = 0,
                k, p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                g = this.dataPointMaxWidth ? this.dataPointMaxWidth : 0.15 * this.height << 0,
                l = a.axisX.dataInfo.minDiff,
                h = 0.9 * (d.height / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(l) / a.plotType.plotUnits.length) << 0;
            h > g ? h = g : Infinity === l ? h = g : 1 > h && (h = 1);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (l = 0; l < a.dataSeriesIndexes.length; l++) {
                var n = a.dataSeriesIndexes[l],
                    m = this.data[n],
                    q = m.dataPoints;
                if (0 < q.length) {
                    var r = 5 < h && m.bevelEnabled ? !0 : !1;
                    b.strokeStyle =
                        "#4572A7 ";
                    for (g = 0; g < q.length; g++)
                        if (c = q[g].x.getTime ? q[g].x.getTime() : q[g].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[g].y) {
                            d = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (c - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            k = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (q[g].y - a.axisY.conversionParameters.minimum);
                            var s = d - a.plotType.plotUnits.length * h / 2 + a.index * h << 0,
                                z = s + h << 0,
                                u;
                            if (0 <=
                                q[g].y) {
                                var v = e[c] ? e[c] : 0;
                                u = p + v;
                                k += v;
                                e[c] = v + (k - u)
                            } else v = f[c] ? f[c] : 0, u = k - v, k = p - v, f[c] = v + (k - u);
                            c = q[g].color ? q[g].color : m._colorSet[g % m._colorSet.length];
                            I(b, u, s, k, z, c, 0, null, r, !1, !1, !1, m.fillOpacity);
                            c = m.dataPointIds[g];
                            this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: n, dataPointIndex: g, x1: u, y1: s, x2: k, y2: z };
                            c = A(c);
                            t && I(this._eventManager.ghostCtx, u, s, k, z, c, 0, null, !1, !1, !1, !1);
                            (q[g].indexLabel || m.indexLabel || q[g].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedBar",
                                dataPoint: q[g],
                                dataSeries: m,
                                point: { x: 0 <= q[g].y ? k : u, y: d },
                                direction: 0 <= q[g].y ? 1 : -1,
                                bounds: { x1: Math.min(u, k), y1: s, x2: Math.max(u, k), y2: z },
                                color: c
                            })
                        }
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.max(p, a.axisX.boundingRect.x2);
            return { source: b, dest: this.plotArea.ctx, animationCallback: y.xScaleAnimation, easingFunction: y.easing.easeOutQuart, animationBase: a }
        }
    };
    w.prototype.renderStackedBar100 = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = [],
                f = [],
                g = 0,
                k, p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                g = this.dataPointMaxWidth ? this.dataPointMaxWidth : 0.15 * this.height << 0,
                l = a.axisX.dataInfo.minDiff,
                h = 0.9 * (d.height / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(l) / a.plotType.plotUnits.length) << 0;
            h > g ? h = g : Infinity === l ? h = g : 1 > h && (h = 1);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1,
                d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (l = 0; l < a.dataSeriesIndexes.length; l++) {
                var n = a.dataSeriesIndexes[l],
                    m = this.data[n],
                    q = m.dataPoints;
                if (0 < q.length) {
                    var r = 5 < h && m.bevelEnabled ? !0 : !1;
                    b.strokeStyle = "#4572A7 ";
                    for (g = 0; g < q.length; g++)
                        if (c = q[g].x.getTime ? q[g].x.getTime() : q[g].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[g].y) {
                            d = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (c - a.axisX.conversionParameters.minimum) +
                                0.5 << 0;
                            k = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * ((0 !== a.dataPointYSums[c] ? 100 * (q[g].y / a.dataPointYSums[c]) : 0) - a.axisY.conversionParameters.minimum);
                            var s = d - a.plotType.plotUnits.length * h / 2 + a.index * h << 0,
                                z = s + h << 0,
                                u;
                            if (0 <= q[g].y) {
                                var v = e[c] ? e[c] : 0;
                                u = p + v;
                                k += v;
                                e[c] = v + (k - u)
                            } else v = f[c] ? f[c] : 0, u = k - v, k = p - v, f[c] = v + (k - u);
                            c = q[g].color ? q[g].color : m._colorSet[g % m._colorSet.length];
                            I(b, u, s, k, z, c, 0, null, r, !1, !1, !1, m.fillOpacity);
                            c = m.dataPointIds[g];
                            this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: n, dataPointIndex: g, x1: u, y1: s, x2: k, y2: z };
                            c = A(c);
                            t && I(this._eventManager.ghostCtx, u, s, k, z, c, 0, null, !1, !1, !1, !1);
                            (q[g].indexLabel || m.indexLabel || q[g].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedBar100", dataPoint: q[g], dataSeries: m, point: { x: 0 <= q[g].y ? k : u, y: d }, direction: 0 <= q[g].y ? 1 : -1, bounds: { x1: Math.min(u, k), y1: s, x2: Math.max(u, k), y2: z }, color: c })
                        }
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.max(p, a.axisX.boundingRect.x2);
            return { source: b, dest: this.plotArea.ctx, animationCallback: y.xScaleAnimation, easingFunction: y.easing.easeOutQuart, animationBase: a }
        }
    };
    w.prototype.renderArea = function(a) {
        function b() {
            v && (0 < l.lineThickness && c.stroke(), 0 >= a.axisY.minimum && 0 <= a.axisY.maximum ? u = z : 0 > a.axisY.maximum ? u = f.y1 : 0 < a.axisY.minimum && (u = e.y2), c.lineTo(q, u), c.lineTo(v.x, u), c.closePath(), c.globalAlpha = l.fillOpacity, c.fill(), c.globalAlpha = 1, t && (d.lineTo(q, u), d.lineTo(v.x, u), d.closePath(), d.fill()), c.beginPath(), c.moveTo(q, r), d.beginPath(),
                d.moveTo(q, r), v = { x: q, y: r })
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                e = a.axisX.lineCoordinates,
                f = a.axisY.lineCoordinates,
                g = [],
                k = this.plotArea;
            c.save();
            t && d.save();
            c.beginPath();
            c.rect(k.x1, k.y1, k.width, k.height);
            c.clip();
            t && (d.beginPath(), d.rect(k.x1, k.y1, k.width, k.height), d.clip());
            for (k = 0; k < a.dataSeriesIndexes.length; k++) {
                var p = a.dataSeriesIndexes[k],
                    l = this.data[p],
                    h = l.dataPoints,
                    g = l.id;
                this._eventManager.objectMap[g] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: p
                };
                g = A(g);
                d.fillStyle = g;
                var g = [],
                    n = !0,
                    m = 0,
                    q, r, s, z = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) + 0.5 << 0,
                    u, v = null;
                if (0 < h.length) {
                    var C = l._colorSet[m % l._colorSet.length];
                    c.fillStyle = C;
                    c.strokeStyle = C;
                    c.lineWidth = l.lineThickness;
                    c.setLineDash && c.setLineDash(M(l.lineDashType, l.lineThickness));
                    for (var H = !0; m < h.length; m++)
                        if (s = h[m].x.getTime ? h[m].x.getTime() : h[m].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax))
                            if ("number" !==
                                typeof h[m].y) b(), H = !0;
                            else {
                                q = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (s - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                r = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (h[m].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                n || H ? (c.beginPath(), c.moveTo(q, r), v = { x: q, y: r }, t && (d.beginPath(), d.moveTo(q, r)), H = n = !1) : (c.lineTo(q, r), t && d.lineTo(q, r), 0 == m % 250 && b());
                                var D = l.dataPointIds[m];
                                this._eventManager.objectMap[D] = {
                                    id: D,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: p,
                                    dataPointIndex: m,
                                    x1: q,
                                    y1: r
                                };
                                0 !== h[m].markerSize && (0 < h[m].markerSize || 0 < l.markerSize) && (s = l.getMarkerProperties(m, q, r, c), g.push(s), D = A(D), t && g.push({ x: q, y: r, ctx: d, type: s.type, size: s.size, color: D, borderColor: D, borderThickness: s.borderThickness }));
                                (h[m].indexLabel || l.indexLabel || h[m].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({ chartType: "area", dataPoint: h[m], dataSeries: l, point: { x: q, y: r }, direction: 0 <= h[m].y ? 1 : -1, color: C })
                            }
                    b();
                    K.drawMarkers(g)
                }
            }
            c.restore();
            t &&
                this._eventManager.ghostCtx.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: y.xClipAnimation, easingFunction: y.easing.linear, animationBase: 0 }
        }
    };
    w.prototype.renderSplineArea = function(a) {
        function b() {
            var b = ia(u, 2);
            if (0 < b.length) {
                c.beginPath();
                c.moveTo(b[0].x, b[0].y);
                t && (d.beginPath(), d.moveTo(b[0].x, b[0].y));
                for (var g = 0; g < b.length - 3; g += 3) c.bezierCurveTo(b[g + 1].x, b[g + 1].y, b[g + 2].x, b[g + 2].y, b[g + 3].x, b[g + 3].y), t && d.bezierCurveTo(b[g + 1].x, b[g + 1].y, b[g + 2].x, b[g + 2].y, b[g + 3].x, b[g + 3].y);
                0 < l.lineThickness && c.stroke();
                0 >= a.axisY.minimum && 0 <= a.axisY.maximum ? s = r : 0 > a.axisY.maximum ? s = f.y1 : 0 < a.axisY.minimum && (s = e.y2);
                z = { x: b[0].x, y: b[0].y };
                c.lineTo(b[b.length - 1].x, s);
                c.lineTo(z.x, s);
                c.closePath();
                c.globalAlpha = l.fillOpacity;
                c.fill();
                c.globalAlpha = 1;
                t && (d.lineTo(b[b.length - 1].x, s), d.lineTo(z.x, s), d.closePath(), d.fill())
            }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                e = a.axisX.lineCoordinates,
                f = a.axisY.lineCoordinates,
                g = [],
                k = this.plotArea;
            c.save();
            t && d.save();
            c.beginPath();
            c.rect(k.x1, k.y1, k.width, k.height);
            c.clip();
            t && (d.beginPath(), d.rect(k.x1, k.y1, k.width, k.height), d.clip());
            for (k = 0; k < a.dataSeriesIndexes.length; k++) {
                var p = a.dataSeriesIndexes[k],
                    l = this.data[p],
                    h = l.dataPoints,
                    g = l.id;
                this._eventManager.objectMap[g] = { objectType: "dataSeries", dataSeriesIndex: p };
                g = A(g);
                d.fillStyle = g;
                var g = [],
                    n = 0,
                    m, q, r = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) +
                    0.5 << 0,
                    s, z = null,
                    u = [];
                if (0 < h.length) {
                    color = l._colorSet[n % l._colorSet.length];
                    c.fillStyle = color;
                    c.strokeStyle = color;
                    c.lineWidth = l.lineThickness;
                    for (c.setLineDash && c.setLineDash(M(l.lineDashType, l.lineThickness)); n < h.length; n++)
                        if (m = h[n].x.getTime ? h[n].x.getTime() : h[n].x, !(m < a.axisX.dataInfo.viewPortMin || m > a.axisX.dataInfo.viewPortMax))
                            if ("number" !== typeof h[n].y) 0 < n && (b(), u = []);
                            else {
                                m = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (m - a.axisX.conversionParameters.minimum) +
                                    0.5 << 0;
                                q = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (h[n].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var v = l.dataPointIds[n];
                                this._eventManager.objectMap[v] = { id: v, objectType: "dataPoint", dataSeriesIndex: p, dataPointIndex: n, x1: m, y1: q };
                                u[u.length] = { x: m, y: q };
                                if (0 !== h[n].markerSize && (0 < h[n].markerSize || 0 < l.markerSize)) {
                                    var C = l.getMarkerProperties(n, m, q, c);
                                    g.push(C);
                                    v = A(v);
                                    t && g.push({ x: m, y: q, ctx: d, type: C.type, size: C.size, color: v, borderColor: v, borderThickness: C.borderThickness })
                                }(h[n].indexLabel ||
                                    l.indexLabel || h[n].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({ chartType: "splineArea", dataPoint: h[n], dataSeries: l, point: { x: m, y: q }, direction: 0 <= h[n].y ? 1 : -1, color: color })
                            }
                    b();
                    K.drawMarkers(g)
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: y.xClipAnimation, easingFunction: y.easing.linear, animationBase: 0 }
        }
    };
    w.prototype.renderStepArea = function(a) {
        function b() {
            v && (0 < l.lineThickness && c.stroke(), 0 >= a.axisY.minimum && 0 <=
                a.axisY.maximum ? u = z : 0 > a.axisY.maximum ? u = f.y1 : 0 < a.axisY.minimum && (u = e.y2), c.lineTo(q, u), c.lineTo(v.x, u), c.closePath(), c.globalAlpha = l.fillOpacity, c.fill(), c.globalAlpha = 1, t && (d.lineTo(q, u), d.lineTo(v.x, u), d.closePath(), d.fill()), c.beginPath(), c.moveTo(q, r), d.beginPath(), d.moveTo(q, r), v = { x: q, y: r })
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                e = a.axisX.lineCoordinates,
                f = a.axisY.lineCoordinates,
                g = [],
                k = this.plotArea;
            c.save();
            t && d.save();
            c.beginPath();
            c.rect(k.x1, k.y1, k.width, k.height);
            c.clip();
            t && (d.beginPath(), d.rect(k.x1, k.y1, k.width, k.height), d.clip());
            for (k = 0; k < a.dataSeriesIndexes.length; k++) {
                var p = a.dataSeriesIndexes[k],
                    l = this.data[p],
                    h = l.dataPoints,
                    g = l.id;
                this._eventManager.objectMap[g] = { objectType: "dataSeries", dataSeriesIndex: p };
                g = A(g);
                d.fillStyle = g;
                var g = [],
                    n = !0,
                    m = 0,
                    q, r, s, z = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) + 0.5 << 0,
                    u, v = null,
                    C = !1;
                if (0 < h.length) {
                    var H =
                        l._colorSet[m % l._colorSet.length];
                    c.fillStyle = H;
                    c.strokeStyle = H;
                    c.lineWidth = l.lineThickness;
                    for (c.setLineDash && c.setLineDash(M(l.lineDashType, l.lineThickness)); m < h.length; m++)
                        if (s = h[m].x.getTime ? h[m].x.getTime() : h[m].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax)) {
                            var w = r;
                            "number" !== typeof h[m].y ? (b(), C = !0) : (q = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (s - a.axisX.conversionParameters.minimum) + 0.5 << 0, r = a.axisY.conversionParameters.reference +
                                a.axisY.conversionParameters.pixelPerUnit * (h[m].y - a.axisY.conversionParameters.minimum) + 0.5 << 0, n || C ? (c.beginPath(), c.moveTo(q, r), v = { x: q, y: r }, t && (d.beginPath(), d.moveTo(q, r)), C = n = !1) : (c.lineTo(q, w), t && d.lineTo(q, w), c.lineTo(q, r), t && d.lineTo(q, r), 0 == m % 250 && b()), w = l.dataPointIds[m], this._eventManager.objectMap[w] = { id: w, objectType: "dataPoint", dataSeriesIndex: p, dataPointIndex: m, x1: q, y1: r }, 0 !== h[m].markerSize && (0 < h[m].markerSize || 0 < l.markerSize) && (s = l.getMarkerProperties(m, q, r, c), g.push(s), w = A(w), t && g.push({
                                    x: q,
                                    y: r,
                                    ctx: d,
                                    type: s.type,
                                    size: s.size,
                                    color: w,
                                    borderColor: w,
                                    borderThickness: s.borderThickness
                                })), (h[m].indexLabel || l.indexLabel || h[m].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepArea", dataPoint: h[m], dataSeries: l, point: { x: q, y: r }, direction: 0 <= h[m].y ? 1 : -1, color: H }))
                        }
                    b();
                    K.drawMarkers(g)
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: y.xClipAnimation, easingFunction: y.easing.linear, animationBase: 0 }
        }
    };
    w.prototype.renderStackedArea =
        function(a) {
            var b = a.targetCanvasCtx || this.plotArea.ctx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    d = [],
                    e = this.plotArea,
                    f = [],
                    g = [],
                    k = 0,
                    p, l, h, n = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                    m = this._eventManager.ghostCtx;
                t && m.beginPath();
                b.save();
                t && m.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                t && (m.beginPath(), m.rect(e.x1, e.y1, e.width, e.height), m.clip());
                xValuePresent = [];
                for (e = 0; e < a.dataSeriesIndexes.length; e++) {
                    var q =
                        a.dataSeriesIndexes[e],
                        r = this.data[q],
                        s = r.dataPoints;
                    r.dataPointIndexes = [];
                    for (k = 0; k < s.length; k++) q = s[k].x.getTime ? s[k].x.getTime() : s[k].x, r.dataPointIndexes[q] = k, xValuePresent[q] || (g.push(q), xValuePresent[q] = !0);
                    g.sort(va)
                }
                for (e = 0; e < a.dataSeriesIndexes.length; e++) {
                    var q = a.dataSeriesIndexes[e],
                        r = this.data[q],
                        s = r.dataPoints,
                        z = !0,
                        u = [],
                        k = r.id;
                    this._eventManager.objectMap[k] = { objectType: "dataSeries", dataSeriesIndex: q };
                    k = A(k);
                    m.fillStyle = k;
                    if (0 < g.length) {
                        c = r._colorSet[0];
                        b.fillStyle = c;
                        b.strokeStyle = c;
                        b.lineWidth = r.lineThickness;
                        b.setLineDash && b.setLineDash(M(r.lineDashType, r.lineThickness));
                        for (k = 0; k < g.length; k++) {
                            h = g[k];
                            var v = null,
                                v = 0 <= r.dataPointIndexes[h] ? s[r.dataPointIndexes[h]] : { x: h, y: 0 };
                            if (!(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof v.y) {
                                p = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (h - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                l = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit *
                                    (v.y - a.axisY.conversionParameters.minimum);
                                var C = f[h] ? f[h] : 0;
                                l -= C;
                                u.push({ x: p, y: n - C });
                                f[h] = n - l;
                                if (z) b.beginPath(), b.moveTo(p, l), t && (m.beginPath(), m.moveTo(p, l)), z = !1;
                                else if (b.lineTo(p, l), t && m.lineTo(p, l), 0 == k % 250) {
                                    for (0 < r.lineThickness && b.stroke(); 0 < u.length;) {
                                        var H = u.pop();
                                        b.lineTo(H.x, H.y);
                                        t && m.lineTo(H.x, H.y)
                                    }
                                    b.closePath();
                                    b.globalAlpha = r.fillOpacity;
                                    b.fill();
                                    b.globalAlpha = 1;
                                    b.beginPath();
                                    b.moveTo(p, l);
                                    t && (m.closePath(), m.fill(), m.beginPath(), m.moveTo(p, l));
                                    u.push({ x: p, y: n - C })
                                }
                                if (0 <= r.dataPointIndexes[h]) {
                                    var w =
                                        r.dataPointIds[r.dataPointIndexes[h]];
                                    this._eventManager.objectMap[w] = { id: w, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: r.dataPointIndexes[h], x1: p, y1: l }
                                }
                                0 <= r.dataPointIndexes[h] && 0 !== v.markerSize && (0 < v.markerSize || 0 < r.markerSize) && (h = r.getMarkerProperties(k, p, l, b), d.push(h), markerColor = A(w), t && d.push({ x: p, y: l, ctx: m, type: h.type, size: h.size, color: markerColor, borderColor: markerColor, borderThickness: h.borderThickness }));
                                (v.indexLabel || r.indexLabel || v.indexLabelFormatter || r.indexLabelFormatter) &&
                                this._indexLabels.push({ chartType: "stackedArea", dataPoint: v, dataSeries: r, point: { x: p, y: l }, direction: 0 <= s[k].y ? 1 : -1, color: c })
                            }
                        }
                        for (0 < r.lineThickness && b.stroke(); 0 < u.length;) H = u.pop(), b.lineTo(H.x, H.y), t && m.lineTo(H.x, H.y);
                        b.closePath();
                        b.globalAlpha = r.fillOpacity;
                        b.fill();
                        b.globalAlpha = 1;
                        b.beginPath();
                        b.moveTo(p, l);
                        t && (m.closePath(), m.fill(), m.beginPath(), m.moveTo(p, l))
                    }
                    delete r.dataPointIndexes
                }
                K.drawMarkers(d);
                b.restore();
                t && m.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: y.xClipAnimation,
                    easingFunction: y.easing.linear,
                    animationBase: 0
                }
            }
        };
    w.prototype.renderStackedArea100 = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = [],
                f = [],
                g = [],
                k = 0,
                p, l, h, n = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                m = this.dataPointMaxWidth ? this.dataPointMaxWidth : 0.15 * this.width << 0,
                q = a.axisX.dataInfo.minDiff,
                q = 0.9 * d.width / Math.abs(a.axisX.maximum - a.axisX.minimum) *
                Math.abs(q) << 0,
                r = this._eventManager.ghostCtx;
            b.save();
            t && r.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (r.beginPath(), r.rect(d.x1, d.y1, d.width, d.height), r.clip());
            xValuePresent = [];
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var s = a.dataSeriesIndexes[d],
                    z = this.data[s],
                    u = z.dataPoints;
                z.dataPointIndexes = [];
                for (k = 0; k < u.length; k++) s = u[k].x.getTime ? u[k].x.getTime() : u[k].x, z.dataPointIndexes[s] = k, xValuePresent[s] || (g.push(s), xValuePresent[s] = !0);
                g.sort(va)
            }
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var s =
                    a.dataSeriesIndexes[d],
                    z = this.data[s],
                    u = z.dataPoints,
                    v = !0,
                    c = z.id;
                this._eventManager.objectMap[c] = { objectType: "dataSeries", dataSeriesIndex: s };
                c = A(c);
                r.fillStyle = c;
                1 == u.length && (q = m);
                1 > q ? q = 1 : q > m && (q = m);
                var C = [];
                if (0 < g.length) {
                    c = z._colorSet[k % z._colorSet.length];
                    b.fillStyle = c;
                    b.strokeStyle = c;
                    b.lineWidth = z.lineThickness;
                    b.setLineDash && b.setLineDash(M(z.lineDashType, z.lineThickness));
                    for (k = 0; k < g.length; k++) {
                        h = g[k];
                        var w = null,
                            w = 0 <= z.dataPointIndexes[h] ? u[z.dataPointIndexes[h]] : { x: h, y: 0 };
                        if (!(h < a.axisX.dataInfo.viewPortMin ||
                                h > a.axisX.dataInfo.viewPortMax) && "number" === typeof w.y) {
                            l = 0 !== a.dataPointYSums[h] ? 100 * (w.y / a.dataPointYSums[h]) : 0;
                            p = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (h - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            l = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (l - a.axisY.conversionParameters.minimum);
                            var D = f[h] ? f[h] : 0;
                            l -= D;
                            C.push({ x: p, y: n - D });
                            f[h] = n - l;
                            if (v) b.beginPath(), b.moveTo(p, l), t && (r.beginPath(), r.moveTo(p, l)), v = !1;
                            else if (b.lineTo(p,
                                    l), t && r.lineTo(p, l), 0 == k % 250) {
                                for (0 < z.lineThickness && b.stroke(); 0 < C.length;) {
                                    var U = C.pop();
                                    b.lineTo(U.x, U.y);
                                    t && r.lineTo(U.x, U.y)
                                }
                                b.closePath();
                                b.globalAlpha = z.fillOpacity;
                                b.fill();
                                b.globalAlpha = 1;
                                b.beginPath();
                                b.moveTo(p, l);
                                t && (r.closePath(), r.fill(), r.beginPath(), r.moveTo(p, l));
                                C.push({ x: p, y: n - D })
                            }
                            if (0 <= z.dataPointIndexes[h]) {
                                var B = z.dataPointIds[z.dataPointIndexes[h]];
                                this._eventManager.objectMap[B] = { id: B, objectType: "dataPoint", dataSeriesIndex: s, dataPointIndex: z.dataPointIndexes[h], x1: p, y1: l }
                            }
                            0 <=
                                z.dataPointIndexes[h] && 0 !== w.markerSize && (0 < w.markerSize || 0 < z.markerSize) && (h = z.getMarkerProperties(k, p, l, b), e.push(h), markerColor = A(B), t && e.push({ x: p, y: l, ctx: r, type: h.type, size: h.size, color: markerColor, borderColor: markerColor, borderThickness: h.borderThickness }));
                            (w.indexLabel || z.indexLabel || w.indexLabelFormatter || z.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedArea100", dataPoint: w, dataSeries: z, point: { x: p, y: l }, direction: 0 <= u[k].y ? 1 : -1, color: c })
                        }
                    }
                    for (0 < z.lineThickness && b.stroke(); 0 <
                        C.length;) U = C.pop(), b.lineTo(U.x, U.y), t && r.lineTo(U.x, U.y);
                    b.closePath();
                    b.globalAlpha = z.fillOpacity;
                    b.fill();
                    b.globalAlpha = 1;
                    b.beginPath();
                    b.moveTo(p, l);
                    t && (r.closePath(), r.fill(), r.beginPath(), r.moveTo(p, l))
                }
                delete z.dataPointIndexes
            }
            K.drawMarkers(e);
            b.restore();
            t && r.restore();
            return { source: b, dest: this.plotArea.ctx, animationCallback: y.xClipAnimation, easingFunction: y.easing.linear, animationBase: 0 }
        }
    };
    w.prototype.renderBubble = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx,
            c = a.dataSeriesIndexes.length;
        if (!(0 >= c)) {
            var d = this.plotArea,
                e = 0,
                f, g, k = this.dataPointMaxWidth ? this.dataPointMaxWidth : 0.15 * this.width << 0,
                e = a.axisX.dataInfo.minDiff,
                c = 0.9 * (d.width / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(e) / c) << 0;
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var p = -Infinity, l = Infinity, h = 0; h < a.dataSeriesIndexes.length; h++)
                for (var n = a.dataSeriesIndexes[h],
                        m = this.data[n], q = m.dataPoints, r = 0, e = 0; e < q.length; e++) f = q[e].getTime ? f = q[e].x.getTime() : f = q[e].x, f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax || "undefined" === typeof q[e].z || (r = q[e].z, r > p && (p = r), r < l && (l = r));
            for (var s = 25 * Math.PI, d = Math.max(Math.pow(0.25 * Math.min(d.height, d.width) / 2, 2) * Math.PI, s), h = 0; h < a.dataSeriesIndexes.length; h++)
                if (n = a.dataSeriesIndexes[h], m = this.data[n], q = m.dataPoints, 1 == q.length && (c = k), 1 > c ? c = 1 : c > k && (c = k), 0 < q.length)
                    for (b.strokeStyle = "#4572A7 ", e = 0; e < q.length; e++)
                        if (f =
                            q[e].getTime ? f = q[e].x.getTime() : f = q[e].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[e].y) {
                            f = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (f - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            g = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (q[e].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            var r = q[e].z,
                                z = 2 * Math.max(Math.sqrt((p === l ? d / 2 : s + (d - s) / (p - l) * (r - l)) / Math.PI) << 0, 1),
                                r = m.getMarkerProperties(e,
                                    b);
                            r.size = z;
                            b.globalAlpha = m.fillOpacity;
                            K.drawMarker(f, g, b, r.type, r.size, r.color, r.borderColor, r.borderThickness);
                            b.globalAlpha = 1;
                            var u = m.dataPointIds[e];
                            this._eventManager.objectMap[u] = { id: u, objectType: "dataPoint", dataSeriesIndex: n, dataPointIndex: e, x1: f, y1: g, size: z };
                            z = A(u);
                            t && K.drawMarker(f, g, this._eventManager.ghostCtx, r.type, r.size, z, z, r.borderThickness);
                            (q[e].indexLabel || m.indexLabel || q[e].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "bubble",
                                dataPoint: q[e],
                                dataSeries: m,
                                point: { x: f, y: g },
                                direction: 1,
                                bounds: { x1: f - r.size / 2, y1: g - r.size / 2, x2: f + r.size / 2, y2: g + r.size / 2 },
                                color: null
                            })
                        }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return { source: b, dest: this.plotArea.ctx, animationCallback: y.fadeInAnimation, easingFunction: y.easing.easeInQuad, animationBase: 0 }
        }
    };
    w.prototype.renderScatter = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx,
            c = a.dataSeriesIndexes.length;
        if (!(0 >= c)) {
            var d = this.plotArea,
                e = 0,
                f, g, k = this.dataPointMaxWidth ? this.dataPointMaxWidth : 0.15 * this.width <<
                0,
                e = a.axisX.dataInfo.minDiff,
                c = 0.9 * (d.width / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(e) / c) << 0;
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                var l = a.dataSeriesIndexes[p],
                    h = this.data[l],
                    n = h.dataPoints;
                1 == n.length && (c = k);
                1 > c ? c = 1 : c > k && (c = k);
                if (0 < n.length) {
                    b.strokeStyle = "#4572A7 ";
                    Math.pow(0.3 *
                        Math.min(d.height, d.width) / 2, 2);
                    for (var m = 0, q = 0, e = 0; e < n.length; e++)
                        if (f = n[e].getTime ? f = n[e].x.getTime() : f = n[e].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof n[e].y) {
                            f = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (f - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            g = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (n[e].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            var r = h.getMarkerProperties(e,
                                f, g, b);
                            b.globalAlpha = h.fillOpacity;
                            K.drawMarker(r.x, r.y, r.ctx, r.type, r.size, r.color, r.borderColor, r.borderThickness);
                            b.globalAlpha = 1;
                            Math.sqrt((m - f) * (m - f) + (q - g) * (q - g)) < Math.min(r.size, 5) && n.length > Math.min(this.plotArea.width, this.plotArea.height) || (m = h.dataPointIds[e], this._eventManager.objectMap[m] = { id: m, objectType: "dataPoint", dataSeriesIndex: l, dataPointIndex: e, x1: f, y1: g }, m = A(m), t && K.drawMarker(r.x, r.y, this._eventManager.ghostCtx, r.type, r.size, m, m, r.borderThickness), (n[e].indexLabel || h.indexLabel ||
                                n[e].indexLabelFormatter || h.indexLabelFormatter) && this._indexLabels.push({ chartType: "scatter", dataPoint: n[e], dataSeries: h, point: { x: f, y: g }, direction: 1, bounds: { x1: f - r.size / 2, y1: g - r.size / 2, x2: f + r.size / 2, y2: g + r.size / 2 }, color: null }), m = f, q = g)
                        }
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return { source: b, dest: this.plotArea.ctx, animationCallback: y.fadeInAnimation, easingFunction: y.easing.easeInQuad, animationBase: 0 }
        }
    };
    w.prototype.renderCandlestick = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx,
            c = this._eventManager.ghostCtx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null,
                d = this.plotArea,
                e = 0,
                f, g, k, p, l, h, e = this.dataPointMaxWidth ? this.dataPointMaxWidth : 0.015 * this.width;
            f = a.axisX.dataInfo.minDiff;
            var n = 0.7 * d.width / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(f) << 0;
            n > e ? n = e : Infinity === f ? n = e : 1 > n && (n = 1);
            b.save();
            t && c.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (c.rect(d.x1, d.y1, d.width, d.height), c.clip());
            for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
                var q = a.dataSeriesIndexes[m],
                    r = this.data[q],
                    s = r.dataPoints;
                if (0 < s.length)
                    for (var z = 5 < n && r.bevelEnabled ? !0 : !1, e = 0; e < s.length; e++)
                        if (s[e].getTime ? h = s[e].x.getTime() : h = s[e].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && null !== s[e].y && s[e].y.length && "number" === typeof s[e].y[0] && "number" === typeof s[e].y[1] && "number" === typeof s[e].y[2] && "number" === typeof s[e].y[3]) {
                            f = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (h - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            g = a.axisY.conversionParameters.reference +
                                a.axisY.conversionParameters.pixelPerUnit * (s[e].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            k = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (s[e].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (s[e].y[2] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            l = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (s[e].y[3] - a.axisY.conversionParameters.minimum) +
                                0.5 << 0;
                            var u = f - n / 2 << 0,
                                v = u + n << 0,
                                d = s[e].color ? s[e].color : r._colorSet[0],
                                C = Math.round(Math.max(1, 0.15 * n)),
                                w = 0 === C % 2 ? 0 : 0.5,
                                D = r.dataPointIds[e];
                            this._eventManager.objectMap[D] = { id: D, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: e, x1: u, y1: g, x2: v, y2: k, x3: f, y3: p, x4: f, y4: l, borderThickness: C, color: d };
                            b.strokeStyle = d;
                            b.beginPath();
                            b.lineWidth = C;
                            c.lineWidth = Math.max(C, 4);
                            "candlestick" === r.type ? (b.moveTo(f - w, k), b.lineTo(f - w, Math.min(g, l)), b.stroke(), b.moveTo(f - w, Math.max(g, l)), b.lineTo(f - w, p), b.stroke(),
                                I(b, u, Math.min(g, l), v, Math.max(g, l), s[e].y[0] <= s[e].y[3] ? r.risingColor : d, C, d, z, z, !1, !1, r.fillOpacity), t && (d = A(D), c.strokeStyle = d, c.moveTo(f - w, k), c.lineTo(f - w, Math.min(g, l)), c.stroke(), c.moveTo(f - w, Math.max(g, l)), c.lineTo(f - w, p), c.stroke(), I(c, u, Math.min(g, l), v, Math.max(g, l), d, 0, null, !1, !1, !1, !1))) : "ohlc" === r.type && (b.moveTo(f - w, k), b.lineTo(f - w, p), b.stroke(), b.beginPath(), b.moveTo(f, g), b.lineTo(u, g), b.stroke(), b.beginPath(), b.moveTo(f, l), b.lineTo(v, l), b.stroke(), t && (d = A(D), c.strokeStyle = d, c.moveTo(f -
                                w, k), c.lineTo(f - w, p), c.stroke(), c.beginPath(), c.moveTo(f, g), c.lineTo(u, g), c.stroke(), c.beginPath(), c.moveTo(f, l), c.lineTo(v, l), c.stroke()));
                            (s[e].indexLabel || r.indexLabel || s[e].indexLabelFormatter || r.indexLabelFormatter) && this._indexLabels.push({ chartType: r.type, dataPoint: s[e], dataSeries: r, point: { x: u + (v - u) / 2, y: k }, direction: 1, bounds: { x1: u, y1: Math.min(k, p), x2: v, y2: Math.max(k, p) }, color: d })
                        }
            }
            b.restore();
            t && c.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.fadeInAnimation,
                easingFunction: y.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    w.prototype.renderRangeColumn = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = 0,
                f, g, e = this.dataPointMaxWidth ? this.dataPointMaxWidth : 0.03 * this.width;
            f = a.axisX.dataInfo.minDiff;
            var k = 0.9 * (d.width / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(f) / a.plotType.totalDataSeries) << 0;
            k > e ? k = e : Infinity === f ? k = 0.9 * (e / a.plotType.totalDataSeries) : 1 > k && (k = 1);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                var l = a.dataSeriesIndexes[p],
                    h = this.data[l],
                    n = h.dataPoints;
                if (0 < n.length)
                    for (var m = 5 < k && h.bevelEnabled ? !0 : !1, e = 0; e < n.length; e++)
                        if (n[e].getTime ? g = n[e].x.getTime() : g = n[e].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && null !== n[e].y && n[e].y.length && "number" === typeof n[e].y[0] && "number" === typeof n[e].y[1]) {
                            c =
                                a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (g - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            d = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (n[e].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            f = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (n[e].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            var q = c - a.plotType.totalDataSeries * k / 2 + (a.previousDataSeriesCount + p) * k << 0,
                                r = q + k << 0,
                                c = n[e].color ?
                                n[e].color : h._colorSet[e % h._colorSet.length];
                            if (d > f) {
                                var s = d,
                                    d = f;
                                f = s
                            }
                            s = h.dataPointIds[e];
                            this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: l, dataPointIndex: e, x1: q, y1: d, x2: r, y2: f };
                            I(b, q, d, r, f, c, 0, c, m, m, !1, !1, h.fillOpacity);
                            c = A(s);
                            t && I(this._eventManager.ghostCtx, q, d, r, f, c, 0, null, !1, !1, !1, !1);
                            if (n[e].indexLabel || h.indexLabel || n[e].indexLabelFormatter || h.indexLabelFormatter) this._indexLabels.push({
                                chartType: "rangeColumn",
                                dataPoint: n[e],
                                dataSeries: h,
                                indexKeyword: 0,
                                point: {
                                    x: q +
                                        (r - q) / 2,
                                    y: n[e].y[1] >= n[e].y[0] ? f : d
                                },
                                direction: n[e].y[1] >= n[e].y[0] ? -1 : 1,
                                bounds: { x1: q, y1: Math.min(d, f), x2: r, y2: Math.max(d, f) },
                                color: c
                            }), this._indexLabels.push({ chartType: "rangeColumn", dataPoint: n[e], dataSeries: h, indexKeyword: 1, point: { x: q + (r - q) / 2, y: n[e].y[1] >= n[e].y[0] ? d : f }, direction: n[e].y[1] >= n[e].y[0] ? 1 : -1, bounds: { x1: q, y1: Math.min(d, f), x2: r, y2: Math.max(d, f) }, color: c })
                        }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.fadeInAnimation,
                easingFunction: y.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    w.prototype.renderRangeBar = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = 0,
                f, g, k, e = this.dataPointMaxWidth ? this.dataPointMaxWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
            f = a.axisX.dataInfo.minDiff;
            var p = 0.9 * (d.height / Math.abs(a.axisX.maximum - a.axisX.minimum) * Math.abs(f) / a.plotType.totalDataSeries) << 0;
            p > e ? p = e : Infinity === f ? p = 0.9 *
                (e / a.plotType.totalDataSeries) : 1 > p && (p = 1);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
                var h = a.dataSeriesIndexes[l],
                    n = this.data[h],
                    m = n.dataPoints;
                if (0 < m.length) {
                    var q = 5 < p && n.bevelEnabled ? !0 : !1;
                    b.strokeStyle = "#4572A7 ";
                    for (e = 0; e < m.length; e++)
                        if (m[e].getTime ? k = m[e].x.getTime() : k = m[e].x, !(k < a.axisX.dataInfo.viewPortMin ||
                                k > a.axisX.dataInfo.viewPortMax) && null !== m[e].y && m[e].y.length && "number" === typeof m[e].y[0] && "number" === typeof m[e].y[1]) {
                            d = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (m[e].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            f = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (m[e].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            g = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (k - a.axisX.conversionParameters.minimum) +
                                0.5 << 0;
                            g = g - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + l) * p << 0;
                            var r = g + p << 0;
                            d > f && (c = d, d = f, f = c);
                            c = m[e].color ? m[e].color : n._colorSet[e % n._colorSet.length];
                            I(b, d, g, f, r, c, 0, null, q, !1, !1, !1, n.fillOpacity);
                            c = n.dataPointIds[e];
                            this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: h, dataPointIndex: e, x1: d, y1: g, x2: f, y2: r };
                            c = A(c);
                            t && I(this._eventManager.ghostCtx, d, g, f, r, c, 0, null, !1, !1, !1, !1);
                            if (m[e].indexLabel || n.indexLabel || m[e].indexLabelFormatter || n.indexLabelFormatter) this._indexLabels.push({
                                chartType: "rangeBar",
                                dataPoint: m[e],
                                dataSeries: n,
                                indexKeyword: 0,
                                point: { x: m[e].y[1] >= m[e].y[0] ? d : f, y: g + (r - g) / 2 },
                                direction: m[e].y[1] >= m[e].y[0] ? -1 : 1,
                                bounds: { x1: Math.min(d, f), y1: g, x2: Math.max(d, f), y2: r },
                                color: c
                            }), this._indexLabels.push({ chartType: "rangeBar", dataPoint: m[e], dataSeries: n, indexKeyword: 1, point: { x: m[e].y[1] >= m[e].y[0] ? f : d, y: g + (r - g) / 2 }, direction: m[e].y[1] >= m[e].y[0] ? 1 : -1, bounds: { x1: Math.min(d, f), y1: g, x2: Math.max(d, f), y2: r }, color: c })
                        }
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: y.fadeInAnimation,
                easingFunction: y.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    w.prototype.renderRangeArea = function(a) {
        function b() {
            if (z) {
                var a = null;
                0 < p.lineThickness && c.stroke();
                for (var b = g.length - 1; 0 <= b; b--) a = g[b], c.lineTo(a.x, a.y), d.lineTo(a.x, a.y);
                c.closePath();
                c.globalAlpha = p.fillOpacity;
                c.fill();
                c.globalAlpha = 1;
                d.fill();
                if (0 < p.lineThickness) {
                    c.beginPath();
                    c.moveTo(a.x, a.y);
                    for (b = 0; b < g.length; b++) a = g[b], c.lineTo(a.x, a.y);
                    c.stroke()
                }
                c.beginPath();
                c.moveTo(m, q);
                d.beginPath();
                d.moveTo(m,
                    q);
                z = { x: m, y: q };
                g = [];
                g.push({ x: m, y: r })
            }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                e = [],
                f = this.plotArea;
            c.save();
            t && d.save();
            c.beginPath();
            c.rect(f.x1, f.y1, f.width, f.height);
            c.clip();
            t && (d.beginPath(), d.rect(f.x1, f.y1, f.width, f.height), d.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                var g = [],
                    k = a.dataSeriesIndexes[f],
                    p = this.data[k],
                    l = p.dataPoints,
                    e = p.id;
                this._eventManager.objectMap[e] = { objectType: "dataSeries", dataSeriesIndex: k };
                e = A(e);
                d.fillStyle = e;
                var e = [],
                    h = !0,
                    n = 0,
                    m, q, r, s, z = null;
                if (0 < l.length) {
                    var u = p._colorSet[n % p._colorSet.length];
                    c.fillStyle = u;
                    c.strokeStyle = u;
                    c.lineWidth = p.lineThickness;
                    c.setLineDash && c.setLineDash(M(p.lineDashType, p.lineThickness));
                    for (var v = !0; n < l.length; n++)
                        if (s = l[n].x.getTime ? l[n].x.getTime() : l[n].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax))
                            if (null !== l[n].y && l[n].y.length && "number" === typeof l[n].y[0] && "number" === typeof l[n].y[1]) {
                                m = a.axisX.conversionParameters.reference +
                                    a.axisX.conversionParameters.pixelPerUnit * (s - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                q = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (l[n].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                r = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (l[n].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                h || v ? (c.beginPath(), c.moveTo(m, q), z = { x: m, y: q }, g = [], g.push({ x: m, y: r }), t && (d.beginPath(), d.moveTo(m, q)), v = h = !1) : (c.lineTo(m, q), g.push({
                                    x: m,
                                    y: r
                                }), t && d.lineTo(m, q), 0 == n % 250 && b());
                                s = p.dataPointIds[n];
                                this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: n, x1: m, y1: q, y2: r };
                                if (0 !== l[n].markerSize && (0 < l[n].markerSize || 0 < p.markerSize)) {
                                    var C = p.getMarkerProperties(n, m, r, c);
                                    e.push(C);
                                    var w = A(s);
                                    t && e.push({ x: m, y: r, ctx: d, type: C.type, size: C.size, color: w, borderColor: w, borderThickness: C.borderThickness });
                                    C = p.getMarkerProperties(n, m, q, c);
                                    e.push(C);
                                    w = A(s);
                                    t && e.push({
                                        x: m,
                                        y: q,
                                        ctx: d,
                                        type: C.type,
                                        size: C.size,
                                        color: w,
                                        borderColor: w,
                                        borderThickness: C.borderThickness
                                    })
                                }
                                if (l[n].indexLabel || p.indexLabel || l[n].indexLabelFormatter || p.indexLabelFormatter) this._indexLabels.push({ chartType: "rangeArea", dataPoint: l[n], dataSeries: p, indexKeyword: 0, point: { x: m, y: q }, direction: l[n].y[0] <= l[n].y[1] ? -1 : 1, color: u }), this._indexLabels.push({ chartType: "rangeArea", dataPoint: l[n], dataSeries: p, indexKeyword: 1, point: { x: m, y: r }, direction: l[n].y[0] <= l[n].y[1] ? 1 : -1, color: u })
                            } else b(), v = !0;
                    b();
                    K.drawMarkers(e)
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: y.xClipAnimation, easingFunction: y.easing.linear, animationBase: 0 }
        }
    };
    w.prototype.renderRangeSplineArea = function(a) {
        function b() {
            var a = ia(q, 2);
            if (0 < a.length) {
                c.beginPath();
                c.moveTo(a[0].x, a[0].y);
                t && (d.beginPath(), d.moveTo(a[0].x, a[0].y));
                for (var b = 0; b < a.length - 3; b += 3) c.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y), t && d.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y);
                0 < k.lineThickness && c.stroke();
                a = ia(r,
                    2);
                c.lineTo(r[r.length - 1].x, r[r.length - 1].y);
                for (b = a.length - 1; 2 < b; b -= 3) c.bezierCurveTo(a[b - 1].x, a[b - 1].y, a[b - 2].x, a[b - 2].y, a[b - 3].x, a[b - 3].y), t && d.bezierCurveTo(a[b - 1].x, a[b - 1].y, a[b - 2].x, a[b - 2].y, a[b - 3].x, a[b - 3].y);
                c.closePath();
                c.globalAlpha = k.fillOpacity;
                c.fill();
                c.globalAlpha = 1;
                if (0 < k.lineThickness) {
                    c.beginPath();
                    c.moveTo(r[r.length - 1].x, r[r.length - 1].y);
                    for (b = a.length - 1; 2 < b; b -= 3) c.bezierCurveTo(a[b - 1].x, a[b - 1].y, a[b - 2].x, a[b - 2].y, a[b - 3].x, a[b - 3].y), t && d.bezierCurveTo(a[b - 1].x, a[b - 1].y, a[b - 2].x,
                        a[b - 2].y, a[b - 3].x, a[b - 3].y);
                    c.stroke()
                }
                c.beginPath();
                t && (d.closePath(), d.fill())
            }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                e = [],
                f = this.plotArea;
            c.save();
            t && d.save();
            c.beginPath();
            c.rect(f.x1, f.y1, f.width, f.height);
            c.clip();
            t && (d.beginPath(), d.rect(f.x1, f.y1, f.width, f.height), d.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                var g = a.dataSeriesIndexes[f],
                    k = this.data[g],
                    p = k.dataPoints,
                    e = k.id;
                this._eventManager.objectMap[e] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: g
                };
                e = A(e);
                d.fillStyle = e;
                var e = [],
                    l = 0,
                    h, n, m, q = [],
                    r = [];
                if (0 < p.length) {
                    color = k._colorSet[l % k._colorSet.length];
                    c.fillStyle = color;
                    c.strokeStyle = color;
                    c.lineWidth = k.lineThickness;
                    for (c.setLineDash && c.setLineDash(M(k.lineDashType, k.lineThickness)); l < p.length; l++)
                        if (h = p[l].x.getTime ? p[l].x.getTime() : p[l].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax))
                            if (null !== p[l].y && p[l].y.length && "number" === typeof p[l].y[0] && "number" === typeof p[l].y[1]) {
                                h = a.axisX.conversionParameters.reference +
                                    a.axisX.conversionParameters.pixelPerUnit * (h - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                n = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (p[l].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                m = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (p[l].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var s = k.dataPointIds[l];
                                this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: g, dataPointIndex: l, x1: h, y1: n, y2: m };
                                q[q.length] = { x: h, y: n };
                                r[r.length] = { x: h, y: m };
                                if (0 !== p[l].markerSize && (0 < p[l].markerSize || 0 < k.markerSize)) {
                                    var w = k.getMarkerProperties(l, h, n, c);
                                    e.push(w);
                                    var u = A(s);
                                    t && e.push({ x: h, y: n, ctx: d, type: w.type, size: w.size, color: u, borderColor: u, borderThickness: w.borderThickness });
                                    w = k.getMarkerProperties(l, h, m, c);
                                    e.push(w);
                                    u = A(s);
                                    t && e.push({ x: h, y: m, ctx: d, type: w.type, size: w.size, color: u, borderColor: u, borderThickness: w.borderThickness })
                                }
                                if (p[l].indexLabel || k.indexLabel || p[l].indexLabelFormatter || k.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "splineArea",
                                    dataPoint: p[l],
                                    dataSeries: k,
                                    indexKeyword: 0,
                                    point: { x: h, y: n },
                                    direction: p[l].y[0] <= p[l].y[1] ? -1 : 1,
                                    color: color
                                }), this._indexLabels.push({ chartType: "splineArea", dataPoint: p[l], dataSeries: k, indexKeyword: 1, point: { x: h, y: m }, direction: p[l].y[0] <= p[l].y[1] ? 1 : -1, color: color })
                            } else 0 < l && (b(), q = [], r = []);
                    b();
                    K.drawMarkers(e)
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: y.xClipAnimation, easingFunction: y.easing.linear, animationBase: 0 }
        }
    };
    var ta = function(a,
        b, c, d, e, f, g, k) {
        "undefined" === typeof k && (k = 1);
        if (!t) {
            var p = Number((g % (2 * Math.PI)).toFixed(8));
            Number((f % (2 * Math.PI)).toFixed(8)) === p && (g -= 1E-4)
        }
        a.save();
        a.globalAlpha = k;
        "pie" === e ? (a.beginPath(), a.moveTo(b.x, b.y), a.arc(b.x, b.y, c, f, g, !1), a.fillStyle = d, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === e && (a.beginPath(), a.arc(b.x, b.y, c, f, g, !1), a.arc(b.x, b.y, 0.6 * c, g, f, !0), a.closePath(), a.fillStyle = d, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
        a.globalAlpha = 1;
        a.restore()
    };
    w.prototype.renderPie =
        function(a) {
            function b() {
                if (h && n) {
                    var a = 0,
                        b = 0,
                        c = 0,
                        d = 0;
                    for (x = 0; x < n.length; x++) {
                        var e = n[x],
                            f = h.dataPointIds[x],
                            g = { id: f, objectType: "dataPoint", dataPointIndex: x, dataSeriesIndex: 0 };
                        s.push(g);
                        var k = { percent: null, total: null },
                            m = null,
                            k = l.getPercentAndTotal(h, e);
                        if (h.indexLabelFormatter || e.indexLabelFormatter) m = { chart: l._options, dataSeries: h, dataPoint: e, total: k.total, percent: k.percent };
                        k = e.indexLabelFormatter ? e.indexLabelFormatter(m) : e.indexLabel ? l.replaceKeywordsWithValue(e.indexLabel, e, h, x) : h.indexLabelFormatter ?
                            h.indexLabelFormatter(m) : h.indexLabel ? l.replaceKeywordsWithValue(h.indexLabel, e, h, x) : e.label ? e.label : "";
                        l._eventManager.objectMap[f] = g;
                        g.center = { x: y.x, y: y.y };
                        g.y = e.y;
                        g.radius = D;
                        g.indexLabelText = k;
                        g.indexLabelPlacement = h.indexLabelPlacement;
                        g.indexLabelLineColor = e.indexLabelLineColor ? e.indexLabelLineColor : h.indexLabelLineColor ? h.indexLabelLineColor : e.color ? e.color : h._colorSet[x % h._colorSet.length];
                        g.indexLabelLineThickness = e.indexLabelLineThickness ? e.indexLabelLineThickness : h.indexLabelLineThickness;
                        g.indexLabelLineDashType = e.indexLabelLineDashType ? e.indexLabelLineDashType : h.indexLabelLineDashType;
                        g.indexLabelFontColor = e.indexLabelFontColor ? e.indexLabelFontColor : h.indexLabelFontColor;
                        g.indexLabelFontStyle = e.indexLabelFontStyle ? e.indexLabelFontStyle : h.indexLabelFontStyle;
                        g.indexLabelFontWeight = e.indexLabelFontWeight ? e.indexLabelFontWeight : h.indexLabelFontWeight;
                        g.indexLabelFontSize = e.indexLabelFontSize ? e.indexLabelFontSize : h.indexLabelFontSize;
                        g.indexLabelFontFamily = e.indexLabelFontFamily ? e.indexLabelFontFamily :
                            h.indexLabelFontFamily;
                        g.indexLabelBackgroundColor = e.indexLabelBackgroundColor ? e.indexLabelBackgroundColor : h.indexLabelBackgroundColor ? h.indexLabelBackgroundColor : null;
                        g.indexLabelMaxWidth = e.indexLabelMaxWidth ? e.indexLabelMaxWidth : h.indexLabelMaxWidth ? h.indexLabelMaxWidth : 0.33 * q.width;
                        g.indexLabelWrap = "undefined" !== typeof e.indexLabelWrap ? e.indexLabelWrap : h.indexLabelWrap;
                        g.startAngle = 0 === x ? h.startAngle ? h.startAngle / 180 * Math.PI : 0 : s[x - 1].endAngle;
                        g.startAngle = (g.startAngle + 2 * Math.PI) % (2 * Math.PI);
                        g.endAngle =
                            g.startAngle + 2 * Math.PI / A * Math.abs(e.y);
                        e = (g.endAngle + g.startAngle) / 2;
                        e = (e + 2 * Math.PI) % (2 * Math.PI);
                        g.midAngle = e;
                        if (g.midAngle > Math.PI / 2 - v && g.midAngle < Math.PI / 2 + v) {
                            if (0 === a || s[c].midAngle > g.midAngle) c = x;
                            a++
                        } else if (g.midAngle > 3 * Math.PI / 2 - v && g.midAngle < 3 * Math.PI / 2 + v) {
                            if (0 === b || s[d].midAngle > g.midAngle) d = x;
                            b++
                        }
                        g.hemisphere = e > Math.PI / 2 && e <= 3 * Math.PI / 2 ? "left" : "right";
                        g.indexLabelTextBlock = new G(l.plotArea.ctx, {
                            fontSize: g.indexLabelFontSize,
                            fontFamily: g.indexLabelFontFamily,
                            fontColor: g.indexLabelFontColor,
                            fontStyle: g.indexLabelFontStyle,
                            fontWeight: g.indexLabelFontWeight,
                            horizontalAlign: "left",
                            backgroundColor: g.indexLabelBackgroundColor,
                            maxWidth: g.indexLabelMaxWidth,
                            maxHeight: g.indexLabelWrap ? 5 * g.indexLabelFontSize : 1.5 * g.indexLabelFontSize,
                            text: g.indexLabelText,
                            padding: 0,
                            textBaseline: "top"
                        });
                        g.indexLabelTextBlock.measureText()
                    }
                    f = e = 0;
                    k = !1;
                    for (x = 0; x < n.length; x++) g = s[(c + x) % n.length], 1 < a && (g.midAngle > Math.PI / 2 - v && g.midAngle < Math.PI / 2 + v) && (e <= a / 2 && !k ? (g.hemisphere = "right", e++) : (g.hemisphere = "left", k = !0));
                    k = !1;
                    for (x = 0; x < n.length; x++) g = s[(d + x) % n.length], 1 < b && (g.midAngle > 3 * Math.PI / 2 - v && g.midAngle < 3 * Math.PI / 2 + v) && (f <= b / 2 && !k ? (g.hemisphere = "left", f++) : (g.hemisphere = "right", k = !0))
                }
            }

            function c(a) {
                var b = l.plotArea.ctx;
                b.clearRect(q.x1, q.y1, q.width, q.height);
                b.fillStyle = l.backgroundColor;
                b.fillRect(q.x1, q.y1, q.width, q.height);
                for (b = 0; b < n.length; b++) {
                    var c = s[b].startAngle,
                        d = s[b].endAngle;
                    if (d > c) {
                        var e = 0.07 * D * Math.cos(s[b].midAngle),
                            f = 0.07 * D * Math.sin(s[b].midAngle),
                            g = !1;
                        if (n[b].exploded) {
                            if (1E-9 < Math.abs(s[b].center.x -
                                    (y.x + e)) || 1E-9 < Math.abs(s[b].center.y - (y.y + f))) s[b].center.x = y.x + e * a, s[b].center.y = y.y + f * a, g = !0
                        } else if (0 < Math.abs(s[b].center.x - y.x) || 0 < Math.abs(s[b].center.y - y.y)) s[b].center.x = y.x + e * (1 - a), s[b].center.y = y.y + f * (1 - a), g = !0;
                        g && (e = {}, e.dataSeries = h, e.dataPoint = h.dataPoints[b], e.index = b, l._toolTip.highlightObjects([e]));
                        ta(l.plotArea.ctx, s[b].center, s[b].radius, n[b].color ? n[b].color : h._colorSet[b % h._colorSet.length], h.type, c, d, h.fillOpacity)
                    }
                }
                a = l.plotArea.ctx;
                a.fillStyle = "black";
                a.strokeStyle = "grey";
                a.textBaseline = "middle";
                a.lineJoin = "round";
                for (b = b = 0; b < n.length; b++) c = s[b], c.indexLabelText && (c.indexLabelTextBlock.y -= c.indexLabelTextBlock.height / 2, d = 0, d = "left" === c.hemisphere ? "inside" !== h.indexLabelPlacement ? -(c.indexLabelTextBlock.width + m) : -c.indexLabelTextBlock.width / 2 : "inside" !== h.indexLabelPlacement ? m : -c.indexLabelTextBlock.width / 2, c.indexLabelTextBlock.x += d, c.indexLabelTextBlock.render(!0), c.indexLabelTextBlock.x -= d, c.indexLabelTextBlock.y += c.indexLabelTextBlock.height / 2, "inside" !== c.indexLabelPlacement &&
                    (d = c.center.x + D * Math.cos(c.midAngle), e = c.center.y + D * Math.sin(c.midAngle), a.strokeStyle = c.indexLabelLineColor, a.lineWidth = c.indexLabelLineThickness, a.setLineDash && a.setLineDash(M(c.indexLabelLineDashType, c.indexLabelLineThickness)), a.beginPath(), a.moveTo(d, e), a.lineTo(c.indexLabelTextBlock.x, c.indexLabelTextBlock.y), a.lineTo(c.indexLabelTextBlock.x + ("left" === c.hemisphere ? -m : m), c.indexLabelTextBlock.y), a.stroke()), a.lineJoin = "miter")
            }

            function d(a, b) {
                var c = a.indexLabelTextBlock.x,
                    d = a.indexLabelTextBlock.y -
                    a.indexLabelTextBlock.height / 2,
                    e = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2,
                    f = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2,
                    g = b.indexLabelTextBlock.x + b.indexLabelTextBlock.width,
                    h = b.indexLabelTextBlock.y + b.indexLabelTextBlock.height / 2;
                return a.indexLabelTextBlock.x + a.indexLabelTextBlock.width < b.indexLabelTextBlock.x - m || c > g + m || d > h + m || e < f - m ? !1 : !0
            }

            function e(a, b) {
                var c = 0,
                    c = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2,
                    d = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height /
                    2,
                    e = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2,
                    f = b.indexLabelTextBlock.y + b.indexLabelTextBlock.height / 2;
                return c = b.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? e - d : c - f
            }

            function f(a) {
                for (var b = null, c = 1; c < n.length; c++)
                    if (b = (a + c + s.length) % s.length, s[b].hemisphere !== s[a].hemisphere) { b = null; break } else if (s[b].indexLabelText && b !== a && (0 > e(s[b], s[a]) || ("right" === s[a].hemisphere ? s[b].indexLabelTextBlock.y >= s[a].indexLabelTextBlock.y : s[b].indexLabelTextBlock.y <= s[a].indexLabelTextBlock.y))) break;
                else b = null;
                return b
            }

            function g(a, b) {
                b = b || 0;
                var c = 0,
                    d = y.y - 1 * B,
                    h = y.y + 1 * B;
                if (0 <= a && a < n.length) {
                    var l = s[a];
                    if (0 > b && l.indexLabelTextBlock.y < d || 0 < b && l.indexLabelTextBlock.y > h) return 0;
                    var k = b,
                        m = 0,
                        q = 0,
                        q = m = m = 0;
                    0 > k ? l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 > d && l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 + k < d && (k = -(d - (l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 + k))) : l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2 < d && l.indexLabelTextBlock.y + l.indexLabelTextBlock.height /
                        2 + k > h && (k = l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2 + k - h);
                    k = l.indexLabelTextBlock.y + k;
                    d = 0;
                    d = "right" === l.hemisphere ? y.x + Math.sqrt(Math.pow(B, 2) - Math.pow(k - y.y, 2)) : y.x - Math.sqrt(Math.pow(B, 2) - Math.pow(k - y.y, 2));
                    q = y.x + D * Math.cos(l.midAngle);
                    m = y.y + D * Math.sin(l.midAngle);
                    m = Math.sqrt(Math.pow(d - q, 2) + Math.pow(k - m, 2));
                    q = Math.acos(D / B);
                    m = Math.acos((B * B + D * D - m * m) / (2 * D * B));
                    k = m < q ? k - l.indexLabelTextBlock.y : 0;
                    d = null;
                    for (h = 1; h < n.length; h++)
                        if (d = (a - h + s.length) % s.length, s[d].hemisphere !== s[a].hemisphere) {
                            d =
                                null;
                            break
                        } else if (s[d].indexLabelText && s[d].hemisphere === s[a].hemisphere && d !== a && (0 > e(s[d], s[a]) || ("right" === s[a].hemisphere ? s[d].indexLabelTextBlock.y <= s[a].indexLabelTextBlock.y : s[d].indexLabelTextBlock.y >= s[a].indexLabelTextBlock.y))) break;
                    else d = null;
                    q = d;
                    m = f(a);
                    h = d = 0;
                    0 > k ? (h = "right" === l.hemisphere ? q : m, c = k, null !== h && (q = -k, k = l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 - (s[h].indexLabelTextBlock.y + s[h].indexLabelTextBlock.height / 2), k - q < t && (d = -q, r++, h = g(h, d), +h.toFixed(w) > +d.toFixed(w) &&
                        (c = k > t ? -(k - t) : -(q - (h - d)))))) : 0 < k && (h = "right" === l.hemisphere ? m : q, c = k, null !== h && (q = k, k = s[h].indexLabelTextBlock.y - s[h].indexLabelTextBlock.height / 2 - (l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2), k - q < t && (d = q, r++, h = g(h, d), +h.toFixed(w) < +d.toFixed(w) && (c = k > t ? k - t : q - (d - h)))));
                    c && (k = l.indexLabelTextBlock.y + c, d = 0, d = "right" === l.hemisphere ? y.x + Math.sqrt(Math.pow(B, 2) - Math.pow(k - y.y, 2)) : y.x - Math.sqrt(Math.pow(B, 2) - Math.pow(k - y.y, 2)), l.midAngle > Math.PI / 2 - v && l.midAngle < Math.PI / 2 + v ? (h = (a - 1 + s.length) % s.length,
                        h = s[h], q = s[(a + 1 + s.length) % s.length], "left" === l.hemisphere && "right" === h.hemisphere && d > h.indexLabelTextBlock.x ? d = h.indexLabelTextBlock.x - 15 : "right" === l.hemisphere && ("left" === q.hemisphere && d < q.indexLabelTextBlock.x) && (d = q.indexLabelTextBlock.x + 15)) : l.midAngle > 3 * Math.PI / 2 - v && l.midAngle < 3 * Math.PI / 2 + v && (h = (a - 1 + s.length) % s.length, h = s[h], q = s[(a + 1 + s.length) % s.length], "right" === l.hemisphere && "left" === h.hemisphere && d < h.indexLabelTextBlock.x ? d = h.indexLabelTextBlock.x + 15 : "left" === l.hemisphere && ("right" === q.hemisphere &&
                        d > q.indexLabelTextBlock.x) && (d = q.indexLabelTextBlock.x - 15)), l.indexLabelTextBlock.y = k, l.indexLabelTextBlock.x = d, l.indexLabelAngle = Math.atan2(l.indexLabelTextBlock.y - y.y, l.indexLabelTextBlock.x - y.x))
                }
                return c
            }

            function k() {
                var a = l.plotArea.ctx;
                a.fillStyle = "grey";
                a.strokeStyle = "grey";
                a.font = "16px Arial";
                a.textBaseline = "middle";
                for (var b = 0, c = a = 0, a = 0; 10 > a && (1 > a || 0 < c); a++) {
                    D -= c;
                    c = 0;
                    if ("inside" !== h.indexLabelPlacement) {
                        B = D * u;
                        for (b = 0; b < n.length; b++) {
                            var k = s[b];
                            k.indexLabelTextBlock.x = y.x + B * Math.cos(k.midAngle);
                            k.indexLabelTextBlock.y = y.y + B * Math.sin(k.midAngle);
                            k.indexLabelAngle = k.midAngle;
                            k.radius = D
                        }
                        for (var p, r, b = 0; b < n.length; b++) {
                            var k = s[b],
                                v = f(b);
                            if (null !== v) {
                                p = s[b];
                                r = s[v];
                                var x = 0,
                                    x = e(p, r) - t;
                                if (0 > x) {
                                    for (var A = r = p = 0; A < n.length; A++) A !== b && s[A].hemisphere === k.hemisphere && (s[A].indexLabelTextBlock.y < k.indexLabelTextBlock.y ? p++ : r++);
                                    A = x / (p + r || 1) * r;
                                    p = -1 * (x - A);
                                    var E = r = 0;
                                    "right" === k.hemisphere ? (r = g(b, A), p = -1 * (x - r), E = g(v, p), +E.toFixed(w) < +p.toFixed(w) && +r.toFixed(w) <= +A.toFixed(w) && g(b, -(p - E))) : (r = g(v, A), p = -1 *
                                        (x - r), E = g(b, p), +E.toFixed(w) < +p.toFixed(w) && +r.toFixed(w) <= +A.toFixed(w) && g(v, -(p - E)))
                                }
                            }
                        }
                    } else
                        for (b = 0; b < n.length; b++) k = s[b], B = "pie" === h.type ? 0.7 * D : 0.8 * D, x = y.x + B * Math.cos(k.midAngle), A = y.y + B * Math.sin(k.midAngle), k.indexLabelTextBlock.x = x, k.indexLabelTextBlock.y = A;
                    for (b = 0; b < n.length; b++) k = s[b], x = k.indexLabelTextBlock.measureText(), 0 !== x.height && 0 !== x.width && (x = x = 0, "right" === k.hemisphere ? (x = q.x2 - (k.indexLabelTextBlock.x + k.indexLabelTextBlock.width + m), x *= -1) : x = q.x1 - (k.indexLabelTextBlock.x - k.indexLabelTextBlock.width -
                        m), 0 < x && (Math.abs(k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2 - y.y) < D || Math.abs(k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2 - y.y) < D) && (x /= Math.abs(Math.cos(k.indexLabelAngle)), 9 < x && (x *= 0.3), x > c && (c = x)), x = x = 0, 0 < k.indexLabelAngle && k.indexLabelAngle < Math.PI ? (x = q.y2 - (k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2 + 5), x *= -1) : x = q.y1 - (k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2 - 5), 0 < x && Math.abs(k.indexLabelTextBlock.x - y.x) < D && (x /= Math.abs(Math.sin(k.indexLabelAngle)),
                        9 < x && (x *= 0.3), x > c && (c = x)));
                    b = function(a, b, c) {
                        for (var d = [], e = 0; d.push(s[b]), b !== c; b = (b + 1 + n.length) % n.length);
                        d.sort(function(a, b) { return a.y - b.y });
                        for (b = 0; b < d.length; b++)
                            if (c = d[b], e < a) e += c.indexLabelTextBlock.height, c.indexLabelTextBlock.text = "", c.indexLabelText = "", c.indexLabelTextBlock.measureText();
                            else break
                    };
                    v = k = -1;
                    for (A = E = 0; A < n.length; A++)
                        if (p = s[A], p.indexLabelText) {
                            var F = f(A);
                            null !== F && (r = s[F], x = 0, x = e(p, r), 0 > x && d(p, r) ? (0 > k && (k = A), F !== k && (v = F), E += -x) : 0 < E && (b(E, k, v), v = k = -1, E = 0))
                        }
                    0 < E && b(E, k, v)
                }
            }

            function p() {
                l.plotArea.layoutManager.reset();
                l._title && (l._title.dockInsidePlotArea || "center" === l._title.horizontalAlign && "center" === l._title.verticalAlign) && l._title.render();
                if (l.subtitles)
                    for (var a = 0; a < l.subtitles.length; a++) {
                        var b = l.subtitles[a];
                        (b.dockInsidePlotArea || "center" === b.horizontalAlign && "center" === b.verticalAlign) && b.render()
                    }
                l.legend && (l.legend.dockInsidePlotArea || "center" === l.legend.horizontalAlign && "center" === l.legend.verticalAlign) && l.legend.render()
            }
            var l = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                for (var h =
                        this.data[a.dataSeriesIndexes[0]], n = h.dataPoints, m = 10, q = this.plotArea, r = 0, s = [], t = 2, u = 1.3, v = 20 / 180 * Math.PI, w = 6, y = { x: (q.x2 + q.x1) / 2, y: (q.y2 + q.y1) / 2 }, D = "inside" === h.indexLabelPlacement ? 0.92 * Math.min(q.width, q.height) / 2 : 0.8 * Math.min(q.width, q.height) / 2, B = D * u, A = 0, x = 0; x < n.length; x++) A += Math.abs(n[x].y);
                0 !== A && (this.pieDoughnutClickHandler = function(a) {
                    l.isAnimating || (a = a.dataPoint, a.exploded = a.exploded ? !1 : !0, 1 < this.dataPoints.length && l._animator.animate(0, 500, function(a) {
                        c(a);
                        p()
                    }))
                }, b(), k(), this.disableToolTip = !0, this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a) {
                        var b = l.plotArea.ctx;
                        b.clearRect(q.x1, q.y1, q.width, q.height);
                        b.fillStyle = l.backgroundColor;
                        b.fillRect(q.x1, q.y1, q.width, q.height);
                        a = s[0].startAngle + 2 * Math.PI * a;
                        for (b = 0; b < n.length; b++) {
                            var c = 0 === b ? s[b].startAngle : d,
                                d = c + (s[b].endAngle - s[b].startAngle),
                                e = !1;
                            d > a && (d = a, e = !0);
                            var f = n[b].color ? n[b].color : h._colorSet[b % h._colorSet.length];
                            d > c && ta(l.plotArea.ctx, s[b].center, s[b].radius, f, h.type, c, d, h.fillOpacity);
                            if (e) break
                        }
                        p()
                    },
                    function() {
                        l.disableToolTip = !1;
                        l._animator.animate(0, l.animatedRender ? 500 : 0, function(a) {
                            c(a);
                            p()
                        })
                    }))
            }
        };
    w.prototype.animationRequestId = null;
    w.prototype.requestAnimFrame = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) { window.setTimeout(a, 1E3 / 60) } }();
    w.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
    Z.prototype.registerSpace = function(a, b) { "top" === a ? this._topOccupied += b.height : "bottom" === a ? this._bottomOccupied += b.height : "left" === a ? this._leftOccupied += b.width : "right" === a && (this._rightOccupied += b.width) };
    Z.prototype.unRegisterSpace = function(a, b) { "top" === a ? this._topOccupied -= b.height : "bottom" === a ? this._bottomOccupied -= b.height : "left" === a ? this._leftOccupied -= b.width : "right" === a && (this._rightOccupied -= b.width) };
    Z.prototype.getFreeSpace = function() { return { x1: this._x1 + this._leftOccupied, y1: this._y1 + this._topOccupied, x2: this._x2 - this._rightOccupied, y2: this._y2 - this._bottomOccupied, width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied, height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied } };
    Z.prototype.reset = function() { this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding };
    O(G, F);
    G.prototype.render = function(a) {
        a && this.ctx.save();
        var b = this.ctx.font;
        this.ctx.textBaseline =
            this.textBaseline;
        var c = 0;
        this._isDirty && this.measureText(this.ctx);
        this.ctx.translate(this.x, this.y + c);
        "middle" === this.textBaseline && (c = -this._lineHeight / 2);
        this.ctx.font = this._getFontString();
        this.ctx.rotate(Math.PI / 180 * this.angle);
        var d = 0,
            e = this.padding,
            f = null;
        (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, c, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
        this.ctx.fillStyle = this.fontColor;
        for (c = 0; c < this._wrappedText.lines.length; c++) f =
            this._wrappedText.lines[c], "right" === this.horizontalAlign ? d = this.width - f.width - this.padding : "left" === this.horizontalAlign ? d = this.padding : "center" === this.horizontalAlign && (d = (this.width - 2 * this.padding) / 2 - f.width / 2 + this.padding), this.ctx.fillText(f.text, d, e), e += f.height;
        this.ctx.font = b;
        a && this.ctx.restore()
    };
    G.prototype.setText = function(a) {
        this.text = a;
        this._isDirty = !0;
        this._wrappedText = null
    };
    G.prototype.measureText = function() {
        if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = !1;
        return { width: this.width, height: this.height }
    };
    G.prototype._getLineWithWidth = function(a, b, c) {
        a = String(a);
        if (!a) return { text: "", width: 0 };
        var d = c = 0,
            e = a.length - 1,
            f = Infinity;
        for (this.ctx.font = this._getFontString(); d <= e;) {
            var f = Math.floor((d + e) / 2),
                g = a.substr(0, f + 1);
            c = this.ctx.measureText(g).width;
            if (c < b) d = f + 1;
            else if (c > b) e = f - 1;
            else break
        }
        c > b && 1 < g.length && (g = g.substr(0, g.length - 1), c = this.ctx.measureText(g).width);
        b = !0;
        if (g.length === a.length || " " === a[g.length]) b = !1;
        b && (a = g.split(" "), 1 < a.length && a.pop(), g = a.join(" "), c = this.ctx.measureText(g).width);
        return { text: g, width: c }
    };
    G.prototype._wrapText = function() {
        var a = new String(aa(String(this.text))),
            b = [],
            c = this.ctx.font,
            d = 0,
            e = 0;
        for (this.ctx.font = this._getFontString(); 0 < a.length;) {
            var f = this.maxHeight - 2 * this.padding,
                g = this._getLineWithWidth(a, this.maxWidth - 2 * this.padding, !1);
            g.height = this._lineHeight;
            b.push(g);
            e = Math.max(e, g.width);
            d += g.height;
            a = aa(a.slice(g.text.length, a.length));
            f && d > f && (g = b.pop(), d -= g.height)
        }
        this._wrappedText = { lines: b, width: e, height: d };
        this.width = e + 2 * this.padding;
        this.height = d + 2 * this.padding;
        this.ctx.font = c
    };
    G.prototype._getFontString = function() {
        var a;
        a = "" + (this.fontStyle ? this.fontStyle + " " : "");
        a += this.fontWeight ? this.fontWeight + " " : "";
        a += this.fontSize ? this.fontSize + "px " : "";
        var b = this.fontFamily ? this.fontFamily + "" : "";
        !t && b && (b = b.split(",")[0], "'" !== b[0] && '"' !== b[0] && (b = "'" + b + "'"));
        return a += b
    };
    O(ca, F);
    ca.prototype.render = function() {
        if (this.text) {
            var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                b = a.layoutManager.getFreeSpace(),
                c = b.x1,
                d = b.y1,
                e = 0,
                f = 0,
                g = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 22 : 0,
                k, p;
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = b.width - 4 - g * ("center" === this.horizontalAlign ? 2 : 1)), f = 0.5 * b.height - this.margin - 2, e = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = b.height - 4), f = 0.5 * b.width - this.margin - 2) : "center" ===
                this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = b.width - 4), f = 0.5 * b.height - 4));
            this.wrap || (f = Math.min(f, Math.max(1.5 * this.fontSize, this.fontSize + 2.5 * this.padding)));
            var f = new G(this.ctx, {
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    fontWeight: this.fontWeight,
                    horizontalAlign: this.horizontalAlign,
                    verticalAlign: this.verticalAlign,
                    borderColor: this.borderColor,
                    borderThickness: this.borderThickness,
                    backgroundColor: this.backgroundColor,
                    maxWidth: this.maxWidth,
                    maxHeight: f,
                    cornerRadius: this.cornerRadius,
                    text: this.text,
                    padding: this.padding,
                    textBaseline: "top"
                }),
                l = f.measureText();
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (d = b.y1 + 2, p = "top") : "bottom" === this.verticalAlign && (d = b.y2 - 2 - l.height, p = "bottom"), "left" === this.horizontalAlign ? c = b.x1 + 2 : "center" === this.horizontalAlign ? c = b.x1 + b.width / 2 - l.width / 2 : "right" === this.horizontalAlign && (c = b.x2 - 2 - l.width - g), k = this.horizontalAlign, this.width = l.width, this.height = l.height) : "center" ===
                this.verticalAlign && ("left" === this.horizontalAlign ? (c = b.x1 + 2, d = b.y2 - 2 - (this.maxWidth / 2 - l.width / 2), e = -90, p = "left", this.width = l.height, this.height = l.width) : "right" === this.horizontalAlign ? (c = b.x2 - 2, d = b.y1 + 2 + (this.maxWidth / 2 - l.width / 2), e = 90, p = "right", this.width = l.height, this.height = l.width) : "center" === this.horizontalAlign && (d = a.y1 + (a.height / 2 - l.height / 2), c = a.x1 + (a.width / 2 - l.width / 2), p = "center", this.width = l.width, this.height = l.height), k = "center");
            f.x = c;
            f.y = d;
            f.angle = e;
            f.horizontalAlign = k;
            f.render(!0);
            a.layoutManager.registerSpace(p, { width: this.width + ("left" === p || "right" === p ? this.margin + 2 : 0), height: this.height + ("top" === p || "bottom" === p ? this.margin + 2 : 0) });
            this.bounds = { x1: c, y1: d, x2: c + this.width, y2: d + this.height };
            this.ctx.textBaseline = "top"
        }
    };
    O(ja, F);
    ja.prototype.render = ca.prototype.render;
    O(ka, F);
    ka.prototype.render = function() {
        var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
            b = a.layoutManager.getFreeSpace(),
            c = null,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            k = [],
            p = [];
        "top" === this.verticalAlign || "bottom" === this.verticalAlign ?
            (this.orientation = "horizontal", c = this.verticalAlign, f = null !== this.maxWidth ? this.maxWidth : 0.7 * b.width, g = null !== this.maxHeight ? this.maxHeight : 0.5 * b.height) : "center" === this.verticalAlign && (this.orientation = "vertical", c = this.horizontalAlign, f = null !== this.maxWidth ? this.maxWidth : 0.5 * b.width, g = null !== this.maxHeight ? this.maxHeight : 0.7 * b.height);
        for (var l = 0; l < this.dataSeries.length; l++) {
            var h = this.dataSeries[l];
            if ("pie" !== h.type && "doughnut" !== h.type && "funnel" !== h.type) {
                var n = h.legendMarkerType ? h.legendMarkerType :
                    "line" !== h.type && "stepLine" !== h.type && "spline" !== h.type && "scatter" !== h.type && "bubble" !== h.type || !h.markerType ? R.getDefaultLegendMarker(h.type) : h.markerType,
                    m = h.legendText ? h.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this._options, dataSeries: h, dataPoint: null }) : h.name,
                    q = h.legendMarkerColor ? h.legendMarkerColor : h.markerColor ? h.markerColor : h._colorSet[0],
                    r = h.markerSize || "line" !== h.type && "stepLine" !== h.type && "spline" !== h.type ? 0.6 * this.lineHeight : 0,
                    s = h.legendMarkerBorderColor ?
                    h.legendMarkerBorderColor : h.markerBorderColor,
                    t = h.legendMarkerBorderThickness ? h.legendMarkerBorderThickness : h.markerBorderThickness ? Math.max(1, Math.round(0.2 * r)) : 0,
                    m = this.chart.replaceKeywordsWithValue(m, h.dataPoints[0], h, l),
                    n = { markerType: n, markerColor: q, text: m, textBlock: null, chartType: h.type, markerSize: r, lineColor: h._colorSet[0], dataSeriesIndex: h.index, dataPointIndex: null, markerBorderColor: s, markerBorderThickness: t };
                k.push(n)
            } else
                for (var u = 0; u < h.dataPoints.length; u++) {
                    var v = h.dataPoints[u],
                        n = v.legendMarkerType ?
                        v.legendMarkerType : h.legendMarkerType ? h.legendMarkerType : R.getDefaultLegendMarker(h.type),
                        m = v.legendText ? v.legendText : h.legendText ? h.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this._options, dataSeries: h, dataPoint: v }) : v.name ? v.name : "DataPoint: " + (u + 1),
                        q = v.legendMarkerColor ? v.legendMarkerColor : h.legendMarkerColor ? h.legendMarkerColor : v.color ? v.color : h.color ? h.color : h._colorSet[u % h._colorSet.length],
                        r = 0.6 * this.lineHeight,
                        s = v.legendMarkerBorderColor ? v.legendMarkerBorderColor :
                        h.legendMarkerBorderColor ? h.legendMarkerBorderColor : v.markerBorderColor ? v.markerBorderColor : h.markerBorderColor,
                        t = v.legendMarkerBorderThickness ? v.legendMarkerBorderThickness : h.legendMarkerBorderThickness ? h.legendMarkerBorderThickness : v.markerBorderThickness || h.markerBorderThickness ? Math.max(1, Math.round(0.2 * r)) : 0,
                        m = this.chart.replaceKeywordsWithValue(m, v, h, u),
                        n = { markerType: n, markerColor: q, text: m, textBlock: null, chartType: h.type, markerSize: r, dataSeriesIndex: l, dataPointIndex: u, markerBorderColor: s, markerBorderThickness: t };
                    (v.showInLegend || h.showInLegend && !1 !== v.showInLegend) && k.push(n)
                }
        }!0 === this.reversed && k.reverse();
        if (0 < k.length) {
            h = null;
            u = m = v = 0;
            m = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, f) : Math.min(this.itemWidth, f) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, f) : f;
            r = 0 === r ? 0.6 * this.lineHeight : r;
            m -= r + 0.1 * this.horizontalSpacing;
            for (l = 0; l < k.length; l++) {
                n = k[l];
                if ("line" === n.chartType || "spline" === n.chartType || "stepLine" === n.chartType) m -= 2 * 0.1 * this.lineHeight;
                if (!(0 >=
                        g || "undefined" === typeof g || 0 >= m || "undefined" === typeof m)) {
                    if ("horizontal" === this.orientation) {
                        n.textBlock = new G(this.ctx, { x: 0, y: 0, maxWidth: m, maxHeight: this.itemWrap ? g : this.lineHeight, angle: 0, text: n.text, horizontalAlign: "left", fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "top" });
                        n.textBlock.measureText();
                        null !== this.itemWidth && (n.textBlock.width = this.itemWidth - (r + 0.1 * this.horizontalSpacing + ("line" === n.chartType ||
                            "spline" === n.chartType || "stepLine" === n.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                        if (!h || h.width + Math.round(n.textBlock.width + 0.1 * this.horizontalSpacing + r + (0 === h.width ? 0 : this.horizontalSpacing) + ("line" === n.chartType || "spline" === n.chartType || "stepLine" === n.chartType ? 2 * 0.1 * this.lineHeight : 0)) > f) h = { items: [], width: 0 }, p.push(h), this.height += u, u = 0;
                        u = Math.max(u, n.textBlock.height)
                    } else n.textBlock = new G(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: m,
                        maxHeight: !0 === this.itemWrap ? g : 1.5 * this.fontSize,
                        angle: 0,
                        text: n.text,
                        horizontalAlign: "left",
                        fontSize: this.fontSize,
                        fontFamily: this.fontFamily,
                        fontWeight: this.fontWeight,
                        fontColor: this.fontColor,
                        fontStyle: this.fontStyle,
                        textBaseline: "top"
                    }), n.textBlock.measureText(), null !== this.itemWidth && (n.textBlock.width = this.itemWidth - (r + 0.1 * this.horizontalSpacing + ("line" === n.chartType || "spline" === n.chartType || "stepLine" === n.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height <= g ? (h = { items: [], width: 0 }, p.push(h)) : (h = p[v], v = (v + 1) % p.length), this.height += n.textBlock.height;
                    n.textBlock.x = h.width;
                    n.textBlock.y =
                        0;
                    h.width += Math.round(n.textBlock.width + 0.1 * this.horizontalSpacing + r + (0 === h.width ? 0 : this.horizontalSpacing) + ("line" === n.chartType || "spline" === n.chartType || "stepLine" === n.chartType ? 2 * 0.1 * this.lineHeight : 0));
                    h.items.push(n);
                    this.width = Math.max(h.width, this.width)
                }
            }
            this.height = !1 === this.itemWrap ? p.length * this.lineHeight : this.height + u;
            this.height = Math.min(g, this.height);
            this.width = Math.min(f, this.width)
        }
        "top" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? b.x1 : "right" === this.horizontalAlign ? b.x2 -
            this.width : b.x1 + b.width / 2 - this.width / 2, d = b.y1) : "center" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? b.x1 : "right" === this.horizontalAlign ? b.x2 - this.width : b.x1 + b.width / 2 - this.width / 2, d = b.y1 + b.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (e = "left" === this.horizontalAlign ? b.x1 : "right" === this.horizontalAlign ? b.x2 - this.width : b.x1 + b.width / 2 - this.width / 2, d = b.y2 - this.height);
        this.items = k;
        for (l = 0; l < this.items.length; l++) n = k[l], n.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[n.id] = { id: n.id, objectType: "legendItem", legendItemIndex: l, dataSeriesIndex: n.dataSeriesIndex, dataPointIndex: n.dataPointIndex };
        for (l = b = 0; l < p.length; l++) {
            h = p[l];
            for (k = u = 0; k < h.items.length; k++) {
                n = h.items[k];
                m = n.textBlock.x + e + (0 === k ? 0.2 * r : this.horizontalSpacing);
                q = d + b;
                v = m;
                this.chart.data[n.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
                this.ctx.save();
                this.ctx.rect(e, d, f, g);
                this.ctx.clip();
                if ("line" === n.chartType || "stepLine" === n.chartType || "spline" === n.chartType) this.ctx.strokeStyle = n.lineColor, this.ctx.lineWidth =
                    Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(m - 0.1 * this.lineHeight, q + this.lineHeight / 2), this.ctx.lineTo(m + 0.7 * this.lineHeight, q + this.lineHeight / 2), this.ctx.stroke(), v -= 0.1 * this.lineHeight;
                K.drawMarker(m + r / 2, q + this.lineHeight / 2, this.ctx, n.markerType, n.markerSize, n.markerColor, n.markerBorderColor, n.markerBorderThickness);
                n.textBlock.x = m + 0.1 * this.horizontalSpacing + r;
                if ("line" === n.chartType || "stepLine" === n.chartType || "spline" === n.chartType) n.textBlock.x += 0.1 * this.lineHeight;
                n.textBlock.y =
                    q;
                n.textBlock.render(!0);
                this.ctx.restore();
                u = 0 < k ? Math.max(u, n.textBlock.height) : n.textBlock.height;
                this.chart.data[n.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                m = A(n.id);
                this.ghostCtx.fillStyle = m;
                this.ghostCtx.beginPath();
                this.ghostCtx.fillRect(v, n.textBlock.y, n.textBlock.x + n.textBlock.width - v, n.textBlock.height);
                n.x1 = this.chart._eventManager.objectMap[n.id].x1 = v;
                n.y1 = this.chart._eventManager.objectMap[n.id].y1 = n.textBlock.y;
                n.x2 = this.chart._eventManager.objectMap[n.id].x2 = n.textBlock.x +
                    n.textBlock.width;
                n.y2 = this.chart._eventManager.objectMap[n.id].y2 = n.textBlock.y + n.textBlock.height
            }
            b += u
        }
        a.layoutManager.registerSpace(c, { width: this.width + 2 + 2, height: this.height + 5 + 5 });
        this.bounds = { x1: e, y1: d, x2: e + this.width, y2: d + this.height }
    };
    O(qa, F);
    qa.prototype.render = function() {
        var a = this.chart.layoutManager.getFreeSpace();
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(a.x1, a.y1, a.x2, a.y2)
    };
    O(R, F);
    R.prototype.getDefaultAxisPlacement = function() {
        var a = this.type;
        if ("column" === a || "line" === a || "stepLine" ===
            a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a) return "normal";
        if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
        if ("pie" === a || "doughnut" === a || "funnel" === a) return "none";
        window.console.log("Unknown Chart Type: " +
            a);
        return null
    };
    R.getDefaultLegendMarker = function(a) {
        if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a) return "square";
        if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a || "funnel" === a) return "circle";
        if ("area" === a || "splineArea" ===
            a || "stackedArea" === a || "stackedArea100" === a) return "triangle";
        window.console.log("Unknown Chart Type: " + a);
        return null
    };
    R.prototype.getDataPointAtX = function(a, b) {
        if (!this.dataPoints || 0 === this.dataPoints.length) return null;
        var c = { dataPoint: null, distance: Infinity, index: NaN },
            d = null,
            e = 0,
            f = 0,
            g = 1,
            k = Infinity,
            p = 0,
            l = 0,
            h = 0;
        "none" !== this.chart.plotInfo.axisPlacement && (h = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, h = 0 < h ? Math.min(Math.max((this.dataPoints.length - 1) / h * (a - this.dataPoints[0].x) >>
            0, 0), this.dataPoints.length) : 0);
        for (;;) {
            f = 0 < g ? h + e : h - e;
            if (0 <= f && f < this.dataPoints.length) {
                var d = this.dataPoints[f],
                    n = Math.abs(d.x - a);
                n < c.distance && (c.dataPoint = d, c.distance = n, c.index = f);
                d = Math.abs(d.x - a);
                d <= k ? k = d : 0 < g ? p++ : l++;
                if (1E3 < p && 1E3 < l) break
            } else if (0 > h - e && h + e >= this.dataPoints.length) break; - 1 === g ? (e++, g = 1) : g = -1
        }
        return b || c.dataPoint.x !== a ? b && null !== c.dataPoint ? c : null : c
    };
    R.prototype.getDataPointAtXY = function(a, b, c) {
        if (!this.dataPoints || 0 === this.dataPoints.length) return null;
        c = c || !1;
        var d = [],
            e =
            0,
            f = 0,
            g = 1,
            k = !1,
            p = Infinity,
            l = 0,
            h = 0,
            n = 0;
        "none" !== this.chart.plotInfo.axisPlacement && (n = this.chart.axisX.getXValueAt({ x: a, y: b }), f = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, n = 0 < f ? Math.min(Math.max((this.dataPoints.length - 1) / f * (n - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0);
        for (;;) {
            f = 0 < g ? n + e : n - e;
            if (0 <= f && f < this.dataPoints.length) {
                var m = this.chart._eventManager.objectMap[this.dataPointIds[f]],
                    q = this.dataPoints[f],
                    r = null;
                if (m) {
                    switch (this.type) {
                        case "column":
                        case "stackedColumn":
                        case "stackedColumn100":
                        case "bar":
                        case "stackedBar":
                        case "stackedBar100":
                        case "rangeColumn":
                        case "rangeBar":
                            a >=
                                m.x1 && (a <= m.x2 && b >= m.y1 && b <= m.y2) && (d.push({ dataPoint: q, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(m.x1 - a), Math.abs(m.x2 - a), Math.abs(m.y1 - b), Math.abs(m.y2 - b)) }), k = !0);
                            break;
                        case "line":
                        case "stepLine":
                        case "spline":
                        case "area":
                        case "stepArea":
                        case "stackedArea":
                        case "stackedArea100":
                        case "splineArea":
                        case "scatter":
                            var s = N("markerSize", q, this) || 4,
                                t = c ? 20 : s,
                                r = Math.sqrt(Math.pow(m.x1 - a, 2) + Math.pow(m.y1 - b, 2));
                            r <= t && d.push({ dataPoint: q, dataPointIndex: f, dataSeries: this, distance: r });
                            f = Math.abs(m.x1 -
                                a);
                            f <= p ? p = f : 0 < g ? l++ : h++;
                            r <= s / 2 && (k = !0);
                            break;
                        case "rangeArea":
                        case "rangeSplineArea":
                            s = N("markerSize", q, this) || 4;
                            t = c ? 20 : s;
                            r = Math.min(Math.sqrt(Math.pow(m.x1 - a, 2) + Math.pow(m.y1 - b, 2)), Math.sqrt(Math.pow(m.x1 - a, 2) + Math.pow(m.y2 - b, 2)));
                            r <= t && d.push({ dataPoint: q, dataPointIndex: f, dataSeries: this, distance: r });
                            f = Math.abs(m.x1 - a);
                            f <= p ? p = f : 0 < g ? l++ : h++;
                            r <= s / 2 && (k = !0);
                            break;
                        case "bubble":
                            s = m.size;
                            r = Math.sqrt(Math.pow(m.x1 - a, 2) + Math.pow(m.y1 - b, 2));
                            r <= s / 2 && (d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: r
                            }), k = !0);
                            break;
                        case "pie":
                        case "doughnut":
                            s = m.center;
                            t = "doughnut" === this.type ? 0.6 * m.radius : 0;
                            r = Math.sqrt(Math.pow(s.x - a, 2) + Math.pow(s.y - b, 2));
                            r < m.radius && r > t && (r = Math.atan2(b - s.y, a - s.x), 0 > r && (r += 2 * Math.PI), r = Number(((180 * (r / Math.PI) % 360 + 360) % 360).toFixed(12)), s = Number(((180 * (m.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), t = Number(((180 * (m.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === t && 1 < m.endAngle && (t = 360), s >= t && 0 !== q.y && (t += 360, r < s && (r += 360)), r > s && r < t && (d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: 0
                            }), k = !0));
                            break;
                        case "candlestick":
                            if (a >= m.x1 - m.borderThickness / 2 && a <= m.x2 + m.borderThickness / 2 && b >= m.y2 - m.borderThickness / 2 && b <= m.y3 + m.borderThickness / 2 || Math.abs(m.x2 - a + m.x1 - a) < m.borderThickness && b >= m.y1 && b <= m.y4) d.push({ dataPoint: q, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(m.x1 - a), Math.abs(m.x2 - a), Math.abs(m.y2 - b), Math.abs(m.y3 - b)) }), k = !0;
                            break;
                        case "ohlc":
                            if (Math.abs(m.x2 - a + m.x1 - a) < m.borderThickness && b >= m.y2 && b <= m.y3 || a >= m.x1 && a <= (m.x2 + m.x1) / 2 && b >= m.y1 -
                                m.borderThickness / 2 && b <= m.y1 + m.borderThickness / 2 || a >= (m.x1 + m.x2) / 2 && a <= m.x2 && b >= m.y4 - m.borderThickness / 2 && b <= m.y4 + m.borderThickness / 2) d.push({ dataPoint: q, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(m.x1 - a), Math.abs(m.x2 - a), Math.abs(m.y2 - b), Math.abs(m.y3 - b)) }), k = !0
                    }
                    if (k || 1E3 < l && 1E3 < h) break
                }
            } else if (0 > n - e && n + e >= this.dataPoints.length) break; - 1 === g ? (e++, g = 1) : g = -1
        }
        a = null;
        for (b = 0; b < d.length; b++) a ? d[b].distance <= a.distance && (a = d[b]) : a = d[b];
        return a
    };
    R.prototype.getMarkerProperties = function(a,
        b, c, d) {
        var e = this.dataPoints;
        return {
            x: b,
            y: c,
            ctx: d,
            type: e[a].markerType ? e[a].markerType : this.markerType,
            size: e[a].markerSize ? e[a].markerSize : this.markerSize,
            color: e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
            borderColor: e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
            borderThickness: e[a].markerBorderThickness ? e[a].markerBorderThickness : this.markerBorderThickness ?
                this.markerBorderThickness : null
        }
    };
    O(x, F);
    x.prototype.createLabels = function() {
        var a, b = 0,
            c, d = 0,
            e = 0,
            b = 0;
        if ("bottom" === this._position || "top" === this._position) b = this.lineCoordinates.width / Math.abs(this.maximum - this.minimum) * this.interval, d = this.labelAutoFit ? "undefined" === typeof this._options.labelMaxWidth ? 0.9 * b >> 0 : this.labelMaxWidth : "undefined" === typeof this._options.labelMaxWidth ? 0.7 * this.chart.width >> 0 : this.labelMaxWidth, e = "undefined" === typeof this._options.labelWrap || this.labelWrap ? 0.5 * this.chart.height >>
            0 : 1.5 * this.labelFontSize;
        else if ("left" === this._position || "right" === this._position) b = this.lineCoordinates.height / Math.abs(this.maximum - this.minimum) * this.interval, d = this.labelAutoFit ? "undefined" === typeof this._options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.labelMaxWidth : "undefined" === typeof this._options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.labelMaxWidth, e = "undefined" === typeof this._options.labelWrap || this.labelWrap ? 2 * b >> 0 : 1.5 * this.labelFontSize;
        if ("axisX" === this.type && "dateTime" === this.chart.plotInfo.axisXValueType)
            for (c =
                ua(new Date(this.maximum), this.interval, this.intervalType), b = this.intervalstartTimePercent; b < c; ua(b, this.interval, this.intervalType)) a = b.getTime(), a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this._options, value: b, label: this.labels[b] ? this.labels[b] : null }) : "axisX" === this.type && this.labels[a] ? this.labels[a] : sa(b, this.valueFormatString, this.chart._cultureInfo), a = new G(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: d,
                maxHeight: e,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                horizontalAlign: "left",
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
            }), this._labels.push({ position: b.getTime(), textBlock: a, effectiveHeight: null });
        else {
            c = this.maximum;
            if (this.labels && this.labels.length) {
                a = Math.ceil(this.interval);
                for (var f = Math.ceil(this.intervalstartTimePercent), g = !1, b = f; b < this.maximum; b += a)
                    if (this.labels[b]) g = !0;
                    else { g = !1; break }
                g && (this.interval = a, this.intervalstartTimePercent =
                    f)
            }
            for (b = this.intervalstartTimePercent; b <= c; b = parseFloat((b + this.interval).toFixed(14))) a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this._options, value: b, label: this.labels[b] ? this.labels[b] : null }) : "axisX" === this.type && this.labels[b] ? this.labels[b] : X(b, this.valueFormatString, this.chart._cultureInfo), a = new G(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: d,
                maxHeight: e,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                horizontalAlign: "left",
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle",
                borderThickness: 0
            }), this._labels.push({ position: b, textBlock: a, effectiveHeight: null })
        }
        for (b = 0; b < this.stripLines.length; b++) c = this.stripLines[b], a = new G(this.ctx, {
            x: 0,
            y: 0,
            backgroundColor: c.labelBackgroundColor,
            maxWidth: d,
            maxHeight: e,
            angle: this.labelAngle,
            text: c.labelFormatter ? c.labelFormatter({ chart: this.chart, axis: this, stripLine: c }) : c.label,
            horizontalAlign: "left",
            fontSize: c.labelFontSize,
            fontFamily: c.labelFontFamily,
            fontWeight: c.labelFontWeight,
            fontColor: c._options.labelFontColor || c.color,
            fontStyle: c.labelFontStyle,
            textBaseline: "middle",
            borderThickness: 0
        }), this._labels.push({ position: c.value, textBlock: a, effectiveHeight: null, stripLine: c })
    };
    x.prototype.createLabelsAndCalculateWidth = function() {
        var a = 0;
        this._labels = [];
        if ("left" === this._position || "right" === this._position)
            for (this.createLabels(), i = 0; i < this._labels.length; i++) {
                var b = this._labels[i].textBlock.measureText(),
                    c = 0,
                    c = 0 === this.labelAngle ?
                    b.width : b.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + b.height / 2 * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                a < c && (a = c);
                this._labels[i].effectiveWidth = c
            }
        return (this.title ? fa(this.titleFontFamily, this.titleFontSize, this.titleFontWeight) + 2 : 0) + a + this.tickLength + 5
    };
    x.prototype.createLabelsAndCalculateHeight = function() {
        var a = 0;
        this._labels = [];
        var b, c = 0;
        this.createLabels();
        if ("bottom" === this._position || "top" === this._position)
            for (c = 0; c < this._labels.length; c++) {
                b = this._labels[c].textBlock;
                b =
                    b.measureText();
                var d = 0,
                    d = 0 === this.labelAngle ? b.height : b.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + b.height / 2 * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                a < d && (a = d);
                this._labels[c].effectiveHeight = d
            }
        return (this.title ? fa(this.titleFontFamily, this.titleFontSize, this.titleFontWeight) + 2 : 0) + a + this.tickLength + 5
    };
    x.setLayoutAndRender = function(a, b, c, d, e) {
        var f, g, k, p = a.chart,
            l = p.ctx;
        a.calculateAxisParameters();
        b && b.calculateAxisParameters();
        c && c.calculateAxisParameters();
        if (b && c && "undefined" ===
            typeof b._options.maximum && "undefined" === typeof b._options.minimum && "undefined" === typeof b._options.interval && "undefined" === typeof c._options.maximum && "undefined" === typeof c._options.minimum && "undefined" === typeof c._options.interval) {
            k = (b.maximum - b.minimum) / b.interval;
            var h = (c.maximum - c.minimum) / c.interval;
            k > h ? c.maximum = c.interval * k + c.minimum : h > k && (b.maximum = b.interval * h + b.minimum)
        }
        h = b ? b.margin : 0;
        if ("normal" === d) {
            a.lineCoordinates = {};
            var n = Math.ceil(b ? b.createLabelsAndCalculateWidth() : 0);
            f = Math.round(e.x1 +
                n + h);
            a.lineCoordinates.x1 = f;
            h = Math.ceil(c ? c.createLabelsAndCalculateWidth() : 0);
            g = Math.round(e.x2 - h > a.chart.width - 10 ? a.chart.width - 10 : e.x2 - h);
            a.lineCoordinates.x2 = g;
            a.lineCoordinates.width = Math.abs(g - f);
            var m = Math.ceil(a.createLabelsAndCalculateHeight());
            d = Math.round(e.y2 - m - a.margin);
            k = Math.round(e.y2 - a.margin);
            a.lineCoordinates.y1 = d;
            a.lineCoordinates.y2 = d;
            a.boundingRect = { x1: f, y1: d, x2: g, y2: k, width: g - f, height: k - d };
            b && (f = Math.round(e.x1 + b.margin), d = Math.round(10 > e.y1 ? 10 : e.y1), g = Math.round(e.x1 + n + b.margin),
                k = Math.round(e.y2 - m - a.margin), b.lineCoordinates = { x1: g, y1: d, x2: g, y2: k, height: Math.abs(k - d) }, b.boundingRect = { x1: f, y1: d, x2: g, y2: k, width: g - f, height: k - d });
            c && (f = Math.round(a.lineCoordinates.x2), d = Math.round(10 > e.y1 ? 10 : e.y1), g = Math.round(f + h + c.margin), k = Math.round(e.y2 - m - a.margin), c.lineCoordinates = { x1: f, y1: d, x2: f, y2: k, height: Math.abs(k - d) }, c.boundingRect = { x1: f, y1: d, x2: g, y2: k, width: g - f, height: k - d });
            a.calculateValueToPixelconversionParameters();
            b && b.calculateValueToPixelconversionParameters();
            c && c.calculateValueToPixelconversionParameters();
            l.save();
            l.rect(5, a.boundingRect.y1, a.chart.width - 10, a.boundingRect.height);
            l.clip();
            a.renderLabelsTicksAndTitle();
            l.restore();
            b && b.renderLabelsTicksAndTitle();
            c && c.renderLabelsTicksAndTitle()
        } else {
            n = Math.ceil(a.createLabelsAndCalculateWidth());
            b && (b.lineCoordinates = {}, f = Math.round(e.x1 + n + a.margin), g = Math.round(e.x2 > b.chart.width - 10 ? b.chart.width - 10 : e.x2), b.lineCoordinates.x1 = f, b.lineCoordinates.x2 = g, b.lineCoordinates.width = Math.abs(g - f));
            c && (c.lineCoordinates = {}, f = Math.round(e.x1 + n + a.margin), g = Math.round(e.x2 >
                c.chart.width - 10 ? c.chart.width - 10 : e.x2), c.lineCoordinates.x1 = f, c.lineCoordinates.x2 = g, c.lineCoordinates.width = Math.abs(g - f));
            var m = Math.ceil(b ? b.createLabelsAndCalculateHeight() : 0),
                q = Math.ceil(c ? c.createLabelsAndCalculateHeight() : 0);
            b && (d = Math.round(e.y2 - m - b.margin), k = Math.round(e.y2 - h > b.chart.height - 10 ? b.chart.height - 10 : e.y2 - h), b.lineCoordinates.y1 = d, b.lineCoordinates.y2 = d, b.boundingRect = { x1: f, y1: d, x2: g, y2: k, width: g - f, height: m });
            c && (d = Math.round(e.y1 + c.margin), k = e.y1 + c.margin + q, c.lineCoordinates.y1 =
                k, c.lineCoordinates.y2 = k, c.boundingRect = { x1: f, y1: d, x2: g, y2: k, width: g - f, height: q });
            f = Math.round(e.x1 + a.margin);
            d = Math.round(c ? c.lineCoordinates.y2 : 10 > e.y1 ? 10 : e.y1);
            g = Math.round(e.x1 + n + a.margin);
            k = Math.round(b ? b.lineCoordinates.y1 : e.y2 - h > a.chart.height - 10 ? a.chart.height - 10 : e.y2 - h);
            a.lineCoordinates = { x1: g, y1: d, x2: g, y2: k, height: Math.abs(k - d) };
            a.boundingRect = { x1: f, y1: d, x2: g, y2: k, width: g - f, height: k - d };
            a.calculateValueToPixelconversionParameters();
            b && b.calculateValueToPixelconversionParameters();
            c && c.calculateValueToPixelconversionParameters();
            b && b.renderLabelsTicksAndTitle();
            c && c.renderLabelsTicksAndTitle();
            a.renderLabelsTicksAndTitle()
        }
        p.preparePlotArea();
        e = a.chart.plotArea;
        l.save();
        l.rect(e.x1, e.y1, Math.abs(e.x2 - e.x1), Math.abs(e.y2 - e.y1));
        l.clip();
        a.renderStripLinesOfThicknessType("value");
        b && b.renderStripLinesOfThicknessType("value");
        c && c.renderStripLinesOfThicknessType("value");
        a.renderInterlacedColors();
        b && b.renderInterlacedColors();
        c && c.renderInterlacedColors();
        l.restore();
        a.renderGrid();
        b && b.renderGrid();
        c && c.renderGrid();
        a.renderAxisLine();
        b && b.renderAxisLine();
        c && c.renderAxisLine();
        a.renderStripLinesOfThicknessType("pixel");
        b && b.renderStripLinesOfThicknessType("pixel");
        c && c.renderStripLinesOfThicknessType("pixel")
    };
    x.prototype.renderLabelsTicksAndTitle = function() {
        var a = !1,
            b = 0,
            c = 1,
            d = 0;
        0 !== this.labelAngle && 360 !== this.labelAngle && (c = 1.2);
        if ("undefined" === typeof this._options.interval) {
            if ("bottom" === this._position || "top" === this._position) {
                for (e = 0; e < this._labels.length; e++) f = this._labels[e], f.position < this.minimum || f.stripLine || (f = f.textBlock.width *
                    Math.cos(Math.PI / 180 * this.labelAngle) + f.textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle), b += f);
                b > this.lineCoordinates.width * c && (a = !0)
            }
            if ("left" === this._position || "right" === this._position) {
                for (e = 0; e < this._labels.length; e++) f = this._labels[e], f.position < this.minimum || f.stripLine || (f = f.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + f.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), b += f);
                b > this.lineCoordinates.height * c && (a = !0)
            }
        }
        if ("bottom" === this._position) {
            for (var e = 0, f, e = 0; e < this._labels.length; e++)
                if (f =
                    this._labels[e], !(f.position < this.minimum || f.position > this.maximum)) {
                    b = this.getPixelCoordinatesOnAxis(f.position);
                    if (this.tickThickness && !this._labels[e].stripLine || this._labels[e].stripLine && "pixel" === this._labels[e].stripLine._thicknessType) this._labels[e].stripLine ? (c = this._labels[e].stripLine, this.ctx.lineWidth = c.thickness, this.ctx.strokeStyle = c.color) : (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor), c = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(),
                        this.ctx.moveTo(c, b.y << 0), this.ctx.lineTo(c, b.y + this.tickLength << 0), this.ctx.stroke();
                    if (!a || 0 === d++ % 2 || this._labels[e].stripLine) 0 === f.textBlock.angle ? (b.x -= f.textBlock.width / 2, b.y += this.tickLength + f.textBlock.fontSize / 2) : (b.x -= 0 > this.labelAngle ? f.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, b.y += this.tickLength + Math.abs(0 > this.labelAngle ? f.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), f.textBlock.x = b.x, f.textBlock.y = b.y, f.textBlock.render(!0)
                }
            this.title && (this._titleTextBlock =
                new G(this.ctx, { x: this.lineCoordinates.x1, y: this.boundingRect.y2 - this.titleFontSize - 5, maxWidth: this.lineCoordinates.width, maxHeight: 1.5 * this.titleFontSize, angle: 0, text: this.title, horizontalAlign: "center", fontSize: this.titleFontSize, fontFamily: this.titleFontFamily, fontWeight: this.titleFontWeight, fontColor: this.titleFontColor, fontStyle: this.titleFontStyle, textBaseline: "top" }), this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width /
                2, this._titleTextBlock.y = this.boundingRect.y2 - this._titleTextBlock.height - 3, this._titleTextBlock.render(!0))
        } else if ("top" === this._position) {
            for (e = 0; e < this._labels.length; e++)
                if (f = this._labels[e], !(f.position < this.minimum || f.position > this.maximum)) {
                    b = this.getPixelCoordinatesOnAxis(f.position);
                    if (this.tickThickness && !this._labels[e].stripLine || this._labels[e].stripLine && "pixel" === this._labels[e].stripLine._thicknessType) this._labels[e].stripLine ? (c = this._labels[e].stripLine, this.ctx.lineWidth = c.thickness,
                        this.ctx.strokeStyle = c.color) : (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor), c = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(c, b.y << 0), this.ctx.lineTo(c, b.y - this.tickLength << 0), this.ctx.stroke();
                    if (!a || 0 === d++ % 2 || this._labels[e].stripLine) 0 === f.textBlock.angle ? (b.x -= f.textBlock.width / 2, b.y -= this.tickLength + f.textBlock.height / 2) : (b.x -= 0 < this.labelAngle ? f.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, b.y -= this.tickLength + Math.abs(0 <
                        this.labelAngle ? f.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5 : 5)), f.textBlock.x = b.x, f.textBlock.y = b.y, f.textBlock.render(!0)
                }
            this.title && (this._titleTextBlock = new G(this.ctx, {
                x: this.lineCoordinates.x1,
                y: this.boundingRect.y1 + 1,
                maxWidth: this.lineCoordinates.width,
                maxHeight: 1.5 * this.titleFontSize,
                angle: 0,
                text: this.title,
                horizontalAlign: "center",
                fontSize: this.titleFontSize,
                fontFamily: this.titleFontFamily,
                fontWeight: this.titleFontWeight,
                fontColor: this.titleFontColor,
                fontStyle: this.titleFontStyle,
                textBaseline: "top"
            }), this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.render(!0))
        } else if ("left" === this._position) {
            for (e = 0; e < this._labels.length; e++)
                if (f = this._labels[e], !(f.position < this.minimum || f.position > this.maximum)) {
                    b = this.getPixelCoordinatesOnAxis(f.position);
                    if (this.tickThickness && !this._labels[e].stripLine || this._labels[e].stripLine && "pixel" === this._labels[e].stripLine._thicknessType) this._labels[e].stripLine ?
                        (c = this._labels[e].stripLine, this.ctx.lineWidth = c.thickness, this.ctx.strokeStyle = c.color) : (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor), c = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, c), this.ctx.lineTo(b.x - this.tickLength << 0, c), this.ctx.stroke();
                    if (!a || 0 === d++ % 2 || this._labels[e].stripLine) f.textBlock.x = b.x - f.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5, f.textBlock.y = 0 === this.labelAngle ? b.y : b.y - f.textBlock.width *
                        Math.sin(Math.PI / 180 * this.labelAngle), f.textBlock.render(!0)
                }
            this.title && (this._titleTextBlock = new G(this.ctx, { x: this.boundingRect.x1 + 1, y: this.lineCoordinates.y2, maxWidth: this.lineCoordinates.height, maxHeight: 1.5 * this.titleFontSize, angle: -90, text: this.title, horizontalAlign: "center", fontSize: this.titleFontSize, fontFamily: this.titleFontFamily, fontWeight: this.titleFontWeight, fontColor: this.titleFontColor, fontStyle: this.titleFontStyle, textBaseline: "top" }), this._titleTextBlock.measureText(), this._titleTextBlock.y =
                this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this._titleTextBlock.render(!0))
        } else if ("right" === this._position) {
            for (e = 0; e < this._labels.length; e++)
                if (f = this._labels[e], !(f.position < this.minimum || f.position > this.maximum)) {
                    b = this.getPixelCoordinatesOnAxis(f.position);
                    if (this.tickThickness && !this._labels[e].stripLine || this._labels[e].stripLine && "pixel" === this._labels[e].stripLine._thicknessType) this._labels[e].stripLine ? (c = this._labels[e].stripLine, this.ctx.lineWidth =
                        c.thickness, this.ctx.strokeStyle = c.color) : (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor), c = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, c), this.ctx.lineTo(b.x + this.tickLength << 0, c), this.ctx.stroke();
                    if (!a || 0 === d++ % 2 || this._labels[e].stripLine) f.textBlock.x = b.x + this.tickLength + 5, f.textBlock.y = b.y, f.textBlock.render(!0)
                }
            this.title && (this._titleTextBlock = new G(this.ctx, {
                x: this.boundingRect.x2 - 1,
                y: this.lineCoordinates.y2,
                maxWidth: this.lineCoordinates.height,
                maxHeight: 1.5 * this.titleFontSize,
                angle: 90,
                text: this.title,
                horizontalAlign: "center",
                fontSize: this.titleFontSize,
                fontFamily: this.titleFontFamily,
                fontWeight: this.titleFontWeight,
                fontColor: this.titleFontColor,
                fontStyle: this.titleFontStyle,
                textBaseline: "top"
            }), this._titleTextBlock.measureText(), this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this._titleTextBlock.render(!0))
        }
    };
    x.prototype.renderInterlacedColors = function() {
        var a = this.chart.plotArea.ctx,
            b, c, d = this.chart.plotArea,
            e = 0;
        b = !0;
        if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) this._labels[e].stripLine || (b ? (b = this.getPixelCoordinatesOnAxis(this._labels[e].position), c = e + 1 >= this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.maximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(b.x, d.y1, Math.abs(c.x - b.x), Math.abs(d.y1 - d.y2)), b = !1) : b = !0);
        else if (("left" === this._position ||
                "right" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) this._labels[e].stripLine || (b ? (c = this.getPixelCoordinatesOnAxis(this._labels[e].position), b = e + 1 >= this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.maximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(d.x1, b.y, Math.abs(d.x1 - d.x2), Math.abs(b.y - c.y)), b = !1) : b = !0);
        a.beginPath()
    };
    x.prototype.renderStripLinesOfThicknessType = function(a) {
        if (this.stripLines && 0 <
            this.stripLines.length && a)
            for (var b = 0, b = 0; b < this.stripLines.length; b++) {
                var c = this.stripLines[b];
                c._thicknessType === a && ("pixel" === a && (c.value < this.minimum || c.value > this.maximum) || (c.showOnTop ? this.chart.addEventListener("dataAnimationIterationEnd", c.render, c) : c.render()))
            }
    };
    x.prototype.renderGrid = function() {
        if (this.gridThickness && 0 < this.gridThickness) {
            var a = this.chart.ctx,
                b, c = this.chart.plotArea;
            a.lineWidth = this.gridThickness;
            a.strokeStyle = this.gridColor;
            a.setLineDash && a.setLineDash(M(this.gridDashType,
                this.gridThickness));
            if ("bottom" === this._position || "top" === this._position)
                for (d = 0; d < this._labels.length && !this._labels[d].stripLine; d++) this._labels[d].position < this.minimum || this._labels[d].position > this.maximum || (a.beginPath(), b = this.getPixelCoordinatesOnAxis(this._labels[d].position), b = 1 === a.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, a.moveTo(b, c.y1 << 0), a.lineTo(b, c.y2 << 0), a.stroke());
            else if ("left" === this._position || "right" === this._position)
                for (var d = 0; d < this._labels.length && !this._labels[d].stripLine; d++) 0 ===
                    d && "axisY" === this.type && this.chart.axisX && this.chart.axisX.lineThickness || (this._labels[d].position < this.minimum || this._labels[d].position > this.maximum) || (a.beginPath(), b = this.getPixelCoordinatesOnAxis(this._labels[d].position), b = 1 === a.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, a.moveTo(c.x1 << 0, b), a.lineTo(c.x2 << 0, b), a.stroke())
        }
    };
    x.prototype.renderAxisLine = function() {
        var a = this.chart.ctx;
        if ("bottom" === this._position || "top" === this._position) {
            if (this.lineThickness) {
                a.lineWidth = this.lineThickness;
                a.strokeStyle =
                    this.lineColor ? this.lineColor : "black";
                a.setLineDash && a.setLineDash(M(this.lineDashType, this.lineThickness));
                var b = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                a.beginPath();
                a.moveTo(this.lineCoordinates.x1, b);
                a.lineTo(this.lineCoordinates.x2, b);
                a.stroke()
            }
        } else "left" !== this._position && "right" !== this._position || !this.lineThickness || (a.lineWidth = this.lineThickness, a.strokeStyle = this.lineColor, a.setLineDash && a.setLineDash(M(this.lineDashType, this.lineThickness)),
            b = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0, a.beginPath(), a.moveTo(b, this.lineCoordinates.y1), a.lineTo(b, this.lineCoordinates.y2), a.stroke())
    };
    x.prototype.getPixelCoordinatesOnAxis = function(a) {
        var b = {},
            c = this.lineCoordinates.width,
            d = this.lineCoordinates.height;
        if ("bottom" === this._position || "top" === this._position) c /= Math.abs(this.maximum - this.minimum), b.x = this.lineCoordinates.x1 + c * (a - this.minimum), b.y = this.lineCoordinates.y1;
        if ("left" === this._position || "right" ===
            this._position) c = d / Math.abs(this.maximum - this.minimum), b.y = this.lineCoordinates.y2 - c * (a - this.minimum), b.x = this.lineCoordinates.x2;
        return b
    };
    x.prototype.getXValueAt = function(a) {
        if (!a) return null;
        var b = null;
        "left" === this._position ? b = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.height * (this.chart.axisX.lineCoordinates.y2 - a.y) + this.chart.axisX.minimum : "bottom" === this._position && (b = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.width *
            (a.x - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.minimum);
        return b
    };
    x.prototype.calculateValueToPixelconversionParameters = function(a) {
        a = { pixelPerUnit: null, minimum: null, reference: null };
        var b = this.lineCoordinates.width,
            c = this.lineCoordinates.height;
        a.minimum = this.minimum;
        if ("bottom" === this._position || "top" === this._position) a.pixelPerUnit = b / Math.abs(this.maximum - this.minimum), a.reference = this.lineCoordinates.x1;
        if ("left" === this._position || "right" === this._position) a.pixelPerUnit = -1 * c / Math.abs(this.maximum -
            this.minimum), a.reference = this.lineCoordinates.y2;
        this.conversionParameters = a
    };
    x.prototype.calculateAxisParameters = function() {
        var a = this.chart.layoutManager.getFreeSpace(),
            b = !1;
        "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
        var a = "axisX" === this.type ? 500 > this.maxWidth ? 8 : Math.max(6, Math.floor(this.maxWidth / 62)) : Math.max(Math.floor(this.maxWidth / 40), 2),
            c, d, e, f;
        f = 0;
        "axisX" === this.type ? (c = null !== this.sessionVariables.internalMinimum ?
            this.sessionVariables.internalMinimum : this.dataInfo.viewPortMin, d = null !== this.sessionVariables.internalMaximum ? this.sessionVariables.internalMaximum : this.dataInfo.viewPortMax, 0 === d - c && (f = "undefined" === typeof this._options.interval ? 0.4 : this._options.interval, d += f, c -= f), Infinity !== this.dataInfo.minDiff ? e = this.dataInfo.minDiff : 1 < d - c ? e = 0.5 * Math.abs(d - c) : (e = 1, "dateTime" === this.chart.plotInfo.axisXValueType && (b = !0))) : "axisY" === this.type && (c = "undefined" === typeof this._options.minimum || null === this._options.minimum ?
            this.dataInfo.viewPortMin : this._options.minimum, d = "undefined" === typeof this._options.maximum || null === this._options.maximum ? this.dataInfo.viewPortMax : this._options.maximum, isFinite(c) || isFinite(d) ? 0 === c && 0 === d ? (d += 9, c = 0) : 0 === d - c ? (f = Math.min(Math.abs(0.01 * Math.abs(d)), 5), d += f, c -= f) : c > d ? (f = Math.min(Math.abs(0.01 * Math.abs(d - c)), 5), 0 <= d ? c = d - f : d = c + f) : (f = Math.min(Math.abs(0.01 * Math.abs(d - c)), 0.05), 0 !== d && (d += f), 0 !== c && (c -= f)) : (d = "undefined" === typeof this._options.interval ? -Infinity : this._options.interval,
                c = 0), !this.includeZero || "undefined" !== typeof this._options.minimum && null !== this._options.minimum || 0 < c && (c = 0), !this.includeZero || "undefined" !== typeof this._options.maximum && null !== this._options.maximum || 0 > d && (d = 0));
        "axisX" === this.type && "dateTime" === this.chart.plotInfo.axisXValueType ? (f = d - c, this.intervalType || (f / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : f / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : f / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : f / 10 <= a ? (this.interval =
            10, this.intervalType = "millisecond") : f / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : f / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : f / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : f / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : f / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : f / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : f / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : f / 500 <= a ? (this.interval = 500, this.intervalType =
            "millisecond") : f / (1 * B.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : f / (2 * B.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : f / (5 * B.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : f / (10 * B.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : f / (15 * B.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : f / (20 * B.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : f / (30 * B.secondDuration) <= a ? (this.interval = 30, this.intervalType =
            "second") : f / (1 * B.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : f / (2 * B.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : f / (5 * B.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : f / (10 * B.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : f / (15 * B.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : f / (20 * B.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : f / (30 * B.minuteDuration) <= a ? (this.interval = 30, this.intervalType =
            "minute") : f / (1 * B.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : f / (2 * B.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : f / (3 * B.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : f / (6 * B.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : f / (1 * B.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : f / (2 * B.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : f / (4 * B.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : f / (1 * B.weekDuration) <= a ? (this.interval =
            1, this.intervalType = "week") : f / (2 * B.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : f / (3 * B.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : f / (1 * B.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : f / (2 * B.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : f / (3 * B.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : f / (6 * B.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = f / (1 * B.yearDuration) <= a ? 1 : f / (2 * B.yearDuration) <=
            a ? 2 : f / (4 * B.yearDuration) <= a ? 4 : Math.floor(x.getNiceNumber(f / (a - 1), !0) / B.yearDuration), this.intervalType = "year")), this.minimum = null !== this.sessionVariables.internalMinimum ? this.sessionVariables.internalMinimum : c - e / 2, this.maximum = null !== this.sessionVariables.internalMaximum ? this.sessionVariables.internalMaximum : d + e / 2, this.valueFormatString || (b ? this.valueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.valueFormatString = "YYYY" : "month" === this.intervalType ? this.valueFormatString = "MMM YYYY" :
            "week" === this.intervalType ? this.valueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.valueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.valueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.valueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.valueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.valueFormatString = "fff'ms'")), this.intervalstartTimePercent = this.getLabelStartPoint(new Date(this.minimum), this.intervalType, this.interval)) : (this.intervalType =
            "number", f = x.getNiceNumber(d - c, !1), this.interval = this._options && this._options.interval ? this._options.interval : x.getNiceNumber(f / (a - 1), !0), this.minimum = null !== this.sessionVariables.internalMinimum ? this.sessionVariables.internalMinimum : Math.floor(c / this.interval) * this.interval, this.maximum = null !== this.sessionVariables.internalMaximum ? this.sessionVariables.internalMaximum : Math.ceil(d / this.interval) * this.interval, 0 === this.maximum && 0 === this.minimum && (0 === this._options.minimum ? this.maximum += 10 : 0 === this._options.maximum &&
                (this.minimum -= 10), this._options && "undefined" === typeof this._options.interval && (this.interval = x.getNiceNumber((this.maximum - this.minimum) / (a - 1), !0))), "axisX" === this.type ? (null === this.sessionVariables.internalMinimum && (this.minimum = c - e / 2), null === this.sessionVariables.internalMaximum && (this.maximum = d + e / 2), this.intervalstartTimePercent = Math.floor((this.minimum + 0.2 * this.interval) / this.interval) * this.interval) : "axisY" === this.type && (this.intervalstartTimePercent = this.minimum));
        "axisX" === this.type && (this._absoluteMinimum =
            this._options && "undefined" !== typeof this._options.minimum ? this._options.minimum : this.dataInfo.min - e / 2, this._absoluteMaximum = this._options && "undefined" !== typeof this._options.maximum ? this._options.maximum : this.dataInfo.max + e / 2);
        if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", f = Math.abs(this.maximum - this.minimum), 1 > f)) {
            b = Math.floor(Math.abs(Math.log(f) / Math.LN10)) + 2;
            if (isNaN(b) || !isFinite(b)) b = 2;
            if (2 < b)
                for (c = 0; c < b - 2; c++) this.valueFormatString += "#"
        }
    };
    x.getNiceNumber = function(a, b) {
        var c =
            Math.floor(Math.log(a) / Math.LN10),
            d = a / Math.pow(10, c);
        return Number(((b ? 1.5 > d ? 1 : 3 > d ? 2 : 7 > d ? 5 : 10 : 1 >= d ? 1 : 2 >= d ? 2 : 5 >= d ? 5 : 10) * Math.pow(10, c)).toFixed(20))
    };
    x.prototype.getLabelStartPoint = function() {
        var a = $(this.interval, this.intervalType),
            a = new Date(Math.floor(this.minimum / a) * a);
        if ("millisecond" !== this.intervalType)
            if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
            else if ("minute" === this.intervalType) {
            if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() +
                1), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("hour" === this.intervalType) { if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0) } else if ("day" === this.intervalType) { if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0) } else if ("week" === this.intervalType) {
            if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() ||
                0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("month" === this.intervalType) { if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0) } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) &&
            (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
        return a
    };
    O(la, F);
    la.prototype.render = function() {
        var a = this.parent.getPixelCoordinatesOnAxis(this.value),
            b = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness);
        if (0 < b) {
            var c = null === this.opacity ? 1 : this.opacity;
            this.ctx.strokeStyle = this.color;
            this.ctx.beginPath();
            var d = this.ctx.globalAlpha;
            this.ctx.globalAlpha =
                c;
            A(this.id);
            var e, f, g, k;
            this.ctx.lineWidth = b;
            this.ctx.setLineDash && this.ctx.setLineDash(M(this.lineDashType, b));
            if ("bottom" === this.parent._position || "top" === this.parent._position) e = f = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, g = this.chart.plotArea.y1, k = this.chart.plotArea.y2;
            else if ("left" === this.parent._position || "right" === this.parent._position) g = k = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, e = this.chart.plotArea.x1, f = this.chart.plotArea.x2;
            this.ctx.moveTo(e, g);
            this.ctx.lineTo(f, k);
            this.ctx.stroke();
            this.ctx.globalAlpha = d
        }
    };
    O(Q, F);
    Q.prototype._initialize = function() {
        if (this.enabled) {
            this.container = document.createElement("div");
            this.container.setAttribute("class", "canvasjs-chart-tooltip");
            this.container.style.position = "absolute";
            this.container.style.height = "auto";
            this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
            this.container.style.zIndex = "1000";
            this.container.style.display = "none";
            var a;
            a = '<div style=" width: auto;height: auto;min-width: 50px;';
            a += "line-height: auto;";
            a += "margin: 0px 0px 0px 0px;";
            a += "padding: 5px;";
            a += "font-family: Calibri, Arial, Georgia, serif;";
            a += "font-weight: normal;";
            a += "font-style: " + (t ? "italic;" : "normal;");
            a += "font-size: 14px;";
            a += "color: #000000;";
            a += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
            a += "text-align: left;";
            a += "border: 2px solid gray;";
            a += t ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";
            a += "text-indent: 0px;";
            a += "white-space: nowrap;";
            a += "border-radius: 5px;";
            a += "-moz-user-select:none;";
            a += "-khtml-user-select: none;";
            a += "-webkit-user-select: none;";
            a += "-ms-user-select: none;";
            a += "user-select: none;";
            t || (a += "filter: alpha(opacity = 90);", a += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
            a += '} "> Sample Tooltip</div>';
            this.container.innerHTML = a;
            this.contentDiv = this.container.firstChild;
            this.container.style.borderRadius = this.contentDiv.style.borderRadius;
            this.chart._canvasJSContainer.appendChild(this.container)
        }
    };
    Q.prototype.mouseMoveHandler = function(a, b) {
        this._lastUpdated && 40 > (new Date).getTime() -
            this._lastUpdated || (this._lastUpdated = (new Date).getTime(), this._updateToolTip(a, b))
    };
    Q.prototype._updateToolTip = function(a, b) {
        if (!this.chart.disableToolTip) {
            if ("undefined" === typeof a || "undefined" === typeof b) {
                if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                a = this._prevX;
                b = this._prevY
            } else this._prevX = a, this._prevY = b;
            var c = null,
                d = null,
                e = [],
                f = 0;
            if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
                f = "xySwapped" === this.chart.plotInfo.axisPlacement ? (this.chart.axisX.maximum - this.chart.axisX.minimum) /
                    this.chart.axisX.lineCoordinates.height * (this.chart.axisX.lineCoordinates.y2 - b) + this.chart.axisX.minimum : (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.width * (a - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.minimum;
                c = [];
                for (d = 0; d < this.chart.data.length; d++) {
                    var g = this.chart.data[d].getDataPointAtX(f, !0);
                    g && 0 <= g.index && (g.dataSeries = this.chart.data[d], null !== g.dataPoint.y && c.push(g))
                }
                if (0 === c.length) return;
                c.sort(function(a, b) { return a.distance - b.distance });
                f = c[0];
                for (d = 0; d < c.length; d++) c[d].dataPoint.x.valueOf() === f.dataPoint.x.valueOf() && e.push(c[d]);
                c = null
            } else {
                if (g = this.chart.getDataPointAtXY(a, b, !0)) this.currentDataPointIndex = g.dataPointIndex, this.currentSeriesIndex = g.dataSeries.index;
                else if (t)
                    if (g = xa(a, b, this.chart._eventManager.ghostCtx), 0 < g && "undefined" !== typeof this.chart._eventManager.objectMap[g]) {
                        eventObject = this.chart._eventManager.objectMap[g];
                        if ("legendItem" === eventObject.objectType) return;
                        this.currentSeriesIndex = eventObject.dataSeriesIndex;
                        this.currentDataPointIndex = 0 <= eventObject.dataPointIndex ? eventObject.dataPointIndex : -1
                    } else this.currentDataPointIndex = -1;
                else this.currentDataPointIndex = -1;
                if (0 <= this.currentSeriesIndex) {
                    d = this.chart.data[this.currentSeriesIndex];
                    g = {};
                    if (0 <= this.currentDataPointIndex) c = d.dataPoints[this.currentDataPointIndex], g.dataSeries = d, g.dataPoint = c, g.index = this.currentDataPointIndex, g.distance = Math.abs(c.x - f);
                    else {
                        if (!this.enabled || "line" !== d.type && "stepLine" !== d.type && "spline" !== d.type && "area" !== d.type && "stepArea" !==
                            d.type && "splineArea" !== d.type && "stackedArea" !== d.type && "stackedArea100" !== d.type && "rangeArea" !== d.type && "rangeSplineArea" !== d.type && "candlestick" !== d.type && "ohlc" !== d.type) return;
                        f = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.width * (a - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.minimum.valueOf();
                        g = d.getDataPointAtX(f, !0);
                        g.dataSeries = d;
                        this.currentDataPointIndex = g.index;
                        c = g.dataPoint
                    }
                    null !== g.dataPoint.y && e.push(g)
                }
            }
            if (0 < e.length && (this.highlightObjects(e),
                    this.enabled))
                if (f = "", f = this.getToolTipInnerHTML({ entries: e }), null !== f) {
                    this.contentDiv.innerHTML = f;
                    this.contentDiv.innerHTML = f;
                    f = !1;
                    "none" === this.container.style.display && (f = !0, this.container.style.display = "block");
                    try {
                        this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : t ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.borderColor ? this.borderColor : e[0].dataPoint.color ?
                            e[0].dataPoint.color : e[0].dataSeries.color ? e[0].dataSeries.color : e[0].dataSeries._colorSet[e[0].index % e[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize +
                            "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : t ? "italic" : "normal"
                    } catch (k) {}
                    "pie" === e[0].dataSeries.type || "doughnut" === e[0].dataSeries.type || "funnel" === e[0].dataSeries.type || "bar" === e[0].dataSeries.type || "rangeBar" === e[0].dataSeries.type ||
                        "stackedBar" === e[0].dataSeries.type || "stackedBar100" === e[0].dataSeries.type ? toolTipLeft = a - 10 - this.container.clientWidth : (toolTipLeft = this.chart.axisX.lineCoordinates.width / Math.abs(this.chart.axisX.maximum - this.chart.axisX.minimum) * Math.abs(e[0].dataPoint.x - this.chart.axisX.minimum) + this.chart.axisX.lineCoordinates.x1 + 0.5 - this.container.clientWidth << 0, toolTipLeft -= 10);
                    0 > toolTipLeft && (toolTipLeft += this.container.clientWidth + 20);
                    toolTipLeft + this.container.clientWidth > this.chart._container.clientWidth &&
                        (toolTipLeft = Math.max(0, this.chart._container.clientWidth - this.container.clientWidth));
                    toolTipLeft += "px";
                    e = 1 !== e.length || this.shared || "line" !== e[0].dataSeries.type && "stepLine" !== e[0].dataSeries.type && "spline" !== e[0].dataSeries.type && "area" !== e[0].dataSeries.type && "stepArea" !== e[0].dataSeries.type && "splineArea" !== e[0].dataSeries.type && "stackedArea" !== e[0].dataSeries.type && "stackedArea100" !== e[0].dataSeries.type ? "bar" === e[0].dataSeries.type || "rangeBar" === e[0].dataSeries.type || "stackedBar" === e[0].dataSeries.type ||
                        "stackedBar100" === e[0].dataSeries.type ? e[0].dataSeries.axisX.lineCoordinates.y2 - e[0].dataSeries.axisX.lineCoordinates.height / Math.abs(e[0].dataSeries.axisX.maximum - e[0].dataSeries.axisX.minimum) * Math.abs(e[0].dataPoint.x - e[0].dataSeries.axisX.minimum) + 0.5 << 0 : b : e[0].dataSeries.axisY.lineCoordinates.y2 - e[0].dataSeries.axisY.lineCoordinates.height / Math.abs(e[0].dataSeries.axisY.maximum - e[0].dataSeries.axisY.minimum) * Math.abs(e[0].dataPoint.y - e[0].dataSeries.axisY.minimum) + 0.5 << 0;
                    e = -e + 10;
                    0 < e + this.container.clientHeight +
                        5 && (e -= e + this.container.clientHeight + 5 - 0);
                    this.container.style.left = toolTipLeft;
                    this.container.style.bottom = e + "px";
                    !this.animationEnabled || f ? this.disableAnimation() : this.enableAnimation()
                } else this.hide(!1)
        }
    };
    Q.prototype.highlightObjects = function(a) {
        var b = this.chart.overlaidCanvasCtx;
        this.chart.resetOverlayedCanvas();
        b.save();
        for (var c = 0, d = 0; d < a.length; d++) {
            var e = a[d];
            if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) && e.objectType && "dataPoint" === e.objectType) {
                var c = this.chart.data[e.dataSeriesIndex],
                    f = c.dataPoints[e.dataPointIndex],
                    g = e.dataPointIndex;
                !1 === f.highlightEnabled || !0 !== c.highlightEnabled && !0 !== f.highlightEnabled || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "scatter" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type ? (f = c.getMarkerProperties(g, e.x1, e.y1, this.chart.overlaidCanvasCtx), f.size = Math.max(1.5 * f.size << 0, 10), f.borderColor = f.borderColor || "#FFFFFF",
                    f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), K.drawMarkers([f]), "undefined" !== typeof e.y2 && (f = c.getMarkerProperties(g, e.x1, e.y2, this.chart.overlaidCanvasCtx), f.size = Math.max(1.5 * f.size << 0, 10), f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), K.drawMarkers([f]))) : "bubble" === c.type ? (f = c.getMarkerProperties(g, e.x1, e.y1, this.chart.overlaidCanvasCtx), f.size = e.size, f.color = "white", f.borderColor = "white", b.globalAlpha = 0.3, K.drawMarkers([f]), b.globalAlpha =
                    1) : "column" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "bar" === c.type || "rangeBar" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "rangeColumn" === c.type ? I(b, e.x1, e.y1, e.x2, e.y2, "white", 0, null, !1, !1, !1, !1, 0.3) : "pie" === c.type || "doughnut" === c.type ? ta(b, e.center, e.radius, "white", c.type, e.startAngle, e.endAngle, 0.3) : "candlestick" === c.type ? (b.globalAlpha = 1, b.strokeStyle = e.color, b.lineWidth = 2 * e.borderThickness, c = 0 === b.lineWidth % 2 ? 0 : 0.5, b.beginPath(), b.moveTo(e.x3 - c, e.y2),
                    b.lineTo(e.x3 - c, Math.min(e.y1, e.y4)), b.stroke(), b.beginPath(), b.moveTo(e.x3 - c, Math.max(e.y1, e.y4)), b.lineTo(e.x3 - c, e.y3), b.stroke(), I(b, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, !1, !1, !1, !1), b.globalAlpha = 1) : "ohlc" === c.type && (b.globalAlpha = 1, b.strokeStyle = e.color, b.lineWidth = 2 * e.borderThickness, c = 0 === b.lineWidth % 2 ? 0 : 0.5, b.beginPath(), b.moveTo(e.x3 - c, e.y2), b.lineTo(e.x3 - c, e.y3), b.stroke(), b.beginPath(), b.moveTo(e.x3, e.y1), b.lineTo(e.x1, e.y1), b.stroke(),
                    b.beginPath(), b.moveTo(e.x3, e.y4), b.lineTo(e.x2, e.y4), b.stroke(), b.globalAlpha = 1))
            }
        }
        b.globalAlpha = 1;
        b.beginPath()
    };
    Q.prototype.getToolTipInnerHTML = function(a) {
        a = a.entries;
        for (var b = null, c = null, d = null, e = 0, f = "", g = !0, k = 0; k < a.length; k++)
            if (a[k].dataSeries.toolTipContent || a[k].dataPoint.toolTipContent) { g = !1; break }
        if (g && (this.content && "function" === typeof this.content || this.contentFormatter)) a = { chart: this.chart, toolTip: this._options, entries: a }, b = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
        else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
            for (var p = "", k = 0; k < a.length; k++)
                if (c = a[k].dataSeries, d = a[k].dataPoint, e = a[k].index, f = "", 0 === k && (g && !this.content) && (p += "undefined" !== typeof this.chart.axisX.labels[d.x] ? this.chart.axisX.labels[d.x] : "{x}", p += "</br>", p = this.chart.replaceKeywordsWithValue(p, d, c, e)), null !== d.toolTipContent && ("undefined" !== typeof d.toolTipContent || null !== c._options.toolTipContent)) {
                    if ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type ||
                        "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type) f += d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}";
                    else if ("bubble" === c.type) f += d.toolTipContent ? d.toolTipContent :
                        c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
                    else if ("pie" === c.type || "doughnut" === c.type || "funnel" === c.type) f += d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "&nbsp;&nbsp;{y}";
                    else if ("rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type) f += d.toolTipContent ?
                        d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}";
                    else if ("candlestick" === c.type || "ohlc" === c.type) f += d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
                    null === b && (b = "");
                    !0 === this.reversed ? (b = this.chart.replaceKeywordsWithValue(f, d, c, e) + b, k < a.length - 1 && (b = "</br>" + b)) : (b += this.chart.replaceKeywordsWithValue(f, d, c, e), k < a.length - 1 && (b += "</br>"))
                }
            null !== b && (b = p + b)
        } else {
            c = a[0].dataSeries;
            d = a[0].dataPoint;
            e = a[0].index;
            if (null === d.toolTipContent || "undefined" === typeof d.toolTipContent && null === c._options.toolTipContent) return null;
            if ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" ===
                c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type) f = d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>" + (d.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y}";
            else if ("bubble" === c.type) f = d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent :
                this.content && "function" !== typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>" + (d.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
            else if ("pie" === c.type || "doughnut" === c.type || "funnel" === c.type) f = d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : (d.name ? "{name}:&nbsp;&nbsp;" : d.label ? "{label}:&nbsp;&nbsp;" : "") + "{y}";
            else if ("rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type ||
                "rangeSplineArea" === c.type) f = d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>" + (d.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}";
            else if ("candlestick" === c.type || "ohlc" === c.type) f = d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>" + (d.label ? "{label}" : "{x}") +
                "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
            null === b && (b = "");
            b += this.chart.replaceKeywordsWithValue(f, d, c, e)
        }
        return b
    };
    Q.prototype.enableAnimation = function() {
        this.container.style.WebkitTransition || (this.container.style.WebkitTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.MozTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.MsTransition = "left .2s ease-out, bottom .2s ease-out",
            this.container.style.transition = "left .2s ease-out, bottom .2s ease-out")
    };
    Q.prototype.disableAnimation = function() { this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "") };
    Q.prototype.hide = function(a) { this.enabled && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas()) };
    w.prototype.getPercentAndTotal = function(a, b) {
        var c = null,
            d = null,
            e = null;
        if (0 <= a.type.indexOf("stacked")) d = 0, c = b.x.getTime ? b.x.getTime() : b.x, c in a.plotUnit.yTotals && (d = a.plotUnit.yTotals[c], e = isNaN(b.y) ? 0 : 0 === d ? 0 : 100 * (b.y / d));
        else if ("pie" === a.type || "doughnut" === a.type) {
            for (i = d = 0; i < a.dataPoints.length; i++) isNaN(a.dataPoints[i].y) || (d += a.dataPoints[i].y);
            e = isNaN(b.y) ? 0 : 100 * (b.y / d)
        }
        return { percent: e, total: d }
    };
    w.prototype.replaceKeywordsWithValue = function(a, b, c, d, e) {
        var f = this;
        e = "undefined" === typeof e ?
            0 : e;
        if ((0 <= c.type.indexOf("stacked") || "pie" === c.type || "doughnut" === c.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
            var g = "#percent",
                k = "#total",
                p = this.getPercentAndTotal(c, b),
                k = p.total ? p.total : k,
                g = isNaN(p.percent) ? g : p.percent;
            do {
                p = "";
                if (c.percentFormatString) p = c.percentFormatString;
                else {
                    var p = "#,##0.",
                        l = Math.max(Math.ceil(Math.log(1 / Math.abs(g)) / Math.LN10), 2);
                    if (isNaN(l) || !isFinite(l)) l = 2;
                    for (var h = 0; h < l; h++) p += "#"
                }
                a = a.replace("#percent", X(g, p, f._cultureInfo));
                a = a.replace("#total", X(k,
                    c.yValueFormatString ? c.yValueFormatString : "#,##0.########"))
            } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
        }
        return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a) {
            if ('"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1]) return a.slice(1, a.length - 1);
            a = aa(a.slice(1, a.length - 1));
            a = a.replace("#index", e);
            var g = null;
            try {
                var h = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                h && 0 < h.length && (g = aa(h[2]), a = aa(h[1]))
            } catch (k) {}
            h = null;
            if ("color" === a) return b.color ? b.color : c.color ? c.color : c._colorSet[d %
                c._colorSet.length];
            if (b.hasOwnProperty(a)) h = b;
            else if (c.hasOwnProperty(a)) h = c;
            else return "";
            h = h[a];
            null !== g && (h = h[g]);
            return "x" === a ? f.axisX && "dateTime" === f.plotInfo.axisXValueType ? sa(h, b.xValueFormatString ? b.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : f.axisX && f.axisX.valueFormatString ? f.axisX.valueFormatString : "DD MMM YY", f._cultureInfo) : X(h, b.xValueFormatString ? b.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : "#,##0.########", f._cultureInfo) : "y" === a ? X(h, b.yValueFormatString ?
                b.yValueFormatString : c.yValueFormatString ? c.yValueFormatString : "#,##0.########", f._cultureInfo) : "z" === a ? X(h, b.zValueFormatString ? b.zValueFormatString : c.zValueFormatString ? c.zValueFormatString : "#,##0.########", f._cultureInfo) : h
        })
    };
    ba.prototype.reset = function() {
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.eventObjects = [];
        t && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath())
    };
    ba.prototype.getNewObjectTrackingId =
        function() { return ++this.lastObjectId };
    ba.prototype.mouseEventHandler = function(a) {
        if ("mousemove" === a.type || "click" === a.type) {
            var b = [],
                c = na(a),
                d = null;
            if ((d = this.chart.getObjectAtXY(c.x, c.y, !1)) && "undefined" !== typeof this.objectMap[d])
                if (d = this.objectMap[d], "dataPoint" === d.objectType) {
                    var e = this.chart.data[d.dataSeriesIndex],
                        f = e.dataPoints[d.dataPointIndex],
                        g = d.dataPointIndex;
                    d.eventParameter = { x: c.x, y: c.y, dataPoint: f, dataSeries: e._options, dataPointIndex: g, dataSeriesIndex: e.index, chart: this.chart._publicChartReference };
                    d.eventContext = { context: f, userContext: f, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
                    b.push(d);
                    d = this.objectMap[e.id];
                    d.eventParameter = { x: c.x, y: c.y, dataPoint: f, dataSeries: e._options, dataPointIndex: g, dataSeriesIndex: e.index, chart: this.chart._publicChartReference };
                    d.eventContext = { context: e, userContext: e._options, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
                    b.push(this.objectMap[e.id])
                } else "legendItem" === d.objectType && (e = this.chart.data[d.dataSeriesIndex],
                    f = null !== d.dataPointIndex ? e.dataPoints[d.dataPointIndex] : null, d.eventParameter = { x: c.x, y: c.y, dataSeries: e._options, dataPoint: f, dataPointIndex: d.dataPointIndex, dataSeriesIndex: d.dataSeriesIndex, chart: this.chart._publicChartReference }, d.eventContext = { context: this.chart.legend, userContext: this.chart.legend._options, mouseover: "itemmouseover", mousemove: "itemmousemove", mouseout: "itemmouseout", click: "itemclick" }, b.push(d));
            e = [];
            for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
                f = !0;
                for (d = 0; d < b.length; d++)
                    if (b[d].id ===
                        this.mouseoveredObjectMaps[c].id) { f = !1; break }
                f ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a) : e.push(this.mouseoveredObjectMaps[c])
            }
            this.mouseoveredObjectMaps = e;
            for (c = 0; c < b.length; c++) {
                e = !1;
                for (d = 0; d < this.mouseoveredObjectMaps.length; d++)
                    if (b[c].id === this.mouseoveredObjectMaps[d].id) { e = !0; break }
                e || (this.fireEvent(b[c], "mouseover", a), this.mouseoveredObjectMaps.push(b[c]));
                "click" === a.type ? this.fireEvent(b[c], "click", a) : "mousemove" === a.type && this.fireEvent(b[c], "mousemove", a)
            }
        }
    };
    ba.prototype.fireEvent =
        function(a, b, c) {
            if (a && b) {
                var d = a.eventParameter,
                    e = a.eventContext,
                    f = a.eventContext.userContext;
                f && (e && f[e[b]]) && f[e[b]].call(f, d);
                "mouseout" !== b ? f.cursor && f.cursor !== c.target.style.cursor && (c.target.style.cursor = f.cursor) : (c.target.style.cursor = this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
                "click" === b && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], d)
            }
        };
    O(da, F);
    ra.prototype.animate =
        function(a, b, c, d, e) {
            var f = this;
            this.chart.isAnimating = !0;
            e = e || y.easing.linear;
            c && this.animations.push({ startTime: (new Date).getTime() + (a ? a : 0), duration: b, animationCallback: c, onComplete: d });
            for (a = []; 0 < this.animations.length;)
                if (b = this.animations.shift(), c = (new Date).getTime(), d = 0, b.startTime <= c && (d = e(Math.min(c - b.startTime, b.duration), 0, 1, b.duration), d = Math.min(d, 1), isNaN(d) || !isFinite(d)) && (d = 1), 1 > d && a.push(b), b.animationCallback(d), 1 <= d && b.onComplete) b.onComplete();
            this.animations = a;
            0 < this.animations.length ?
                this.animationRequestId = this.chart.requestAnimFrame.call(window, function() { f.animate.call(f) }) : this.chart.isAnimating = !1
        };
    ra.prototype.cancelAllAnimations = function() {
        this.animations = [];
        this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
        this.animationRequestId = null;
        this.chart.isAnimating = !1
    };
    var y = {
            yScaleAnimation: function(a, b) {
                if (0 !== a) {
                    var c = b.dest,
                        d = b.source.canvas,
                        e = b.animationBase;
                    c.drawImage(d, 0, 0, d.width, d.height, 0, e - e * a, c.canvas.width / J, a * c.canvas.height /
                        J)
                }
            },
            xScaleAnimation: function(a, b) {
                if (0 !== a) {
                    var c = b.dest,
                        d = b.source.canvas,
                        e = b.animationBase;
                    c.drawImage(d, 0, 0, d.width, d.height, e - e * a, 0, a * c.canvas.width / J, c.canvas.height / J)
                }
            },
            xClipAnimation: function(a, b) {
                if (0 !== a) {
                    var c = b.dest,
                        d = b.source.canvas;
                    c.save();
                    0 < a && c.drawImage(d, 0, 0, d.width * a, d.height, 0, 0, d.width * a / J, d.height / J);
                    c.restore()
                }
            },
            fadeInAnimation: function(a, b) {
                if (0 !== a) {
                    var c = b.dest,
                        d = b.source.canvas;
                    c.save();
                    c.globalAlpha = a;
                    c.drawImage(d, 0, 0, d.width, d.height, 0, 0, c.canvas.width / J, c.canvas.height /
                        J);
                    c.restore()
                }
            },
            easing: { linear: function(a, b, c, d) { return c * a / d + b }, easeOutQuad: function(a, b, c, d) { return -c * (a /= d) * (a - 2) + b }, easeOutQuart: function(a, b, c, d) { return -c * ((a = a / d - 1) * a * a * a - 1) + b }, easeInQuad: function(a, b, c, d) { return c * (a /= d) * a + b }, easeInQuart: function(a, b, c, d) { return c * (a /= d) * a * a * a + b } }
        },
        K = {
            drawMarker: function(a, b, c, d, e, f, g, k) {
                if (c) {
                    var p = 1;
                    c.fillStyle = f ? f : "#000000";
                    c.strokeStyle = g ? g : "#000000";
                    c.lineWidth = k ? k : 0;
                    "circle" === d ? (c.moveTo(a, b), c.beginPath(), c.arc(a, b, e / 2, 0, 2 * Math.PI, !1), f && c.fill(),
                            k && (g ? c.stroke() : (p = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = p))) : "square" === d ? (c.beginPath(), c.rect(a - e / 2, b - e / 2, e, e), f && c.fill(), k && (g ? c.stroke() : (p = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = p))) : "triangle" === d ? (c.beginPath(), c.moveTo(a - e / 2, b + e / 2), c.lineTo(a + e / 2, b + e / 2), c.lineTo(a, b - e / 2), c.closePath(), f && c.fill(), k && (g ? c.stroke() : (p = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = p)), c.beginPath()) :
                        "cross" === d && (c.strokeStyle = f, c.lineWidth = e / 4, c.beginPath(), c.moveTo(a - e / 2, b - e / 2), c.lineTo(a + e / 2, b + e / 2), c.stroke(), c.moveTo(a + e / 2, b - e / 2), c.lineTo(a - e / 2, b + e / 2), c.stroke())
                }
            },
            drawMarkers: function(a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    K.drawMarker(c.x, c.y, c.ctx, c.type, c.size, c.color, c.borderColor, c.borderThickness)
                }
            }
        },
        Aa = {
            Chart: function(a, b) {
                var c = new w(a, b, this);
                this.render = function() { c.render(this.options) };
                this.options = c._options
            },
            addColorSet: function(a, b) { W[a] = b },
            addCultureInfo: function(a, b) {
                ea[a] =
                    b
            },
            formatNumber: function(a, b, c) { c = c || "en"; if (ea[c]) return X(a, b || "#,##0.##", new da(c)); throw "Unknown Culture Name"; },
            formatDate: function(a, b, c) { c = c || "en"; if (ea[c]) return sa(a, b || "DD MMM YYYY", new da(c)); throw "Unknown Culture Name"; }
        };
    Aa.Chart.version = "v1.7.0 GA";
    window.CanvasJS = Aa
})();
/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext || function() {
    function V() { return this.context_ || (this.context_ = new C(this)) }

    function W(a, b, c) { var g = M.call(arguments, 2); return function() { return a.apply(b, g.concat(M.call(arguments))) } }

    function N(a) { return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;") }

    function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")
    }

    function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
            case "width":
                b.getContext().clearRect();
                b.style.width = b.attributes.width.nodeValue + "px";
                b.firstChild.style.width = b.clientWidth + "px";
                break;
            case "height":
                b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight +
                    "px"
        }
    }

    function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px")
    }

    function D() {
        return [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
    }

    function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
            for (var e = 0; 3 > e; e++) {
                for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
                c[g][e] = f
            }
        return c
    }

    function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX =
            a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_
    }

    function Q(a) {
        var b = a.indexOf("(", 3),
            c = a.indexOf(")", b + 1),
            b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
        return b
    }

    function E(a, b, c) { return Math.min(c, Math.max(b, a)) }

    function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c :
            1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
    }

    function G(a) {
        if (a in H) return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0)) b = a;
        else if (/^rgb/.test(a)) {
            c = Q(a);
            b = "#";
            for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
            c = +c[3]
        } else if (/^hsl/.test(a)) {
            e = c = Q(a);
            b = parseFloat(e[0]) / 360 % 360;
            0 > b && b++;
            g = E(parseFloat(e[1]) / 100, 0, 1);
            e = E(parseFloat(e[2]) / 100, 0, 1);
            if (0 == g) g = e = b = e;
            else {
                var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
                    d = 2 * e - f;
                g = F(d, f, b + 1 / 3);
                e = F(d, f, b);
                b = F(d, f, b - 1 / 3)
            }
            b = "#" +
                v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
            c = c[3]
        } else b = Z[a] || a;
        return H[a] = { color: b, alpha: c }
    }

    function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
            c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(!1);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    }

    function R(a, b, c, g) {
        a.currentPath_.push({ type: "bezierCurveTo", cp1x: b.x, cp1y: b.y, cp2x: c.x, cp2y: c.y, x: g.x, y: g.y });
        a.currentX_ = g.x;
        a.currentY_ = g.y
    }

    function S(a, b) {
        var c = G(a.strokeStyle),
            g = c.color,
            c = c.alpha * a.globalAlpha,
            e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push("<g_vml_:stroke",
            ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />')
    }

    function T(a, b, c, g) {
        var e = a.fillStyle,
            f = a.arcScaleX_,
            d = a.arcScaleY_,
            k = g.x - c.x,
            n = g.y - c.y;
        if (e instanceof w) {
            var h = 0,
                l = g = 0,
                u = 0,
                m = 1;
            if ("gradient" == e.type_) {
                h = e.x1_ / f;
                c = e.y1_ / d;
                var p = s(a, e.x0_ / f, e.y0_ / d),
                    h = s(a, h, c),
                    h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
                0 > h && (h += 360);
                1E-6 > h && (h = 0)
            } else p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k, l = (p.y - c.y) / n, k /= f * q,
                n /= d * q, m = x.max(k, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
            f = e.colors_;
            f.sort(function(a, b) { return a.offset - b.offset });
            d = f.length;
            p = f[0].color;
            c = f[d - 1].color;
            k = f[0].alpha * a.globalAlpha;
            a = f[d - 1].alpha * a.globalAlpha;
            for (var n = [], r = 0; r < d; r++) {
                var t = f[r];
                n.push(t.offset * m + u + " " + t.color)
            }
            b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />')
        } else e instanceof
        I ? k && n && b.push("<g_vml_:fill", ' position="', -c.x / k * f * f, ",", -c.y / n * d * d, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'))
    }

    function s(a, b, c) { a = a.m_; return { x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r, y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r } }

    function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] *
            b[1][0]))))
    }

    function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = []
    }

    function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
        switch (b) {
            case "repeat":
            case null:
            case "":
                this.repetition_ = "repeat";
                break;
            case "repeat-x":
            case "repeat-y":
            case "no-repeat":
                this.repetition_ = b;
                break;
            default:
                throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height
    }

    function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code
    }
    var x = Math,
        k = x.round,
        J = x.sin,
        K = x.cos,
        ba = x.abs,
        aa = x.sqrt,
        q = 10,
        r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {
        init: function(a) {
            a = a || document;
            a.createElement("canvas");
            a.attachEvent("onreadystatechange", W(this.init_, this, a))
        },
        init_: function(a) { a = a.getElementsByTagName("canvas"); for (var b = 0; b < a.length; b++) this.initElement(a[b]) },
        initElement: function(a) {
            if (!a.getContext) {
                a.getContext =
                    V;
                O(a.ownerDocument);
                a.innerHTML = "";
                a.attachEvent("onpropertychange", X);
                a.attachEvent("onresize", Y);
                var b = a.attributes;
                b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
                b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
            }
            return a
        }
    };
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            grey: "#808080",
            greenyellow: "#ADFF2F",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            oldlace: "#FDF5E6",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            whitesmoke: "#F5F5F5",
            yellowgreen: "#9ACD32"
        },
        H = {},
        L = {},
        $ = { butt: "flat", round: "round" },
        d = C.prototype;
    d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null);
        this.element_.innerHTML = ""
    };
    d.beginPath = function() { this.currentPath_ = [] };
    d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({ type: "moveTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({ type: "lineTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.bezierCurveTo =
        function(a, b, c, g, e, f) {
            e = s(this, e, f);
            a = s(this, a, b);
            c = s(this, c, g);
            R(this, a, c, e)
        };
    d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = { x: this.currentX_ + 2 / 3 * (a.x - this.currentX_), y: this.currentY_ + 2 / 3 * (a.y - this.currentY_) };
        R(this, g, { x: g.x + (c.x - this.currentX_) / 3, y: g.y + (c.y - this.currentY_) / 3 }, c)
    };
    d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d = f ? "at" : "wa",
            k = a + K(g) * c - r,
            n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k != g || f || (k += 0.125);
        a = s(this, a, b);
        k = s(this, k, n);
        g = s(this, g, e);
        this.currentPath_.push({
            type: d,
            x: a.x,
            y: a.y,
            radius: c,
            xStart: k.x,
            yStart: k.y,
            xEnd: g.x,
            yEnd: g.y
        })
    };
    d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath()
    };
    d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e
    };
    d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a +
            c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e
    };
    d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e
    };
    d.createRadialGradient = function(a, b, c, g, e, f) {
        var d = new w("gradientradial");
        d.x0_ = a;
        d.y0_ = b;
        d.r0_ = c;
        d.x1_ = g;
        d.y1_ = e;
        d.r1_ = f;
        return d
    };
    d.drawImage = function(a, b) {
        var c, g, e, d, r, y, n, h;
        e = a.runtimeStyle.width;
        d = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width,
            u = a.height;
        a.runtimeStyle.width =
            e;
        a.runtimeStyle.height = d;
        if (3 == arguments.length) c = arguments[1], g = arguments[2], r = y = 0, n = e = l, h = d = u;
        else if (5 == arguments.length) c = arguments[1], g = arguments[2], e = arguments[3], d = arguments[4], r = y = 0, n = l, h = u;
        else if (9 == arguments.length) r = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d = arguments[8];
        else throw Error("Invalid number of arguments");
        var m = s(this, c, g),
            p = [];
        p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:',
            10, "px;height:", 10, "px;position:absolute;");
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
            var t = [];
            t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
            var v = s(this, c + e, g),
                w = s(this, c, g + d);
            c = s(this, c + e, g + d);
            m.x = x.max(m.x, v.x, w.x, c.x);
            m.y = x.max(m.y, v.y, w.y, c.y);
            p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');")
        } else p.push("top:",
            k(m.y / q), "px;left:", k(m.x / q), "px;");
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d, 'px"', ' cropleft="', r / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
    };
    d.stroke = function(a) {
        var b = [];
        b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"',
            ' stroked="', !a, '"', ' path="');
        for (var c = { x: null, y: null }, d = { x: null, y: null }, e = 0; e < this.currentPath_.length; e++) {
            var f = this.currentPath_[e];
            switch (f.type) {
                case "moveTo":
                    b.push(" m ", k(f.x), ",", k(f.y));
                    break;
                case "lineTo":
                    b.push(" l ", k(f.x), ",", k(f.y));
                    break;
                case "close":
                    b.push(" x ");
                    f = null;
                    break;
                case "bezierCurveTo":
                    b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                    break;
                case "at":
                case "wa":
                    b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ *
                        f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd))
            }
            if (f) { if (null == c.x || f.x < c.x) c.x = f.x; if (null == d.x || f.x > d.x) d.x = f.x; if (null == c.y || f.y < c.y) c.y = f.y; if (null == d.y || f.y > d.y) d.y = f.y }
        }
        b.push(' ">');
        a ? T(this, b, c, d) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
    };
    d.fill = function() { this.stroke(!0) };
    d.closePath = function() { this.currentPath_.push({ type: "close" }) };
    d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_)
    };
    d.restore = function() { this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop()) };
    d.translate = function(a, b) {
        z(this, t([
            [1, 0, 0],
            [0, 1, 0],
            [a, b, 1]
        ], this.m_), !1)
    };
    d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([
            [b, a, 0],
            [-a, b, 0],
            [0, 0, 1]
        ], this.m_), !1)
    };
    d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([
            [a, 0, 0],
            [0, b, 0],
            [0, 0, 1]
        ], this.m_), !0)
    };
    d.transform = function(a, b, c, d, e, f) {
        z(this, t([
            [a,
                b, 0
            ],
            [c, d, 0],
            [e, f, 1]
        ], this.m_), !0)
    };
    d.setTransform = function(a, b, c, d, e, f) {
        z(this, [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1]
        ], !0)
    };
    d.drawText_ = function(a, b, c, d, e) {
        var f = this.m_;
        d = 0;
        var r = 1E3,
            t = 0,
            n = [],
            h;
        h = this.font;
        if (L[h]) h = L[h];
        else {
            var l = document.createElement("div").style;
            try { l.font = h } catch (u) {}
            h = L[h] = { style: l.fontStyle || "normal", variant: l.fontVariant || "normal", weight: l.fontWeight || "normal", size: l.fontSize || 10, family: l.fontFamily || "sans-serif" }
        }
        var l = h,
            m = this.element_;
        h = {};
        for (var p in l) h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
            case "left":
            case "center":
            case "right":
                break;
            case "end":
                l = "ltr" == m.direction ? "right" : "left";
                break;
            case "start":
                l = "rtl" == m.direction ? "right" :
                    "left";
                break;
            default:
                l = "left"
        }
        switch (this.textBaseline) {
            case "hanging":
            case "top":
                t = h.size / 1.75;
                break;
            case "middle":
                break;
            default:
            case null:
            case "alphabetic":
            case "ideographic":
            case "bottom":
                t = -h.size / 2.25
        }
        switch (l) {
            case "right":
                d = 1E3;
                r = 0.05;
                break;
            case "center":
                d = r = 500
        }
        b = s(this, b + 0, c + t);
        n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(this, n, { x: -d, y: 0 }, { x: r, y: h.size });
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
    };
    d.fillText = function(a, b, c, d) { this.drawText_(a, b, c, d, !1) };
    d.strokeText = function(a,
        b, c, d) { this.drawText_(a, b, c, d, !0) };
    d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return { width: this.textMeasureEl_.offsetWidth }
    };
    d.clip = function() {};
    d.arcTo = function() {};
    d.createPattern = function(a, b) { return new I(a, b) };
    w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({ offset: a, color: b.color, alpha: b.alpha })
    };
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR =
        13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A
}();
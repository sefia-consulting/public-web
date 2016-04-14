var Slimbox = (function () {
    var U = window,
        am = Browser.Engine.trident4,
        af, au, T = -1,
        al, ad, V, ae, ab, N, ah, an = {},
        ag = new Image(),
        P = new Image(),
        R, aA, at, aj, Q, aw, S, ay, Z, O, ac, ar, ax, X;
    U.addEvent("domready", function () {
        $(document.body).adopt($$(R = new Element("div", {
            id: "lbOverlay",
            events: {
                click: W
            }
        }), aA = new Element("div", {
            id: "lbCenter"
        }), S = new Element("div", {
            id: "lbBottomContainer"
        })).setStyle("display", "none"));
        at = new Element("div", {
            id: "lbImage"
        }).injectInside(aA).adopt(aj = new Element("div", {
            styles: {
                position: "relative"
            }
        }).adopt(Q = new Element("a", {
            id: "lbPrevLink",
            href: "#",
            events: {
                click: Y
            }
        }), aw = new Element("a", {
            id: "lbNextLink",
            href: "#",
            events: {
                click: av
            }
        })));
        ay = new Element("div", {
            id: "lbBottom"
        }).injectInside(S).adopt(new Element("a", {
            id: "lbCloseLink",
            href: "#",
            events: {
                click: W
            }
        }), Z = new Element("div", {
            id: "lbCaption"
        }), O = new Element("div", {
            id: "lbNumber"
        }), new Element("div", {
            styles: {
                clear: "both"
            }
        }))
    });

    function aa() {
        var b = U.getScroll(),
            a = U.getSize();
        $$(aA, S).setStyle("left", b.x + (a.x / 2));
        if (ae) {
            R.setStyles({
                left: b.x,
                top: b.y,
                width: a.x,
                height: a.y
            })
        }
    }
    function ao(b) {
        ["object", am ? "select" : "embed"].forEach(function (c) {
            Array.forEach(document.getElementsByTagName(c), function (d) {
                if (b) {
                    d._slimbox = d.style.visibility
                }
                d.style.visibility = b ? "hidden" : d._slimbox
            })
        });
        R.style.display = b ? "" : "none";
        var a = b ? "addEvent" : "removeEvent";
        U[a]("scroll", aa)[a]("resize", aa);
        document[a]("keydown", ak)
    }
    function ak(a) {
        var b = a.code;
        return af.closeKeys.contains(b) ? W() : af.nextKeys.contains(b) ? av() : af.previousKeys.contains(b) ? Y() : false
    }
    function Y() {
        return az(ad)
    }
    function av() {
        return az(V)
    }
    function az(a) {
        if (a >= 0) {
            T = a;
            al = au[a][0];
            ad = (T || (af.loop ? au.length : 0)) - 1;
            V = ((T + 1) % au.length) || (af.loop ? 0 : -1);
            ai();
            aA.className = "lbLoading";
            an = new Image();
            an.onload = ap;
            an.src = al
        }
        return false
    }
    function ap() {
        aA.className = "";
        ax.set(0);
        at.setStyles({
            backgroundImage: "url(" + al + ")",
            display: ""
        });
        aj.setStyle("width", an.width);
        $$(aj, Q, aw).setStyle("height", an.height);
        Z.set("html", au[T][1] || "");
        O.set("html", (((au.length > 1) && af.counterText) || "").replace(/{x}/, T + 1).replace(/{y}/, au.length));
        if (ad >= 0) {
            ag.src = au[ad][0]
        }
        if (V >= 0) {
            P.src = au[V][0]
        }
        N = at.offsetWidth;
        ah = at.offsetHeight;
        var a = Math.max(0, ab - (ah / 2)),
            c = 0,
            b;
        if (aA.offsetHeight != ah) {
            c = ar.start({
                height: ah,
                top: a
            })
        }
        if (aA.offsetWidth != N) {
            c = ar.start({
                width: N,
                marginLeft: -N / 2
            })
        }
        b = function () {
            S.setStyles({
                width: N,
                top: a + ah,
                marginLeft: -N / 2,
                visibility: "hidden",
                display: ""
            });
            ax.start(1)
        };
        if (c) {
            ar.chain(b)
        } else {
            b()
        }
    }
    function aq() {
        if (ad >= 0) {
            Q.style.display = ""
        }
        if (V >= 0) {
            aw.style.display = ""
        }
        X.set(-ay.offsetHeight).start(0);
        S.style.visibility = ""
    }
    function ai() {
        an.onload = $empty;
        an.src = ag.src = P.src = al;
        ar.cancel();
        ax.cancel();
        X.cancel();
        $$(Q, aw, at, S).setStyle("display", "none")
    }
    function W() {
        if (T >= 0) {
            ai();
            T = ad = V = -1;
            aA.style.display = "none";
            ac.cancel().chain(ao).start(0)
        }
        return false
    }
    Element.implement({
        slimbox: function (b, a) {
            $$(this).slimbox(b, a);
            return this
        }
    });
    Elements.implement({
        slimbox: function (d, a, b) {
            a = a ||
            function (e) {
                return [e.href, e.title]
            };
            b = b ||
            function () {
                return true
            };
            var c = this;
            c.removeEvents("click").addEvent("click", function () {
                var e = c.filter(b, this);
                return Slimbox.open(e.map(a), e.indexOf(this), d)
            });
            return c
        }
    });
    return {
        open: function (a, b, c) {
            af = $extend({
                loop: false,
                overlayOpacity: 0.8,
                overlayFadeDuration: 400,
                resizeDuration: 400,
                resizeTransition: false,
                initialWidth: 250,
                initialHeight: 250,
                imageFadeDuration: 400,
                captionAnimationDuration: 400,
                counterText: "Image {x} of {y}",
                closeKeys: [27, 88, 67],
                previousKeys: [37, 80],
                nextKeys: [39, 78]
            }, c || {});
            ac = new Fx.Tween(R, {
                property: "opacity",
                duration: af.overlayFadeDuration
            });
            ar = new Fx.Morph(aA, $extend({
                duration: af.resizeDuration,
                link: "chain"
            }, af.resizeTransition ? {
                transition: af.resizeTransition
            } : {}));
            ax = new Fx.Tween(at, {
                property: "opacity",
                duration: af.imageFadeDuration,
                onComplete: aq
            });
            X = new Fx.Tween(ay, {
                property: "margin-top",
                duration: af.captionAnimationDuration
            });
            if (typeof a == "string") {
                a = [
                    [a, b]
                ];
                b = 0
            }
            ab = U.getScrollTop() + (U.getHeight() / 2);
            N = af.initialWidth;
            ah = af.initialHeight;
            aA.setStyles({
                top: Math.max(0, ab - (ah / 2)),
                width: N,
                height: ah,
                marginLeft: -N / 2,
                display: ""
            });
            ae = am || (R.currentStyle && (R.currentStyle.position != "fixed"));
            if (ae) {
                R.style.position = "absolute"
            }
            ac.set(0).start(af.overlayOpacity);
            aa();
            ao(1);
            au = a;
            af.loop = af.loop && (au.length > 1);
            return az(b)
        }
    }
})();
Slimbox.scanPage = function () {
    $$("a").filter(function (a) {
        return a.rel && a.rel.test(/^lightbox/i)
    }).slimbox({}, null, function (a) {
        return (this == a) || ((this.rel.length > 8) && (this.rel == a.rel))
    })
};
if (!/android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)) {
  window.addEvent("domready", Slimbox.scanPage)
}
var FormCheck = new Class({
    Implements: [Options, Events],
    options: {
        tipsClass: "fc-tbx",
        errorClass: "fc-error",
        fieldErrorClass: "fc-field-error",
        submit: true,
        submitAction: 'contact.html',
        submitMethod: 'GET',
        trimValue: false,
        validateDisabled: false,
        submitByAjax: false,
        ajaxResponseDiv: false,
        ajaxEvalScripts: false,
        onAjaxRequest: $empty,
        onAjaxComplete: $empty,
        onAjaxSuccess: $empty,
        onAjaxFailure: $empty,
        onSubmit: $empty,
        onValidateSuccess: $empty,
        onValidateFailure: $empty,
        display: {
            showErrors: 0,
            titlesInsteadNames: 0,
            errorsLocation: 1,
            indicateErrors: 0,
            indicateErrorsInit: 0,
            keepFocusOnError: 0,
            checkValueIfEmpty: 1,
            addClassErrorToField: 0,
            removeClassErrorOnTipClosure: 0,
            fixPngForIe: 1,
            replaceTipsEffect: 1,
            flashTips: 0,
            closeTipsButton: 1,
            tipsPosition: "right",
            tipsOffsetX: -45,
            tipsOffsetY: 0,
            listErrorsAtTop: false,
            scrollToFirst: true,
            fadeDuration: 300
        },
        alerts: {
            required: "This field is required.",
            alpha: "This field accepts alphabetic characters only.",
            alphanum: "This field accepts alphanumeric characters only.",
            nodigit: "No digits are accepted.",
            digit: "Please enter a valid integer.",
            digitltd: "The value must be between %0 and %1",
            number: "Please enter a valid number.",
            email: "Please enter a valid email.",
            image: "This field should only contain image types",
            phone: "Please enter a valid phone.",
            phone_inter: "Please enter a valid international phone number.",
            url: "Please enter a valid url.",
            confirm: "This field is different from %0",
            differs: "This value must be different of %0",
            length_str: "The length is incorrect, it must be between %0 and %1",
            length_fix: "The length is incorrect, it must be exactly %0 characters",
            lengthmax: "The length is incorrect, it must be at max %0",
            lengthmin: "The length is incorrect, it must be at least %0",
            words_min: "This field must concain at least %0 words, currently: %1 words",
            words_range: "This field must contain %0-%1 words, currently: %2 words",
            words_max: "This field must contain at max %0 words, currently: %1 words",
            checkbox: "Please check the box",
            checkboxes_group: "Please check at least %0 box(es)",
            radios: "Please select a radio",
            select: "Please choose a value",
            select_multiple: "Please choose at least one value"
        },
        regexp: {
            required: /[^.*]/,
            alpha: /^[a-z ._-]+$/i,
            alphanum: /^[a-z0-9 ._-]+$/i,
            digit: /^[-+]?[0-9]+$/,
            nodigit: /^[^0-9]+$/,
            number: /^[-+]?\d*\.?\d+$/,
            email: /^([a-zA-Z0-9_\.\-\+%])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            image: /.(jpg|jpeg|png|gif|bmp)$/i,
            phone: /^\+{0,1}[0-9 \(\)\.\-]+$/,
            phone_inter: /^\+{0,1}[0-9 \(\)\.\-]+$/,
            url: /^(http|https|ftp)\:\/\/[a-z0-9\-\.]+\.[a-z]{2,3}(:[a-z0-9]*)?\/?([a-z0-9\-\._\?\,\'\/\\\+&amp;%\$#\=~])*$/i
        }
    },
    initialize: function (c, d) {
        if (this.form = $(c)) {
            this.form.isValid = true;
            this.regex = ["length"];
            this.groups = {};
            if (typeof (formcheckLanguage) != "undefined") {
                this.options.alerts = $merge(this.options.alerts, formcheckLanguage)
            }
            this.setOptions(d);
            this.form.setProperty("action", this.options.submitAction || this.form.getProperty("action") || "post");
            this.form.setProperty("method", this.options.submitMethod || this.form.getProperty("method") || "");
            this.validations = [];
            this.alreadyIndicated = false;
            this.firstError = false;
            $H(this.options.regexp).each(function (a, b) {
                this.regex.push(b)
            }, this);
            this.form.getElements("*[class*=validate]").each(function (a) {
                this.register(a)
            }, this);
            this.form.addEvents({
                submit: this.onSubmit.bind(this)
            });
            if (this.options.display.fixPngForIe) {
                this.fixIeStuffs()
            }
            document.addEvent("mousewheel", function () {
                this.isScrolling = false
            }.bind(this));
            if (this.options.display.indicateErrorsInit) {
                this.validations.each(function (a) {
                    if (!this.manageError(a, "submit")) {
                        this.form.isValid = false
                    }
                }, this)
            }
        }
    },
    register: function (el, position) {
        el.validation = [];
        el.getProperty("class").split(" ").each(function (classX) {
            if (classX.match(/^validate(\[.+\])$/)) {
                var valid = true;
                var validators = eval(classX.match(/^validate(\[.+\])$/)[1]);
                for (var i = 0; i < validators.length; i++) {
                    el.validation.push(validators[i]);
                    if (validators[i].match(/^confirm:/)) {
                        var field = validators[i].match(/.+:(.+)$/)[1];
                        if (this.form[field].validation.contains("required")) {
                            el.validation.push("required")
                        }
                    }
                    if (validators[i].match(/^target:.+/)) {
                        el.target = validators[i].match(/^target:(.+)/)[1]
                    }
                }
                el.isChild = this.isChildType(el, validators);
                if (el.isChild && el.type == "radio") {
                    this.validations.each(function (registeredEl) {
                        if (registeredEl.name == el.name) {
                            valid = false
                        }
                    }, this)
                }
                if (el.isChild && el.type == "checkbox") {
                    this.validations.each(function (registeredEl) {
                        if (registeredEl.groupID == el.groupID) {
                            valid = false
                        }
                    }, this)
                }
                if (position && position <= this.validations.length) {
                    var newValidations = [];
                    this.validations.each(function (valider, i) {
                        if (position == i + 1 && valid) {
                            newValidations.push(el);
                            this.addListener(el)
                        }
                        newValidations.push(valider)
                    }, this);
                    this.validations = newValidations
                } else {
                    if (valid) {
                        this.validations.push(el);
                        this.addListener(el)
                    }
                }
            }
        }, this)
    },
    dispose: function (b) {
        this.validations.erase(b)
    },
    addListener: function (c) {
        c.errors = [];
        if (c.validation[0] == "submit") {
            c.addEvent("click", function (a) {
                new Event(a).stop();
                if (this.onSubmit(a)) {
                    this.form.submit()
                }
            }.bind(this));
            return true
        }
        if (!c.isChild) {
            c.addEvent("blur", function () {
                if (!this.fxRunning && (c.element || this.options.display.showErrors == 1) && (this.options.display.checkValueIfEmpty || c.value)) {
                    this.manageError(c, "blur")
                }
            }.bind(this))
        } else {
            if (c.isChild && c.type == "radio") {
                var d = this.form.getElements('input[name="' + c.getProperty("name") + '"]');
                d.each(function (a) {
                    a.addEvent("blur", function () {
                        if (!this.fxRunning && (c.element || this.options.display.showErrors == 1) && (this.options.display.checkValueIfEmpty || c.value)) {
                            this.manageError(c, "click")
                        }
                    }.bind(this))
                }, this)
            }
        }
    },
    manageError: function (e, f) {
        var d = this.validate(e);
        if (f == "testonly") {
            return d
        }
        if ((!d && e.validation.contains("required")) || (e.value && !d)) {
            if (this.options.display.listErrorsAtTop && f == "submit") {
                this.listErrorsAtTop(e)
            }
            if (this.options.display.indicateErrors == 2 || this.alreadyIndicated == false || e == this.alreadyIndicated) {
                if (!this.firstError) {
                    this.firstError = e
                }
                this.alreadyIndicated = e;
                if (this.options.display.keepFocusOnError && e == this.firstError) {
                    (function () {
                        e.focus()
                    }).delay(10)
                }
                this.addError(e);
                return false
            }
        } else {
            if ((d || (!e.validation.contains("required") && !e.value))) {
                this.removeError(e);
                return true
            }
        }
        return true
    },
    validate: function (el) {
        el.errors = [];
        el.isOk = true;
        if (!this.options.validateDisabled && el.get("disabled")) {
            return true
        }
        if (this.options.trimValue && el.value) {
            el.value = el.value.trim()
        }
        el.validation.each(function (rule) {
            if (el.isChild) {
                if (!this.validateGroup(el)) {
                    el.isOk = false
                }
            } else {
                var ruleArgs = [];
                if (rule.match(/target:.+/)) {
                    return
                }
                var ruleMethod = rule;
                if (rule.match(/^.+\[/)) {
                    ruleMethod = rule.split("[")[0];
                    ruleArgs = eval(rule.match(/^.+(\[.+\])$/)[1].replace(/([A-Z0-9\._-]+)/i, "'$1'"))
                }
                if (this.regex.contains(ruleMethod) && el.get("tag") != "select") {
                    if (this.validateRegex(el, ruleMethod, ruleArgs) == false) {
                        el.isOk = false
                    }
                }
                if (rule.match(/confirm:.+/)) {
                    ruleArgs = [rule.match(/.+:(.+)$/)[1]];
                    if (this.validateConfirm(el, ruleArgs) == false) {
                        el.isOk = false
                    }
                }
                if (rule.match(/differs:.+/)) {
                    ruleArgs = [rule.match(/.+:(.+)$/)[1]];
                    if (this.validateDiffers(el, ruleArgs) == false) {
                        el.isOk = false
                    }
                }
                if (ruleMethod == "words") {
                    if (this.validateWords(el, ruleArgs) == false) {
                        el.isOk = false
                    }
                }
                if (ruleMethod == "required" && (el.get("tag") == "select" || el.type == "checkbox")) {
                    if (this.simpleValidate(el) == false) {
                        el.isOk = false
                    }
                }
                if (rule.match(/%[A-Z0-9\._-]+$/i) || (el.isOk && rule.match(/~[A-Z0-9\._-]+$/i))) {
                    if (eval(rule.slice(1) + "(el)") == false) {
                        el.isOk = false
                    }
                }
            }
        }, this);
        return (el.isOk) ? true : false
    },
    simpleValidate: function (c) {
        if (c.get("tag") == "select") {
            if (!c.multiple) {
                if (c.selectedIndex <= 0) {
                    c.errors.push(this.options.alerts.select);
                    return false
                }
            } else {
                var d = false;
                c.getChildren("option").each(function (a) {
                    if (a.selected) {
                        d = true
                    }
                });
                if (!d) {
                    c.errors.push(this.options.alerts.select_multiple);
                    return false
                }
            }
        } else {
            if (c.type == "checkbox" && c.checked == false) {
                c.errors.push(this.options.alerts.checkbox);
                return false
            }
        }
        return true
    },
    validateRegex: function (m, g, l) {
        var k = "";
        if (g == "length" && l[1]) {
            if (l[1] == -1) {
                this.options.regexp.length = new RegExp("^[\\s\\S]{" + l[0] + ",}$");
                k = this.options.alerts.lengthmin.replace("%0", l[0])
            } else {
                if (l[0] == l[1]) {
                    this.options.regexp.length = new RegExp("^[\\s\\S]{" + l[0] + "}$");
                    k = this.options.alerts.length_fix.replace("%0", l[0])
                } else {
                    this.options.regexp.length = new RegExp("^[\\s\\S]{" + l[0] + "," + l[1] + "}$");
                    k = this.options.alerts.length_str.replace("%0", l[0]).replace("%1", l[1])
                }
            }
        } else {
            if (l[0] && g == "length") {
                this.options.regexp.length = new RegExp("^.{0," + l[0] + "}$");
                k = this.options.alerts.lengthmax.replace("%0", l[0])
            } else {
                k = this.options.alerts[g]
            }
        }
        if ((g == "digit" || g == "number") && l[1]) {
            var j, h = true;
            if (!this.options.regexp[g].test(m.value)) {
                m.errors.push(this.options.alerts[g]);
                h = false
            }
            if (l[1] == -1) {
                j = (m.value.toFloat() >= l[0].toFloat());
                k = this.options.alerts.digitmin.replace("%0", l[0])
            } else {
                j = (m.value.toFloat() >= l[0].toFloat() && m.value.toFloat() <= l[1].toFloat());
                k = this.options.alerts.digitltd.replace("%0", l[0]).replace("%1", l[1])
            }
            if (h == false || j == false) {
                m.errors.push(k);
                return false
            }
        } else {
            if (this.options.regexp[g].test(m.value) == false) {
                m.errors.push(k);
                return false
            }
        }
        return true
    },
    validateConfirm: function (e, h) {
        var f = h[0];
        if (e.value != this.form[f].value) {
            var g = (this.options.display.titlesInsteadNames) ? this.options.alerts.confirm.replace("%0", this.form[f].getProperty("title")) : this.options.alerts.confirm.replace("%0", f);
            e.errors.push(g);
            return false
        }
        return true
    },
    validateDiffers: function (f, h) {
        var e = h[0];
        if (f.value == this.form[e].value) {
            var g = (this.options.display.titlesInsteadNames) ? this.options.alerts.differs.replace("%0", this.form[e].getProperty("title")) : this.options.alerts.differs.replace("%0", e);
            f.errors.push(g);
            return false
        }
        return true
    },
    validateWords: function (k, j) {
        var f = j[0];
        var g = j[1];
        var h = k.value.replace(/[ \t\v\n\r\f\p]/m, " ").replace(/[,.;:]/g, " ").clean().split(" ");
        if (g == -1) {
            if (h.length < f) {
                k.errors.push(this.options.alerts.words_min.replace("%0", f).replace("%1", h.length));
                return false
            }
        } else {
            if (f > 0) {
                if (h.length < f || h.length > g) {
                    k.errors.push(this.options.alerts.words_range.replace("%0", f).replace("%1", g).replace("%2", h.length));
                    return false
                }
            } else {
                if (h.length > g) {
                    k.errors.push(this.options.alerts.words_max.replace("%0", g).replace("%1", h.length));
                    return false
                }
            }
        }
        return true
    },
    isFormValid: function () {
        this.form.isValid = true;
        this.validations.each(function (c) {
            var d = this.manageError(c, "testonly");
            if (!d) {
                this.form.isValid = false
            }
        }, this);
        return this.form.isValid
    },
    isChildType: function (el, validators) {
        var validator;
        if ($defined(el.type) && el.type == "radio") {
            return true
        } else {
            if (validator = validators.join().match(/group(\[.*\])/)) {
                var group = eval(validator[1]);
                this.groups[group[0]] = this.groups[group[0]] || [];
                this.groups[group[0]][0] = this.groups[group[0]][0] || [];
                this.groups[group[0]][1] = group[1] || this.groups[group[0]][1] || 1;
                this.groups[group[0]][0].push(el);
                el.groupID = group[0];
                return true
            }
        }
        return false
    },
    validateGroup: function (j) {
        j.errors = [];
        if (j.type == "radio") {
            var g = this.form[j.getProperty("name")];
            j.group = g;
            var k = false;
            for (var f = 0; f < g.length; f++) {
                if (g[f].checked) {
                    k = true
                }
            }
            if (k == false) {
                j.errors.push(this.options.alerts.radios);
                return false
            } else {
                return true
            }
        } else {
            if (j.type == "checkbox") {
                var h = 0;
                this.groups[j.groupID][0].each(function (a) {
                    if (a.checked) {
                        h++
                    }
                });
                if (h >= this.groups[j.groupID][1]) {
                    return true
                } else {
                    (this.groups[j.groupID][0].length > 1) ? j.errors.push(this.options.alerts.checkboxes_group.replace("%0", this.groups[j.groupID][1])) : j.errors.push(this.options.alerts.checkbox);
                    return false
                }
            } else {
                return false
            }
        }
    },
    listErrorsAtTop: function (b) {
        if (!this.form.element) {
            this.form.element = new Element("div", {
                id: "errorlist",
                "class": this.options.errorClass
            }).injectTop(this.form)
        }
        if ($type(b) == "collection") {
            new Element("p").set("html", "<span>" + b[0].name + " : </span>" + b[0].errors[0]).injectInside(this.form.element)
        } else {
            if ((b.validation.contains("required") && b.errors.length > 0) || (b.errors.length > 0 && b.value && b.validation.contains("required") == false)) {
                b.errors.each(function (a) {
                    new Element("p").set("html", "<span>" + b.name + " : </span>" + a).injectInside(this.form.element)
                }, this)
            }
        }
        window.fireEvent("resize")
    },
    addError: function (m) {
        var j = m.target ? $(m.target).getCoordinates() : m.getCoordinates();
        if (!m.element && this.options.display.indicateErrors != 0) {
            if (this.options.display.errorsLocation == 1) {
                var k = (this.options.display.tipsPosition == "left") ? j.left : j.right;
                var g = {
                    opacity: 0,
                    position: "absolute",
                    "float": "left",
                    left: k + this.options.display.tipsOffsetX
                };
                m.element = new Element("div", {
                    "class": this.options.tipsClass,
                    styles: g
                }).injectInside(document.body);
                this.addPositionEvent(m)
            } else {
                if (this.options.display.errorsLocation == 2) {
                    m.element = new Element("div", {
                        "class": this.options.errorClass,
                        styles: {
                            opacity: 0
                        }
                    }).injectBefore(m)
                } else {
                    if (this.options.display.errorsLocation == 3) {
                        m.element = new Element("div", {
                            "class": this.options.errorClass,
                            styles: {
                                opacity: 0
                            }
                        });
                        if ($type(m.group) == "object" || $type(m.group) == "collection") {
                            m.element.injectAfter(m.group[m.group.length - 1])
                        } else {
                            m.element.injectAfter(m)
                        }
                    }
                }
            }
        }
        if (m.element && m.element != true) {
            m.element.empty();
            if (this.options.display.errorsLocation == 1) {
                var l = [];
                m.errors.each(function (a) {
                    l.push(new Element("p").set("html", a))
                });
                var h = this.makeTips(l).injectInside(m.element);
                if (this.options.display.closeTipsButton) {
                    h.getElements("a.close").addEvent("mouseup", function () {
                        this.removeError(m, "tip")
                    }.bind(this))
                }
                m.element.setStyle("top", j.top - h.getCoordinates().height + this.options.display.tipsOffsetY)
            } else {
                m.errors.each(function (a) {
                    new Element("p").set("html", a).injectInside(m.element)
                })
            }
            if (!this.options.display.fadeDuration || Browser.Engine.trident && Browser.Engine.version == 5 && this.options.display.errorsLocation < 2) {
                m.element.setStyle("opacity", 1)
            } else {
                m.fx = new Fx.Tween(m.element, {
                    duration: this.options.display.fadeDuration,
                    ignore: true,
                    onStart: function () {
                        this.fxRunning = true
                    }.bind(this),
                    onComplete: function () {
                        this.fxRunning = false;
                        if (m.element && m.element.getStyle("opacity").toInt() == 0) {
                            m.element.destroy();
                            m.element = false
                        }
                    }.bind(this)
                });
                if (m.element.getStyle("opacity").toInt() != 1) {
                    m.fx.start("opacity", 1)
                }
            }
        }
        if (this.options.display.addClassErrorToField && !m.isChild) {
            m.addClass(this.options.fieldErrorClass);
            m.element = m.element || true
        }
    },
    addPositionEvent: function (b) {
        if (this.options.display.replaceTipsEffect) {
            b.event = function () {
                var a = b.target ? $(b.target).getCoordinates() : b.getCoordinates();
                new Fx.Morph(b.element, {
                    duration: this.options.display.fadeDuration
                }).start({
                    left: [b.element.getStyle("left"), a.right + this.options.display.tipsOffsetX],
                    top: [b.element.getStyle("top"), a.top - b.element.getCoordinates().height + this.options.display.tipsOffsetY]
                })
            }.bind(this)
        } else {
            b.event = function () {
                var a = b.target ? $(b.target).getCoordinates() : b.getCoordinates();
                b.element.setStyles({
                    left: a.right + this.options.display.tipsOffsetX,
                    top: a.top - b.element.getCoordinates().height + this.options.display.tipsOffsetY
                })
            }.bind(this)
        }
        window.addEvent("resize", b.event)
    },
    removeError: function (d, c) {
        if ((this.options.display.addClassErrorToField && !d.isChild && this.options.display.removeClassErrorOnTipClosure) || (this.options.display.addClassErrorToField && !d.isChild && !this.options.display.removeClassErrorOnTipClosure && c != "tip")) {
            d.removeClass(this.options.fieldErrorClass)
        }
        if (!d.element) {
            return
        }
        this.alreadyIndicated = false;
        d.errors = [];
        d.isOK = true;
        window.removeEvent("resize", d.event);
        if (this.options.display.errorsLocation >= 2 && d.element) {
            new Fx.Tween(d.element, {
                duration: this.options.display.fadeDuration
            }).start("height", 0)
        }
        if (!this.options.display.fadeDuration || Browser.Engine.trident && Browser.Engine.version == 5 && this.options.display.errorsLocation == 1 && d.element) {
            this.fxRunning = true;
            d.element.destroy();
            d.element = false;
            (function () {
                this.fxRunning = false
            }.bind(this)).delay(200)
        } else {
            if (d.element && d.element != true) {
                d.fx.start("opacity", 0)
            }
        }
    },
    focusOnError: function (c) {
        if (this.options.display.scrollToFirst && !this.alreadyFocused && !this.isScrolling) {
            var d;
            if (!this.options.display.indicateErrors || !this.options.display.errorsLocation) {
                d = c.getCoordinates().top - 30
            } else {
                switch (this.options.display.errorsLocation) {
                case 1:
                    d = c.element.getCoordinates().top;
                    break;
                case 2:
                    d = c.element.getCoordinates().top - 30;
                    break;
                case 3:
                    d = c.getCoordinates().top - 30;
                    break
                }
                this.isScrolling = true
            }
            if (window.getScroll().y != d) {
                new Fx.Scroll(window, {
                    onComplete: function () {
                        this.isScrolling = false;
                        if (c.getProperty("type") != "hidden") {
                            c.focus()
                        }
                    }.bind(this)
                }).start(0, d)
            } else {
                this.isScrolling = false;
                c.focus()
            }
            this.alreadyFocused = true
        }
    },
    fixIeStuffs: function () {
        if (Browser.Engine.trident4) {
            var n = new RegExp("url\\(([.a-zA-Z0-9_/:-]+.png)\\)");
            var l = new RegExp("(.+)formcheck.css");
            for (var q = 0; q < document.styleSheets.length; q++) {
                if (document.styleSheets[q].href.match(/formcheck\.css$/)) {
                    var o = document.styleSheets[q].href.replace(l, "$1");
                    var p = document.styleSheets[q].rules.length;
                    for (var r = 0; r < p; r++) {
                        var j = document.styleSheets[q].rules[r].style;
                        var m = o + j.backgroundImage.replace(n, "$1");
                        if (m && m.match(/\.png/i)) {
                            var s = (j.backgroundRepeat == "no-repeat") ? "crop" : "scale";
                            j.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, src='" + m + "', sizingMethod='" + s + "')";
                            j.backgroundImage = "none"
                        }
                    }
                }
            }
        }
    },
    makeTips: function (q) {
        var o = new Element("table");
        o.cellPadding = "0";
        o.cellSpacing = "0";
        o.border = "0";
        var p = new Element("tbody").injectInside(o);
        var j = new Element("tr").injectInside(p);
        new Element("td", {
            "class": "tl"
        }).injectInside(j);
        new Element("td", {
            "class": "t"
        }).injectInside(j);
        new Element("td", {
            "class": "tr"
        }).injectInside(j);
        var l = new Element("tr").injectInside(p);
        new Element("td", {
            "class": "l"
        }).injectInside(l);
        var k = new Element("td", {
            "class": "c"
        }).injectInside(l);
        var m = new Element("div", {
            "class": "err"
        }).injectInside(k);
        q.each(function (a) {
            a.injectInside(m)
        });
        if (this.options.display.closeTipsButton) {
            new Element("a", {
                "class": "close"
            }).injectInside(k)
        }
        new Element("td", {
            "class": "r"
        }).injectInside(l);
        var n = new Element("tr").injectInside(p);
        new Element("td", {
            "class": "bl"
        }).injectInside(n);
        new Element("td", {
            "class": "b"
        }).injectInside(n);
        new Element("td", {
            "class": "br"
        }).injectInside(n);
        return o
    },
    reinitialize: function (b) {
        this.validations.each(function (a) {
            if (a.element) {
                a.errors = [];
                a.isOK = true;
                if (this.options.display.flashTips == 1 || b == "forced") {
                    a.element.destroy();
                    a.element = false
                }
            }
        }, this);
        if (this.form.element) {
            this.form.element.empty()
        }
        this.alreadyFocused = false;
        this.firstError = false;
        this.elementToRemove = this.alreadyIndicated;
        this.alreadyIndicated = false;
        this.form.isValid = true
    },
    submitByAjax: function () {
        this.fireEvent("ajaxRequest");
        new Request({
            url: this.form.action,
            method: this.form.method,
            data: this.form.toQueryString(),
            evalScripts: this.options.ajaxEvalScripts,
            onFailure: function (b) {
                this.fireEvent("ajaxFailure", b)
            }.bind(this),
            onComplete: function (b) {
                this.fireEvent("ajaxComplete", b)
            }.bind(this),
            onSuccess: function (b) {
                this.fireEvent("ajaxSuccess", b);
                if (this.options.ajaxResponseDiv) {
                    $(this.options.ajaxResponseDiv).set("html", b)
                }
            }.bind(this)
        }).send();
        return false
    },
    onSubmit: function (b) {
        this.reinitialize();
        this.fireEvent("onSubmit");
        this.validations.each(function (d) {
            var a = this.manageError(d, "submit");
            if (!a) {
                this.form.isValid = false
            }
        }, this);
        if (this.form.isValid) {
            this.fireEvent("validateSuccess");
            return (this.options.submitByAjax) ? this.submitByAjax() : this.options.submit
        } else {
            if (this.elementToRemove && this.elementToRemove != this.firstError && this.options.display.indicateErrors == 1) {
                this.removeError(this.elementToRemove)
            }
            this.focusOnError(this.firstError);
            this.fireEvent("validateFailure");
            return false
        }
    }
});
window.addEvent("domready", function () {
    var k = false;
    var h = [];
    var o = window.getScrollTop();
    var n;
    console.log("current: " + o);
    var l = -1;
    $$("#main-nav a").each(function (c, d) {    
        if (c.getProperty("href").substr(0,1) != '#') {
          return;
        }
        var a = c.getProperty("href").substr(1); 
        
        var b = $(a).getPosition();
        h.include({
            el: c,
            pos: b.y
        });
        if (o >= b.y && b.y > l) {
            n = c;
            l = b.y
        } else {
        }
        c.addEvent("click", function () {
            m(this)
        })
    });
    //console.log("current class: " + n.getProperty("href"));
    m(n);

    function m(a) {
        if (k == a) {
            return false
        }
        if (k) {
            k.removeClass("current")
        }
        a.addClass("current");
        k = a
    }
    //console.log(h);
    var j = h.length;
    window.addEvent("scroll", function () {
        var c = this.getScrollTop();
        //console.log("scroll actual: " + c);
        for (i = 0; i < j; i++) {
            var a = h[i];
            var b = ((i + 1) < j) ? h[(i + 1)] : false;
            if (c >= a.pos && (b === false || c < b.pos)) {
                //console.log("actual scroll: " + i);
                m(a.el);
                break
            }
        }
    })
});
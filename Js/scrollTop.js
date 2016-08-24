(function () {
    function Scroll(element, options) {
        this.oBtn = document.querySelector(element);
        this.timer = null;
        options = options || {};
        options.iTop = options.iTop || 0;
        options.iTime = options.iTime || 1000;
        this.iTop = options.iTop;
        this.iTime = options.iTime;
        this.fnInt();
    }

    Scroll.prototype.fnInt = function () {
        var _this = this;
        this.oBtn.onclick = function () {
            _this.fnMain();
        }
    };

    Scroll.prototype.fnMain = function () {
        clearInterval(this.timer);
        var start = document.documentElement.scrollTop || document.body.scrollTop;
        var dis = this.iTop - start;
        var iCount = parseInt(this.iTime / 30);
        var n = 0;
        var _this = this;

        this.timer = setInterval(function () {
            _this.bSys = false;
            n++;
            var a = 1 - n / iCount;
            var cur = start + dis * (1 - a * a * a);
            document.documentElement.scrollTop = document.body.scrollTop = cur;
            if (n == iCount) {
                clearInterval(_this.timer);
            }
        }, 30)
    };

    window.Scroll = Scroll;

})();
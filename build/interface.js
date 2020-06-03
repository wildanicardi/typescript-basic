"use strict";
var Asus = (function () {
    function Asus(merk, isGaming) {
        this.merk = merk;
        this.isGaming = isGaming;
    }
    Asus.prototype.off = function () {
        console.log("Dead");
    };
    Asus.prototype.on = function () {
        console.log("Life");
    };
    return Asus;
}());
//# sourceMappingURL=interface.js.map
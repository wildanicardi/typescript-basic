"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Keyboard = require("./Keyboard");
var BaseLaptop = (function () {
    function BaseLaptop(name, type, numeric, touchButton) {
        this.name = name;
        this.type = type;
        this.withNumeric = numeric;
        this.withTouchButton = touchButton;
    }
    BaseLaptop.prototype.a = function () {
        console.log(Keyboard.a());
    };
    BaseLaptop.prototype.b = function () {
        console.log(Keyboard.b());
    };
    return BaseLaptop;
}());
exports.default = BaseLaptop;
//# sourceMappingURL=BaseLaptop.js.map
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vehicle = (function () {
    function vehicle() {
    }
    vehicle.prototype.start = function () {
        console.log("Brummm");
    };
    return vehicle;
}());
var car = (function (_super) {
    __extends(car, _super);
    function car() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheels = 4;
        return _this;
    }
    return car;
}(vehicle));
var bycycle = (function (_super) {
    __extends(bycycle, _super);
    function bycycle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheels = 2;
        return _this;
    }
    return bycycle;
}(vehicle));
var xenia = new car();
console.log(xenia.wheels);
//# sourceMappingURL=abstract.js.map
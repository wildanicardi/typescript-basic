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
Object.defineProperty(exports, "__esModule", { value: true });
var BaseLaptop_1 = require("./BaseLaptop");
var Asus = (function (_super) {
    __extends(Asus, _super);
    function Asus(type, numeric, touchButton) {
        return _super.call(this, "Asus", type, numeric, touchButton) || this;
    }
    return Asus;
}(BaseLaptop_1.default));
exports.default = Asus;
//# sourceMappingURL=Asus.js.map
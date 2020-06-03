"use strict";
var List = (function () {
    function List() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.data = elements;
    }
    List.prototype.addList = function (element) {
        this.data.push(element);
    };
    List.prototype.addMultipleList = function () {
        var _a;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, elements);
    };
    List.prototype.getAll = function () {
        return this.data;
    };
    return List;
}());
var numbers = new List(1, 2, 3);
console.log(numbers.getAll());
numbers.addList(4);
console.log(numbers.getAll());
//# sourceMappingURL=genericClass.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Asus_1 = require("./Asus");
var Macbook_1 = require("./Macbook");
var asus = new Asus_1.default("Zeenbook", true, true);
console.log(asus);
var macbook = new Macbook_1.default(2017, false, false);
console.log(macbook);
macbook.a();
//# sourceMappingURL=Product.js.map
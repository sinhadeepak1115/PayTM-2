"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const balance_1 = require("@repo/store/balance");
function default_1() {
    const balance = (0, balance_1.useBalance)();
    return <div>
    hi there {balance}
  </div>;
}
exports.default = default_1;

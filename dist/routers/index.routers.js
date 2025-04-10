"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatorRouter = exports.healthRouter = void 0;
var health_routers_1 = require("./health.routers");
Object.defineProperty(exports, "healthRouter", { enumerable: true, get: function () { return health_routers_1.router; } });
var calculator_routers_1 = require("./calculator.routers");
Object.defineProperty(exports, "calculatorRouter", { enumerable: true, get: function () { return calculator_routers_1.router; } });

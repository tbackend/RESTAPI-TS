"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routers_1 = require("./routers/index.routers");
const index_middleware_1 = require("./middleware/index.middleware");
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
app.use(index_middleware_1.logger);
app.use(index_middleware_1.timestamp);
app.use(index_middleware_1.errorHandler);
app.use('/health', index_routers_1.healthRouter);
app.use('/calculator', index_routers_1.calculatorRouter);
app.listen((port), () => {
    console.log(`App is listening at ${port}`);
});

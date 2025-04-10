"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestamp = timestamp;
function timestamp(req, res, next) {
    req.timestamp = Date.now();
    next();
}

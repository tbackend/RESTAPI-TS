"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get(('/'), (req, res) => {
    res.send({
        message: 'Get all calculations',
        data: [
            {
                id: 1, result: 1
            },
            {
                id: 2, result: 2
            }
        ],
        timestamp: req.timestamp
    });
});
exports.router.get(('/:id'), (req, res) => {
    res.send({
        message: 'get calculations by id',
        id: req.params.id,
        result: 1,
    });
    // res.send(`hello ${req.params.id}`);
    // console.log(`Query : ${JSON.stringify(req.query)}`);
    // console.log(`Headers : ${JSON.stringify(req.headers)}`);
    // console.log(`Method : ${req.method}`);
    //for headers
    //res.status(200).header({'X-custom-header': 'foo'}, ...).send()
});
exports.router.post('/', (req, res) => {
    const { operator, operand1, operand2 } = req.body;
    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 === 0) {
                result = 'Cannot divide by zero';
            }
            else {
                result = operand1 / operand2;
            }
            break;
        default:
            result = 'Invalid operator';
            break;
    }
    res.send({
        message: 'Created new calculation',
        timestamp: req.timestamp, // make sure req.timestamp exists
        result,
    });
});

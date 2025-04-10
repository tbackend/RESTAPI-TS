import { Request, Router, Response } from "express";
import { timestamp } from "../middleware/time.middleware";
import { CalculatorRequestBody } from "../types/calculator.types";

export const router = Router();

router.get(('/'), (req:Request ,res) => {
    res.send({
        message : 'Get all calculations',
        data: [
            {
                id:1 , result :1
            },
            {
                id:2 , result :2
            }
        ],
        timestamp: req.timestamp
    
    });
})

router.get(('/:id'),(req,res) => {

res.send({
    message : 'get calculations by id',
    id : req.params.id,
    result : 1,

})
    // res.send(`hello ${req.params.id}`);

    // console.log(`Query : ${JSON.stringify(req.query)}`);
    // console.log(`Headers : ${JSON.stringify(req.headers)}`);
    // console.log(`Method : ${req.method}`);


//for headers
//res.status(200).header({'X-custom-header': 'foo'}, ...).send()
});

router.post('/', (req: Request<{}, any, CalculatorRequestBody>, res: Response) => {
    const { operator, operand1, operand2 } = req.body;

    let result: number | string;

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
            } else {
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
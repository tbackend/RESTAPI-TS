import { Request , Router } from "express";
import { timestamp } from "../middleware/time.middleware";

export const router = Router();

router.get('/', (req : Request ,res) => {
res.send({message: 'OK',
    timestamp : req.timestamp
});

});


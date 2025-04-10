import { Request, Response, NextFunction } from "express";

export function timestamp(req: Request , res: Response , next: NextFunction){
    req.timestamp = Date.now();
    next();

}
import  express  from "express";
import { healthRouter , calculatorRouter } from "./routers/index.routers";
import { logger, timestamp , errorHandler} from "./middleware/index.middleware";

const app = express();

const port = 8080;

app.use(express.json());
app.use(logger)
app.use(timestamp)
app.use(errorHandler)

app.use('/health' , healthRouter);
app.use('/calculator', calculatorRouter);

app.listen((port), () => {
console.log(`App is listening at ${port}`);     
})
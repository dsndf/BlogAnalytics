import express, { urlencoded }  from 'express';
import { blogRouter } from './router/BlogRouter.js';
import { customErrorHandler } from './middleware/CustomErrorHandler.js';
process.on('uncaughtException',(err)=>{
    console.log({
        "ErrorMessage":err.message,
        "ErrorName":err.name
    });
    process.exit(1);
})
const app = express();
app.use(express.json());
app.use(urlencoded({extended:true}));
app.get('/',(req,res)=>res.json({success:true}));
app.use("/api",blogRouter);
const server = app.listen(4000,()=>{
    console.log("Listening At Port",4000);
})
process.on("unhandledRejection",(err)=>{
    console.log({
        "ErrorMessage":err.message,
        "ErrorName":err.name
    })
    server.close(()=>{
        console.log("Server Closed.");
        process.exit(1);
    });
})

// custom error handler
app.use(customErrorHandler);
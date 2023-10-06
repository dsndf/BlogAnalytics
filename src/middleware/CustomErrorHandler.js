export const customErrorHandler = (err,req,res,next)=>{
err.message = err.message || "Something went wrong.";
err.statusCode = err.statusCode|| 500;
res.status(err.statusCode).json({
    "Error Message":err.message,
    "Error Status":err.statusCode
});
}
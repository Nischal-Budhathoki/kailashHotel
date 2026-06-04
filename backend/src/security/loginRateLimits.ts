import rateLimit from "express-rate-limit";

//login-rate-limiter
export const loginRateLimiter = rateLimit({
     windowMs: 15 * 60 * 1000, //times validating
    max:5, // 5 requests per ip
    message:{
        success:false,
        message:"Too many requests, please try again later",
    },
    standardHeaders:true,
    legacyHeaders:false
});

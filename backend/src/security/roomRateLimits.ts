import rateLimit from "express-rate-limit";

//room-rate-limiter
export const roomRateLimiter = rateLimit({
     windowMs: 15 * 60 * 1000, //times validating
    max:5, // 5 requests per ip
    message:{
        success:false,
        message:"Too many requests, please try again later",
    },
    standardHeaders:true,
    legacyHeaders:false
});

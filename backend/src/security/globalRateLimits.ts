import rateLimit from "express-rate-limit";


//first api- gateway-rate-limits
export const createRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max:100, // 100 requests per ip
    message:{
        success:false,
        message:"Too many requests, please try again later",
    },
    standardHeaders:true,
    legacyHeaders:false
})


import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
    windowMs : 5 * 60 * 1000,
    max:10,
    message:{
        Status:429,
        error : 'Too many request',
    },
});
export default limiter;
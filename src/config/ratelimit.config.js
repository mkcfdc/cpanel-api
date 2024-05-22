const rateLimitConfig = {
  max: 100, // maximum number of requests
  timeWindow: '1 minute', // time window
  errorResponseBuilder: (req, context) => {
    return {
      code: 429,
      error: 'Too Many Requests',
      message: `You have exceeded the rate limit of ${context.max} requests per ${context.timeWindow}. Please try again later.`
    };
  },
  onExceeding: (req) => {
    req.log.warn(`IP ${req.ip} is approaching the rate limit`);
  },
  onExceeded: (req) => {
    req.log.warn(`IP ${req.ip} has exceeded the rate limit`);
  }
};

export default rateLimitConfig;

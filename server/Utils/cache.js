const Redis = require('ioredis');

const redisClient = new Redis({
    host: process.env.REDISHOST||'redis-server', // Redis server address
    port: 6379,        // Redis server port
  });
  
exports.redisClient = redisClient;
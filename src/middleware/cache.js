import NodeCache from 'node-cache';
import { logger } from '../utils/logger.js';

const cache = new NodeCache({ stdTTL: 600 }); // 10 minutes cache

export const cacheMiddleware = (key) => {
  return (req, res, next) => {
    try {
      const cachedData = cache.get(key);
      if (cachedData) {
        return res.json(cachedData);
      }
      
      // Store original send function
      const originalSend = res.json;
      
      // Override send function
      res.json = function(data) {
        cache.set(key, data);
        originalSend.call(this, data);
      };
      
      next();
    } catch (error) {
      logger.error('Erreur de cache:', error);
      next();
    }
  };
};
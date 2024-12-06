import NodeCache from 'node-cache';
import { logger } from '../utils/logger.js';

const cache = new NodeCache({ stdTTL: 600 }); // 10 minutes cache

export class AnalyticsService {
  async getUsageStatistics() {
    try {
      // Simulate fetching usage statistics
      return {
        dailyActiveUsers: 1000,
        averageSessionDuration: "25m",
        topFeatures: [
          { name: "Analyse de données", usage: 45 },
          { name: "Prédictions", usage: 30 },
          { name: "Rapports", usage: 25 }
        ]
      };
    } catch (error) {
      logger.error('Erreur dans getUsageStatistics:', error);
      throw error;
    }
  }

  async getUserInteractions() {
    try {
      // Simulate fetching user interactions
      return {
        totalInteractions: 5000,
        interactionsByType: {
          clicks: 3000,
          searches: 1500,
          downloads: 500
        }
      };
    } catch (error) {
      logger.error('Erreur dans getUserInteractions:', error);
      throw error;
    }
  }
}
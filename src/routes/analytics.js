import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import { cacheMiddleware } from '../middleware/cache.js';
import { AnalyticsService } from '../services/analyticsService.js';

const router = express.Router();
const analyticsService = new AnalyticsService();

router.get('/usage-stats', authenticateToken, cacheMiddleware('usage-stats'), async (req, res) => {
  try {
    const stats = await analyticsService.getUsageStatistics();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des statistiques' });
  }
});

router.get('/user-interactions', authenticateToken, cacheMiddleware('interactions'), async (req, res) => {
  try {
    const interactions = await analyticsService.getUserInteractions();
    res.json(interactions);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des interactions' });
  }
});

export { router as analyticsRouter };
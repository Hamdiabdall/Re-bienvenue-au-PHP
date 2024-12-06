import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import { PredictionService } from '../services/predictionService.js';

const router = express.Router();
const predictionService = new PredictionService();

router.post('/user-behavior', authenticateToken, async (req, res) => {
  try {
    const prediction = await predictionService.predictUserBehavior(req.body.userData);
    res.json(prediction);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la prédiction du comportement' });
  }
});

router.get('/user-clusters', authenticateToken, async (req, res) => {
  try {
    const clusters = await predictionService.getUserClusters();
    res.json(clusters);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des clusters' });
  }
});

export { router as predictionRouter };
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { rateLimit } from 'express-rate-limit';
import { authRouter } from './routes/auth.js';
import { analyticsRouter } from './routes/analytics.js';
import { predictionRouter } from './routes/predictions.js';
import { errorHandler } from './middleware/errorHandler.js';
import { logger } from './utils/logger.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/api/auth', authRouter);
app.use('/api/analytics', analyticsRouter);
app.use('/api/predictions', predictionRouter);

// Error handling
app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Serveur démarré sur le port ${PORT}`);
});

export default app;
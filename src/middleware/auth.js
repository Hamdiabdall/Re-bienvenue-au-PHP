import jwt from 'jsonwebtoken';
import { logger } from '../utils/logger.js';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token d\'authentification requis' });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
    req.user = user;
    next();
  } catch (error) {
    logger.error('Erreur d\'authentification:', error);
    return res.status(403).json({ error: 'Token invalide' });
  }
};
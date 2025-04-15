import express from 'express';
import cors from 'cors';
import propertyRoutes from './routes/propertyRoutes.js';
import { PORT } from './config/env.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // In case you use POST later

// Routes
app.use('/properties', propertyRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('🏠 RealtyHub API is running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

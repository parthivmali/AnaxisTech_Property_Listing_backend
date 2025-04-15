import express from 'express';
import cors from 'cors';
import propertyRoutes from './routes/propertyRoutes.js';
import { PORT } from './config/env.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/properties', propertyRoutes);

app.get('/', (req, res) => {
  res.send('🏠 RealtyHub API is running...');
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

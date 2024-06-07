import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

import roommatesRoutes from './routes/roommatesRoutes.js';
import gastosRoutes from './routes/gastosRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/roommates', roommatesRoutes);
app.use('/gastos', gastosRoutes);

// Servir el archivo HTML
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});



app.listen(PORT, console.log(`🔥Server on 🔥 http://localhost:${PORT}`));
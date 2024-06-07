import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import roommatesRoutes from './routes/roommatesRoutes.js';
import gastosRoutes from './routes/gastosRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use('/roommates', roommatesRoutes);
app.use('/gastos', gastosRoutes);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.listen(PORT, console.log(`🔥Server on 🔥 http://localhost:${PORT}`));
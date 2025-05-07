import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

// Fayl yo'llari uchun kerakli konstantalar
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Vite build qilingan fayllarni serve qilish
app.use(express.static(path.join(__dirname, 'dist')));

// SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

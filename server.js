import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API route to download resume
app.get('/api/resume', (req, res) => {
  const resumeFile = path.resolve(__dirname, '../public/varad-resume.pdf');
  res.download(resumeFile, 'Varad_Gursalkar_Resume.pdf', (err) => {
    if (err) {
      console.error('Error downloading resume:', err);
      res.status(500).json({ error: 'Failed to download resume file.' });
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'Varad Gursalkar Portfolio API',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Backend API server running on http://localhost:${PORT}`);
});

const express = require('express');
const path = require('path');

const app = express();

// Sajikan file statis dari folder public
app.use(express.static(path.join(__dirname, 'public')));

// Halaman utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Halaman tentang
app.get('/tentang', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tentang.html'));
});

// API
app.get('/api/info', (req, res) => {
  res.json({
    nama: 'Website Sederhana',
    teknologi: 'Node.js + Express',
    versi: '1.0.0',
    status: 'aktif'
  });
});

// Export untuk Vercel
module.exports = app;

// Untuk local development
const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log('Server berjalan di port ' + PORT);
  });
}

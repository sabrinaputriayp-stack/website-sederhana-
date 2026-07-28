const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/tentang', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tentang.html'));
});

app.get('/api/info', (req, res) => {
  res.json({
    nama: 'Website Sederhana',
    teknologi: 'Node.js + Express',
    versi: '1.0.0',
    status: 'aktif'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server berjalan di port ' + PORT);
});

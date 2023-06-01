// JavaScript 코드
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.render('index.html');
});

app.post('/movie', (req, res) => {
  const sampleReceive = req.body.sample_give;
  console.log(sampleReceive);
  res.json({ msg: 'POST 연결 완료!' });
});

app.get('/movie', (req, res) => {
  res.json({ msg: 'GET 연결 완료!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
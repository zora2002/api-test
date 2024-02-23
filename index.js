const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
app.use(express.json())
// body-parser 處理
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
  credentials: true,
  origin: ['http://127.0.0.1:5751'] ,
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, authorization'
}));


app.get('/', (req, res) => {
  res.send('5B2C');
});


app.post('/test', async (req, res, next) => {

  const cookies = req.headers.cookie;
  console.log('🍪Received cookies:', cookies);
  res.send({data: '吉祥 你來回應'});  
 
});

const port = 8080;

app.listen(port, () => {
  console.log(`⚡server running http://127.0.0.1:${port}`);
});

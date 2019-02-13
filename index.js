const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../FC-Client/dist'));

// app.get('/', (req, res) => {
// })

app.listen(PORT, () => {
  console.log(`Server active on port: ${PORT}`);
});
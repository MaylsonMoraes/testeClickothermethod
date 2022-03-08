const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require ('./src/service/databases');


app.use(bodyParser.json());
app.use(express.json());

app.use('/image', require('./src/routes/image-routes'));
app.use('/imageLog', require('./src/routes/imageLog-routes'));

app.listen(3000, () => {
    console.log('Meu servidor está funcionando');
});
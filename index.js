const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const metaRoute = require('./routes/metaRoute');
const dotenv =  require('dotenv');
const bodyParser = require('body-parser');


dotenv.config({ path: `${__dirname}/config.env`}) 

const app = express();


app.use(morgan('dev'));
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}));


app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

//ROUTES
app.use('/api', metaRoute)


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

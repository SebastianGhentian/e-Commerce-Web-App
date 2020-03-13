let express = require ('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');
let data = require('./data');
let port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, res) => res.send('Hello World'))
app.get('/products', (req, res) => res.json(data.products))
app.get('/tv_homeCinema', (req, res) => res.json(data.tv_homeCinema))
app.get('/tablets_phones', (req, res) => res.json(data.tablets_phones))
app.get('/gaming', (req, res) => res.json(data.gaming))
app.get('/fashion', (req, res) => res.json(data.fashion))
app.get('/laptops', (req, res) => res.json(data.laptops))

app.listen(port)
console.log('api running on ' + port + ':')
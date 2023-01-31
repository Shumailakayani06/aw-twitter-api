const express = require('express');
const cors = require('cors');
const { getTweets } = require('./services/database');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('hello from twitter api')
})

app.get('/tweets', async(req,res) =>{
    //get tweets from data base 
    //respond with tweets as JSON
 const tweets = await getTweets();
 res.json(tweets);

});

app.listen(PORT, () => {
    console.log(`Twitter api listening to port: ${PORT}`)
});
import express from 'express';

const app = express();
const port = 3001;

console.log('server is working');

app.listen(port,err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`app listening on port http://localhost:`+port);
})
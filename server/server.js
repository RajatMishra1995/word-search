const express = require('express');
const app = express();
const compressor = require('node-minify');

var promise = compressor.minify({
    compressor: 'uglifyjs',
    input: `${__dirname}/index.js`,
    output: `${__dirname}/../public/js/index.js`
});

const port = 3000;

app.use(express.static('public'));

app.get('/play', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.listen(port, () => console.log(`App listening on port ${port}!`));

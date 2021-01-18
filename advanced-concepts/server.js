/*
* Training: JS advanced
* Author: Christohe Dufour
* Email: opusidea@gmail.com
* Date: 2020
*/

const http = require('http');
const fs = require('fs');
const port = 3000;

http.createServer((req, res) => {
    var filename = '';
    if (req.url.length > 1) {
        filename = req.url.substr(1);
    }
    if (req.url === '/favicon.ico') return;
    res.write(updateTemplate(filename));
    res.end();
}).listen(port, () => console.log('Server running on ' + port))

function updateTemplate(filename) {
    var files = fs.readdirSync('scripts');
    var options = '';
    files.forEach(f => {
        options += '<option>' + f + '</option>';
    })
    var template = fs.readFileSync('index.html').toString();

    var script = '';
    if (filename) {
        script = fs.readFileSync('scripts/' + filename).toString();
    }
    var newTemplate = template
            .replace(/{{ scriptname }}/g, filename)
            .replace('{{ options }}', options)
            .replace(/{{ script }}/g, script)
            ;
    return newTemplate;
}

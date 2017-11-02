 var http = require("http");


var server = http.createServer(function(req, res) {

    if (req.url === "/") {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
        language = /^.*?(\,)/.exec(req.headers["accept-language"])[0].replace(/\,/, ""),
        os = /\((.*)\)/.exec(req.headers["user-agent"])[0].replace(/\(/, "").replace(/\)/, "");

    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end(JSON.stringify({ip: ip, language: language, software: os}));
    }
});


server.listen(process.env.PORT || 3000);

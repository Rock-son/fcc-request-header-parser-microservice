 var http = require("http");


var server = http.createServer(function(req, res) {

    if (req.url === "/") {
    var IP = req.headers.host,
        language = /^.*?(\,)/.exec(req.headers["accept-language"])[0].replace(/\,/, ""),
        OS = /\((.*)\)/.exec(req.headers["user-agent"])[0].replace(/\(/, "").replace(/\)/, "");
        //language = req.headers["accept-language"].split(",")[0],
        //OS = req.headers["user-agent"];

    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end("This is stupid!");
    res.end(JSON.stringify({ip: "test", language: language, software: OS}));
    }
});


server.listen(process.env.PORT || 3000);

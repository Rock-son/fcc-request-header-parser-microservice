var http = require("http"),
    fs = require("fs");


var server = http.createServer(function(req, res) {

    //var IP = req.headers.host,
        //language = /^.*?(\,)/.exec(req.headers["accept-language"])[0].replace(/\,/, ""),
        //OS = /\((.*)\)/.exec(req.headers["user-agent"])[0].replace(/\(/, "").replace(/\)/, "");
     var   language = req.headers["accept-language"].split(",")[0],
        OS = req.headers["user-agent"];

    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end(JSON.stringify({ip: "test", language: language, software: OS}));
});


server.listen(process.env.PORT || 3000);

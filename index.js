const http = require('http'), //HTTP server
      express = require('express'), //handling HTTP requests & routing
      fs = require('fs'), //File system funtinalities
      xmlParse = require('xslt-processor').xmlParse, //XML handling
      xsltProcess = require('xslt-processor').xsltProcess, //XSLT handling
      router = express(), //Init our router
      server = http.createServer(router); //Init our server

      router.get('/', dunction(req, res){

    res.writeHead(200,{'content-Type' : 'text/html'});

    let xml = fs.readFileSync('menu.xml', 'utf8'),
        xsl = fs.readFileSync('menu.xsl', 'utf8');

    xml = xmlParse(xml);
    xsl = xmlParse(xsl);

    let html = xsltProcess(xml, xsl);

    res.end(html.toString());
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", fuction(){

    const addr = server.address();
    console.log("Server listening at", addr.address + ":" +addr.port)
});
const http = require('http')
const url = 'http://capi.douyucdn.cn/api/v1/live'
const request = require('request')
// const queryString = require('querystring');
// const iconv = require('iconv-lite');
// const cheerio = require('cheerio');
const Entities = require('html-entities').XmlEntities;

// http.createServer(function (req, res) {
//   response.writeHead(200, { 'Content-Type': 'text/JSON' })
//   response.end('hello world')
// })
// http.get(url,function(res){
//   console.log(res)
// })
// console.log(request.get(url))

// function start () {
//   // entities = new Entities();
//   request({
//     url,
//     encoding:'utf8'
//   },function(err,res,body){
//     // const queryObj = queryString.parse(body);
//     if(!err && res){
//       // console.log(iconv.decode(body, 'utf-8'))
//       // var str = body;
//       // console.log(entities.decode(str));
//       // body = unescape(body.replace(/\%u/g, "%u"))
//       console.log(decodeURI(body))
//     }
//   })
// }
// start()

var b = 1;
  request({
    url
  },function(err,res,body){
    b = body
    // console.log(b)
  })

http.createServer((req,res)=>{
  
  // const urlObj = (req.url);
  // const queryObj = (urlObj.query);
  // console.log(queryObj);
  // console.log(urlObj);
  res.writeHead(200,{ //200状态码
      'Content-Type':'text/html;charset=utf-8'   //指定返回内容类型
  })
  res.end(  //res.end只是返回内容

  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    ${b}
  </body>
  </html>
  `);
})
.listen(3000,()=>{
  console.log('服务正在3000端口');
})  

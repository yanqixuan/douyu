const request = require('request')
const fs = require('fs')
const url = 'https://www.douyu.com/'

function spider(){
  request(url,function(err,res,body){
    if(!err && res.statusCode === 200){
      console.log(body)
    } else {
      console.log('请求失败',err)
    }
  })
}

spider()
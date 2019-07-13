const request = require('request')
const fs = require('fs')
const iconv = require('iconv-lite')
const url = 'http://capi.douyucdn.cn/api/v1/live'

function spider(){
  request({
    url
  },function(err,res,body){
    if(!err && res.statusCode === 200){
      // const res1 = iconv.decode(body,'utf-8')
      // console.log(res1)
      console.log(iconv.decode(body,'gbk'))
      // console.log(body)
    } else {
      console.log('请求失败',err)
    }
  })
}

spider()
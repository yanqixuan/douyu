import axios from 'axios';
axios.get('http://capi.douyucdn.cn/api/v1/live?limit=20&offset=0').then(
  console.log(res)
)
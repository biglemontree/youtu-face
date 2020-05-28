import { NowRequest, NowResponse } from '@now/node'

// const conf = require('tencentyoutuyun')
import { conf, auth, youtu } from 'tencentyoutuyun'
const config = require('../config/common')
module.exports = (req, res) => {
  
  conf.setAppInfo(10237349, 'AKIDZ3rVyHfQVdnqwihQ6bfXRVSJB61soms7', 'DFeykR4f1Yl6FTIrGEILfuytk4RNPL7J', 346464, 0)
  console.log(conf);
  // const basesign = auth.appSign(1590940800, 346464)
//   youtu.multifaceidentify('http://open.youtu.qq.com/app/img/experience/face_img/face_01.jpg', 'test', [], 5, 40, function(data){
//     console.log("multifaceidentify:" + JSON.stringify(data));
// });
  youtu.detectface('https://pic.17qq.com/uploads/wuwewtuhqx.jpeg', 0, data => {
    console.log('res', data)
  res.send(`Hello ${JSON.stringify(data)}!`);

  })
  const { name = 'World' } = req.query;
  // res.send(`Hello ${basesign}!`);
};

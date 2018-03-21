'use strict';

const qs = require('qs');
const mockjs = require('mockjs');  //导入mock.js的模块

const Random = mockjs.Random;  //导入mock.js的随机数

// 数据持久化   保存在global的全局变量中

const tableUser = [{
  username: 'admin',
  password: 'admin'
},{
  username: 'guest',
  password: 'guest'
}]


module.exports = {
  //post请求  /api/users/ 是拦截的地址   方法内部接受 request response对象
  'GET /api/users' (req, res) {
    const {username, password} = (qs.parse(req.query)).param;
    let flag = true
    tableUser.map(function(val,index){
      if(val.username  == username ){
        if(val.password ==password){
          flag = false
          setTimeout(() => {
            res.json({      //将请求json格式返回
              success: true,
              page: '1235'
            });
          }, 200)
        }
      }else if(tableUser.length==(index+1)&&flag){
        setTimeout(() => {
          res.json({      //将请求json格式返回
            success: false,
            page: '1235',

          });
        }, 200)
      }
    })



  /*  setTimeout(() => {
      res.json({      //将请求json格式返回
        success: true,
        page: '123',
        data: (qs.parse(req.query)).param.username
      });
    }, 200)*/


  }
}

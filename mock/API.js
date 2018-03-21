/*'user strict'

const qs = require('qs');
const mockjs = require('mockjs');

const menu = [
  {
    fMenuId: '01',
    fMenuName:'Button 按钮',
    fMenuPath: '/componentlist'
  },
  {
    fMenuId: '02',
    fMenuName:'Input 输入框',
    fMenuPath: '/user'
  },
  {
    fMenuId: '03',
    fMenuName:' Other 其他',
    fMenuPath: '/user'
  },
  {
    fMenuId: '04',
    fMenuName:'Text 测试',
    fMenuPath: '/user'
  }
]
const selectData = [
  {
    index: '1',
    value: '第一个'
  },
  {
    index: '2',
    value: '第二个'
  },
  {
    index: '3',
    value: '第三个'
  },
  {
    index: '4',
    value: '第四个'
  },
  {
    index: '5',
    value: '第五个'
  }
]
module.exports = {
  'GET /api/queryMenu' (req,res) {
    setTimeout(() => {
      res.json({
        success: true,
        menu:menu
      })
    },200)
  },
  'GET /api/querySelectData' (req,res) {
    setTimeout(() => {
      res.json({
        success: true,
        selectData:selectData
      })
    },200)
  },

}
*/
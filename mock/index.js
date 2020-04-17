const Mock = require('mockjs');

// 用户信息
const userInfo = function () {
  var data = Mock.mock({
    userid: "@id()",
    username: "@cname()",
    date: "@date()",
    avatar: "@image('200x200','red','#fff','avatar')",
    description: "@paragraph()",
    ip: "@ip()",
    email: "@email()"
  })
  return data
}
// 运行系统集合
const sys = function () {
  let Random = Mock.Random;
  let list = []
  for (let i = 0; i < 6; i++) {
    let newSysObject = {
      name: Random.cword(3),
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    list.push(newSysObject)
  }
  return list
}

// 第一个系统的菜单
const sysItemList = function () {

  return [
    {
      name: '首页',
      path: '/home',
    },
    {
      name: '商品',
      path: '/shop',
      children: [
        {
          name: '添加商品',
          path: '/shop/add'
        },
        {
          name: '添加规格',
          path: '/shop/addSku'
        }
      ]
    }
  ]
}

export { userInfo, sys, sysItemList };
const sidebar = require('./siderbar.js');
module.exports = {
   "devServer": {
        open: true     //编译完成后自动打开浏览器
    },
  "title": "dio",
  "description": "wryyyyyyyyyyyyyyy!!!",
  "dest": "public",
  "base": "/",
  "head": [
    [
      "link",
      {
        "rel": "image",
          "href": "/logo.jpeg",
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
    "plugins": [
    
        ["vuepress-plugin-code-copy", {
            align: 'top',
            successText: '复制成功',
            staticIcon: true,
        }],
        [//看板娘 白色猫咪
            '@vuepress-reco/vuepress-plugin-kan-ban-niang', {
                theme: [
                    'whiteCat','blackCat'
                ],
                clean: false,
                messages: {
                    welcome: '砸瓦鲁多', home: '砸瓦鲁多', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。'
                },
                messageStyle: { right: '68px', bottom: '290px' },
                width: 250,
                height: 320
        }],
    ],
  "theme": "reco",
  "themeConfig": {
    "mode": 'light',
    "subSidebar": 'auto',
    // "valineConfig": {
    //     "appId": 'aCSipIDPBNQTreNNNr4bT5R4-gzGzoHsz',//https://console.leancloud.cn/register 无后台云评论服务
    //   "appKey": 'zuQELzuRINaCxHgIozNrnwKO',
    // },
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },

    //   {
    //     "text": "Contact",
    //     "icon": "reco-message",
    //     "items": [
    //       {
    //         "text": "GitHub",
    //         "link": "https://github.com/chengbocd",
    //         "icon": "reco-github"
    //       }
    //     ]
    //   },
    ],
      sidebar,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "目录索引"
      },
      "tag": {
        "location": 3,
        "text": "标签索引"
      }
    },
    "friendLink": [
      {
        "title": "wepego的blog",
        "desc": "一个小胖子的blog",
            "avatar": "/logo.jpeg",
            "link": "https://www.wepego.cn/"
        }
    ],
    "logo": "/logo.jpeg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "dio",
    "authorAvatar": "/logo.jpeg",
    "record": "首页",
    "startYear": "2022"
  },
    "markdown": {
        "lineNumbers": true, //是否启用行号功能
      "anchor": {
          "level": [1, 2, 3, 4, 5, 6],
      },
      "code": {
          "highlightLines": true, //是否启用高亮功能
          "lineNumbers": true, //是否启用行号功能
          "preWrapper": true, //是否启用外包装层，上面两个选项的依赖项，启用上面两项必须启用这一项
          "vPre": {
              "block": true,//代码块启用v-pre标签
              "inline": true //行内代码启用v-pre标签
          }
      },
    },
  "autoOpenBrowser": true,
}

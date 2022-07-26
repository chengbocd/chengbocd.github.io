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
        ["@vuepress-reco/vuepress-plugin-comments",],
        ["vuepress-plugin-meting",],
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
            }
        ],

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
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
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
    "lineNumbers": true
    },
  "autoOpenBrowser": true,
}

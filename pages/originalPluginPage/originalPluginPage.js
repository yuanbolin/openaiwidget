//logs.js
const backgroundAudioManager = wx.getBackgroundAudioManager()
var plugin = requirePlugin("myPlugin"); 
Page({
  data: {
  },
  onLoad: function (options) {
    wx.getSystemInfo({
      success: res => {
        let isIOS = res.system.indexOf("iOS") > -1;
        let navHeight = 0;
        if (!isIOS) {
          navHeight = 48;
        } else {
          navHeight = 44;
        }
        this.setData({
          status: res.statusBarHeight,
          navHeight: navHeight,
          statusBarHeight: res.statusBarHeight + navHeight
        })
      }
    })
    plugin.init({
      appid: "OzGZlf2JwouS3FWSih9Gd7FV8gHk6e",
      openid: "ofMRe5P2_qntmFtdUOeUleJAbUyc",
      // textToSpeech: true,
      // guideList: [],
      welcome: '请问需要什么帮助',
      guideList: ["多少钱包邮","怎么查询物流信息呢?","适配什么车型?"],
      textToSpeech: 1,
      welcome: "请问有什么需要帮助？",
      // welcomeImage: 'http://inews.gtimg.com/newsapp_bt/0/10701537095/1000',
      background: "#f3f3f3",
      guideCardHeight: 40,
      operateCardHeight: 90,
      history: true,
      hideMovableButton:true,
      navHeight: 0,
      robotHeader: 'http://www.ruoweiedu.com:5055/files/images/customerServicePhoto/20210423/93c1abeef99d44d486e7dba4b928d34d.png',
      success: () => {
        this.setData({
          flag: true
        })
      },
      fail: error => {}
    });
  },
  getQueryCallback: function (e) {
    console.log(e)
   
  },
  goBackHome: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  back:function() {
    this.goBackHome()
  }
})

//logs.js
const util = require('../../utils/util.js')
const AV = require('../../libs/av-weapp-min.js');
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})

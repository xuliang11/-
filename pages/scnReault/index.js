// pages/scnReault/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:8,
    password:8888
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    this.setData({
      password:options.password

    })
     let time=8;
   this.timer=setInterval(()=>{
          this.setData({
            time:--time
          });
     if (time <=0) {
       clearInterval(this.timer);
       wx.redirectTo({
        //  url: '../bilibili/index?password='+res.data.data.password+'&number='+res.data.data.number,
         url: '../bilibili/index' 
       })
     }
     },1000);
     
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
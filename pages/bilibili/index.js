// pages/bilibili/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:8888,
    house:0,
    minutes:0,
    secounds:0,
    actionText:"骑行时间",
    clickBtn:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 this.setData({
      number: options.number
 })
 let h=0;
 let m=0;
 let s=0;

 this.timer= setInterval(()=>{
   this.setData({
     secounds: s++
   })
   if(s==60){
     s=0;
     m++;
     setTimeout(()=>{
       this.setData({
         minutes: m
       })
     },1000)
     if(m==60){
       m=0;
       house++;
       setTimeout(()=>{
         this.setData({
           h:house
         })
       },1000);
     }
   }
  },1000)
  },
  endride:function(){
    clearInterval(this.timer);
    this.timer="";
       this. setData({
       actionText:"本次骑行时间",
       clickBtn:true
    })
  },
  moveindex: function () {
    if (this.timer == "") {
      wx.redirectTo({
        url: '../index/index',
      })

    } else {
      wx.navigateTo({
        url: '../index/index?timer='+this.timer,
      })
    }
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
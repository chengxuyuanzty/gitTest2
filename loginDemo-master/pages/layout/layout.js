// pages/layout/layout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    new: 'top-hoverd-btn',
    good: '',
    child: '',
    mom: '',
    girl: '',
    shoe: '',
    home: '',
    beauti: '',
    food: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  toNew: function () {
    console.log('new');
    this.updateBtnStatus('new');
  },
  toGood: function () {
    console.log('good');
    this.updateBtnStatus('good');
  },
  toChild: function () {
    console.log('child');
    this.updateBtnStatus('child');
  },
  toMom: function () {
    console.log('mom');
    this.updateBtnStatus('mom');
  },
  toGirl: function () {
    console.log('girl');
    this.updateBtnStatus('girl');
  },
  toShoe: function () {
    console.log('shoe');
    this.updateBtnStatus('shoe');
  },
  toHome: function () {
    console.log('home');
    this.updateBtnStatus('home');
  },
  toBeauti: function () {
    console.log('beauti');
    this.updateBtnStatus('beauti');
  },
  toFood: function () {
    console.log('food');
    this.updateBtnStatus('food');
  },
  updateBtnStatus: function (k) {
    this.setData({
      new: this.getHoverd('new', k),
      good: this.getHoverd('good', k),
      child: this.getHoverd('child', k),
      mom: this.getHoverd('mom', k),
      girl: this.getHoverd('girl', k),
      shoe: this.getHoverd('shoe', k),
      home: this.getHoverd('home', k),
      beauti: this.getHoverd('beauti', k),
      food: this.getHoverd('food', k)
    });
  },
  getHoverd: function (src, dest) {
    return (src === dest ? 'top-hoverd-btn' : '');
  }  
})
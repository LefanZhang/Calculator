var rpn = require("../rpn.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: 0
  },
  clickbutton: function(event){
      // console.log(event);
      var result = this.data.result;
      if (event.currentTarget.id=="back"){
        result = 0
      }else if(result.length==17){
        if (event.currentTarget.id == "退格"){
          result = result.substring(0, result.length - 1)
        }else{
          result = result
        }
      }else{
        if(result===0){
          if (event.currentTarget.id=="change"){
            result = 0
          } else if (event.currentTarget.id == "退格"){
            result = 0
          } else if (event.currentTarget.id == "=" || event.currentTarget.id == "+" || event.currentTarget.id == "-" || event.currentTarget.id == "/" || event.currentTarget.id == "*"){
            result = 0
          } else if (event.currentTarget.id == "."){
            result = "0"+"."
          }else{
            result = event.currentTarget.id
          }
        }else{
          if (event.currentTarget.id=="退格"){
            if(result.length==1) result=0;
            else result = result.substring(0,result.length-1);
          } else if (event.currentTarget.id == "change"){
            if(result[0]=="-"){
              result=result.substring(1,result.length)
            }else{
              result="-"+result
            }
          } else if ((result[result.length - 1] == "/" || result[result.length - 1] == "*" || result[result.length - 1] == "-" || result[result.length - 1] == "+" || result[result.length - 1] == "." || result[result.length - 1] == "=") && (event.currentTarget.id == "/" || event.currentTarget.id == "+" || event.currentTarget.id == "-" || event.currentTarget.id == "*" || event.currentTarget.id == "." || event.currentTarget.id == "=")){
            result = result
          } else if (result[result.length - 1] == "/" && event.currentTarget.id == "0"){
            result = result
          } else if (result==0 && result[result.length-1] != "." && event.currentTarget.id == "0"){
            result = result
          }else{
            result = result + event.currentTarget.id
          }
        }
      }
      if(result[result.length-1]=="=") result = rpn.calCommonExp(result.substring(0,result.length-1));
      this.setData({
        result:result
      })
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
    
  }
})
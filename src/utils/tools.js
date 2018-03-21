class tools  {
  /*
  * 获取cookie
  * */
  static getCookie(name){
    let arr ,
      reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
      return arr[2];
    }else{
      return null
    }
  }
  /*
   * 设置cookie
   * */
  static setCookie(name, value, days){
    let time = new Date();
    time.setDate(time.getTime() + (days*24*60*60*1000));
    let expires = 'expires='+ time.toUTCString();
    document.cookie = name + '=' + value + ';'+ expires;
  }
  /*
  * 删除cookie
  * */
  static delCookie (name){
    let exp = new Date();
    exp.setTime(exp.getTime());
    let val = this.getCookie(name);
    if(val!=null){
      document.cookie = name+"="+val+";expires="+exp.toGMTString();
    }
  }












}

export default tools

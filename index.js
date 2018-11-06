var musicAudio=document.getElementById("musicAudio");
  var music=document.getElementsByClassName("music")[0];
  // document.addEventListener('DOMContentLoaded', function() {
  //   function audioAutoPlay() {
  //     musicAudio.play();
  //     document.addEventListener("WeixinJSBridgeReady", function() {
  //       musicAudio.play();
  //     }, false);
  //   }
  //   audioAutoPlay();
  // });
  function fn(){
    if(musicAudio.muted){
      musicAudio.muted=false; //静音
      music.style.backgroundImage="url(img/music-on.png)";
      music.style.animation="music 3s linear infinite";
      musicAudio.play();
    }else{
      musicAudio.muted=true;
      music.style.backgroundImage="url(img/music-off.png)";
      music.style.animation="music 0s";
      musicAudio.paused;
    }
  }
  var year = [ '1978', '1980', '1981', '1984', '1985', '1988', '1989', '1990', '1991', '1991', '1992', '1992', '1992', '1994', '1997', '1999', '2000', '2004', '2005', '2005', '2006', '2006', '2006', '2006', '2007', '2008', '2008', '2008', '2010', '2011', '2012', '2012', '2013', '2013', '2014', '2014', '2015', '2015', '2016', '2016', '2017'];
  var count = 1;
  function circle(){
    var page = document.getElementsByClassName('class')[count];
    $('.body').children().eq(count).addClass("show").siblings().removeClass('show');
    // $('.body').eq(count).addClass("show").siblings().removeClass('show');
    $('.pic').css('background-image','"url(img/"+ "year[count-1]"+".jpg")');
    count++;
    
    if (count === 8) {
      $('.page-container').css('background-image','url(img/80-90_02.png)');
    }
    if (count === 18) {
      $('.page-container').css('background-image','url(img/00-10_02.png)');
    }
    if (count === 32) {
      $('.page-container').css('background-image','url(img/10-18_02.png)');
    }
    // if (count === 4) {
    //   clearInterval(timer);
    // }
  }
  var timer = setInterval(circle, 4000);
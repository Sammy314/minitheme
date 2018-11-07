window.onload = function() {


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
  var speed=1;
  function circle(){
    var page = document.getElementsByClassName('class')[count];
    $('.body').children().eq(count).addClass("show").siblings().removeClass('show');
    // $('.body').eq(count).addClass("show").siblings().removeClass('show');
    count++;
    
    if (count === 2) {  
      // $('.stage-3-img').css('animation','translate-y .5s linear .5s 1 normal');
      
      // var moveTimer = setInterval(move(document.getElementsByClassName('stage-3-img')[0]), 1000);
    }
    if (count === 3) {
      // $('.stage-3-img').css('animation','translate-y .5s linear .5s 1 normal');
    }
    if (count === 4) {  
      // $('.stage-3-img').css('animation','translate-y .5s linear .5s 1 nosrmal');
    }
    if (count === 17) {  
      $('.stage-1-img').css('animation','translate-y .5s linear .5s 1 normal forwards');
      $('.stage-2-img').css('animation','translate-y .5s linear .5s 1 normal forwards');
    }
    if (count === 8) {
      $('.page').css('background-image','url(img/80-90_02.png)');
    }
    if (count === 18) {
      $('.page').css('background-image','url(img/00-10_02.png)');
    }
    if (count === 32) {
      $('.page').css('background-image','url(img/10-18_02.png)');
    }
    // if (count === 4) {
    //   clearInterval(timer);
    // }
  }
  var timer = setInterval(circle, 4000);
  function getStyle(obj, attr) {
    if (window.getComputedStyle) {
      return getComputedStyle(obj, null)[attr];
    }else {
      return obj.currentStyle[attr];
    }
  }
  // function move(id){
  //   var top = getStyle(id, 'top');
  //   top = parseInt(top)- 5;
  //   stage3.style.top = top + 'px';
  //   console.log(e.style.top)
  //     // if(e.style.top > -50){
  //     // }else{
  //     //     // e.style.top = '-50px';
  //     //     clearInterval(moveTimer);
  //     // }
  // }
  // setInterval(move(stage3), 100);
  setInterval(function() {
    var top = getStyle(stage3, 'top');
    top = parseInt(top)- 5;
    stage3.style.top = top + 'px';
  }, 200);
}
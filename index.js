window.onload = function() {
  
  var year = [ '1978', '1980', '1981', '1984', '1985', '1988', '1989', '1990','1990', '1991', '1991', '1992', '1992', '1992', '1994', '1997', '1999', '2000', '2004', '2005', '2005', '2006', '2006', '2006', '2006', '2007', '2008', '2008', '2008', '2010', '2011', '2012', '2012', '2013', '2014', '2014', '2015', '2015', '2016', '2016', '2017'];
  setTimeout(function() {
    $(".gif").animate({"opacity": "0"},1000);
    $(".page").animate({"opacity": "1"},1000);
  }, 300);
  setTimeout(function() {
    var timer = setInterval(circle, 2000);
  }, 300);
  var count = 1;
  function circle(){
    var page = document.getElementsByClassName('class')[count];
    $('.body').children().eq(count).addClass("show").siblings().removeClass('show');
    // $('.body').eq(count).addClass("show").siblings().removeClass('show');
    count++;
    
    switch (count) {
      case 1:
      // 78
        break;
      case 2:
      // 80
        move(stage3, 51);
        move(stage4, 51);
        break;
      case 3:
      // 81
        move(stage4, 103);
        break;
      case 4:
      // 84
        move(stage4, 154);
        break;
      case 5:
      // 85
        move(stage4, 206);
        break;
      case 6:
      // 1988
        move(stage4, 258);
        break;
      case 7:
      // 1989
        move(stage4, 308);
        break;
      case 8:
      // 90
        move(stage3, 103);
        move(stage4, 360);
        $('.page').css('background-image','url(img/80-90_02.png)');
        break;
      case 10:
      // 91
        move(stage4, 411);
        break;
      case 12:
      // 92
        move(stage4, 463);
        break;
      case 15:
      // 94
        move(stage4, 514);
        break;
      case 16:
      // 97
        move(stage4, 566);
        break;
      case 17:
      // 99
        move(stage4, 617);
        break;
      case 18:
      // 00
        move(stage1, 51);
        move(stage2, 51);
        move(stage3, 155);
        move(stage4, 669);
        $('.page').css('background-image','url(img/00-10_02.png)');
        break;
      case 19:
      // 04
        move(stage4, 720);
        break;
      case 20:
      // 05
        move(stage4, 772);
        break;
      case 22:
      // 06
        move(stage4, 823);
        break;
      case 26:
      // 07
        move(stage4, 875);
        break;
      case 27:
      // 08
        move(stage4, 926);
        break;
      case 30:
      // 10
        move(stage3, 206);
        move(stage4, 977);
        break;
      case 31:
      // 11
        move(stage4, 1029);
        $('.page').css('background-image','url(img/10-18_02.png)');
        break;
      case 32:
      // 12
        move(stage4, 1080);
        break;
      case 34:
      // 13
        move(stage4, 1131);
        break;
      case 35:
      // 14
        move(stage4, 1183);
        break;
      case 37:
      // 15
        move(stage4, 1234);
        break;
      case 39:
      // 16
        move(stage4, 1286);
        break;
      // case 41:
      // // 17
      //   move(stage4, 1337);
      //   $('.page .head').css('opacity', '0');
      //   clearInterval(timer);
      //   break;
      default:
        break;
    }
  }
 
  
  function getStyle(obj, attr) {
    if (window.getComputedStyle) {
      return getComputedStyle(obj, null)[attr];
    }else {
      return obj.currentStyle[attr];
    }
  }
  function move(dom, value){
    var moveTimer = setInterval(function() {
      var top = getStyle(dom, 'top');
      top = parseInt(top) -1;
      dom.style.top = top + 'px';
      if (top == -(value)) {
        clearInterval(moveTimer);
      }
    }, 6);
  }
}


function fn(){
  var musicAudio=document.getElementById("musicAudio");
  var music=document.getElementsByClassName("music")[0];
  document.addEventListener('DOMContentLoaded', function() {
    function audioAutoPlay() {
      musicAudio.play();
      document.addEventListener("WeixinJSBridgeReady", function() {
        musicAudio.play();
      }, false);
    }
    audioAutoPlay();
  });
  if(musicAudio.muted){
    musicAudio.muted=false; //静音
    music.style.backgroundImage="url(img/music-on.png)";
    music.style.animation="music 3s linear infinite";
    musicAudio.paused;
  }else{
    musicAudio.muted=true;
    music.style.backgroundImage="url(img/music-off.png)";
    music.style.animation="music 0s";
    musicAudio.play();
  }
}
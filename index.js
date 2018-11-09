window.onload = function() {
  
  var year = [ '1978', '1980', '1981', '1984', '1985', '1988', '1989', '1990','1990', '1991', '1991', '1992', '1992', '1992', '1994', '1997', '1999', '2000', '2004', '2005', '2005', '2006', '2006', '2006', '2006', '2007', '2008', '2008', '2008', '2010', '2011', '2012', '2012', '2013', '2014', '2014', '2015', '2015', '2016', '2016', '2017'];
  setTimeout(function() {
    $(".gif").hide();
    $(".canvas-wrap").hide();
    $(".page").animate({"opacity": "1"},1000);
  }, 8000);
  setTimeout(function() {
    var timer = setInterval(circle, 4000);
  }, 9000);
  var count = 1;
  function circle(){
    var page = document.getElementsByClassName('class')[count];
    $('.body').children().eq(count).addClass("show").siblings().removeClass('show');
    count++;
    
    switch (count) {
      case 1:
      // 78
        break;
      case 2:
      // 80
        move(stage3, 60);
        move(stage4, 60);
        break;
      case 3:
      // 81
        move(stage4, 120);
        break;
      case 4:
      // 84
        move(stage4, 180);
        break;
      case 5:
      // 85
        move(stage4, 240);
        break;
      case 6:
      // 1988
        move(stage4, 300);
        break;
      case 7:
      // 1989
        move(stage4, 360);
        break;
      case 8:
      // 90
        move(stage3, 120);
        move(stage4, 420);
        $('.page').css('background-image','url(img/80-90_02.png)');
        break;
      case 10:
      // 91
        move(stage4, 480);
        break;
      case 12:
      // 92
        move(stage4, 540);
        break;
      case 15:
      // 94
        move(stage4, 600);
        break;
      case 16:
      // 97
        move(stage4, 660);
        break;
      case 17:
      // 99
        move(stage4, 720);
        break;
      case 18:
      // 00
        move(stage1, 60);
        move(stage2, 60);
        move(stage3, 180);
        move(stage4, 780);
        $('.page').css('background-image','url(img/00-10_02.png)');
        break;
      case 19:
      // 04
        move(stage4, 840);
        break;
      case 20:
      // 05
        move(stage4, 900);
        break;
      case 22:
      // 06
        move(stage4, 960);
        break;
      case 26:
      // 07
        move(stage4, 1020);
        break;
      case 27:
      // 08
        move(stage4, 1080);
        break;
      case 30:
      // 10
        move(stage3, 240);
        move(stage4, 1140);
        break;
      case 31:
      // 11
        move(stage4, 1200);
        $('.page').css('background-image','url(img/10-18_02.png)');
        break;
      case 32:
      // 12
        move(stage4, 1260);
        break;
      case 34:
      // 13
        move(stage4, 1320);
        break;
      case 35:
      // 14
        move(stage4, 1380);
        break;
      case 37:
      // 15
        move(stage4, 1440);
        break;
      case 39:
      // 16
        move(stage4, 1500);
        break;
      case 41:
      // 17
        move(stage4, 1560);
        break;
        case 42:
          move(stage4, 1620);
          $('.page .head').css('opacity', '0');
          clearInterval(timer);
          break;
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
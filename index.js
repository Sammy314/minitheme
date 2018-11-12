$("body").append(
  '<audio id="musicAudio" autoplay="true" loop="loop" preload="true"><source src="music.mp3" type="audio/mpeg"></audio>'
);
// 音乐自动播放
function audioAutoPlay(id){
    var audio = document.getElementById(id);
    play = function(){
        audio.play();
        document.removeEventListener("touchstart",play, false);
    };
    audio.play();
    // 获取微信初始化完成
    document.addEventListener("WeixinJSBridgeReady", function () {
        play();
    }, false);
    // 手机触碰屏幕
    document.addEventListener("touchstart",play, false);
}
audioAutoPlay('musicAudio');
window.onload = function() {
  // $('.page-container').show();
  setTimeout(function() {
    $(".gif").hide();
    $(".canvas-wrap").hide();
    $(".page").animate({"opacity": "1"},1000);
  }, 8000);
  setTimeout(function() {
    var timer = setInterval(circle, 4000);
  }, 8500);
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
      var top = getStyle(dom, 'backgroundPositionY');
      top = parseInt(top) -1;
      dom.style.backgroundPositionY = top + 'px';
      if (top == -(value)) {
        clearInterval(moveTimer);
      }
    }, 6);
  }
}
// // 音乐播放
// function autoPlayMusic() {
//   // 自动播放音乐效果，解决浏览器或者APP自动播放问题
//   function musicInBrowserHandler() {
//       musicPlay(true);
//       document.body.removeEventListener('touchstart', musicInBrowserHandler);
//   }
//   document.body.addEventListener('touchstart', musicInBrowserHandler);

//   // 自动播放音乐效果，解决微信自动播放问题
//   function musicInWeixinHandler() {
//       musicPlay(true);
//       document.addEventListener("WeixinJSBridgeReady", function () {
//           musicPlay(true);
//       }, false);
//       document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
//   }
//   document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
// }
// function musicPlay(isPlay) {
//   var audio = document.getElementById('musicAudio');
//   if (isPlay && audio.paused) {
//       audio.play();
//   }
//   if (!isPlay && !audio.paused) {
//       audio.pause();
//   }
// }
// autoPlayMusic();

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
    music.style.animation="rotating 3s linear infinite";
    musicAudio.paused;
  }else{
    musicAudio.muted=true;
    music.style.backgroundImage="url(img/music-off.png)";
    music.style.animation="rotating 0s";
    musicAudio.play();
  }
}



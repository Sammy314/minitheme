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
      move(stage3, 58);
      move(stage4, 60);
      break;
    case 3:
    // 81
      move(stage4, 118);
      break;
    case 4:
    // 84
      move(stage4, 177);
      break;
    case 5:
    // 85
      move(stage4, 236);
      break;
    case 6:
    // 1988
      move(stage4, 295);
      break;
    case 7:
    // 1991
      move(stage3, 117);
      move(stage4, 354);
      break;
    case 8:
    // 92
      move(stage4, 413);
      break;
    case 10:
    // 94
      move(stage4, 472);
      break;
    case 11:
    // 06
      move(stage1, 60);
      move(stage2, 59);
      move(stage3, 176);
      move(stage4, 530);
      break;
    case 15:
    // 08
      move(stage4, 590);
      break;
    case 18:
    // 11
      move(stage3, 236);
      move(stage4, 649);
      break;
    case 19:
    // 12
      move(stage4, 708);
      break;
    case 20:
    // 13
      move(stage4, 767);
      break;
    case 21:
    // 14
      move(stage4, 826);
      break;
    case 23:
    // 15
      move(stage4, 885);
      break;
    case 25:
    // 16
      move(stage4, 944);
      break;
    case 27:
    // 17
      // move(stage4, 944);
      $('.page .foot').css('opacity', '0');
      clearInterval(timer);
      break;
    default:
      break;
  }
}



function handleClick() {
  var musicAudio=document.getElementById("musicAudio");
  musicAudio.src = "music.mp3";
  musicAudio.play();
  document.addEventListener("WeixinJSBridgeReady", function() {
    if(typeof WeixinJSBridge == "object") {
      WeixinJSBridge.invoke("getNetworkType", {}, function(j) {
        musicAudio.play();
      })
    }
  });
  
  $(".lead-page").addClass("scaleDraw");
  
  setTimeout(function() {
    $(".lead-page").hide();
    $(".page").show();
  }, 4000);
  
  // setTimeout(function() {
  //   $(".gif").hide();
  //   $(".canvas-wrap").hide();
  //   $(".page").animate({"opacity": "1"},1000);
  // }, 300);
  setTimeout(function() {
    var timer = setInterval(circle, 4000);
  }, 4000);
}
function fn(){
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



window.onload = function() {
  

 
  // document.addEventListener('DOMContentLoaded', function() {
  //   function audioAutoPlay() {
  //     musicAudio.play();
  //     document.addEventListener("WeixinJSBridgeReady", function() {
  //       musicAudio.play();
  //     }, false);
  //   }
  //   audioAutoPlay();
  // });
  
  var year = [ '1978', '1980', '1981', '1984', '1985', '1988', '1989', '1990', '1991', '1991', '1992', '1992', '1992', '1994', '1997', '1999', '2000', '2004', '2005', '2005', '2006', '2006', '2006', '2006', '2007', '2008', '2008', '2008', '2010', '2011', '2012', '2012', '2013', '2013', '2014', '2014', '2015', '2015', '2016', '2016', '2017'];
  var count = 1;
  function circle(){
    var page = document.getElementsByClassName('class')[count];
    $('.body').children().eq(count).addClass("show").siblings().removeClass('show');
    // $('.body').eq(count).addClass("show").siblings().removeClass('show');
    count++;
    
    switch (count) {
      case 1:
        break;
      case 2:
        move(stage3, 50);
        move(stage4, 50);
        break;
      case 3:
        move(stage4, 100);
        break;
      case 4:
        move(stage4, 150);
        break;
      case 5:
        move(stage4, 200);
        break;
      case 6:
        move(stage4, 250);
        break;
      case 7:
        move(stage4, 300);
        break;
      case 8://
        move(stage3, 100);
        move(stage4, 350);
        $('.page-container').css('background-image','url(img/80-90_02.png)');
        break;
      case 9:
        move(stage4, 400);
        break;
      case 11:
        move(stage4, 450);
        break;
      case 14:
        move(stage4, 500);
        break;
      case 15:
        move(stage4, 550);
        break;
      case 16:
        move(stage4, 600);
        break;
      case 17://
        move(stage1, 50);
        move(stage2, 50);
        move(stage3, 150);
        move(stage4, 650);
        $('.page-container').css('background-image','url(img/00-10_02.png)');
        break;
      case 18:
        move(stage4, 700);
        break;
      case 19:
        move(stage4, 750);
        break;
      case 21:
        move(stage4, 800);
        break;
      case 25:
        move(stage4, 850);
        break;
      case 26:
        move(stage4, 900);
        break;
      case 29://
        move(stage3, 200);
        move(stage4, 950);
        break;
      case 30:
        move(stage4, 1000);
        $('.page-container').css('background-image','url(img/10-18_02.png)');
        break;
      case 31:
        move(stage4, 1050);
        break;
      case 33:
        move(stage4, 1100);
        break;
      case 34:
        move(stage4, 1150);
        break;
      case 36:
        move(stage4, 1200);
        break;
      case 38:
        move(stage4, 1250);
        break;
      case 40:
        move(stage4, 1300);
        clearInterval(timer);
        $('.page-container .head').css('visibility', 'hidden');
        break;
      default:
        break;
    }
  }
  setTimeout(function() {
    $(".gif").animate({"opacity": "0"},1000);
    $(".page").animate({"opacity": "1"},1000);
  }, 8000);
  setTimeout(function() {
    var timer = setInterval(circle, 4000);
  }, 5000);
  
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
      top = parseInt(top)- 5;
      dom.style.top = top + 'px';
      if (top == -(value)) {
        clearInterval(moveTimer);
      }
    }, 30);
  }
}
function fn(){
  var musicAudio=document.getElementById("musicAudio");
  var music=document.getElementsByClassName("music")[0];
  if(musicAudio.muted){
    musicAudio.muted=false; //静音
    music.style.backgroundImage="url(img/music-on.png)";
    music.style.animation="music 3s linear infinite";
    // musicAudio.play();
  }else{
    musicAudio.muted=true;
    music.style.backgroundImage="url(img/music-off.png)";
    music.style.animation="music 0";
    // musicAudio.paused;
  }
}
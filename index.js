// window.onload = function() {
  
// }
  function fn(){
    var musicAudio=document.getElementById("musicAudio");
    var music=document.getElementsByClassName("music")[0];
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
  // function move(dom, value){
  //   var moveTimer = setInterval(function() {
  //     // var top = $(dom).css("top");
  //     var top = parseInt(document.getElementById(dom.substr(1)).style.top);
  //     top = parseInt(top) -1;
  //     $(dom).css("top",top);
  //     if (top == -(value)) {
  //       clearInterval(moveTimer);
  //     }
  //   }, 6);
  // }
setTimeout(function() {
  $(".button").show();
  $(".load-1").hide();
}, 10000);
var timer = null;
$(".button").on("click", function() {
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
  $(".lead-page").hide();
  setTimeout(function() {
    $(".gif").hide();
    $(".canvas-wrap").hide();
    $(".page").show();
    timer = setInterval(circle, 5000);
  }, 3000);
})
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
      // move('#stage3', 60);
      // setTimeout(function() {move('#stage4', 60);}, 0);
      $("#stage3").animate({top:"-60px"});
      $("#stage4").animate({top:"-60px"});
      break;
    case 3:
    // 81
      // move('#stage4', 120);
      $("#stage4").animate({top:"-120px"});
      break;
    case 4:
    // 84
      // move('#stage4', 180);
      $("#stage4").animate({top:"-180px"});
      break;
    case 5:
    // 85
      // move('#stage4', 240);
      $("#stage4").animate({top:"-240px"});
      break;
    case 6:
    // 1988
      // move('#stage4', 300);
      $("#stage4").animate({top:"-300px"});
      break;
    case 7:
    // 1991
      // move('#stage3', 120);
      // setTimeout(function() {move('#stage4', 360);}, 0);
      $("#stage3").animate({top:"-120px"});
      $("#stage4").animate({top:"-360px"});
      break;
    case 8:
    // 92
      // move('#stage4', 420);
      $("#stage4").animate({top:"-420px"});
      break;
    case 10:
    // 94
      // move('#stage4', 480);
      $("#stage4").animate({top:"-480px"});
      break;
    case 11:
    // 06
      // move('#stage1', 60);
      // setTimeout(function() {move('#stage2', 60);}, 0);
      // setTimeout(function() {move('#stage3', 180);}, 1);
      // setTimeout(function() {move('#stage4', 540);}, 2);
      $("#stage1").animate({top:"-60px"});
      $("#stage2").animate({top:"-60px"});
      $("#stage3").animate({top:"-180px"});
      $("#stage4").animate({top:"-540px"});
      break;
    case 15:
    // 08
      // move('#stage4', 600);
      $("#stage4").animate({top:"-600px"});
      break;
    case 18:
    // 11
      // move('#stage3', 240);
      // setTimeout(function() {move('#stage4', 660);}, 0);
      $("#stage3").animate({top:"-240px"});
      $("#stage4").animate({top:"-660px"});
      break;
    case 19:
    // 12
      // move('#stage4', 720);
      $("#stage4").animate({top:"-720px"});
      break;
    case 20:
    // 13
      // move('#stage4', 780);
      $("#stage4").animate({top:"-780px"});
      break;
    case 21:
    // 14
      // move('#stage4', 840);
      $("#stage4").animate({top:"-840px"});
      break;
    case 23:
    // 15
      // move('#stage4', 900);
      $("#stage4").animate({top:"-900px"});
      break;
    case 25:
    // 16
      // move('#stage4', 960);
      $("#stage4").animate({top:"-960px"});
      break;
    case 27:
    // 17
      $(".page .foot").css("opacity", "0");
      $(".img-1").css("animation", "toleft 1s 0.5s linear 1 forwards");
      $(".img-2").css("animation", "toleft 1s 1s linear 1 forwards");
      $(".img-3").css("animation", "toleft 1s 1.5s linear 1 forwards");
      break;
    case 28:
      // 17
      $(".img-1").css("animation", "toleft 1s 0.5s linear 1 forwards");
      $(".img-2").css("animation", "toleft 1s 1s linear 1 forwards");
      $(".img-3").css("animation", "toleft 1s 1.5s linear 1 forwards");
      break;
    case 29: 
      $(".star").hide();
      $(".page-bg1").css("z-index", "2");
      clearInterval(timer);
      break;
    default:
      break;
  }
}
// function circle(){
//   var page = document.getElementsByClassName('class')[count];
//   $('.body').children().eq(count).addClass("show").siblings().removeClass('show');
//   count++;
  
//   switch (count) {
//     case 1:
//     // 78
//       break;
//     case 2:
//     // 80
//       move(stage3, 58);
//       move(stage4, 59);
//       break;
//     case 3:
//     // 81
//       move(stage4, 118);
//       break;
//     case 4:
//     // 84
//       move(stage4, 176);
//       break;
//     case 5:
//     // 85
//       move(stage4, 236);
//       break;
//     case 6:
//     // 1988
//       move(stage4, 296);
//       break;
//     case 7:
//     // 1991
//       move(stage3, 118);
//       move(stage4, 354);
//       break;
//     case 8:
//     // 92
//       move(stage4, 412);
//       break;
//     case 10:
//     // 94
//       move(stage4, 472);
//       break;
//     case 11:
//     // 06
//       move(stage1, 59);
//       move(stage2, 59);
//       move(stage3, 177);
//       move(stage4, 530);
//       break;
//     case 15:
//     // 08
//       move(stage4, 590);
//       break;
//     case 18:
//     // 11
//       move(stage3, 236);
//       move(stage4, 649);
//       break;
//     case 19:
//     // 12
//       move(stage4, 708);
//       break;
//     case 20:
//     // 13
//       move(stage4, 767);
//       break;
//     case 21:
//     // 14
//       move(stage4, 826);
//       break;
//     case 23:
//     // 15
//       move(stage4, 884);
//       break;
//     case 25:
//     // 16
//       move(stage4, 944);
//       break;
//     case 27:
//     // 17
//       $(".page .foot").css("opacity", "0");
//       $(".img-1").css("animation", "toleft 1s 0.5s linear 1 forwards");
//       $(".img-2").css("animation", "toleft 1s 1s linear 1 forwards");
//       $(".img-3").css("animation", "toleft 1s 1.5s linear 1 forwards");
//       break;
//     case 28:
//       // 17
//       $(".img-1").css("animation", "toleft 1s 0.5s linear 1 forwards");
//       $(".img-2").css("animation", "toleft 1s 1s linear 1 forwards");
//       $(".img-3").css("animation", "toleft 1s 1.5s linear 1 forwards");
//       break;
//     case 29: 
//       $(".star").hide();
//       $(".page-bg1").css("z-index", "2");
//       clearInterval(timer);
//       break;
//     default:
//       break;
//   }
// }




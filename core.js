$(function() {
  $('video.one').get(0).playbackRate = 1.5;
  $('video.two').get(0).playbackRate = 1.5;

  $('video.one').on('ended', function(event) {
    $('video.two').get(0).play();
  });

  $('video.two').on('ended', function(event) {
    $('video.one').get(0).currentTime = 0;
    $('video.one').get(0).play();
    $('video.two').get(0).currentTime = 0;
    $('video.two').get(0).pause();
  });  
});

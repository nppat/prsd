// For displing the video poster on iPhone, iPad, iPod
var bg_video = document.querySelector('.bgVideo_container');
var background_video = document.querySelector('.background_video');

if (/iPad|iPhone|iPod/.test(navigator.platform)) {
  bg_video.style.backgroundImage = 'url("' + background_video.poster + '")';
  bg_video.style.backgroundSize = 'cover';
  bg_video.style.backgroundPosition = 'center';
  background_video.style.display = 'none';
}
var hellopreloader = document.getElementById("hellopreloader_preload");function fadeOutnojquery(el){el.style.opacity = 1;var interhellopreloader = setInterval(function(){el.style.opacity = el.style.opacity - 0.05;if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);hellopreloader.style.display = "none";}},16);}window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},1000);};
var audio = document.getElementById('audio');
var range = document.getElementById('range');
range.onchange = function(){
  if (this.value == this.min){
    audio.volume = 0;
  } else if(this.value == this.max){
    audio.volume = 1;
  }
}
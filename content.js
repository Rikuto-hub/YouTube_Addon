chrome.runtime.onMessage.addListener(function(message, sender, sendRespose) {
  if (message === 'movie') {
    var elements = document.getElementsByClassName('html5-video-container');
    elements[0].style.position = 'fixed';
  }

  if (message === 'movieRelease') {
    var elements = document.getElementsByClassName('html5-video-container');
    elements[0].style.position = 'static';
  }
  
  if (message === 'scroll') {
    var speed = 5; 
    var interval = 50; 
    var scrollTop = document.body.scrollTop;
    system = setInterval(function() {
        var scroll = scrollTop + speed;
        window.scrollBy(0, scroll)
    },interval);
  }

  if (message === 'scrollRelease') {
    clearInterval(system);
  }
})
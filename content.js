chrome.runtime.onMessage.addListener(function(message, sender, sendRespose) {
  if (message === 'scroll') {
    
  }
  if (message === 'movie') {
    var elements = document.getElementsByClassName('html5-video-container');
    elements[0].style.position = 'fixed';
  }
})
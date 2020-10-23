const pushMessageToContent = function (message) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const tab = tabs[0]
    chrome.tabs.sendMessage(tab.id, message)
  })
 }
 document.getElementById('scroll_button').addEventListener('click', function() {
  pushMessageToContent('scroll') 
 })
 document.getElementById('movie_button').addEventListener('click', function() {
  pushMessageToContent('movie') 
 })
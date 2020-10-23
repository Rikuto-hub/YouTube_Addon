const pushMessageToContent = function (message) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const tab = tabs[0]
    chrome.tabs.sendMessage(tab.id, message)
  })
}

document.getElementById('movie_button').addEventListener('click', function() {
  pushMessageToContent('movie');
  const movie = document.getElementById('movie_button');
  const movieRelease = document.getElementById('movie_release');
  movie.classList.add('hidden');
  movieRelease.classList.remove('hidden');
})

document.getElementById('movie_release').addEventListener('click', function() {
  pushMessageToContent('movieRelease');
  const movie = document.getElementById('movie_button');
  const movieRelease = document.getElementById('movie_release');
  movie.classList.remove('hidden');
  movieRelease.classList.add('hidden');
})

document.getElementById('scroll_button').addEventListener('click', function() {
  pushMessageToContent('scroll') 
})
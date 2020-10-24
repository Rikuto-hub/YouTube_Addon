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
  const scroll = document.getElementById('scroll_button');
  const scrollRelease = document.getElementById('scroll_release');
  scroll.classList.add('hidden');
  scrollRelease.classList.remove('hidden');
})

document.getElementById('scroll_release').addEventListener('click', function() {
  pushMessageToContent('scrollRelease')
  const scroll = document.getElementById('scroll_button');
  const scrollRelease = document.getElementById('scroll_release');
  scroll.classList.remove('hidden');
  scrollRelease.classList.add('hidden');
})

document.getElementById('register_button').addEventListener('click', function() {
  const getCount = function () {
    const input = document.getElementById('count')
    return input.value
  }
  const count = getCount()
  pushMessageToContent({type: 'register', count: count})
})
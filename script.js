function searchSongs() {
    const apiKey = "AIzaSyDfQ7nUgZag6mn9cXpgQtjjej5nCrt4zfg";
    const query = document.getElementById('searchQuery').value;
    const songList = document.getElementById('songList');
    songList.innerHTML = '';

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}&type=video`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => {
                const videoTitle = item.snippet.title;
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `https://www.youtube.com/watch?v=${item.id.videoId}`;
                link.textContent = videoTitle;
                link.target = '_blank';

                listItem.appendChild(link);
                songList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error:', error));
}
function execute() {

  const inputText = document.getElementById('video-title').value;
  console.log(inputText);

  //lógica para deletar os vídeos antigos

  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${inputText}&key=AIzaSyArtELnxz8SIrcU180rMwakn9R7aXeQxMQ`)
    .then(response => response.json())
    .then(data => {
      const videoContainer = document.getElementById('video-list'); // Elemento onde os vídeos serão exibidos

      data.items.forEach((video) => {
        const videoId = video.id.videoId;
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}`);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', 'true');

        const videoTitle = document.createElement('p');
        videoTitle.textContent = video.snippet.title;

        const videoDiv = document.createElement('li');
        videoDiv.appendChild(iframe);
        videoDiv.appendChild(videoTitle);

        videoContainer.appendChild(videoDiv);
      });
    })
    .catch(error => console.error('Erro ao carregar vídeos do YouTube:', error));
}


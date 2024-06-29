function execute() {
  const inputText = document.getElementById("video-title").value;

  // Limpar vídeos antigos
  const videoContainer = document.getElementById("video-list");
  videoContainer.innerHTML = "";

  // Buscar novos vídeos
  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${inputText}&key=AIzaSyArtELnxz8SIrcU180rMwakn9R7aXeQxMQ`
  )
    .then((response) => response.json())
    .then((data) => {
      data.items.forEach((video) => {
        const videoId = video.id.videoId;
        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "true");

        const button = document.createElement("button");
        button.className = "fav-button";
        const icon = document.createElement("i");
        // icon.className = 'fa-solid fa-star';
        icon.className = "fa-regular fa-star";
        button.appendChild(icon);
        button.onclick = function () {
          fav(videoId);
        };

        const videoTitle = document.createElement("p");
        videoTitle.textContent = video.snippet.title;

        const videoDiv = document.createElement("li");
        videoDiv.appendChild(iframe);
        videoDiv.appendChild(button);
        videoDiv.appendChild(videoTitle);

        videoContainer.appendChild(videoDiv);
      });
    })
    .catch((error) =>
      console.error("Erro ao carregar vídeos do YouTube:", error)
    );
}

function fav(id) {
  let cachedIds = localStorage.getItem('cachedIds');
  if (!cachedIds) {
    // Se não houver nenhum ID salvo ainda, cria a string com o primeiro ID
    cachedIds = id.toString();
    localStorage.setItem('cachedIds', cachedIds);
    console.log(`ID ${id} salvo no cache.`);
  } else {
    // Divide a string em um array de IDs
    let idArray = cachedIds.split(',');

    // Verifica se o ID já está na lista
    if (idArray.includes(id.toString())) {
      // Se estiver, remove o ID da lista
      idArray = idArray.filter(item => item !== id.toString());
      cachedIds = idArray.join(',');
      localStorage.setItem('cachedIds', cachedIds);
      console.log(`ID ${id} removido do cache.`);
    } else {
      // Caso contrário, adiciona o ID à lista
      cachedIds += `,${id}`;
      localStorage.setItem('cachedIds', cachedIds);
      console.log(`ID ${id} salvo no cache.`);
    }
  }
}

module.exports = {
  fav
};

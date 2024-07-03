function searchVideos() {
  // const key = process.env.key;
  const key = "AIzaSyArtELnxz8SIrcU180rMwakn9R7aXeQxMQ";
  const inputText = document.getElementById("video-title").value;

  // Limpar vídeos antigos
  const videoContainer = document.getElementById("video-list");
  videoContainer.innerHTML = "";

  // Buscar novos vídeos
  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${inputText}&key=${key}`
  )
    .then((response) => response.json())
    .then((data) => {
      data.items.forEach((video) => {
        videoGenerator(video, videoContainer, false);
      });
    })
    .catch((error) =>
      console.error("Erro ao carregar vídeos do YouTube:", error)
    );
}

// function showFavoriteVideos() {
//   const videoContainer = document.getElementById("video-list");
//   videoContainer.innerHTML = "";

//   const cachedIds = localStorage.getItem("cachedIds")
//     ? localStorage.getItem("cachedIds").split(",")
//     : [];

//   if (cachedIds.length === 0) {
//     const message = document.createElement("p");
//     message.textContent = "Nenhum vídeo favorito encontrado.";
//     videoContainer.appendChild(message);
//     return;
//   }
//   // const key = process.env.key;
//   const key = "AIzaSyArtELnxz8SIrcU180rMwakn9R7aXeQxMQ";

//   fetch(
//     `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${cachedIds}&key=${key}`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       data.items.forEach((video) => {
//         videoGenerator(video, videoContainer, false);
//       });
//     })
//     .catch((error) => {
//       console.error("Erro ao carregar vídeos do YouTube:", error);
//     });

//   for (let i = 0; i < cachedIds.length; i++) {
//     videoGenerator(cachedIds[i], videoContainer, true);
//   }

//   return cachedIds;
// }

function videoGenerator(video, videoContainer, favList) {
  let id;
  if (!video.id.videoId) {
    id = video.id;
  } else {
    id = video.id.videoId;
  }
  const iframe = document.createElement("iframe");
  iframe.setAttribute("src", `https://www.youtube.com/embed/${id}`);
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "true");

  const button = document.createElement("button");
  button.className = "fav-button";
  const icon = document.createElement("i");
  const cachedIds = localStorage.getItem("cachedIds")
    ? localStorage.getItem("cachedIds").split(",")
    : [];

  for (let i = 0; i <= cachedIds.length; i++) {
    if (cachedIds[i] === id) {
      icon.className = "fa-solid fa-star";
      break;
    } else {
      icon.className = "fa-regular fa-star";
    }
  }

  button.appendChild(icon);
  button.onclick = function () {
    fav(id);
    toggleIcon(icon);
  };

  const videoTitle = document.createElement("p");
  videoTitle.textContent = video.snippet.title;

  const videoDiv = document.createElement("li");
  videoDiv.appendChild(iframe);
  videoDiv.appendChild(button);
  videoDiv.appendChild(videoTitle);

  videoContainer.appendChild(videoDiv);
}

function fav(id) {
  let cachedIds = localStorage.getItem("cachedIds");
  if (!cachedIds) {
    cachedIds = id.toString();
    localStorage.setItem("cachedIds", cachedIds);
  } else {
    let idArray = cachedIds.split(",");

    if (idArray.includes(id.toString())) {
      idArray = idArray.filter((item) => item !== id.toString());
      cachedIds = idArray.join(",");
      localStorage.setItem("cachedIds", cachedIds);
    } else {
      cachedIds += `,${id}`;
      localStorage.setItem("cachedIds", cachedIds);
    }
  }
  const url = "http://localhost:3080/get-string";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cachedIds }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao enviar dados para o MFE2");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Dados enviados com sucesso para o MFE2:", data);
      // Lógica adicional após enviar os dados, se necessário
    })
    .catch((error) => {
      console.error("Erro ao enviar dados para o MFE2:", error);
    });
  
}

function toggleIcon(icon) {
  if (icon.classList.contains("fa-regular")) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  } else {
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
  }
}

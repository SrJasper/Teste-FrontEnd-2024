function showFavoriteVideos() {
  console.log("chamou a função showFavoriteVideos");
  // const videoContainer = document.getElementById("video-list");
  // videoContainer.innerHTML = "";

  // const cachedIds = localStorage.getItem("cachedIds")
  //   ? localStorage.getItem("cachedIds").split(",")
  //   : [];

  // if (cachedIds.length === 0) {
  //   const message = document.createElement("p");
  //   message.textContent = "Nenhum vídeo favorito encontrado.";
  //   videoContainer.appendChild(message);
  //   return;
  // }
  // // const key = process.env.key;
  // const key = "AIzaSyArtELnxz8SIrcU180rMwakn9R7aXeQxMQ";

  // fetch(
  //   `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${cachedIds}&key=${key}`
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     data.items.forEach((video) => {
  //       videoGenerator(video, videoContainer, false);
  //     });
  //   })
  //   .catch((error) => {
  //     console.error("Erro ao carregar vídeos do YouTube:", error);
  //   });

  // for (let i = 0; i < cachedIds.length; i++) {
  //   videoGenerator(cachedIds[i], videoContainer, true);
  // }

  // return cachedIds;
}

function showDefaultVideos() {
  console.log("chamou a função defaultVideos");
  // const videoContainer = document.getElementById("video-list");
  // videoContainer.innerHTML = "";
  // const searchContainer = document.getElementById("search-container");
  // searchContainer.style.display = "block";
}

// function videoGenerator(video, videoContainer, favList) {
//   let id;
//   if (!video.id.videoId) {
//     id = video.id;
//   } else {
//     id = video.id.videoId;
//   }
//   const iframe = document.createElement("iframe");
//   iframe.setAttribute("src", `https://www.youtube.com/embed/${id}`);
//   iframe.setAttribute("frameborder", "0");
//   iframe.setAttribute("allowfullscreen", "true");

//   const button = document.createElement("button");
//   button.className = "fav-button";
//   const icon = document.createElement("i");
//   const cachedIds = localStorage.getItem("cachedIds")
//     ? localStorage.getItem("cachedIds").split(",")
//     : [];

//   for (let i = 0; i <= cachedIds.length; i++) {
//     if (cachedIds[i] === id) {
//       icon.className = "fa-solid fa-star";
//       break;
//     } else {
//       icon.className = "fa-regular fa-star";
//     }
//   }

//   button.appendChild(icon);
//   button.onclick = function () {
//     fav(id);
//     toggleIcon(icon);
//   };

//   const videoTitle = document.createElement("p");
//   videoTitle.textContent = video.snippet.title;

//   const videoDiv = document.createElement("li");
//   videoDiv.appendChild(iframe);
//   videoDiv.appendChild(button);
//   videoDiv.appendChild(videoTitle);

//   videoContainer.appendChild(videoDiv);
// }

module.exports = { showFavoriteVideos, showDefaultVideos};
// Função para atualizar localStorage com dados recebidos do servidor
function updateLocalStorage(cachedIds) {
  localStorage.setItem('cachedIds', cachedIds);
  if(!cachedIds) {
    const favCounterLabel = document.getElementById('fav-counter');
    if (favCounterLabel) {
      favCounterLabel.textContent = 0;
    }
  } else{ 
    const favCounterLabel = document.getElementById('fav-counter');
    if (favCounterLabel) {
      favCounterLabel.textContent = cachedIds.split(',').length;
    }
  }
}

// Função para buscar dados do servidor e atualizar localStorage
function fetchDataAndUpdateLocalStorage() {
  fetch('http://localhost:3080/get-string', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cachedIds: undefined }), // Exemplo de dados
  })
  .then(response => response.json())
  .then(data => {
      const { cachedIds } = data;
      updateLocalStorage(cachedIds);
  })
  .catch(error => {
      console.error('Erro ao obter dados do servidor:', error);
  });
}

setInterval(() => {
  fetchDataAndUpdateLocalStorage();
}, 100);

function showFavoriteVideos(){
  fetch('http://localhost:3050/show-favorites')
  .then(response => {
    if (!response.ok) {
      throw new Error('Não foi possível obter os vídeos favoritos.');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Erro ao obter os vídeos favoritos:', error.message);
  });
}

function showDefaultVideos(){
  fetch('http://localhost:3050/show-default')
  .then(response => {
    if (!response.ok) {
      throw new Error('Não foi possível obter os vídeos favoritos.');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Erro ao obter os vídeos favoritos:', error.message);
  });
}
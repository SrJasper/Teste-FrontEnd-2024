// Função para atualizar localStorage com dados recebidos do servidor
function updateLocalStorage(cachedIds) {
  localStorage.setItem('cachedIds', cachedIds);
  console.log('localStorage:', cachedIds);
  if(!cachedIds) {
    console.log('Não tem mais vídeos');
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

// Chamar a função para buscar e atualizar os dados a cada intervalo
// setInterval(fetchDataAndUpdateLocalStorage, 5000); // Atualizar a cada 5 segundos
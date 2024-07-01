// fav_counter.test.js
const { updateFavoriteCounter } = require('../scripts.js');

describe('updateFavoriteCounter', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should log "no cachedIds" if no cachedIds are present', () => {
    updateFavoriteCounter();
    expect(updateFavoriteCounter()).toEqual("no cachedIds");
  });

  it('should set the counter to 1 when there is one cachedId', () => {
    // Criar o elemento fav-counter no DOM
    const favCounter = document.createElement('div');
    favCounter.id = 'fav-counter';
    document.body.appendChild(favCounter);
  
    localStorage.setItem('cachedIds', '1');
    const label = updateFavoriteCounter();
  
    // Verificar se a função retornou o valor correto
    expect(label).toBe(1);
  });
});

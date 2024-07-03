// fav_counter.test.js
const { updateFavoriteCounter } = require('./scripts.js');

describe('Teste da function updateFavoriteCounter', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('Should log "no cachedIds" if no cachedIds are present', () => {
    updateFavoriteCounter();
    expect(updateFavoriteCounter()).toEqual("no cachedIds");
  });

  it('Should set the counter to 1 when there is one cachedId', () => {
    const favCounter = document.createElement('div');
    favCounter.id = 'fav-counter';
    document.body.appendChild(favCounter);
  
    localStorage.setItem('cachedIds', '1');
    const label = updateFavoriteCounter();

    expect(label).toBe(1);
  });
});

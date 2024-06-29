const { fav } = require('./scripts.js');

describe('fav function', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should save a new ID to the cache if none exists', () => {
    fav(1);
    expect(localStorage.getItem('cachedIds')).toBe('1');
  });

  it('should add a new ID to the cache if it does not already exist', () => {
    localStorage.setItem('cachedIds', '1');
    fav(2);
    expect(localStorage.getItem('cachedIds')).toBe('1,2');
  });

  it('should remove an ID from the cache if it already exists', () => {
    localStorage.setItem('cachedIds', '1,2');
    fav(2);
    expect(localStorage.getItem('cachedIds')).toBe('1');
  });
});

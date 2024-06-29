const { fav, toggleIcon } = require('./scripts.js');

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

describe ('toggleIcon function', () => {
  it('should toggle the icon class from regular to solid', () => {
    const icon = document.createElement('i');
    icon.classList.add('fa-regular');
    toggleIcon(icon);
    expect(icon.classList.contains('fa-regular')).toBe(false);
    expect(icon.classList.contains('fa-solid')).toBe(true);
  });

  it('should toggle the icon class from solid to regular', () => {
    const icon = document.createElement('i');
    icon.classList.add('fa-solid');
    toggleIcon(icon);
    expect(icon.classList.contains('fa-solid')).toBe(false);
    expect(icon.classList.contains('fa-regular')).toBe(true);
  });
});

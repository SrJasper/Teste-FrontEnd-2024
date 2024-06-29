// local_storage_mock.js

let localStorage = {};

if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: key => localStorage[key] || null,
      setItem: (key, value) => {
        localStorage[key] = value.toString();
      },
      removeItem: key => {
        delete localStorage[key];
      },
      clear: () => {
        localStorage = {};
      }
    }
  });
} else {
  global.localStorage = {
    getItem: key => localStorage[key] || null,
    setItem: (key, value) => {
      localStorage[key] = value.toString();
    },
    removeItem: key => {
      delete localStorage[key];
    },
    clear: () => {
      localStorage = {};
    }
  };
}

module.exports = {
  localStorage
};

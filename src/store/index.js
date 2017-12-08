import api from './api'

const store = {
  init: () => {
    api.init()
  },

  get: async (key, params) => {
    let value, error;
    
    switch(key) {
      case 'chop':
        value = await api.chop(params.text, params.chars)
        break
      default:
        value = null
        error = true
        break
    }

    return new Promise((resolve, reject) => {
      value != null ? resolve(value) : reject(error);
    });
  },

  post: async (key, data) => {
    let value, error;

    /* -- DO SOME MAGIC -- */

    return new Promise((resolve, reject) => {
      value != null ? resolve(value) : reject(error);
    });
  },

  put: async (key, data) => {
    let value, error;
    
    /* -- DO SOME MAGIC -- */

    return new Promise((resolve, reject) => {
      value != null ? resolve(value) : reject(error);
    });
  },

  delete: async (key, params) => {
    let value, error;
    
    /* -- DO SOME MAGIC -- */

    return new Promise((resolve, reject) => {
      value != null ? resolve(value) : reject(error);
    });
  }
}

export default store

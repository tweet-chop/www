import config from '../../config'
import checkStatus from '../../utils/check-http-status'

const api = {
  init: () => {},

  get: async (key, params) => {
    let value, error;

    let resource;
    switch (key) {
      case 'hello':
        resource = 'hello';
        break;
      default:
        resource = `${key}`;
    }

    try {
      value = await fetch(`${config.url}/api/${resource}`)
        .then(checkStatus)
        .then(res => res.json());
    } catch (err) {
      error = err;
    }

    return [error, value];
  },

  post: async (key, data) => {
    let value, error;
  
    try {
      value = await fetch(`${config.url}/api/${key}`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: data
      })
        .then(checkStatus)
        .then(res => res.json());
    } catch (err) {
      error = err;
    }
  
    return [value, error];
  }
}

export default api

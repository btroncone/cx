import superagent from 'superagent';
import config from 'config';

class ApiClient_ {
  constructor(req) {
    ['get', 'post', 'put', 'patch', 'del'].
      forEach((method) => {
        this[method] = (path, options) => {
          return new Promise((resolve, reject) => {
            //if third party, call with full supplied url, else build path to our API
            const url = options && options.thirdParty ? path : this.formatUrl(path)
            const request = superagent[method](url);
            if (options && options.params) {
              request.query(options.params);
            }
            if (__SERVER__) {
              if (req.get('cookie')) {
                request.set('cookie', req.get('cookie'));
              }
            }
            if (options && options.data) {
              request.send(options.data);
            }
            request.end((err, res) => {
              if (err) {
                reject(res.body || err);
              } else {
                resolve(res.body);
              }
            });
          });
        };
      });
  }

  /* This was originally a standalone function outside of this class, but babel kept breaking, and this fixes it  */
  formatUrl(path) {
    debugger;
    const adjustedPath = path[0] !== '/' ? '/' + path : path;
    if (__SERVER__) {
      // Prepend host and port of the API server to the path.
      return 'http://localhost:' + config.apiPort + adjustedPath;
    }
    // Prepend `/api` to relative URL, to proxy to API server.
    return '/api' + adjustedPath;
  }
}
const ApiClient = ApiClient_;

export default ApiClient;

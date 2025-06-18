import type { Express } from 'express';

function get(app: Express) {
  app.post('/', (request, response) => {
    response.set('content-type', request.headers['content-type']);
    response.send(request.body);
  });
};

export default get;

import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import config from '../config';
import * as actions from './routes/index';
import PrettyError from 'pretty-error';
import mongoose from 'mongoose';
import { MONGO_CREDENTIALS } from '../keys';

mongoose.connect(MONGO_CREDENTIALS);
const pretty = new PrettyError();
const app = express();
app.use(session({
  secret: 'This is a test!',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}));
app.use(bodyParser.json());

export default function api() {
  return new Promise((resolve) => {
    app.use((req, res) => {
      const matcher = req.url.split('?')[0].split('/');
      const action = matcher && actions[matcher[1]];
      if (action) {
        action(req, matcher.slice(2))
          .then((result) => {
            res.json(result);
          }, (reason) => {
            if (reason && reason.redirect) {
              res.redirect(reason.redirect);
            } else {
              console.error('API ERROR:', pretty.render(reason));
              res.status(reason.status || 500).json(reason);
            }
          });
      } else {
        res.status(404).end('NOT FOUND');
      }
    });
    app.listen(config.apiPort);
    resolve();
  });
}

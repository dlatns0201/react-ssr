import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import createStore from './helpers/createStore';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path)
    .map(({route}) => route.component.loadData ? route.component.loadData(store) : null);
    
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  })
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
})
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import createStore from '../helpers/createStore';

import Routes from './Routes';

const store = createStore(window.__INITIAL_STATE__);

// React.render 를 사용하면 서버에서 그려준 것을 브라우저가 한 번 더 그려준다.
// 그래서 그려준 것을 재랜더링하지 않고 이벤트만 등록해주는 React.hydrate 를 사용한다.

// 브라우저에서 동작할 라우터로 BrowserRouter 를 사용, 서버에서 사용하는 라우터는 StaticRouter
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(Routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import serialize from 'serialize-javascript';

import Routes from '../client/Routes';
import { Helmet } from 'react-helmet';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  const html = `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.__INITIAL_STATE__ = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  return html;
}

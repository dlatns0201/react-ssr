import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';

// React.render 를 사용하면 서버에서 그려준 것을 브라우저가 한 번 더 그려준다.
// 그래서 그려준 것을 재랜더링하지 않고 이벤트만 등록해주는 React.hydrate 를 사용한다.
ReactDOM.hydrate(<Home />, document.getElementById('root'));
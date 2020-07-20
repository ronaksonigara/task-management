import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import './style/index.scss';

// import DragAndDrop from './container/DragAndDrop';
import DragableContainer from './container/DragableContainer';
// import CardContainer from './component/CardContainer';
// import Card from './component/Card';
function App() {
  return (
    <Provider store={store}>
      <DragableContainer />
    </Provider>
  );
}

export default App;

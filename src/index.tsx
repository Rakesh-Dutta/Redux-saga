
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Counter from './components/Counter';
import reducer from './reducers/reducer';
import { Provider } from 'react-redux';
import  rootSaga  from './sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

// const action = (type: any) => store.dispatch({type})

const render = () => ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
)

render()
store.subscribe(render)
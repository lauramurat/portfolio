import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // изменено с default импорта на именованный импорт
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

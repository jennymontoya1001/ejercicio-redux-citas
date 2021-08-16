import {createStore,combineReducers} from 'redux';
import {citasReducer} from '../reducers/citasReducer';
import {obtenerLocalStorage, guardarLocalStorage} from '../localStorage';

const storeState = obtenerLocalStorage();

const reducers = combineReducers({
    citas: citasReducer
})

 export const store = createStore(
    reducers,
    storeState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
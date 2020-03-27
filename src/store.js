import axios from 'axios';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunks from 'redux-thunk';
import {createLogger} from 'redux-logger';

const chefsReducer = (state = [], action)=> {
  return state;
};

const recipesReducer = (state = [], action)=> {
  return state;
};

const reducer = combineReducers({
  chefs: chefsReducer,
  recipes: recipesReducer
});


const store = createStore(reducer, applyMiddleware(
  thunks,
  createLogger({collapsed: true}),
));


export default store;

export {

};

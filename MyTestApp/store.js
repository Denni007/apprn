import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productDetailsReducer, productListReducer } from './src/reducers/productReducers';
import thunk from 'redux-thunk';
import { userSigninReducer } from './src/reducers/userReducers';
import AsyncStorage from '@react-native-community/async-storage';

const getUser = async () => {
  try {
    const theme = await AsyncStorage.getItem('userInfo');
    console.log("hello::"+JSON.parse(theme).email)
    
   return JSON.parse(theme);
 } catch(error) {
   console.log('error', error);
 };
};

const userInfo = getUser() || null ;
console.log('error', userInfo);
const initialState = {
  userSignin: { userInfo }
};

const reducer = combineReducers({
    productList: productListReducer,
    userSignin: userSigninReducer,
    productDetails: productDetailsReducer
  });
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  const store = createStore(
    reducer,
    initialState,
  composeEnhancer(applyMiddleware(thunk))
  );

  
export default store;
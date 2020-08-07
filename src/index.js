import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from '../src/Todos/todoStore';
import App from './App.js';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const store = configureStore();
const persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={<div>Loading...</div>}
      persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
//routing
import { BrowserRouter as Router } from 'react-router-dom';
//theme
import { ChakraProvider } from '@chakra-ui/react';
import theme from './assets/theme';
//auth
import Auth0ProviderWithHistory from './auth0-provider-with-history';
//state management
import { Provider } from 'react-redux';
import { store } from './app/store';
import { debounce } from "debounce";
import { saveState } from './app/browser-storage';

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </Provider>
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

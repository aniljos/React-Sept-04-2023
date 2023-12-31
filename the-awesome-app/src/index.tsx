import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AppThemeContext, AppThemeProvider, initialState } from './context/AppThemeContext';
import AppErrorBoundary from './errorboundary/AppErrorBoundary';
import './axios/interceptor';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

  <AppErrorBoundary>
    <AppThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AppThemeProvider>
  </AppErrorBoundary>
   
);

// root.render(
//   <React.StrictMode>
//     {/* <AppThemeContext.Provider value={initialState}> */}
//     <AppThemeProvider>
//       <Provider store={store}>
//         <App />
//       </Provider>
//       </AppThemeProvider>
//     {/* </AppThemeContext.Provider> */}
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

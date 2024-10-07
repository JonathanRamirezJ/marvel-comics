import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import persistStore from 'redux-persist/es/persistStore';
import store from './Redux/Store/index.ts';

// Own main Page
import App from './pages/App.tsx';

// Own styles general
import './index.css';

const persistor = persistStore(store);

createRoot(document.getElementById('root')!).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>,
)

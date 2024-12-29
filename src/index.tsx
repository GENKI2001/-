import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router';
import './styles/index.css';

const queryClient = new QueryClient();

// ローカルストレージを使用したPersister
const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});

// Persistの設定
export const persistOptions = {
  queryClient,
  persister: localStoragePersister,
  // 必要に応じてキャッシュの有効期限を設定
  maxAge: 1000 * 60 * 60 * 24, // 24時間
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={persistOptions}
    >
      <CookiesProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </CookiesProvider>
    </PersistQueryClientProvider>
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});
const rootElement = document.getElementById('root')!;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
);

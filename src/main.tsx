import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApplicationRouter } from './Routes/index.routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./globals.css";
//CONTROLAR O MANEJO DAS QUERIES FEITAS NA APLICACAO
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ApplicationRouter />
    </QueryClientProvider>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'
import { resolver, theme } from './utility/constants/theme.constants.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}  cssVariablesResolver={resolver}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
)

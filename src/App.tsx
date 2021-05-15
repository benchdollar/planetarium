import React from 'react';
import './App.css';
import Planetarium from './components/Planetarium';
import { SnackbarProvider } from 'notistack';





function App() {
  return (
    <SnackbarProvider>
      <Planetarium />
    </SnackbarProvider>

  );
}

export default App;

// src/App.tsx

import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import BookingSystem from './components/BookingSystem';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <h1>Multi-Client Service Booking</h1>
        </header>
        <main>
          <BookingSystem />
        </main>
        <footer>
          <p>© 2024 Multi-Client Service Website</p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
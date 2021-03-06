import React from 'react';

//components
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/authContext';




function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>

          <Navbar />
          <BookList />
          <ThemeToggle />
          
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

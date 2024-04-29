import { useState, createContext } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import Content from './Home';
import './styles.css';

// Create a ThemeContext
export const ThemeContext = createContext();

export default function App() {
  // Initialize theme state
  const [theme, setTheme] = useState('barbie');

  // Toggle theme function
  function toggleTheme() {
    setTheme(function(prevTheme) {
      return prevTheme === 'barbie' ? 'oppenheimer' : 'barbie';
    });
  }

  return (
    // Provide theme and toggleTheme to child components
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeSwitcher />
      <Content />
    </ThemeContext.Provider>
  );
}


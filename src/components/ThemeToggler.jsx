import { useTheme } from '../contexts/Theme';
import Button from './Button';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </Button>
  );
};

export default ThemeToggler;
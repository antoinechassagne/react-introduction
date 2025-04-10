import { useTheme } from '../contexts/Theme';

const Page = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`page ${theme}`}>
      {children}
    </div>
  );
}

export default Page;
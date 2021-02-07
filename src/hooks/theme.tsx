import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IThemeContextData {
  theme: string;
  themeMode(): void;
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<string>('');

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const data = await AsyncStorage.getItem('@CloneNubank:theme');

      if (!data) {
        await AsyncStorage.setItem('@CloneNubank:theme', 'light');

        setTheme('light');
      } else {
        setTheme(data);
      }
    }

    loadStorageData();
  }, []);

  const themeMode = useCallback(async () => {
    if (theme === 'light') {
      setTheme('dark');
      await AsyncStorage.removeItem('@CloneNubank:theme');
      await AsyncStorage.setItem('@CloneNubank:theme', 'dark');
    } else {
      setTheme('light');
      await AsyncStorage.removeItem('@CloneNubank:theme');
      await AsyncStorage.setItem('@CloneNubank:theme', 'light');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): IThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an AuthProvider');
  }

  return context;
}

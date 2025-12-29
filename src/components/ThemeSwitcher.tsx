// app/components/ThemeSwitcher.tsx
'use client';

import { useEffect, useState } from 'react';

import { Switch } from '@heroui/react';
import { IconMoon, IconSun } from '@tabler/icons-react';

import useSystemtheme from '@/hooks/UseSystemTheme';

export function ThemeSwitcher() {
  const [themeMounted, setThemeMounted] = useState(false);
  const { theme, setTheme } = useSystemtheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeMounted(true);
  }, []);

  if (!themeMounted) return null;

  return (
    <Switch
      defaultSelected
      color="success"
      endContent={<IconMoon />}
      size="lg"
      startContent={<IconSun />}
      isSelected={theme === 'dark'}
      onValueChange={() =>
        theme === 'dark' ? setTheme('light') : setTheme('dark')
      }
    ></Switch>
  );
}

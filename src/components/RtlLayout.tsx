import { ReactNode, useEffect } from 'react';

import rtlPlugin from 'stylis-plugin-rtl';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { useTheme } from '@mui/material/styles';

interface IRtlLayoutProps {
  children: ReactNode;
}

export default function RtlLayout({ children }: IRtlLayoutProps) {
  const theme = useTheme();

  useEffect(() => {
    document.dir = theme.direction;
  }, [theme.direction]);

  const cacheRtl = createCache({
    key: theme.direction === 'rtl' ? 'rtl' : 'css',
    stylisPlugins: theme.direction === 'rtl' ? [rtlPlugin] : [],
  });

  cacheRtl.compat = true;

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}

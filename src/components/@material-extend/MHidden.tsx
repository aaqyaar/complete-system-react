import { useMediaQuery } from '@mui/material';
import { Theme } from '@mui/system';

interface IMHiddenProps {
  children?: any;
  width:
    | 'xsDown'
    | 'smDown'
    | 'mdDown'
    | 'lgDown'
    | 'xlDown'
    | 'xsUp'
    | 'smUp'
    | 'mdUp'
    | 'lgUp'
    | 'xlUp';
}

export default function MHidden({ width, children }: IMHiddenProps) {
  const breakpoint = width.substring(0, 2);

  const hiddenUp = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up(breakpoint as any)
  );
  const hiddenDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down(breakpoint as any)
  );

  if (width.includes('Down')) {
    return hiddenDown ? null : children;
  }

  if (width.includes('Up')) {
    return hiddenUp ? null : children;
  }

  return null;
}

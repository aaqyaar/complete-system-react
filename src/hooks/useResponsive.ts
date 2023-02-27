// @mui
import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------

export default function useResponsive(
  query?: string,
  key?: number | Breakpoint,
  start?: number | Breakpoint,
  end?: number | Breakpoint
): any {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(key as Breakpoint));

  const mediaDown = useMediaQuery(theme.breakpoints.down(key as Breakpoint));

  const mediaBetween = useMediaQuery(
    theme.breakpoints.between(start as Breakpoint, end as Breakpoint)
  );

  const mediaOnly = useMediaQuery(theme.breakpoints.only(key as Breakpoint));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between') {
    return mediaBetween;
  }

  if (query === 'only') {
    return mediaOnly;
  }
  return null;
}

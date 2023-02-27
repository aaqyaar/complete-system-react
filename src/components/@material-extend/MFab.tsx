import { forwardRef, ReactNode } from 'react';

import { useTheme } from '@mui/material/styles';
import { Fab } from '@mui/material';

import { ButtonAnimate } from '../animate';

interface IMFabProps {
  color?: string;
  sx?: any;

  children?: ReactNode;
  other?: any;
}
const MFab = forwardRef(
  ({ color = 'primary', children, sx, ...other }: IMFabProps, ref) => {
    const theme: any = useTheme();

    if (
      color === 'default' ||
      color === 'inherit' ||
      color === 'primary' ||
      color === 'secondary'
    ) {
      return (
        <ButtonAnimate>
          {/*  @ts-ignore */}
          <Fab ref={ref} color={color} sx={sx} {...other}>
            {children}
          </Fab>
        </ButtonAnimate>
      );
    }

    return (
      <ButtonAnimate>
        {/* @ts-ignore */}
        <Fab
          ref={ref}
          sx={{
            boxShadow: theme.customShadows[color],
            color: theme.palette[color].contrastText,
            bgcolor: theme.palette[color].main,
            '&:hover': {
              bgcolor: theme.palette[color].dark,
            },
            ...sx,
          }}
          {...other}
        >
          {children}
        </Fab>
      </ButtonAnimate>
    );
  }
);

export default MFab;

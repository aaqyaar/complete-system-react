import { forwardRef } from 'react';

import { Avatar, useTheme } from '@mui/material';

interface IAvatar {
  color?: string;
  sx?: any;
  children?: React.ReactNode;
  other?: any;
  alt?: string;
  src?: string;
}

const MAvatar = forwardRef(
  ({ color = 'default', sx, children, src, ...other }: IAvatar, ref) => {
    const theme: any = useTheme();

    if (color === 'default') {
      return (
        // @ts-ignore
        <Avatar ref={ref} sx={sx} {...other}>
          {children}
        </Avatar>
      );
    }

    return (
      // @ts-ignore
      <Avatar
        ref={ref}
        sx={{
          fontWeight: theme.typography.fontWeightMedium,
          color: theme.palette[color].contrastText,
          backgroundColor: theme.palette[color].main,
          ...sx,
        }}
        {...other}
      >
        {children}
      </Avatar>
    );
  }
);

export default MAvatar;

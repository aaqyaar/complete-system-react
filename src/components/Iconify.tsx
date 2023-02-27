import { Icon, IconifyIcon } from '@iconify/react';

import { Box } from '@mui/material';

export default function Iconify({
  icon,
  sx,
  width,
  height,
  color,
  ...other
}: {
  icon: IconifyIcon | string;
  sx?: any;
  other?: any;
  width?: number | string;
  height?: number | string;
  color?: string;
}) {
  return (
    <Box
      component={Icon}
      icon={icon}
      sx={{ ...sx, width, height }}
      color={color}
      {...other}
    />
  );
}

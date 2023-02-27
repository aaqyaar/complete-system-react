import { motion } from 'framer-motion';

import { Box } from '@mui/material';

import { varSmallClick, varMediumClick } from './variants';
import { ReactNode } from 'react';

interface IButtonAnimateProps {
  mediumClick?: boolean;
  children: ReactNode;
  sx?: any;
}

export default function ButtonAnimate({
  mediumClick = false,
  children,
  sx,
  ...other
}: IButtonAnimateProps) {
  return (
    <Box
      component={motion.div}
      whileTap="tap"
      whileHover="hover"
      variants={mediumClick ? varMediumClick : varSmallClick}
      sx={{ display: 'inline-flex', ...sx }}
      {...other}
    >
      {children}
    </Box>
  );
}

import { motion } from 'framer-motion';

import { Box } from '@mui/material';

import { varWrapEnter } from './variants';
import { ReactNode } from 'react';

interface IMotionContainerProps {
  open: boolean;
  children: ReactNode;
}

export default function MotionContainer({
  open,
  children,
  ...other
}: IMotionContainerProps) {
  return (
    <Box
      component={motion.div}
      initial={false}
      animate={open ? 'animate' : 'exit'}
      variants={varWrapEnter}
      {...other}
    >
      {children}
    </Box>
  );
}

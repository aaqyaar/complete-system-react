import { ReactNode, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Box } from '@mui/material';

interface IMotionInViewProps {
  children?: ReactNode;
  variants?: any;
  transition?: any;
  triggerOnce?: boolean;
  sx?: any;
  threshold?: number | number[];
}

export default function MotionInView({
  children,
  variants,
  transition,
  threshold,
  sx,
  ...other
}: IMotionInViewProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold || 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start(Object.keys(variants)[1]);
    } else {
      controls.start(Object.keys(variants)[0]);
    }
  }, [controls, inView, variants]);

  return (
    <Box
      ref={ref}
      component={motion.div}
      initial={Object.keys(variants)[0]}
      sx={sx}
      animate={controls}
      variants={variants}
      transition={transition}
      {...other}
    >
      {children}
    </Box>
  );
}

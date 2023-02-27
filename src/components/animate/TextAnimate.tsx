import { motion } from 'framer-motion';

import { Typography } from '@mui/material';
//
import { varFadeInUp } from './variants';

interface ITextAnimateProps {
  text: string;
  variants: any;
  sx: any;
}

export default function TextAnimate({
  text,
  variants,
  sx,
  ...other
}: ITextAnimateProps) {
  return (
    <Typography
      component={motion.h1}
      sx={{
        typography: 'h1',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <motion.span key={index} variants={variants || varFadeInUp}>
          {letter}
        </motion.span>
      ))}
    </Typography>
  );
}

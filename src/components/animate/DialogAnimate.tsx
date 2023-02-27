import { motion, AnimatePresence } from 'framer-motion';

import { Dialog } from '@mui/material';
//
import { varFadeInUp } from './variants';
import { ReactNode } from 'react';

interface IDialogAnimateProps {
  open: boolean;
  animate: any;
  onClose: () => void;
  children: ReactNode;
}

export default function DialogAnimate({
  open = false,
  animate,
  onClose,
  children,
  ...other
}: IDialogAnimateProps) {
  return (
    <AnimatePresence>
      {open && (
        <Dialog
          fullWidth
          maxWidth="xs"
          open={open}
          onClose={onClose}
          // @ts-ignore
          PaperComponent={motion.div}
          PaperProps={{
            sx: {
              borderRadius: 2,
              bgcolor: 'background.paper',
            },
            ...(animate || varFadeInUp),
          }}
          {...other}
        >
          {children}
        </Dialog>
      )}
    </AnimatePresence>
  );
}

import { forwardRef, ReactNode } from 'react';
import { IconButton } from '@mui/material';
import { ButtonAnimate } from '../animate';

interface IMIconButtonProps extends React.RefAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  other?: any;
  size?: string;
  sx?: any;
  color?: string;
}

const MIconButton = forwardRef(
  (
    { children, onClick, sx, size, color, ...other }: IMIconButtonProps,
    ref
  ) => (
    <ButtonAnimate>
      {/* @ts-ignore */}
      <IconButton
        onClick={onClick}
        ref={ref}
        sx={sx}
        color={color}
        {...other}
        size={size}
      >
        {children}
      </IconButton>
    </ButtonAnimate>
  )
);

export default MIconButton;

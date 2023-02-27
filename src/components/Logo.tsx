import { Box, BoxProps } from '@mui/material';

type Props = {
  sx?: {
    [key: string]: any;
  };
  other?: any;
  single?: boolean;
  full?: boolean;
} & BoxProps &
  React.HTMLAttributes<HTMLImageElement>;

export default function Logo({ sx, single, full, ...other }: Props) {
  return (
    <Box
      component={'img'}
      src={
        full
          ? '/static/brand/logo.svg'
          : single
          ? '/static/brand/logo-single.svg'
          : '/static/brand/logo.svg'
      }
      alt={'Logo'}
      sx={sx}
      {...other}
    />
  );
}

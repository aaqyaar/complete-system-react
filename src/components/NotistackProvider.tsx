import { Icon } from '@iconify/react';
import { SnackbarProvider } from 'notistack';
import { Icons } from 'icons-exports';
import { alpha, useTheme } from '@mui/material/styles';
import { Box, GlobalStyles } from '@mui/material';
import { Theme } from '@mui/system';
import { ReactNode } from 'react';

function SnackbarStyles() {
  const theme: any = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <GlobalStyles
      styles={{
        '#root': {
          '& .SnackbarContent-root': {
            width: '100%',
            padding: theme.spacing(1.5),
            margin: theme.spacing(0.25, 0),
            boxShadow: theme.customShadows.z8,
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.grey[isLight ? 0 : 800],
            backgroundColor: theme.palette.grey[isLight ? 900 : 0],
            '&.SnackbarItem-variantSuccess, &.SnackbarItem-variantError, &.SnackbarItem-variantWarning, &.SnackbarItem-variantInfo':
              {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
              },
          },
          '& .SnackbarItem-message': {
            padding: '0 !important',
            fontWeight: theme.typography.fontWeightMedium,
          },
          '& .SnackbarItem-action': {
            marginRight: 0,
            color: theme.palette.action.active,
            '& svg': { width: 20, height: 20 },
          },
        },
      }}
    />
  );
}

interface ISnackbarIconProps {
  icon: any;
  color: string;
}

function SnackbarIcon({ icon, color }: ISnackbarIconProps) {
  return (
    <Box
      component="span"
      sx={{
        mr: 1.5,
        width: 40,
        height: 40,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        color: `${color}.main`,
        bgcolor: (theme: Theme) => alpha(theme.palette[color].main, 0.16),
      }}
    >
      <Icon icon={icon} width={24} height={24} />
    </Box>
  );
}

interface INotistackProps {
  children: ReactNode;
}

export default function NotistackProvider({ children }: INotistackProps) {
  return (
    <>
      <SnackbarStyles />

      <SnackbarProvider
        dense
        maxSnack={5}
        // preventDuplicate
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        iconVariant={{
          success: (
            <SnackbarIcon icon={Icons.checkmarkCircle2Fill} color="success" />
          ),
          error: <SnackbarIcon icon={Icons.infoFill} color="error" />,
          warning: (
            <SnackbarIcon icon={Icons.alertTriangleFill} color="warning" />
          ),
          info: <SnackbarIcon icon={Icons.alertCircleFill} color="info" />,
        }}
      >
        {children}
      </SnackbarProvider>
    </>
  );
}

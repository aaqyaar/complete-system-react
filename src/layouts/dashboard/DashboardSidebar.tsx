import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, Drawer, Tooltip, CardActionArea } from '@mui/material';
// hooks
import useCollapseDrawer from 'hooks/useCollapseDrawer';
import { Scrollbar, NavSection, Logo } from 'components';

import { MHidden } from 'components/@material-extend';
//
import sidebarConfig from './SidebarConfig';

const DRAWER_WIDTH = 280;
const COLLAPSE_WIDTH = 102;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.complex,
    }),
  },
}));

function IconCollapse({
  onToggleCollapse,
  collapseClick,
}: {
  onToggleCollapse: () => void;
  collapseClick: boolean;
}) {
  return (
    <Tooltip title="Mini Menu">
      <CardActionArea
        onClick={onToggleCollapse}
        sx={{
          width: 18,
          height: 18,
          display: 'flex',
          cursor: 'pointer',
          borderRadius: '50%',
          alignItems: 'center',
          color: 'text.primary',
          justifyContent: 'center',
          border: 'solid 1px currentColor',
          ...(collapseClick && {
            borderWidth: 2,
          }),
        }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: 'currentColor',
            transition: (theme) => theme.transitions.create('all'),
            ...(collapseClick && {
              width: 0,
              height: 0,
            }),
          }}
        />
      </CardActionArea>
    </Tooltip>
  );
}

export default function DashboardSidebar({
  isOpenSidebar,
  onCloseSidebar,
}: {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
}) {
  const { pathname } = useLocation();

  const {
    isCollapse,
    collapseClick,
    collapseHover,
    onToggleCollapse,
    onHoverEnter,
    onHoverLeave,
  } = useCollapseDrawer();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          px: 2.5,
          pt: 3,
          ...(isCollapse && {
            alignItems: 'center',
          }),
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
            <Logo
              sx={{
                width: 90,
                height: 90,
              }}
              single
            />
          </Box>

          <MHidden width="lgDown">
            {!isCollapse && (
              <IconCollapse
                onToggleCollapse={onToggleCollapse}
                collapseClick={collapseClick}
              />
            )}
          </MHidden>
        </Stack>
      </Stack>

      <NavSection navConfig={sidebarConfig} isShow={!isCollapse} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: isCollapse ? COLLAPSE_WIDTH : DRAWER_WIDTH,
        },
        ...(collapseClick && {
          position: 'absolute',
        }),
      }}
    >
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',

              ...(isCollapse && {
                width: COLLAPSE_WIDTH,
              }),
              ...(collapseHover && {
                borderRight: 0,

                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
                boxShadow: (theme: any) => theme.customShadows.z20,

                bgcolor: (theme) =>
                  alpha(theme.palette.background.default, 0.88),
              }),
            },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}

import { Icon } from "@iconify/react";
import { useSnackbar } from "notistack";
import { useRef, useState } from "react";
import { Icons } from "icons-exports";
import { Link as RouterLink } from "react-router-dom";
// material
import { alpha } from "@mui/material/styles";
import { Button, Box, Divider, MenuItem, Typography } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../routes/paths";
import { logout } from "redux/slices/authSlice";
import useIsMountedRef from "../../hooks/useIsMountedRef";
// components
import { MIconButton } from "../../components/@material-extend";
import MyAvatar from "../../components/MyAvatar";
import MenuPopover from "../../components/MenuPopover";
import { useAppDispatch } from "hooks";

const MENU_OPTIONS = [
  {
    label: "Home",
    icon: Icons.homeFill,
    linkTo: PATH_DASHBOARD.root,
  },
  {
    label: "Profile",
    icon: Icons.personFill,
    // linkTo: PATH_ADMIN.profiles.adminProfile,
    linkTo: "",
  },
  {
    label: "Settings",
    icon: Icons.settings2Fill,
    // linkTo: PATH_DASHBOARD.user.account,
    linkTo: "",
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const { enqueueSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      dispatch(logout());
      if (isMountedRef.current) {
        handleClose();
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Unable to logout", { variant: "error" });
    }
  };

  return (
    <>
      <MIconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme: any) => alpha(theme.palette.grey[900], 0.72),
            },
          }),
        }}
      >
        <MyAvatar />
      </MIconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {"Abdi Zamed"}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {"abdizamed@gmail.com"}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: "body2", py: 1, px: 2.5 }}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24,
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button
            fullWidth
            color="inherit"
            variant="outlined"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}

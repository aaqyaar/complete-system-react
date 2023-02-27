// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";
const ROOTS_ADMIN = "/admin";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  loginUnprotected: path(ROOTS_AUTH, "/login-unprotected"),
  register: path(ROOTS_AUTH, "/register"),
  registerUnprotected: path(ROOTS_AUTH, "/register-unprotected"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
  verify: path(ROOTS_AUTH, "/verify"),
};

export const PATH_PAGE = {
  comingSoon: "/coming-soon",
  maintenance: "/maintenance",

  page404: "/404",
  page500: "/500",
};

export const PATH_ADMIN = {
  root: ROOTS_ADMIN,
  directories: {
    overview: path(ROOTS_ADMIN, "/overview"),

    userManagement: {
      permissions: path(ROOTS_ADMIN, "/user-management/permissions"),
      roles: path(ROOTS_ADMIN, "/user-management/roles"),
      users: path(ROOTS_ADMIN, "/user-management/users"),
    },

    settings: {
      root: path(ROOTS_ADMIN, "/settings"),
      general: path(ROOTS_ADMIN, "/settings/general"),
    },
  },
  forms: {
    newRole: path(ROOTS_ADMIN, "/new-role"),
    editRole: path(ROOTS_ADMIN, "/edit-role"),
    newUser: path(ROOTS_ADMIN, "/new-user"),
    editUser: path(ROOTS_ADMIN, "/edit-user"),
  },
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, "/app"),
  },
};

export const PATH_DOCS = "https://docs-minimals.vercel.app/introduction";

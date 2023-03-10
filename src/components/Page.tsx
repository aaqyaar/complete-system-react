import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";

import { Box } from "@mui/material";

const Page = forwardRef(
  (
    {
      children,
      title = "",
      ...other
    }: {
      children: React.ReactNode;
      title: string;
    },
    ref
  ) => {
    return (
      <Box ref={ref} {...other}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </Box>
    );
  }
);

export default Page;

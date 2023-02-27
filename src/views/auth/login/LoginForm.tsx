import * as Yup from "yup";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// form
import { Form, FormikProvider, useFormik } from "formik";
// @mui
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// routes
import { PATH_AUTH } from "routes/paths";
import Iconify from "components/Iconify";
import { useAppDispatch } from "hooks";
import AuthAPI from "redux/api/auth";
import { useSnackbar } from "notistack";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    email: "",
    password: "",
    remember: true,
  };
  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      const res = await dispatch(AuthAPI.login(values));
      if (res.type !== "auth/login/fulfilled") {
        enqueueSnackbar(res.payload.message, {
          variant: "error",
        });
        setSubmitting(false);
      }
    },
  });

  const { handleSubmit, errors, touched, getFieldProps, isSubmitting, values } =
    formik;
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            type="email"
            label="Email address"
            {...getFieldProps("email")}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            {...getFieldProps("password")}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <Iconify
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                {...getFieldProps("remember")}
                checked={values.remember}
              />
            }
            label="Remember me"
          />

          <Link
            component={RouterLink}
            variant="subtitle2"
            to={PATH_AUTH.resetPassword}
          >
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  TextField,
  Stack,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import HeaderBreadcrumbs from 'components/HeaderBreadcrumbs';
import { Form, FormikProvider, useFormik } from 'formik';
import { PATH_ADMIN } from 'routes/paths';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { Iconify, Logo, Page } from 'components';

const RootStyle = styled(Page)(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
}));

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const timezones = [
  {
    value: 'Europe/London',
    label: '(GMT+00:00) London',
  },
  {
    value: 'Europe/Berlin',
    label: '(GMT+01:00) Berlin',
  },
  {
    value: 'Europe/Moscow',
    label: '(GMT+03:00) Moscow',
  },
  {
    value: 'Asia/Calcutta',
    label: '(GMT+05:30) Calcutta',
  },
  {
    value: 'Asia/Karachi',
    label: '(GMT+05:00) Karachi',
  },
  {
    value: 'Asia/Kolkata',
    label: '(GMT+05:30) Kolkata',
  },
  {
    value: 'Asia/Kathmandu',
    label: '(GMT+05:45) Kathmandu',
  },
  {
    value: 'Asia/Dhaka',
    label: '(GMT+06:00) Dhaka',
  },
  {
    value: 'Asia/Novosibirsk',
    label: '(GMT+06:00) Novosibirsk',
  },
  {
    value: 'Asia/Bangkok',
    label: '(GMT+07:00) Bangkok',
  },
  {
    value: 'Asia/Hong_Kong',
    label: '(GMT+08:00) Hong Kong',
  },
  {
    value: 'Asia/Irkutsk',
    label: '(GMT+08:00) Irkutsk',
  },
  {
    value: 'Asia/Singapore',
    label: '(GMT+08:00) Singapore',
  },
  {
    value: 'Australia/Perth',
    label: '(GMT+08:00) Perth',
  },
  {
    value: 'Asia/Taipei',
    label: '(GMT+08:00) Taipei',
  },
  {
    value: 'Asia/Tokyo',
    label: '(GMT+09:00) Tokyo',
  },
  {
    value: 'Asia/Seoul',
    label: '(GMT+09:00) Seoul',
  },
  {
    value: 'Asia/Yakutsk',
    label: '(GMT+09:00) Yakutsk',
  },
];

const languages = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'fr',
    label: 'French',
  },
  {
    value: 'de',
    label: 'German',
  },
  {
    value: 'es',
    label: 'Spanish',
  },
  {
    value: 'pt',
    label: 'Portuguese',
  },
  {
    value: 'ru',
    label: 'Russian',
  },
  {
    value: 'zh',
    label: 'Chinese',
  },
  {
    value: 'ja',
    label: 'Japanese',
  },
];

export default function GeneralSettings() {
  const formik = useFormik({
    initialValues: {
      name: 'Minimal-UI',
      email: '',
      phone: '1234567890',
      address: '123 Street, City, Country',
      currency: 'USD',
      timezone: 'Europe/London',
      language: 'en',
      logo: '',
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setSubmitting(false);
        navigate('/dashboard', { replace: true });
      } catch (error) {
        console.error(error);
        setSubmitting(false);
      }
    },
  });
  const navigate = useNavigate();

  const { handleSubmit, values, getFieldProps, isSubmitting } = formik;

  const uploadLogo = (e: any) => {
    if (e.target.files) {
      formik.setFieldValue('logo', e.target.files[0]);
    }
  };
  const previewLogo = values.logo
    ? URL.createObjectURL(values.logo as any)
    : '';

  return (
    <RootStyle title="Settings | Abdi Zamed Mohamed">
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Container maxWidth="xl">
            <HeaderBreadcrumbs
              heading="Settings"
              links={[
                { name: 'Dashboard', href: PATH_ADMIN.directories.overview },
                { name: 'Settings' },
              ]}
            />
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Card>
                  <CardHeader title="General" />
                  <CardContent>
                    <Stack spacing={3}>
                      <TextField
                        fullWidth
                        label="Name"
                        {...getFieldProps('name')}
                        variant="outlined"
                      />
                      <TextField
                        fullWidth
                        label="Email"
                        {...getFieldProps('email')}
                        variant="outlined"
                      />
                      <TextField
                        fullWidth
                        label="Phone"
                        {...getFieldProps('phone')}
                        variant="outlined"
                      />
                      <TextField
                        fullWidth
                        label="Address"
                        {...getFieldProps('address')}
                        variant="outlined"
                      />
                      <TextField
                        fullWidth
                        label="Currency"
                        {...getFieldProps('currency')}
                        select
                        SelectProps={{ native: true }}
                        variant="outlined"
                      >
                        {currencies.map((currency) => (
                          <option key={currency.value} value={currency.value}>
                            {currency.label}
                          </option>
                        ))}
                      </TextField>
                      <TextField
                        fullWidth
                        label="Timezone"
                        {...getFieldProps('timezone')}
                        select
                        SelectProps={{ native: true }}
                        variant="outlined"
                      >
                        {timezones.map((timezone) => (
                          <option key={timezone.value} value={timezone.value}>
                            {timezone.label}
                          </option>
                        ))}
                      </TextField>
                      <TextField
                        fullWidth
                        label="Language"
                        {...getFieldProps('language')}
                        select
                        SelectProps={{ native: true }}
                        variant="outlined"
                      >
                        {languages.map((language) => (
                          <option key={language.value} value={language.value}>
                            {language.label}
                          </option>
                        ))}
                      </TextField>
                      <Stack
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={2}
                      >
                        <LoadingButton
                          variant="contained"
                          type="submit"
                          loading={isSubmitting}
                        >
                          Save
                        </LoadingButton>
                        <Button
                          variant="outlined"
                          onClick={() => {
                            navigate(PATH_ADMIN.directories.overview);
                          }}
                        >
                          Cancel
                        </Button>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardHeader title="Logo" />
                  <CardContent>
                    <Stack spacing={3}>
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary' }}
                      >
                        The logo is displayed in the header and footer of the
                        website.
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          pb: 3,
                          position: 'relative',
                        }}
                      >
                        {/* <Logo width={100} height={100} single /> */}
                        {previewLogo ? (
                          <Stack
                            direction="column"
                            spacing={1}
                            alignItems={'center'}
                          >
                            <IconButton
                              color="error"
                              onClick={() => {
                                formik.setFieldValue('logo', '');
                              }}
                            >
                              <Iconify
                                icon={'eva:trash-outline'}
                                width={20}
                                height={20}
                              />
                            </IconButton>

                            <Box
                              component={'img'}
                              src={previewLogo}
                              alt="logo"
                              sx={{
                                width: 100,
                                height: 100,
                                objectFit: 'contain',
                              }}
                            />
                          </Stack>
                        ) : (
                          <Logo width={100} height={100} single />
                        )}
                      </Box>

                      <Button
                        component={'label'}
                        variant="outlined"
                        color="primary"
                        // fullWidth
                        onChange={(e) => uploadLogo(e)}
                        startIcon={
                          <Iconify
                            icon={'eva:upload-outline'}
                            width={20}
                            height={20}
                          />
                        }
                      >
                        <input
                          name="logo"
                          type={'file'}
                          accept="image/*"
                          style={{
                            appearance: 'none',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                            cursor: 'pointer',
                          }}
                        />
                        Upload
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Form>
      </FormikProvider>
    </RootStyle>
  );
}

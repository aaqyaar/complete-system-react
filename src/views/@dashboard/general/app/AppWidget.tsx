import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Card, Typography, Box } from '@mui/material';
// utils
import { fNumber } from 'utils/formatNumber';
import { BaseOptionChart } from 'components/charts';
// comp{onents
import { Iconify } from 'components';
import { Theme } from '@mui/system';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.primary.darker,
}));

const IconStyle = styled(Iconify)(({ theme }) => ({
  width: 120,
  height: 120,
  opacity: 0.12,
  position: 'absolute',
  right: theme.spacing(-3),
  color: theme.palette.common.white,
}));

// ----------------------------------------------------------------------

interface IAppWidgetProps {
  chartData: number;
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  icon: string;
  title: string;
  total: number;
}

export default function AppWidget({
  title,
  total,
  icon,
  color = 'primary',
  chartData,
}: IAppWidgetProps) {
  const theme: any = useTheme();

  const chartOptions: any = merge(BaseOptionChart(), {
    colors: [theme.palette[color].main],
    chart: { sparkline: { enabled: true } },
    legend: { show: false },
    plotOptions: {
      radialBar: {
        hollow: { size: '78%' },
        track: { margin: 0 },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 6,
            color: theme.palette.common.white,
            fontSize: theme.typography.subtitle2.fontSize,
          },
        },
      },
    },
  });

  return (
    <RootStyle
      sx={{
        bgcolor: theme.palette[color].darker,
      }}
    >
      <ReactApexChart
        type="radialBar"
        series={[chartData]}
        options={chartOptions}
        width={86}
        height={86}
      />
      <Box sx={{ ml: 3, color: 'common.white' }}>
        <Typography variant="h4"> {fNumber(total)}</Typography>
        <Typography variant="body2" sx={{ opacity: 0.72 }}>
          {title}
        </Typography>
      </Box>
      <IconStyle icon={icon} />
    </RootStyle>
  );
}

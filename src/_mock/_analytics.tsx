// components
import Iconify from '../components/Iconify';
//
import _mock from './_mock';

// ----------------------------------------------------------------------

export const _analyticPost = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.text.title(index),
  description: _mock.text.description(index),
  image: _mock.image.cover(index),
  postedAt: _mock.time(index),
}));

export const _analyticOrderTimeline = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  title: [
    '1983, orders, $4220',
    '12 Invoices have been paid',
    'Order #37745 from September',
    'New order placed #XF-2356',
    'New order placed #XF-2346',
  ][index],
  type: `order${index + 1}`,
  time: _mock.time(index),
}));

const getIcon = (name: string) => {
  return <Iconify icon={name} color="#006097" width={32} height={32} />;
};

export const _analyticTraffic = [
  {
    name: 'FaceBook',
    value: 323234,
    icon: getIcon('eva:facebook-fill'),
  },
  {
    name: 'Google',
    value: 341212,
    icon: getIcon('eva:google-fill'),
  },
  {
    name: 'Linkedin',
    value: 411213,
    icon: getIcon('eva:linkedin-fill'),
  },
  {
    name: 'Twitter',
    value: 443232,
    icon: getIcon('eva:twitter-fill'),
  },
];

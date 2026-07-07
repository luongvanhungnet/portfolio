export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: 'Lương Văn Hưng',
    path: '/',
  },
  {
    label: 'Giới thiệu',
    path: '/about',
  },
  {
    label: 'Hồ sơ',
    path: '/resume',
  },
  {
    label: 'Liên hệ',
    path: '/contact',
  },
  {
    label: 'Dự án',
    path: '/projects',
  },
];

export default routes;

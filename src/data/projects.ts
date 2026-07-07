export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image?: string;
  date: string;
  displayDate?: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'VBAS -- Vehicle Breakdown Assistance System',
    subtitle: 'Dự án nhóm · Phát triển Full-stack',
    link: 'https://github.com/luongvanhungnet/ITSS2025.2',
    date: '2026-01-01',
    displayDate: '2026',
    desc: 'Xây dựng nền tảng kết nối khách hàng gặp sự cố phương tiện với nhân viên/công ty cứu hộ; hỗ trợ tạo yêu cầu, phân công, thương lượng giá, thanh toán, trò chuyện và theo dõi trạng thái. Phát triển API REST, xác thực JWT, phân quyền theo vai trò và bản đồ hiển thị vị trí nhân viên, tuyến đường, ETA.',
    tech: [
      'Java',
      'Spring Boot',
      'React',
      'Vite',
      'PostgreSQL',
      'JWT',
      'Docker',
    ],
    featured: true,
  },
  {
    title: 'BlueMoon Apartment Management System',
    subtitle: 'Dự án nhóm · Phát triển hệ thống và cơ sở dữ liệu',
    link: 'https://github.com/Kaio54547568/BlueMoonHotel',
    date: '2025-01-01',
    displayDate: '2025 - 2026',
    desc: 'Xây dựng hệ thống quản lý căn hộ/chung cư cho hộ gia đình, cư dân, khoản phí, hóa đơn, lịch sử thanh toán; hỗ trợ CRUD, tìm kiếm, lọc và phân quyền.',
    tech: ['Python', 'Django', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    featured: true,
  },
  {
    title: 'JP-Taxi -- Hệ thống đặt xe trực tuyến',
    subtitle: 'Dự án nhóm · Phát triển Full-stack',
    link: 'https://github.com/luongvanhungnet/JPTaxi',
    date: '2026-01-01',
    displayDate: '2026',
    desc: 'Phát triển ứng dụng đặt xe với giao diện theo vai trò, quản lý yêu cầu/chuyến đi, theo dõi trạng thái và tích hợp bản đồ, tuyến đường.',
    tech: [
      'Java',
      'Spring Boot',
      'React',
      'PostgreSQL',
      'REST API',
      'Git/GitHub',
    ],
  },
  {
    title: 'Restaurant Finder -- Ứng dụng tìm kiếm nhà hàng',
    subtitle: 'Dự án nhóm · Phát triển Web',
    link: 'https://github.com/luongvanhungnet/Restaurant-finder-',
    date: '2026-01-01',
    displayDate: '2026',
    desc: 'Xây dựng ứng dụng tìm kiếm nhà hàng theo vị trí trên bản đồ; hỗ trợ thông tin chi tiết, tìm kiếm/lọc, đánh giá, tương tác và hình ảnh.',
    tech: [
      'Java',
      'Spring Boot',
      'React',
      'PostgreSQL',
      'JavaScript',
      'REST API',
    ],
  },
];

export default data;

export interface Degree {
  school: string;
  degree: string;
  link?: string;
  period: string;
  details?: string[];
}

const degrees: Degree[] = [
  {
    school: 'Đại học Bách khoa Hà Nội',
    degree: 'Chuyên ngành Công nghệ Thông tin Việt-Nhật',
    link: 'https://hust.edu.vn',
    period: '2023 - Hiện tại',
    details: ['Trường Công nghệ Thông tin và Truyền thông'],
  },
];

export default degrees;

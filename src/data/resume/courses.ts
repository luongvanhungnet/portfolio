export interface Course {
  title: string;
  number?: string;
  link?: string;
  university?: string;
}

const courses: Course[] = [
  { title: 'Cấu trúc dữ liệu và giải thuật' },
  { title: 'Lập trình hướng đối tượng' },
  { title: 'Cơ sở dữ liệu' },
  { title: 'Mạng máy tính' },
  { title: 'Nguyên lý hệ điều hành' },
  { title: 'Machine Learning' },
  { title: 'Deep Learning' },
  { title: 'Xử lý ngôn ngữ tự nhiên' },
  { title: 'Mô hình ngôn ngữ lớn (đang học)' },
];

export default courses;

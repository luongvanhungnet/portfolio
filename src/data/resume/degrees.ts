export interface Degree {
  school: string;
  degree: string;
  link?: string;
  period: string;
  details?: string[];
}

const degrees: Degree[] = [
  {
    school: 'Hanoi University of Science and Technology',
    degree: 'Major in Vietnam-Japan Information Technology',
    link: 'https://hust.edu.vn',
    period: '2023 - Present',
    details: ['School of Information and Communication Technology'],
  },
];

export default degrees;

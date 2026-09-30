export interface Course {
  title: string;
  number?: string;
  link?: string;
  university?: string;
}

const courses: Course[] = [
  { title: 'Data Structures and Algorithms' },
  { title: 'Object-Oriented Programming' },
  { title: 'Databases' },
  { title: 'Computer Networks' },
  { title: 'Operating Systems Principles' },
  { title: 'Machine Learning' },
  { title: 'Deep Learning' },
  { title: 'Natural Language Processing' },
  { title: 'Large Language Models (in progress)' },
];

export default courses;

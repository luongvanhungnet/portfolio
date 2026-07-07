export interface Skill {
  title: string;
  competency?: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  { title: 'Java', category: ['Ngôn ngữ lập trình'] },
  { title: 'Python', category: ['Ngôn ngữ lập trình'] },
  { title: 'JavaScript', category: ['Ngôn ngữ lập trình'] },
  { title: 'TypeScript', category: ['Ngôn ngữ lập trình'] },
  { title: 'SQL', category: ['Ngôn ngữ lập trình'] },
  { title: 'C/C++', category: ['Ngôn ngữ lập trình'] },
  { title: 'Spring Boot', category: ['Backend / Frontend'] },
  { title: 'Django', category: ['Backend / Frontend'] },
  { title: 'REST API', category: ['Backend / Frontend'] },
  { title: 'JWT', category: ['Backend / Frontend'] },
  { title: 'React', category: ['Backend / Frontend'] },
  { title: 'Vite', category: ['Backend / Frontend'] },
  { title: 'Tailwind CSS', category: ['Backend / Frontend'] },
  { title: 'HTML', category: ['Backend / Frontend'] },
  { title: 'CSS', category: ['Backend / Frontend'] },
  { title: 'PostgreSQL', category: ['Dữ liệu và công cụ'] },
  { title: 'Docker', category: ['Dữ liệu và công cụ'] },
  { title: 'Git/GitHub', category: ['Dữ liệu và công cụ'] },
  { title: 'Postman', category: ['Dữ liệu và công cụ'] },
  { title: 'TensorFlow', category: ['Dữ liệu và công cụ'] },
  { title: 'Scikit-learn', category: ['Dữ liệu và công cụ'] },
  { title: 'Pandas', category: ['Dữ liệu và công cụ'] },
  { title: 'NumPy', category: ['Dữ liệu và công cụ'] },
  { title: 'Tiếng Việt', category: ['Ngoại ngữ'] },
  {
    title: 'Tiếng Anh: TOEIC Listening & Reading 555/990',
    category: ['Ngoại ngữ'],
  },
  { title: 'Tiếng Nhật: đang học', category: ['Ngoại ngữ'] },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({
    name: category,
    color: 'var(--color-accent)',
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };

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
  { title: 'Java', category: ['Programming languages'] },
  { title: 'Python', category: ['Programming languages'] },
  { title: 'JavaScript', category: ['Programming languages'] },
  { title: 'TypeScript', category: ['Programming languages'] },
  { title: 'SQL', category: ['Programming languages'] },
  { title: 'C/C++', category: ['Programming languages'] },
  { title: 'Spring Boot', category: ['Backend / Frontend'] },
  { title: 'Django', category: ['Backend / Frontend'] },
  { title: 'REST API', category: ['Backend / Frontend'] },
  { title: 'JWT', category: ['Backend / Frontend'] },
  { title: 'React', category: ['Backend / Frontend'] },
  { title: 'Vite', category: ['Backend / Frontend'] },
  { title: 'Tailwind CSS', category: ['Backend / Frontend'] },
  { title: 'HTML', category: ['Backend / Frontend'] },
  { title: 'CSS', category: ['Backend / Frontend'] },
  { title: 'PostgreSQL', category: ['Data and tools'] },
  { title: 'Docker', category: ['Data and tools'] },
  { title: 'Git/GitHub', category: ['Data and tools'] },
  { title: 'Postman', category: ['Data and tools'] },
  { title: 'TensorFlow', category: ['Data and tools'] },
  { title: 'Scikit-learn', category: ['Data and tools'] },
  { title: 'Pandas', category: ['Data and tools'] },
  { title: 'NumPy', category: ['Data and tools'] },
  { title: 'Vietnamese', category: ['Languages'] },
  {
    title: 'English: TOEIC Listening & Reading 555/990',
    category: ['Languages'],
  },
  { title: 'Japanese: learning', category: ['Languages'] },
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

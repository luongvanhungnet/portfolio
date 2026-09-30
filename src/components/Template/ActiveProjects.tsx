import Image from 'next/image';

const activeProjects = [
  {
    name: 'BKQuiz',
    category: 'AI-powered exam preparation',
    description:
      'Turn course materials into practice quizzes and timed mock exams, built for HUST students.',
    url: 'https://bk-quizz.hung-lv235740.workers.dev/',
    image: '/images/active-projects/bkquiz.png',
    imageAlt:
      'BKQuiz homepage with an AI quiz generator and exam workspace preview',
    width: 1852,
    height: 965,
  },
  {
    name: 'Mimikara Study',
    category: 'Japanese vocabulary practice',
    description:
      'Practice N3 and N2 vocabulary, review mistakes, and track your learning progress on your device.',
    url: 'https://learn-japanese-lilac.vercel.app/',
    image: '/images/active-projects/mimikara-study.png',
    imageAlt:
      'Mimikara Study vocabulary table with N3 and N2 practice and progress tracking',
    width: 1852,
    height: 971,
  },
];

export default function ActiveProjects() {
  return (
    <section
      className="active-projects"
      aria-labelledby="active-projects-title"
    >
      <header className="active-projects-header">
        <h2 id="active-projects-title">Active projects</h2>
        <p>Live apps for studying, practicing, and making progress.</p>
      </header>
      <div className="active-projects-grid">
        {activeProjects.map((project) => (
          <article className="active-project-card" key={project.url}>
            <a
              className="active-project-link"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="active-project-preview">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={project.width}
                  height={project.height}
                  sizes="(max-width: 700px) 100vw, 448px"
                />
              </div>
              <div className="active-project-content">
                <div className="active-project-heading">
                  <h3>{project.name}</h3>
                  <span className="active-project-status">Active</span>
                </div>
                <p className="active-project-category">{project.category}</p>
                <p className="active-project-description">
                  {project.description}
                </p>
                <span className="active-project-cta">Visit {project.name}</span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

import type { Metadata } from 'next';

import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import projects from '@/data/projects';
import achievements from '@/data/resume/achievements';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import { createPageMetadata } from '@/lib/metadata';
import {
  AUTHOR_EMAIL,
  AUTHOR_GITHUB_URL,
  AUTHOR_LINKEDIN_URL,
  AUTHOR_NAME,
  AUTHOR_PHONE,
  AUTHOR_PHONE_TEL,
  AUTHOR_WEBSITE_URL,
  SITE_DESCRIPTION,
} from '@/lib/utils';

export const metadata: Metadata = createPageMetadata({
  title: 'Hồ sơ',
  description: `${AUTHOR_NAME} - ${SITE_DESCRIPTION}`,
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">Hồ sơ</h1>
          <p className="resume-summary">{SITE_DESCRIPTION}</p>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="focus" className="resume-section">
            <div className="title">
              <h3>Định hướng chuyên môn</h3>
            </div>
            <p>
              AI, Machine Learning, Deep Learning, Big Data, Data Analysis, phát
              triển Full-stack và phát triển ứng dụng.
            </p>
          </section>

          <section id="projects" className="resume-section">
            <div className="title">
              <h3>Dự án tiêu biểu</h3>
            </div>
            {projects.map((project) => (
              <article className="jobs-container" key={project.title}>
                <header>
                  <h4>
                    {project.link ? (
                      <a href={project.link}>{project.title}</a>
                    ) : (
                      project.title
                    )}{' '}
                    - {project.subtitle}
                  </h4>
                  <p className="daterange">{project.displayDate}</p>
                </header>
                <p>{project.desc}</p>
                {project.tech ? (
                  <p>
                    <strong>Công nghệ:</strong> {project.tech.join(', ')}
                  </p>
                ) : null}
              </article>
            ))}
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="courses" className="resume-section">
            <Courses data={courses} />
          </section>

          <section id="achievements" className="resume-section">
            <div className="title">
              <h3>Thành tích và chứng chỉ</h3>
            </div>
            <ul className="points">
              {achievements.map((achievement) => (
                <li key={`${achievement.title}-${achievement.date}`}>
                  {achievement.title}
                  <span className="daterange"> {achievement.date}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="contact" className="resume-section">
            <div className="title">
              <h3>Liên hệ</h3>
            </div>
            <ul className="points">
              <li>
                Email: <a href={`mailto:${AUTHOR_EMAIL}`}>{AUTHOR_EMAIL}</a>
              </li>
              <li>
                Điện thoại:{' '}
                <a href={`tel:${AUTHOR_PHONE_TEL}`}>{AUTHOR_PHONE}</a>
              </li>
              <li>
                GitHub: <a href={AUTHOR_GITHUB_URL}>luongvanhungnet</a>
              </li>
              <li>
                LinkedIn: <a href={AUTHOR_LINKEDIN_URL}>Lương Văn Hưng</a>
              </li>
              <li>
                Website:{' '}
                <a href={AUTHOR_WEBSITE_URL}>www.luongvanhungnet.xyz</a>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}

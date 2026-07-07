import type { Degree as DegreeType } from '@/data/resume/degrees';

interface DegreeProps {
  data: DegreeType;
}

export default function Degree({ data }: DegreeProps) {
  const school = data.link ? (
    <a href={data.link}>{data.school}</a>
  ) : (
    data.school
  );

  return (
    <article className="degree-container">
      <header>
        <h4 className="degree">{data.degree}</h4>
        <p className="school">
          {school}, <span>{data.period}</span>
        </p>
      </header>
      {data.details && data.details.length > 0 ? (
        <ul className="points">
          {data.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

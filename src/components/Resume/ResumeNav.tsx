'use client';

import { useEffect, useRef, useState } from 'react';

const sections = [
  { name: 'Học vấn', id: 'education' },
  { name: 'Định hướng', id: 'focus' },
  { name: 'Dự án', id: 'projects' },
  { name: 'Kỹ năng', id: 'skills' },
  { name: 'Môn học', id: 'courses' },
  { name: 'Thành tích', id: 'achievements' },
  { name: 'Liên hệ', id: 'contact' },
] as const;

type SectionId = (typeof sections)[number]['id'];

/** Offset from top of viewport for intersection detection (header height + nav) */
const INTERSECTION_MARGIN = '-20% 0px -75% 0px';

export default function ResumeNav() {
  const [activeSection, setActiveSection] = useState<SectionId>('education');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        let targetEntry: IntersectionObserverEntry | null = null;

        if (visibleEntries.length > 0) {
          targetEntry = visibleEntries.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev,
          );
        } else if (entries.length > 0) {
          targetEntry = entries.reduce((prev, current) => {
            const prevDistance = Math.abs(prev.boundingClientRect.top);
            const currentDistance = Math.abs(current.boundingClientRect.top);
            return currentDistance < prevDistance ? current : prev;
          });
        }

        if (targetEntry) {
          const sectionId = sections.find(
            (s) => s.id === targetEntry.target.id,
          );
          if (sectionId) {
            setActiveSection(sectionId.id);
          }
        }
      },
      {
        rootMargin: INTERSECTION_MARGIN,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <nav className="resume-nav" aria-label="Các phần trong hồ sơ">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`resume-nav-link ${activeSection === section.id ? 'active' : ''}`}
          aria-current={activeSection === section.id ? 'location' : undefined}
        >
          {section.name}
        </a>
      ))}
    </nav>
  );
}

'use client';

import { useLanguage } from './LanguageProvider';
import { homeDictionaries } from '../lib/homeI18n';

interface Testimonial {
  text: string;
  name: string;
  location: string;
  initials: string;
  link: string;
}

const testimonialPeople: Omit<Testimonial, 'text' | 'location'>[] = [
  {
    name: 'Mr. & Mrs. Clendinen',
    initials: 'CC',
    link: '#',
  },
  {
    name: 'Mr & Mrs. Govender',
    initials: 'GG',
    link: '#',
  },
  {
    name: 'Mr & Mrs. Reccioni',
    initials: 'RR',
    link: '#',
  },
];

export default function Testimonials() {
  const { locale } = useLanguage();
  const copy = homeDictionaries[locale].testimonials;
  const testimonials = testimonialPeople.map((person, index) => ({ ...person, ...copy.items[index] }));
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{copy.title}</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-meta">
                <div className="testimonial-avatar">{item.initials}</div>
                <div>
                  <div className="testimonial-name">{item.name}</div>
                  <div className="testimonial-location">{item.location}</div>
                  <a href={item.link} className="testimonial-link">{copy.viewPhotos}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

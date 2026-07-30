import InnerHero from '../components/InnerHero';
import RecommendedGrid from '../components/RecommendedGrid';

const consultancyItems: string[] = [
  'Contribution to concept design.',
  'To draw up a construction time plan.',
  'Advice on the practical implications of the building plan, stores, rooms and other operations.',
  'To advice on investment saving ideas and trends.',
  'Maintenance of project finances.',
  'Handling all statutory requirement of BOI on imports.',
  'Attending to all necessary documentation of the Inland Revenue Department in obtaining VAT, NBT and SVAT.',
  'Obtain SVAT credit vouchers, monitoring and submitting quarterly reports.',
  'Drawing up of procurement plan for all purchases and ensure the least is paid for the best quality items available in the market.',
  'To ensure that the project is completed in a timely manner.',
  'To advice on the commissioning of all equipment, plant and machinery.',
  'Structuring and drawing up of all training and operational manuals of each department.',
  'Advice on the execution of the total human resources plan.',
  'To advice and draw up a total marketing plan for the proposed hotel.',
  'To act as consultants for the hotel operational automation.',
  'Training of staff as per the training schedule specified above.',
  'To make timely site visits and supervision.',
  'Provide advice and supervision on the hotel soft run.',
];

export const metadata = {
  title: 'Hospitality Project Management Consultancy - Serendia Holidays By Venom',
  description: 'Advisory services for hotel investors, from land acquisition through to operational commissioning.',
};

export default function HospitalityConsultancyPage() {
  return (
    <main className="consultancy-page">
      <InnerHero
        title="Hospitality Project Management Consultancy"
        subtitle="For hotel investors and developers"
        bgImage="/images/hero-4.png"
      />

      <section className="page-content consultancy-intro">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">A B2B service, distinct from our leisure travel arrangements</p>
            <h2 className="section-title">Expert advisory from acquisition to commissioning</h2>
          </div>
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <p>
              One of the key strengths of Serendia Holidays is our know-how in hospitality hotel project management. We provide expert knowledge to potential investors — from the acquisition of land through to the building and commissioning of a star-class hotel.
            </p>
          </div>
        </div>
      </section>

      <section className="page-content consultancy-services" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">We advise investors in the following areas</h2>
          </div>
          <ul className="consultancy-services-list">
            {consultancyItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-content consultancy-cta" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="consultancy-cta-card">
            <h3>Considering a hotel development in Sri Lanka?</h3>
            <p>Talk to our project management consultancy team directly — this enquiry path is kept separate from our leisure trip planner.</p>
            <a
              href="mailto:dharshan@venomholidays.com?subject=Hospitality%20Project%20Management%20Consultancy%20Enquiry"
              className="btn-primary"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </section>

      <RecommendedGrid currentSlug="hospitality-consultancy" heading="Also of interest" />
    </main>
  );
}

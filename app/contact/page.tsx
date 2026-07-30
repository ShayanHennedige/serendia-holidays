import InnerHero from '../components/InnerHero';

export const metadata = {
  title: 'Contact - Serendia Holidays By Venom',
  description: 'Get in touch with Serendia Holidays By Venom.',
};

export default function ContactPage() {
  return (
    <main>
      <InnerHero
        title="Contact Us"
        bgImage="/images/hero-2.png"
      />
      <section className="page-content section-light contact-page">
        <div className="container">
          <div className="section-header contact-page-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">We would love to hear from you!</p>
          </div>
          <div className="contact-layout">
            <div className="contact-info-panel contact-panel">
              <div className="contact-panel-header">
                <p className="contact-kicker">Get in touch with us on</p>
                <h3 className="contact-info-title">Serendia Holidays By Venom</h3>
              </div>
              <div className="contact-company-block">
                <p className="contact-company-name">Venom Holidays (Pvt) Ltd.</p>
                <p className="contact-detail">63A, Old Road, Pannipitiya, Sri Lanka</p>
                <p className="contact-detail">T: +94 77 398 6504 | M: +94 77 398 6504</p>
                <p className="contact-detail">E: dharshan@venomholidays.com</p>
              </div>

              <div className="contact-map-wrapper">
                <div className="contact-map-header">
                  <h4>Find us on the map</h4>
                  <a
                    href="https://www.google.com/maps?q=63A%2C%20Old%20Road%2C%20Pannipitiya%2C%20Sri%20Lanka"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-map-link"
                  >
                    Open in Google Maps
                  </a>
                </div>
                <div className="contact-map">
                  <iframe
                    title="Serendia Holidays location"
                    src="https://www.google.com/maps?q=63A%2C%20Old%20Road%2C%20Pannipitiya%2C%20Sri%20Lanka&output=embed"
                    width="100%"
                    height="360"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

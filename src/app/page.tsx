import Link from "next/link";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

const services = [
  { number: "01", title: "Digital Product Development", description: "Turning real-world problems into useful, intuitive digital products.", icon: "product" },
  { number: "02", title: "Software Engineering", description: "Building reliable, maintainable software with simplicity and long-term value in mind.", icon: "engineering" },
  { number: "03", title: "User-Centred Solutions", description: "Designing around the needs of the people who will actually use the technology.", icon: "people" },
] as const;

const principles = [
  { number: "01", title: "Understand the problem", description: "We start by identifying real needs and understanding the people affected by them." },
  { number: "02", title: "Keep things simple", description: "We challenge unnecessary complexity and focus on solutions that are clear and practical." },
  { number: "03", title: "Build with purpose", description: "Every feature should serve a real need and contribute to a better experience." },
];

function ServiceIcon({ type }: { type: (typeof services)[number]["icon"] }) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 48 48" className="service-icon">
      {type === "product" && <><rect x="6" y="9" width="36" height="30" rx="3" /><path d="M6 17h36M13 13h2m4 0h2M14 25h12v7H14zM31 25h5m-5 5h5" /></>}
      {type === "engineering" && <><path d="m18 15-9 9 9 9m12-18 9 9-9 9m-4-23-4 28" /><circle cx="24" cy="24" r="20" strokeDasharray="2 5" /></>}
      {type === "people" && <><circle cx="24" cy="16" r="6" /><path d="M12 37v-3a12 12 0 0 1 24 0v3H12ZM8 17a5 5 0 0 1 5-5m-7 20a9 9 0 0 1 6-9m28-15a5 5 0 0 0-5-5m7 20a9 9 0 0 0-6-9" /></>}
    </svg>
  );
}

function Arrow() {
  return <span aria-hidden="true" className="link-arrow">↗</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="home flex-1">
        <section className="hero" aria-labelledby="hero-title">
          <div className="home-container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> Thoughtful software, made practical</p>
              <h1 id="hero-title">Software that makes everyday things simpler.</h1>
              <p className="hero-lead">ATRIDAE designs and builds practical digital solutions around real needs — helping people and organisations get things done with less complexity.</p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/what-we-do">Explore what we do <Arrow /></Link>
                <Link className="text-link" href="/how-we-think">How we think <Arrow /></Link>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-grid" /><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
              <div className="interface-panel">
                <div className="panel-top"><span className="panel-dot" /><span className="panel-dot" /><span className="panel-dot" /><span className="panel-top-line" /></div>
                <div className="panel-body">
                  <div className="panel-sidebar"><i /><i /><i /><i /></div>
                  <div className="panel-content">
                    <span className="panel-heading" />
                    {[1, 2, 3].map((row) => <div className="panel-row" key={row}><span className="row-icon" /><span className="row-lines"><i /><i /></span><span className="row-check" /></div>)}
                  </div>
                </div>
              </div>
              <div className="art-small-card"><span className="small-card-symbol">✳</span><span><i /><i /></span></div>
              <div className="art-connector" /><div className="art-endpoint" />
              <div className="art-caption">Clarity in every connection <span>— 01 / 03</span></div>
            </div>
          </div>
        </section>

        <section className="home-section services-section" aria-labelledby="services-title">
          <div className="home-container">
            <div className="section-heading"><div><p className="section-kicker">01 / Our work</p><h2 id="services-title">What we do<span className="heading-period">.</span></h2></div><p>We create practical digital solutions that help people and organisations work more effectively.</p></div>
            <div className="service-grid">
              {services.map((service) => <article className="service-card" key={service.number}><div className="service-card-top"><ServiceIcon type={service.icon} /><span>{service.number} / 03</span></div><div><h3>{service.title}</h3><p>{service.description}</p></div></article>)}
            </div>
            <Link href="/what-we-do" className="text-link section-link">More about what we do <Arrow /></Link>
          </div>
        </section>

        <section className="home-section product-section" aria-labelledby="product-title">
          <div className="home-container product-grid">
            <div className="product-copy">
              <p className="section-kicker">02 / In progress</p>
              <h2 id="product-title">What we’re building<span className="heading-period">.</span></h2>
              <div className="product-rule" />
              <span className="status-label"><span /> In development</span>
              <h3>ATRIDAE Carer Platform</h3>
              <p>ATRIDAE Carer Platform is a digital solution in development, designed to make it easier for unpaid carers to find information, understand available support and navigate their caring responsibilities.</p>
              <p className="product-note">An example of our practical approach to software, built around a real need.</p>
            </div>
            <div className="product-art" aria-hidden="true">
              <div className="product-art-glow" />
              <div className="product-visual-card visual-back"><span className="visual-marker" /><i /><i /><i /></div>
              <div className="product-visual-card visual-main">
                <div className="visual-top"><span className="visual-circle" /><span className="visual-title-line" /><span className="visual-menu"><i /><i /></span></div>
                <div className="visual-banner"><span /><i /><i /></div>
                {[1, 2, 3].map((row) => <div className="visual-list" key={row}><span /><div><i /><i /></div><b>↗</b></div>)}
              </div>
              <div className="product-visual-card visual-front"><span className="visual-front-icon">+</span><span><i /><i /></span></div>
            </div>
          </div>
        </section>

        <section className="home-section approach-section" aria-labelledby="approach-title">
          <div className="home-container">
            <div className="section-heading"><div><p className="section-kicker">03 / Our approach</p><h2 id="approach-title">How we think<span className="heading-period">.</span></h2></div><p>Good software starts with understanding the problem, not adding more complexity.</p></div>
            <div className="principle-grid">
              {principles.map((principle) => <article className="principle" key={principle.number}><span className="principle-number">{principle.number}<span className="principle-dot" /></span><h3>{principle.title}</h3><p>{principle.description}</p></article>)}
            </div>
            <Link href="/how-we-think" className="text-link section-link">More about our approach <Arrow /></Link>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <div className="home-container contact-inner"><div><p className="section-kicker">04 / Let’s talk</p><h2 id="contact-title">Have a problem<br />worth solving?</h2><p>We believe good digital solutions begin with a conversation about real needs.</p></div><Link href="/contact" className="button button-light">Get in touch <Arrow /></Link></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

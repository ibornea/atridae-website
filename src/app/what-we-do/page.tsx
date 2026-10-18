import { Footer } from "../components/footer";
import { Header } from "../components/header";

const services = [
  { number: "01", title: "Digital products", description: "We design and build practical digital products around real user needs — from an initial idea through to a working solution." },
  { number: "02", title: "Software development", description: "We develop web, mobile and standalone software, with a focus on solutions that are clear, maintainable and appropriate for the problem they need to solve." },
  { number: "03", title: "Software consultancy", description: "We help organisations explore software ideas, understand requirements and make practical technical decisions before and during development. We can also support software quality assurance, testing strategy and delivery quality." },
];

export default function WhatWeDo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="secondary flex-1">
        <div className="secondary-intro">
          <div className="secondary-container">
            <p className="secondary-kicker">01 / Our work</p>
            <h1>What we do<span className="secondary-period">.</span></h1>
            <p className="secondary-lead">Practical digital products and software, shaped around real needs and the problems they need to solve.</p>
          </div>
        </div>
        <div className="secondary-container secondary-content">
          <div className="services-detail">
            {services.map((service) => (
              <section className="service-detail" key={service.number}>
                <span className="detail-number" aria-hidden="true">{service.number} / 03</span>
                <div><h2>{service.title}</h2><p>{service.description}</p></div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
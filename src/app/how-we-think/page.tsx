import { Footer } from "../components/footer";
import { Header } from "../components/header";

export default function HowWeThink() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="secondary flex-1">
        <div className="secondary-intro"><div className="secondary-container">
          <p className="secondary-kicker">02 / Our approach</p>
          <h1>How we think<span className="secondary-period">.</span></h1>
          <p className="secondary-lead">Thoughtful software starts with the people who use it and the problem it needs to solve.</p>
        </div></div>
        <div className="secondary-container secondary-content approach-detail">
          <section className="approach-entry">
            <span className="detail-number" aria-hidden="true">01 / 02</span>
            <div><h2>Simple. Useful. Human.</h2><p>
              We start with the people who will use a product and the problem it needs
              to solve. We aim to build software that is understandable, practical and
              appropriate for the job — rather than adding technology for its own sake.
            </p></div>
          </section>

          <section className="approach-entry">
            <span className="detail-number" aria-hidden="true">02 / 02</span>
            <div><h2>A new company built on long experience.</h2>
              <p>
                ATRIDAE is a new UK software company, built on more than two decades
                of experience across different areas of software development and
                delivery.
              </p>
              <p>
                The experience behind the company spans a wide range of software —
                from video games to mobile, web and standalone applications, as well
                as software used in complex business environments.
              </p>
              <p>
                That variety has shaped a simple view of software: technology is most
                useful when it solves a real problem without creating unnecessary
                complexity.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
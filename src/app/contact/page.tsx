import { Footer } from "../components/footer";
import { Header } from "../components/header";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="secondary flex-1">
        <div className="secondary-intro"><div className="secondary-container">
          <p className="secondary-kicker">03 / Get in touch</p>
          <h1>Let&apos;s talk<span className="secondary-period">.</span></h1>
          <p className="secondary-lead">
              Whether you have a software idea, need help with an existing product, or
              simply want to explore what might be possible, we&apos;d be happy to hear
              from you.
          </p>
        </div></div>
        <div className="secondary-container secondary-content">
          <section className="contact-detail" aria-labelledby="contact-email-title">
            <div>
              <p className="secondary-kicker">Start a conversation</p>
              <h2 id="contact-email-title">Get in touch by email.</h2>
              <p>We welcome conversations about digital products, software development and practical solutions.</p>
            </div>
            <div className="contact-email">
              <span>Email</span>
              <a href="mailto:contact@atridae.co.uk">contact@atridae.co.uk <span aria-hidden="true">↗</span></a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
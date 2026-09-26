import type { Metadata } from "next";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const metadata: Metadata = {
  title: "Privacy Policy | ATRIDAE",
  description: "ATRIDAE LTD privacy policy.",
};

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-6 py-16 sm:px-10 sm:pt-12 sm:pb-24">
        <article className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <strong>Last updated: 26 September 2026</strong>
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            ATRIDAE LTD respects your privacy and is committed to handling personal
            information responsibly and transparently.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This privacy policy explains how we collect and use personal information
            when you visit our website or contact us.
          </p>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Who we are
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>ATRIDAE LTD is a software company registered in England and Wales.</p>
              <p>
                <strong>Company number:</strong> 17473530
              </p>
              <p>For questions about this privacy policy or how we handle personal information, contact us at:</p>
              <p>
                <strong>contact@atridae.co.uk</strong>
              </p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Information we collect
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>Our website does not currently require you to create an account, submit information through online forms or subscribe to marketing communications.</p>
              <p>If you contact us by email, we may receive personal information including:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>your name;</li>
                <li>your email address;</li>
                <li>the organisation you represent, where relevant; and</li>
                <li>any other information you choose to include in your message.</li>
              </ul>
              <p>When you visit our website, limited technical information is also processed in connection with delivering, operating and securing the website. This may include information such as your IP address, request information, browser or device information, technical logs and approximate location derived from your IP address.</p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              How we use your information
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>We may use personal information to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>respond to enquiries and communicate with you;</li>
                <li>discuss potential projects, services or business relationships;</li>
                <li>provide information you have requested;</li>
                <li>operate, maintain and protect our website and systems; and</li>
                <li>comply with legal or regulatory obligations where applicable.</li>
              </ul>
              <p>We do not sell personal information.</p>
              <p>We do not currently use the website for behavioural advertising or profiling.</p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Our lawful basis for processing
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>Under UK data protection law, we must have a lawful basis for processing personal information.</p>
              <p>When you contact us with an enquiry, we normally process your information on the basis of our legitimate interests in communicating with people and organisations interested in ATRIDAE and our services.</p>
              <p>Where communication relates to entering into or performing a contract, we may process personal information where this is necessary to take steps at your request before entering into a contract or to perform a contract.</p>
              <p>We may also process personal information where necessary to comply with a legal obligation.</p>
              <p>Where we rely on legitimate interests, we consider those interests against your rights and interests.</p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Website hosting and technical data
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>Our website is hosted using <strong>Vercel</strong>.</p>
              <p>Vercel provides the infrastructure used to deliver the website and may process technical information associated with visits to the site, including IP addresses, request and traffic information, technical logs, system configuration information and approximate location derived from IP addresses.</p>
              <p>This processing is used to provide, operate, secure and maintain the hosting service.</p>
              <p>ATRIDAE does not currently use Vercel Web Analytics or Vercel Speed Insights on this website.</p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Email communications
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>If you contact us at <strong>contact@atridae.co.uk</strong>, your email and the information contained in it will be processed through the email services used by ATRIDAE.</p>
              <p>We use this information to respond to your message and, where appropriate, to manage subsequent business communications.</p>
              <p>Please do not send sensitive personal information unless it is necessary for your enquiry.</p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Sharing your information
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>We do not sell or rent personal information.</p>
              <p>Personal information may be processed by service providers that help us operate our website, email and business systems where this is necessary to provide those services.</p>
              <p>We may also disclose personal information where required by law or where reasonably necessary to establish, exercise or defend legal rights.</p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              International data transfers
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Some of the technology providers we use may process information outside the United Kingdom.
            </p>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Where personal information is transferred internationally, we rely on appropriate safeguards or other lawful mechanisms required by applicable UK data protection law.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              How long we keep information
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>We keep personal information only for as long as reasonably necessary for the purpose for which it was collected.</p>
              <p>For example, correspondence may be retained while we deal with an enquiry or maintain an ongoing business relationship and, where appropriate, for a reasonable period afterwards for business, legal, accounting or record-keeping purposes.</p>
              <p>Technical information retained by our service providers is subject to their applicable retention arrangements.</p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Security
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>We take reasonable technical and organisational measures to protect personal information against unauthorised access, loss, misuse, alteration or disclosure.</p>
              <p>However, no method of transmitting or storing information electronically can be guaranteed to be completely secure.</p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Cookies and analytics
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>ATRIDAE does not currently use website analytics or advertising technologies on this website.</p>
              <p>We do not currently use Vercel Web Analytics or Vercel Speed Insights.</p>
              <p>The services used to operate and deliver the website may use technologies that are strictly necessary for security, networking or operation of the service.</p>
              <p>If we introduce analytics, advertising or other non-essential cookies or similar technologies in the future, we will update this policy and, where required, provide appropriate information and consent controls.</p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Your data protection rights
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>Under UK data protection law, you may have rights in relation to your personal information, depending on the circumstances. These can include the right to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>request access to personal information we hold about you;</li>
                <li>ask us to correct inaccurate or incomplete information;</li>
                <li>ask us to delete your personal information in certain circumstances;</li>
                <li>ask us to restrict the processing of your information in certain circumstances;</li>
                <li>object to certain processing of your personal information; and</li>
                <li>request transfer of certain personal information where the right to data portability applies.</li>
              </ul>
              <p>You will not normally be required to pay a fee to exercise these rights.</p>
              <p>To exercise your rights or ask a question about how we use your personal information, contact:</p>
              <p>
                <strong>contact@atridae.co.uk</strong>
              </p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Complaints
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>If you have concerns about how ATRIDAE uses your personal information, please contact us at <strong>contact@atridae.co.uk</strong> so that we can investigate the issue.</p>
              <p>You also have the right to complain to the <strong>Information Commissioner&apos;s Office (ICO)</strong>, the UK&apos;s independent regulator for data protection.</p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Changes to this policy
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>We may update this privacy policy as our website, services or data-handling practices change.</p>
              <p>When we make changes, we will update the <strong>Last updated</strong> date at the top of this page.</p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
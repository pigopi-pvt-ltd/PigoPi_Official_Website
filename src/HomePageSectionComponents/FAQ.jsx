import { motion } from "framer-motion";
export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <details className="group bg-slate-50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden border border-slate-200 transition-all duration-300 open:bg-white open:shadow-lg open:ring-1 open:ring-slate-200">
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="font-bold text-slate-900">
                What services does a web design company offer?
              </h2>
              <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-slate-600">
              We offer a comprehensive range of services including UI/UX design,
              frontend and backend development, SEO optimization, and ongoing
              maintenance.
            </p>
          </details>

          {/* FAQ Item 2 */}
          <details className="group bg-slate-50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden border border-slate-200 transition-all duration-300 open:bg-white open:shadow-lg open:ring-1 open:ring-slate-200">
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="font-bold text-slate-900">
                How much does it cost to hire a web design company?
              </h2>
              <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-slate-600">
              Costs vary depending on the complexity of the project, features
              required, and timeline. We offer custom quotes tailored to your
              specific needs.
            </p>
          </details>

          {/* FAQ Item 3 */}
          <details className="group bg-slate-50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden border border-slate-200 transition-all duration-300 open:bg-white open:shadow-lg open:ring-1 open:ring-slate-200">
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="font-bold text-slate-900">
                How long does it take to build a website?
              </h2>
              <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-slate-600">
              A typical website can take anywhere from 4 to 12 weeks, depending
              on the scope and client feedback cycles.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}

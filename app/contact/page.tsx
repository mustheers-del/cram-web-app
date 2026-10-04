"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import SuccessMark from "@/components/ui/SuccessMark";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef<HTMLHeadingElement>(null);

  /* Move focus to the confirmation so screen-reader users hear it. */
  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />

      <main id="main" className="page-top bg-ivory text-ink">
        <section className="wrap grid gap-12 py-14 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-8 bg-gold/80" />
              <p className="eyebrow text-turquoise">Contact CRAM</p>
            </div>

            <h1 className="title-page mt-6 !text-[clamp(2.4rem,1.6rem+2.6vw,3.6rem)]">
              Have a question before you begin?
            </h1>

            <p className="lede mt-7 max-w-md text-stone">
              Send an enquiry about a creation, a gifting
              idea, an existing request — or anything
              you&apos;d like to understand before asking
              for a quotation.
            </p>

            <div className="mt-10 border-t border-ink/10 pt-7">
              <p className="text-sm leading-7 text-stone">
                Prefer to discuss an idea directly? CRAM&apos;s
                verified contact and social details will be
                available here once the final business
                information is confirmed.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="border border-sandline bg-white p-5 shadow-[0_30px_60px_-46px_rgba(22,21,19,0.35)] sm:p-8 lg:p-10">
              {submitted ? (
                <div
                  className="flex flex-col items-center py-12 text-center"
                  aria-live="polite"
                  data-testid="contact-success"
                >
                  <SuccessMark size={68} />

                  <h2
                    ref={successRef}
                    tabIndex={-1}
                    className="mt-6 font-serif-title text-3xl outline-none"
                  >
                    Your enquiry looks ready.
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-7 text-stone">
                    This frontend preview lets you check
                    the enquiry experience. No message
                    has been sent yet.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    data-testid="contact-another"
                    className="btn-outline mt-7"
                  >
                    Edit or start another enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  data-testid="contact-form"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="field-label"
                      >
                        Name
                      </label>

                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        className="field"
                        data-testid="contact-name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="field-label"
                      >
                        Email
                      </label>

                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        className="field"
                        data-testid="contact-email"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="contact-topic"
                      className="field-label"
                    >
                      What can we help with?
                    </label>

                    <select
                      id="contact-topic"
                      name="topic"
                      className="field"
                      data-testid="contact-topic"
                    >
                      <option>Custom creation</option>
                      <option>Existing quotation</option>
                      <option>Gifting / occasion enquiry</option>
                      <option>Product question</option>
                      <option>Something else</option>
                    </select>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="contact-message"
                      className="field-label"
                    >
                      Message
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us what you would like to know…"
                      className="field resize-y !py-3 leading-7"
                      data-testid="contact-message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary group mt-7 w-full sm:w-auto"
                    data-testid="contact-submit"
                  >
                    Preview Enquiry

                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  <p className="mt-4 text-xs leading-5 text-stone">
                    Preview only — no enquiry is sent yet.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
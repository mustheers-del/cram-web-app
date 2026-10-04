"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthShell from "@/components/auth/AuthShell";

export default function SignupPage() {
  const [notice, setNotice] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(true);
  };

  return (
    <>
      <Header />

      <AuthShell
        variant="light"
        heading={
          <>
            A quieter way to create something personal.
          </>
        }
        body="Your CRAM account will keep quotation requests and creation progress organised — without changing the personal commission experience."
      >
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="h-px w-8 bg-gold/80" />
          <p className="eyebrow text-gold">Join CRAM</p>
        </div>

        <h2 className="mt-4 font-serif-title text-4xl leading-[1.05] tracking-[-0.01em]">
          Create your account
        </h2>

        <p className="mt-3 text-sm leading-6 text-stone">
          Account creation is currently in preview while the customer
          experience is being completed.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
          data-testid="signup-form"
        >
          <div>
            <label htmlFor="signup-name" className="field-label">
              Full name
            </label>

            <input
              id="signup-name"
              type="text"
              required
              autoComplete="name"
              className="field"
              data-testid="signup-name"
            />
          </div>

          <div>
            <label htmlFor="signup-email" className="field-label">
              Email
            </label>

            <input
              id="signup-email"
              type="email"
              required
              autoComplete="email"
              className="field"
              data-testid="signup-email"
            />
          </div>

          <div>
            <label htmlFor="signup-password" className="field-label">
              Password
            </label>

            <input
              id="signup-password"
              type="password"
              required
              autoComplete="new-password"
              className="field"
              data-testid="signup-password"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full"
            data-testid="signup-submit"
          >
            Create Account
          </button>

          {notice && (
            <p
              className="pop-in border border-gold/40 bg-gold/10 px-4 py-3 text-xs leading-5 text-stone"
              role="status"
              data-testid="signup-notice"
            >
              Account creation is not active in this preview yet.
            </p>
          )}
        </form>

        <p className="mt-6 text-center text-sm text-stone">
          Already have an account?{" "}
          <Link
            href="/login"
            className="link-line"
            data-testid="signup-to-login"
          >
            Sign in
          </Link>
        </p>
      </AuthShell>

      <Footer />
    </>
  );
}

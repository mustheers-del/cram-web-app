"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthShell from "@/components/auth/AuthShell";

export default function LoginPage() {
  const [notice, setNotice] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(true);
  };

  return (
    <>
      <Header />

      <AuthShell
        variant="dark"
        heading={
          <>
            Your creations,
            <br />
            all in one place.
          </>
        }
        body="Your CRAM account will become the place to view quotation requests, accepted quotes and order progress."
      >
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="h-px w-8 bg-gold/80" />
          <p className="eyebrow text-gold">Welcome back</p>
        </div>

        <h2 className="mt-4 font-serif-title text-4xl leading-[1.05] tracking-[-0.01em]">
          Sign in to CRAM
        </h2>

        <p className="mt-3 text-sm leading-6 text-stone">
          Account access is currently in preview while the customer
          experience is being completed.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
          data-testid="login-form"
        >
          <div>
            <label htmlFor="login-email" className="field-label">
              Email
            </label>

            <input
              id="login-email"
              type="email"
              required
              autoComplete="email"
              className="field"
              data-testid="login-email"
            />
          </div>

          <div>
            <label htmlFor="login-password" className="field-label">
              Password
            </label>

            <input
              id="login-password"
              type="password"
              required
              autoComplete="current-password"
              className="field"
              data-testid="login-password"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full"
            data-testid="login-submit"
          >
            Sign In
          </button>

          {notice && (
            <p
              className="pop-in border border-gold/40 bg-gold/10 px-4 py-3 text-xs leading-5 text-stone"
              role="status"
              data-testid="login-notice"
            >
              Account sign-in is not active in this preview yet.
            </p>
          )}
        </form>

        <p className="mt-6 text-center text-sm text-stone">
          New to CRAM?{" "}
          <Link
            href="/signup"
            className="link-line"
            data-testid="login-to-signup"
          >
            Create an account
          </Link>
        </p>
      </AuthShell>

      <Footer />
    </>
  );
}

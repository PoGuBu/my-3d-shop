"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // For now just show success. Later we can wire to Formspree / email / etc.
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Contact & Commissions</h1>
        <p className="mt-2 text-zinc-400">
          Want a custom design or have a question? Drop a message below.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
          <div className="mb-3 text-4xl">✅</div>
          <h2 className="mb-2 text-xl font-semibold text-white">Message sent!</h2>
          <p className="text-zinc-400">
            Thanks for reaching out. I’ll get back to you soon.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-sm text-violet-400 hover:text-violet-300"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label htmlFor="type" className="mb-1.5 block text-sm font-medium text-zinc-300">
              What is this about?
            </label>
            <select
              id="type"
              name="type"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
            >
              <option value="question">General question</option>
              <option value="commission">Custom commission</option>
              <option value="order">Order support</option>
              <option value="other">Something else</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500 resize-y"
              placeholder="Tell me what you need..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500 hover:shadow-violet-500/40"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

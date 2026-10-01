'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Circle,
  Clock3,
  Flower2,
  Gem,
  Gift,
  Palette,
  ShieldCheck,
  Sparkles,
  Upload,
} from 'lucide-react';

type Category = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
};

type PaletteOption = {
  name: string;
  color: string;
};

type Faq = {
  question: string;
  answer: string;
};

const categories: Category[] = [
  {
    id: 'tray',
    name: 'Resin Tray',
    description: 'Personalised trays for gifting, décor, celebrations, and everyday use.',
    icon: <Gem size={21} aria-hidden="true" />,
  },
  {
    id: 'coasters',
    name: 'Coaster Set',
    description: 'Custom sets with colours, florals, names, initials, or meaningful details.',
    icon: <Circle size={21} aria-hidden="true" />,
  },
  {
    id: 'keepsake',
    name: 'Memory Keepsake',
    description: 'Preserve flowers, small mementos, dates, names, or special memories in resin.',
    icon: <Flower2 size={21} aria-hidden="true" />,
  },
  {
    id: 'jewellery',
    name: 'Resin Jewellery',
    description: 'Wearable resin pieces designed around your preferred colours and inclusions.',
    icon: <Sparkles size={21} aria-hidden="true" />,
  },
  {
    id: 'gifting',
    name: 'Gift / Event Order',
    description: 'Personalised resin pieces for weddings, birthdays, events, and gifting.',
    icon: <Gift size={21} aria-hidden="true" />,
  },
  {
    id: 'other',
    name: 'Something Custom',
    description: 'Have another resin idea? Describe it and CRAM can review what is possible.',
    icon: <Palette size={21} aria-hidden="true" />,
  },
];

const palettes: PaletteOption[] = [
  { name: 'Deep Ocean', color: '#0E6E68' },
  { name: 'Emerald & Gold', color: '#1B4332' },
  { name: 'Blush & Rose Gold', color: '#F7D9E4' },
  { name: 'Warm Neutral', color: '#D8C8B7' },
  { name: 'Ink & Ivory', color: '#161513' },
  { name: 'Custom Mix', color: '#3FA9E0' },
];

const faqs: Faq[] = [
  {
    question: 'How does the quote-before-payment process work?',
    answer:
      'Submit your idea, preferences, approximate size, budget, and reference images if you have them. CRAM reviews the request and prepares a personalised quotation. Payment is only requested after you approve the quote.',
  },
  {
    question: 'Can I request a colour or design that is not shown on the website?',
    answer:
      'Yes. The purpose of the custom studio is to collect your preferred colours, theme, occasion, names, florals, and other details so the piece can be planned around your idea.',
  },
  {
    question: 'Can I upload reference photos?',
    answer:
      'Yes. You can select reference images or a PDF in this frontend form. The real upload and storage flow will be connected when the backend is implemented.',
  },
];

const inputClass =
  'w-full rounded-xl border border-[#DDD3C4] bg-white px-4 py-3 text-sm text-[#161513] outline-none transition placeholder:text-[#8A8378] focus:border-[#0E6E68] focus:ring-2 focus:ring-[#0E6E68]/15';

export const CustomStudio: React.FC = () => {
  const [category, setCategory] = useState(categories[0].name);
  const [palette, setPalette] = useState(palettes[0].name);
  const [occasion, setOccasion] = useState('wedding');
  const [dimensions, setDimensions] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [inscription, setInscription] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [budget, setBudget] = useState('not-sure');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [files, setFiles] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 650);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const names = Array.from(event.target.files).map((file) => file.name);
    setFiles(names);
  };

  return (
    <main className="min-h-screen bg-[#FBF6EE] pb-24 pt-28 text-[#161513]">
      <div className="mx-auto max-w-[1440px] px-4 pt-8 sm:px-8 lg:px-16">
        <header className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9A23B]/25 bg-[#F5E8C9] px-4 py-2 text-[#6D4A00]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D9A23B]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] sm:text-[11px]">
              CRAM Custom Studio
            </span>
          </div>

          <h1 className="font-serif-title text-4xl leading-tight tracking-tight sm:text-5xl md:text-[58px]">
            Tell us what you imagine.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5B564C] sm:text-lg">
            Share your colours, occasion, size, budget, personalisation, and inspiration.
            CRAM will review the idea and prepare a personalised quotation before any payment.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm sm:flex-row sm:gap-7">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-[#0E6E68]" size={18} aria-hidden="true" />
              <span className="font-semibold">No payment at this stage</span>
            </div>
            <div className="hidden h-1 w-1 rounded-full bg-[#D9A23B] sm:block" />
            <div className="flex items-center gap-2">
              <Clock3 className="text-[#9A6A12]" size={18} aria-hidden="true" />
              <span className="font-semibold">Personalised quote after review</span>
            </div>
          </div>
        </header>

        <section
          aria-labelledby="process-title"
          className="mb-16 rounded-2xl border border-[#E4DACB] bg-[#F7F1E6] p-5 sm:p-7"
        >
          <h2 id="process-title" className="sr-only">
            How custom ordering works
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['01', 'Share your idea', 'Tell us what you want to create and add any useful inspiration.'],
              ['02', 'Receive your quote', 'CRAM reviews the request and prepares a personalised price.'],
              ['03', 'Accept & pay', 'Approve the quote first, then complete payment securely.'],
              ['04', 'We create & deliver', 'Your piece enters the studio for crafting, finishing, and delivery.'],
            ].map(([number, title, description]) => (
              <article
                key={number}
                className="rounded-xl border border-[#E4DACB] bg-white p-5"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0E6E68]">
                  Step {number}
                </span>
                <h3 className="mt-4 font-serif-title text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5B564C]">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="grid items-start gap-8 lg:grid-cols-12">
          <section
            aria-labelledby="commission-form-title"
            className="rounded-2xl border border-[#E4DACB] bg-white p-5 shadow-sm sm:p-8 lg:col-span-8 lg:p-10"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center py-14 text-center" aria-live="polite">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#0E6E68]/10 text-[#0E6E68]">
                  <CheckCircle2 size={42} aria-hidden="true" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8A6114]">
                  Frontend confirmation
                </span>

                <h2 className="mt-3 font-serif-title text-3xl sm:text-4xl">
                  Your request is ready for review.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[#5B564C] sm:text-base">
                  Thanks, <strong className="text-[#161513]">{name || 'there'}</strong>. This
                  frontend currently demonstrates the final customer experience. The real
                  submission, database, uploads, notifications, and quote workflow will be
                  connected during the backend phase.
                </p>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 min-h-11 rounded-xl bg-[#F1EBE3] px-6 text-sm font-semibold transition hover:bg-[#E7DED2] focus:outline-none focus:ring-2 focus:ring-[#0E6E68]"
                >
                  Edit or submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-11">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A6114]">
                    Step 01 · Creation type
                  </span>
                  <h2 id="commission-form-title" className="mt-2 font-serif-title text-2xl sm:text-3xl">
                    What would you like us to create?
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#5B564C]">
                    Choose the closest option. You can explain anything more specific in the next step.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {categories.map((item) => {
                      const selected = category === item.name;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => setCategory(item.name)}
                          className={`min-h-[148px] rounded-xl border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[#0E6E68] ${
                            selected
                              ? 'border-[#0E6E68] bg-[#0E6E68] text-white'
                              : 'border-[#E4DACB] bg-[#FBF8F2] hover:border-[#0E6E68]/40'
                          }`}
                        >
                          <span className={`mb-3 inline-flex ${selected ? 'text-white' : 'text-[#0E6E68]'}`}>
                            {item.icon}
                          </span>
                          <span className="block font-serif-title text-lg font-semibold">
                            {item.name}
                          </span>
                          <span className={`mt-1 block text-xs leading-5 ${selected ? 'text-white/80' : 'text-[#5B564C]'}`}>
                            {item.description}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <section className="rounded-2xl border border-[#E4DACB] bg-[#F8F3EC] p-5 sm:p-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A6114]">
                    Step 02 · Your idea
                  </span>

                  <div className="mt-5">
                    <label htmlFor="idea" className="font-serif-title text-xl">
                      Tell us what you imagine
                    </label>
                    <p className="mt-1 text-xs leading-5 text-[#5B564C]">
                      Describe the look, colours, story, recipient, occasion, or details you want included.
                    </p>
                    <textarea
                      id="idea"
                      rows={5}
                      value={notes}
                      onChange={(event) => setNotes(event.target.value)}
                      placeholder="For example: a teal and gold tray for an anniversary gift with our initials and date..."
                      className={`${inputClass} mt-3 resize-y`}
                    />
                  </div>

                  <fieldset className="mt-6">
                    <legend className="text-xs font-bold uppercase tracking-[0.12em]">
                      Preferred colour palette
                    </legend>

                    <div className="mt-3 flex flex-wrap gap-2.5">
                      {palettes.map((option) => {
                        const selected = palette === option.name;

                        return (
                          <button
                            key={option.name}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => setPalette(option.name)}
                            className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#0E6E68] ${
                              selected
                                ? 'border-[#0E6E68] bg-[#0E6E68] text-white'
                                : 'border-[#DDD3C4] bg-white hover:bg-[#F3EEE7]'
                            }`}
                          >
                            <span
                              className="h-3.5 w-3.5 rounded-full border border-black/10"
                              style={{ backgroundColor: option.color }}
                              aria-hidden="true"
                            />
                            {option.name}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <fieldset className="mt-6">
                    <legend className="text-xs font-bold uppercase tracking-[0.12em]">
                      Occasion / purpose
                    </legend>

                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {[
                        ['wedding', 'Wedding / engagement'],
                        ['birthday', 'Birthday / celebration'],
                        ['anniversary', 'Anniversary / special gift'],
                        ['home', 'Home décor'],
                        ['event', 'Event / bulk gifting'],
                        ['other', 'Other'],
                      ].map(([id, label]) => (
                        <label
                          key={id}
                          className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${
                            occasion === id
                              ? 'border-[#0E6E68] bg-white font-semibold'
                              : 'border-[#DDD3C4] bg-white/80 text-[#5B564C]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="occasion"
                            value={id}
                            checked={occasion === id}
                            onChange={() => setOccasion(id)}
                            className="accent-[#0E6E68]"
                          />
                          {label}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </section>

                <section>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A6114]">
                    Step 03 · Size, quantity & budget
                  </span>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="dimensions" className="text-xs font-bold uppercase tracking-[0.12em]">
                        Approximate size
                      </label>
                      <input
                        id="dimensions"
                        type="text"
                        value={dimensions}
                        onChange={(event) => setDimensions(event.target.value)}
                        placeholder="e.g. 12 inch round"
                        className={`${inputClass} mt-2`}
                      />
                    </div>

                    <div>
                      <label htmlFor="quantity" className="text-xs font-bold uppercase tracking-[0.12em]">
                        Quantity
                      </label>
                      <select
                        id="quantity"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                        className={`${inputClass} mt-2`}
                      >
                        <option value="1">1 piece</option>
                        <option value="2">2 pieces</option>
                        <option value="4">4 pieces</option>
                        <option value="6">6 pieces</option>
                        <option value="10+">10+ pieces / bulk order</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="inscription" className="text-xs font-bold uppercase tracking-[0.12em]">
                        Personalisation / embedded details
                      </label>
                      <input
                        id="inscription"
                        type="text"
                        value={inscription}
                        onChange={(event) => setInscription(event.target.value)}
                        placeholder="Names, initials, dates, flowers, small keepsakes, lettering..."
                        className={`${inputClass} mt-2`}
                      />
                    </div>

                    <div>
                      <label htmlFor="targetDate" className="text-xs font-bold uppercase tracking-[0.12em]">
                        Required by
                      </label>
                      <input
                        id="targetDate"
                        type="date"
                        value={targetDate}
                        onChange={(event) => setTargetDate(event.target.value)}
                        className={`${inputClass} mt-2`}
                      />
                      <p className="mt-2 text-[11px] leading-5 text-[#5B564C]">
                        Your requested date helps CRAM confirm whether the timeline is possible.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="budget" className="text-xs font-bold uppercase tracking-[0.12em]">
                        Budget range
                      </label>
                      <select
                        id="budget"
                        value={budget}
                        onChange={(event) => setBudget(event.target.value)}
                        className={`${inputClass} mt-2`}
                      >
                        <option value="not-sure">Not sure yet</option>
                        <option value="under-1000">Below ₹1,000</option>
                        <option value="1000-2000">₹1,000 – ₹2,000</option>
                        <option value="2000-5000">₹2,000 – ₹5,000</option>
                        <option value="5000-plus">₹5,000+</option>
                      </select>
                      <p className="mt-2 text-[11px] leading-5 text-[#5B564C]">
                        This helps guide the proposal. Your final amount comes from the personalised quote.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A6114]">
                    Step 04 · Inspiration
                  </span>

                  <label
                    htmlFor="inspiration-files"
                    className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#D7CCBC] bg-[#FBF8F2] p-8 text-center transition hover:bg-[#F4EEE5] focus-within:ring-2 focus-within:ring-[#0E6E68]"
                  >
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0E6E68] shadow-sm">
                      <Upload size={22} aria-hidden="true" />
                    </div>
                    <span className="font-serif-title text-xl">Share your inspiration</span>
                    <span className="mt-2 max-w-md text-xs leading-5 text-[#5B564C]">
                      Add reference photos, colour ideas, invitations, flowers, or a PDF.
                    </span>
                    <span className="mt-4 rounded-full border border-[#DDD3C4] bg-white px-4 py-2 text-xs font-semibold text-[#0E6E68]">
                      Browse files
                    </span>

                    <input
                      id="inspiration-files"
                      type="file"
                      multiple
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                      className="sr-only"
                    />
                  </label>

                  {files.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2" aria-live="polite">
                      {files.map((file) => (
                        <span
                          key={file}
                          className="rounded-full border border-[#DDD3C4] bg-[#F3EEE7] px-3 py-1.5 text-xs"
                        >
                          {file}
                        </span>
                      ))}
                    </div>
                  )}
                </section>

                <section>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A6114]">
                    Step 05 · Contact details
                  </span>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-[0.12em]">
                        Full name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Your name"
                        className={`${inputClass} mt-2`}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.12em]">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="you@example.com"
                        className={`${inputClass} mt-2`}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-[0.12em]">
                        WhatsApp / mobile *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder="+91 ..."
                        className={`${inputClass} mt-2`}
                      />
                    </div>

                    <div>
                      <label htmlFor="city" className="text-xs font-bold uppercase tracking-[0.12em]">
                        City / area
                      </label>
                      <input
                        id="city"
                        type="text"
                        autoComplete="address-level2"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                        placeholder="Your city"
                        className={`${inputClass} mt-2`}
                      />
                    </div>
                  </div>
                </section>

                <div className="rounded-2xl border border-[#0E6E68]/20 bg-[#0E6E68]/[0.06] p-5">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 shrink-0 text-[#0E6E68]" size={23} aria-hidden="true" />
                    <div>
                      <h3 className="font-serif-title text-lg text-[#0E6E68]">
                        Quote first. Payment later.
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#5B564C]">
                        Submitting this form does not create a paid order. CRAM will review the request,
                        prepare the quotation, and payment will only happen after the quote is accepted.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-[#E8DFD2] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#0E6E68] px-7 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0B3F3C] focus:outline-none focus:ring-2 focus:ring-[#0E6E68] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? 'Preparing request...' : 'Submit Request for Quote'}
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>

                  <span className="flex items-center gap-2 text-xs text-[#5B564C]">
                    <ShieldCheck size={15} className="text-[#8A6114]" aria-hidden="true" />
                    Frontend preview — backend comes next
                  </span>
                </div>
              </form>
            )}
          </section>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:col-span-4">
            <section className="rounded-2xl border border-[#E4DACB] bg-[#F7F1E6] p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A6114]">
                  Your request
                </span>
                <span className="font-serif-title text-sm italic text-[#0E6E68]">
                  Just created for you!
                </span>
              </div>

              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-start justify-between gap-4 rounded-xl border border-[#E4DACB] bg-white px-4 py-3">
                  <dt className="text-[#5B564C]">Creation</dt>
                  <dd className="text-right font-semibold">{category}</dd>
                </div>
                <div className="flex items-start justify-between gap-4 rounded-xl border border-[#E4DACB] bg-white px-4 py-3">
                  <dt className="text-[#5B564C]">Palette</dt>
                  <dd className="text-right font-semibold">{palette}</dd>
                </div>
                <div className="flex items-start justify-between gap-4 rounded-xl border border-[#E4DACB] bg-white px-4 py-3">
                  <dt className="text-[#5B564C]">Quantity</dt>
                  <dd className="font-semibold">{quantity}</dd>
                </div>
                <div className="flex items-start justify-between gap-4 rounded-xl border border-[#E4DACB] bg-white px-4 py-3">
                  <dt className="text-[#5B564C]">Pricing</dt>
                  <dd className="font-semibold text-[#0E6E68]">Personal quote</dd>
                </div>
              </dl>
            </section>

            <section className="rounded-2xl border border-[#E4DACB] bg-white p-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A6114]">
                CRAM approach
              </span>
              <h2 className="mt-2 font-serif-title text-2xl">
                Personal before transactional.
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#5B564C]">
                Every custom request is different. The website collects the details needed for CRAM
                to understand the piece before confirming a final price.
              </p>
            </section>

            <section className="rounded-2xl border border-[#E4DACB] bg-[#0B3F3C] p-6 text-white">
              <Sparkles size={22} className="text-[#E8BD62]" aria-hidden="true" />
              <h2 className="mt-4 font-serif-title text-2xl">
                Have an unusual idea?
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Choose &ldquo;Something Custom&rdquo; and describe the idea. CRAM can review whether it
                can be made and what information is needed next.
              </p>
            </section>
          </aside>
        </div>

        <section className="mx-auto mt-24 max-w-3xl">
          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8A6114]">
              Before you submit
            </span>
            <h2 className="mt-2 font-serif-title text-3xl sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <article
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-[#E4DACB] bg-white"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-serif-title text-lg transition hover:bg-[#FBF8F2] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0E6E68]"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={19}
                        aria-hidden="true"
                        className={`shrink-0 text-[#0E6E68] transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </h3>

                  {isOpen && (
                    <div className="border-t border-[#EEE6DA] px-5 py-4 text-sm leading-7 text-[#5B564C]">
                      {faq.answer}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default CustomStudio;

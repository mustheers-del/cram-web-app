"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import {
  ArrowRight,
  Check,
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
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SuccessMark from "@/components/ui/SuccessMark";

const categories = [
  {
    id: "tray",
    name: "Resin Tray",
    description:
      "Personalised trays shaped around your colours and details.",
    icon: Gem,
  },
  {
    id: "coasters",
    name: "Coaster Set",
    description:
      "Custom coaster sets with colours, initials, dates or decorative details.",
    icon: Circle,
  },
  {
    id: "keepsake",
    name: "Personal Keepsake",
    description:
      "A resin piece created around a name, date, memory or special idea.",
    icon: Flower2,
  },
  {
    id: "jewellery",
    name: "Resin Jewellery",
    description:
      "Wearable resin pieces composed around your preferred palette and details.",
    icon: Sparkles,
  },
  {
    id: "gifting",
    name: "Gifting & Occasions",
    description:
      "Personalised pieces for gifts, celebrations and special occasions.",
    icon: Gift,
  },
  {
    id: "other",
    name: "Something Custom",
    description:
      "Have another resin idea? Describe it and CRAM can review what is possible.",
    icon: Palette,
  },
];

const palettes = [
  { name: "Deep Ocean", color: "#0E6E68" },
  { name: "Emerald & Gold", color: "#1B4332" },
  { name: "Blush & Rose", color: "#F7D9E4" },
  { name: "Warm Neutral", color: "#D8C8B7" },
  { name: "Ink & Ivory", color: "#161513" },
  { name: "Custom Mix", color: "#3FA9E0" },
];

const occasions = [
  ["wedding", "Wedding / engagement"],
  ["birthday", "Birthday / celebration"],
  ["anniversary", "Anniversary / special gift"],
  ["home", "Home décor"],
  ["gifting", "Gifting / occasion"],
  ["other", "Other"],
] as const;

const quantities = [
  ["1", "1 piece"],
  ["2", "2 pieces"],
  ["4", "4 pieces"],
  ["6", "6 pieces"],
  ["10+", "10+ pieces"],
] as const;

const budgets = [
  ["not-sure", "Not sure yet"],
  ["under-1000", "Below ₹1,000"],
  ["1000-2000", "₹1,000 – ₹2,000"],
  ["2000-5000", "₹2,000 – ₹5,000"],
  ["5000-plus", "₹5,000+"],
] as const;

const steps = [
  { id: "step-creation", label: "Creation" },
  { id: "step-idea", label: "Idea" },
  { id: "step-details", label: "Details" },
  { id: "step-inspiration", label: "Inspiration" },
  { id: "step-contact", label: "Contact" },
] as const;

const faqs = [
  {
    question: "How does the quote-before-payment process work?",
    answer:
      "Share your idea, preferences, approximate size and budget. CRAM reviews the request and prepares a personalised quotation. Payment is only requested after you approve the quote.",
  },
  {
    question: "Can I request colours or ideas not shown on the website?",
    answer:
      "Yes. The Custom Studio is designed for personal requests. Share the colours, theme, occasion, names, dates or other details you have in mind.",
  },
  {
    question: "Can I add reference images?",
    answer:
      "Yes. You can choose reference images or a PDF while preparing your request.",
  },
];

function StepHeading({
  eyebrow,
  title,
  headingId,
}: {
  eyebrow: string;
  title: ReactNode;
  headingId?: string;
}) {
  return (
    <>
      <p className="eyebrow text-gold">{eyebrow}</p>

      <h2
        id={headingId}
        className="mt-3 font-serif-title text-[1.65rem] leading-tight tracking-[-0.005em] sm:text-3xl"
      >
        {title}
      </h2>
    </>
  );
}

/* Sticky progress. Reflects where the person is on the page; it does not
 * claim any step is validated or complete. */
function StudioStepper({ active }: { active: number }) {
  return (
    <nav
      aria-label="Request progress"
      className="sticky-under-header z-20 -mx-5 -mt-5 mb-9 border-b border-sandline bg-white/95 px-5 pt-3 pb-2 backdrop-blur-md sm:-mx-8 sm:-mt-8 sm:px-8 lg:-mx-10 lg:-mt-10 lg:px-10"
    >
      <p className="flex items-baseline justify-between text-xs text-stone md:hidden">
        <span className="font-semibold text-ink">
          {steps[active].label}
        </span>

        <span>
          Step {active + 1} of {steps.length}
        </span>
      </p>

      <ol className="flex items-center">
        {steps.map((step, index) => {
          const current = index === active;
          const passed = index < active;

          return (
            <li
              key={step.id}
              className="flex items-center last:flex-none [&:not(:last-child)]:flex-1"
            >
              <a
                href={`#${step.id}`}
                aria-current={current ? "step" : undefined}
                className="flex min-h-11 items-center gap-2.5 pr-1"
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold transition-[background-color,border-color,color] duration-300 ${
                    current
                      ? "border-turquoise bg-turquoise text-white"
                      : passed
                        ? "border-turquoise/40 bg-turquoise/10 text-turquoise"
                        : "border-fieldline bg-white text-stone"
                  }`}
                >
                  {passed ? (
                    <Check size={14} aria-hidden="true" />
                  ) : (
                    index + 1
                  )}
                </span>

                <span
                  className={`hidden text-xs font-semibold transition-colors duration-300 md:inline ${
                    current ? "text-ink" : "text-stone"
                  }`}
                >
                  {step.label}
                </span>
              </a>

              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="relative mx-1 h-px flex-1 overflow-hidden bg-fieldline sm:mx-2"
                >
                  <span
                    className="absolute inset-y-0 left-0 bg-gold transition-[width] duration-500 [transition-timing-function:var(--ease-soft)]"
                    style={{ width: passed ? "100%" : "0%" }}
                  />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

interface CustomStudioProps {
  initialCategory?: string;
  initialIdea?: string;
}

export default function CustomStudio({
  initialCategory,
  initialIdea,
}: CustomStudioProps) {
  const validInitialCategory = categories.some(
    (item) => item.id === initialCategory,
  )
    ? initialCategory
    : categories[0].id;

  const [category, setCategory] = useState(
    validInitialCategory ?? categories[0].id,
  );
  const [palette, setPalette] = useState(palettes[0].name);
  const [occasion, setOccasion] = useState("wedding");
  const [dimensions, setDimensions] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [inscription, setInscription] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [budget, setBudget] = useState("not-sure");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState(initialIdea ?? "");
  const [files, setFiles] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const successRef = useRef<HTMLHeadingElement>(null);

  /* Tracks which step is in the reading band so the stepper can follow. */
  useEffect(() => {
    if (isSubmitted) return;

    const elements = steps
      .map((step) => document.getElementById(step.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = steps.findIndex(
            (step) => step.id === entry.target.id,
          );

          if (index >= 0) setActiveStep(index);
        });
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [isSubmitted]);

  /* Move focus to the confirmation so screen-reader users hear it. */
  useEffect(() => {
    if (isSubmitted) successRef.current?.focus();
  }, [isSubmitted]);

  const selectedCategory =
    categories.find((item) => item.id === category) ??
    categories[0];

  const occasionLabel =
    occasions.find(([id]) => id === occasion)?.[1] ?? "";
  const quantityLabel =
    quantities.find(([value]) => value === quantity)?.[1] ?? quantity;
  const budgetLabel =
    budgets.find(([value]) => value === budget)?.[1] ?? "";
  const dateLabel = targetDate
    ? new Date(`${targetDate}T00:00:00`).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  const summaryRows: [string, string][] = [
    ["Creation", selectedCategory.name],
    ["Palette", palette],
    ["Occasion", occasionLabel],
    ["Quantity", quantityLabel],
    ...(dimensions.trim()
      ? ([["Size", dimensions.trim()]] as [string, string][])
      : []),
    ...(dateLabel
      ? ([["Needed by", dateLabel]] as [string, string][])
      : []),
    ["Budget guide", budgetLabel],
  ];

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
          .matches
          ? "auto"
          : "smooth",
      });
    }, 650);
  };

  const handleFileUpload = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.files) return;

    setFiles(
      Array.from(event.target.files).map(
        (file) => file.name,
      ),
    );
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(false);

    if (event.dataTransfer.files.length === 0) return;

    setFiles(
      Array.from(event.dataTransfer.files).map((file) => file.name),
    );
  };

  return (
    <main
      id="main"
      className="page-top bg-ivory pb-24 text-ink"
      data-testid="custom-studio"
    >
      <div className="wrap pt-10 md:pt-14">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span
            aria-hidden="true"
            className="mx-auto mb-6 block h-px w-12 bg-gold"
          />

          <p className="eyebrow text-turquoise">
            CRAM custom studio
          </p>

          <h1 className="title-page mt-5">
            Tell us what you imagine.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone">
            Share your colours, occasion, size, budget and
            inspiration. Your details help CRAM understand the
            idea before preparing a quotation.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-2 text-sm sm:flex-row sm:gap-6">
            <span className="flex items-center gap-2 font-semibold text-ink">
              <ShieldCheck
                size={17}
                aria-hidden="true"
                className="text-turquoise"
              />
              No payment at this stage
            </span>

            <span
              className="hidden h-1 w-1 rounded-full bg-gold sm:block"
              aria-hidden="true"
            />

            <span className="flex items-center gap-2 font-semibold text-ink">
              <Clock3
                size={17}
                aria-hidden="true"
                className="text-gold"
              />
              Personalised quote after review
            </span>
          </div>
        </Reveal>

        <div className="grid items-start gap-8 lg:grid-cols-12">
          <section
            aria-labelledby="commission-form-title"
            className="border border-sandline bg-white p-5 sm:p-8 lg:col-span-8 lg:p-10"
          >
            {isSubmitted ? (
              <div
                className="flex flex-col items-center py-12 text-center"
                aria-live="polite"
                data-testid="custom-success"
              >
                <SuccessMark size={76} />

                <p className="eyebrow mt-6 text-gold">
                  Request preview complete
                </p>

                <h2
                  id="commission-form-title"
                  ref={successRef}
                  tabIndex={-1}
                  className="mt-3 font-serif-title text-3xl outline-none sm:text-4xl"
                >
                  Your request details look ready.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-stone sm:text-base">
                  Thank you{name ? `, ${name}` : ""}. This
                  frontend version lets you preview the complete
                  request experience. No information has been sent
                  yet.
                </p>

                <dl className="mt-8 w-full max-w-md divide-y divide-sandline border-y border-sandline text-left text-sm">
                  {[
                    ...summaryRows,
                    ...(files.length > 0
                      ? ([
                          [
                            "Inspiration",
                            `${files.length} ${
                              files.length === 1 ? "file" : "files"
                            } chosen`,
                          ],
                        ] as [string, string][])
                      : []),
                  ].map(([term, value]) => (
                    <div
                      key={term}
                      className="flex items-start justify-between gap-6 py-3"
                    >
                      <dt className="text-stone">{term}</dt>

                      <dd className="text-right font-semibold">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  data-testid="custom-edit-request"
                  className="btn-outline mt-8"
                >
                  Edit request
                </button>
              </div>
            ) : (
              <>
                <StudioStepper active={activeStep} />

                <form
                  onSubmit={handleSubmit}
                  className="space-y-14"
                  data-testid="custom-request-form"
                >
                  <section
                    id="step-creation"
                    aria-labelledby="commission-form-title"
                    className="scroll-mt-[calc(var(--header-h)+6rem)]"
                  >
                    <StepHeading
                      eyebrow="Step 01 · Creation type"
                      headingId="commission-form-title"
                      title="What would you like us to create?"
                    />

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                      {categories.map((item) => {
                        const selected = category === item.id;
                        const Icon = item.icon;

                        return (
                          <button
                            key={item.id}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => setCategory(item.id)}
                            data-testid={`category-${item.id}`}
                            className={`relative min-h-[132px] cursor-pointer rounded-xl border p-4 text-left transition-[background-color,border-color,box-shadow,transform] duration-300 ${
                              selected
                                ? "border-turquoise bg-white shadow-[0_0_0_1px_var(--color-turquoise),0_16px_28px_-22px_rgba(14,110,104,0.6)]"
                                : "border-sandline bg-ivory hover:-translate-y-0.5 hover:border-turquoise/50 hover:bg-white"
                            }`}
                          >
                            <span
                              className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 ${
                                selected
                                  ? "bg-turquoise text-white"
                                  : "bg-turquoise/10 text-turquoise"
                              }`}
                            >
                              <Icon size={18} aria-hidden="true" />
                            </span>

                            <span className="mt-3 block font-serif-title text-lg font-semibold leading-tight">
                              {item.name}
                            </span>

                            <span className="mt-1 block text-xs leading-5 text-stone">
                              {item.description}
                            </span>

                            {selected && (
                              <span
                                aria-hidden="true"
                                className="pop-in absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-turquoise text-white"
                              >
                                <Check size={12} />
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </section>

                  <section
                    id="step-idea"
                    aria-labelledby="step-idea-title"
                    className="scroll-mt-[calc(var(--header-h)+6rem)] border border-sandline bg-paper p-5 sm:p-7"
                  >
                    <StepHeading
                      eyebrow="Step 02 · Your idea"
                      headingId="step-idea-title"
                      title="Your idea, colours and occasion"
                    />

                    <div className="mt-6">
                      <label
                        htmlFor="idea"
                        className="font-serif-title text-xl"
                      >
                        Describe what you imagine
                      </label>

                      <textarea
                        id="idea"
                        rows={4}
                        value={notes}
                        onChange={(event) =>
                          setNotes(event.target.value)
                        }
                        placeholder="For example: a teal and gold tray for an anniversary gift with our initials and date…"
                        className="field mt-3 resize-y !py-3 leading-7"
                        data-testid="field-idea"
                      />
                    </div>

                    <fieldset className="mt-7">
                      <legend className="field-label !mb-0">
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
                              data-testid={`palette-${option.name
                                .toLowerCase()
                                .replace(/[^a-z]+/g, "-")}`}
                              className={`inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full border px-4 text-xs font-semibold transition-[background-color,border-color,color,box-shadow] duration-300 ${
                                selected
                                  ? "border-turquoise bg-white text-darkteal shadow-[0_0_0_1px_var(--color-turquoise)]"
                                  : "border-fieldline bg-white/80 text-stone hover:border-turquoise/50 hover:bg-white hover:text-ink"
                              }`}
                            >
                              <span
                                className="h-4 w-4 rounded-full border border-black/10"
                                style={{
                                  backgroundColor: option.color,
                                }}
                                aria-hidden="true"
                              />

                              {option.name}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>

                    <fieldset className="mt-7">
                      <legend className="field-label !mb-0">
                        Occasion / purpose
                      </legend>

                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {occasions.map(([id, label]) => (
                          <label
                            key={id}
                            className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-[background-color,border-color,color] duration-300 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-turquoise/30 ${
                              occasion === id
                                ? "border-turquoise bg-white font-semibold"
                                : "border-fieldline bg-white/80 text-stone hover:border-turquoise/50 hover:bg-white"
                            }`}
                          >
                            <input
                              type="radio"
                              name="occasion"
                              value={id}
                              checked={occasion === id}
                              onChange={() => setOccasion(id)}
                              className="accent-turquoise"
                            />

                            {label}
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  </section>

                  <section
                    id="step-details"
                    aria-labelledby="step-details-title"
                    className="scroll-mt-[calc(var(--header-h)+6rem)]"
                  >
                    <StepHeading
                      eyebrow="Step 03 · Size, quantity & budget"
                      headingId="step-details-title"
                      title="How big, how many, how soon?"
                    />

                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="dimensions"
                          className="field-label"
                        >
                          Approximate size
                        </label>

                        <input
                          id="dimensions"
                          type="text"
                          value={dimensions}
                          onChange={(event) =>
                            setDimensions(event.target.value)
                          }
                          placeholder="e.g. 12 inch round"
                          className="field"
                          data-testid="field-dimensions"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="quantity"
                          className="field-label"
                        >
                          Quantity
                        </label>

                        <select
                          id="quantity"
                          value={quantity}
                          onChange={(event) =>
                            setQuantity(event.target.value)
                          }
                          className="field"
                          data-testid="field-quantity"
                        >
                          {quantities.map(([value, label]) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="inscription"
                          className="field-label"
                        >
                          Personalisation details
                        </label>

                        <input
                          id="inscription"
                          type="text"
                          value={inscription}
                          onChange={(event) =>
                            setInscription(event.target.value)
                          }
                          placeholder="Names, initials, dates, lettering, colours or other details…"
                          className="field"
                          data-testid="field-inscription"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="targetDate"
                          className="field-label"
                        >
                          Required by
                        </label>

                        <input
                          id="targetDate"
                          type="date"
                          value={targetDate}
                          onChange={(event) =>
                            setTargetDate(event.target.value)
                          }
                          className="field"
                          data-testid="field-date"
                        />

                        <p className="mt-2 text-[11px] leading-5 text-stone">
                          Helps CRAM understand your preferred
                          timeline.
                        </p>
                      </div>

                      <div>
                        <label
                          htmlFor="budget"
                          className="field-label"
                        >
                          Budget range
                        </label>

                        <select
                          id="budget"
                          value={budget}
                          onChange={(event) =>
                            setBudget(event.target.value)
                          }
                          className="field"
                          data-testid="field-budget"
                        >
                          {budgets.map(([value, label]) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ))}
                        </select>

                        <p className="mt-2 text-[11px] leading-5 text-stone">
                          A guide only — the final amount comes
                          from the quotation.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section
                    id="step-inspiration"
                    aria-labelledby="step-inspiration-title"
                    className="scroll-mt-[calc(var(--header-h)+6rem)]"
                  >
                    <StepHeading
                      eyebrow="Step 04 · Inspiration"
                      headingId="step-inspiration-title"
                      title="Share your inspiration"
                    />

                    <label
                      htmlFor="inspiration-files"
                      onDragOver={(event) => {
                        event.preventDefault();
                        setIsDragging(true);
                      }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={handleDrop}
                      className={`mt-6 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center transition-[background-color,border-color] duration-300 focus-within:border-turquoise focus-within:ring-2 focus-within:ring-turquoise/20 ${
                        isDragging
                          ? "border-turquoise bg-turquoise/[0.06]"
                          : "border-fieldline bg-ivory hover:border-turquoise/50 hover:bg-paper"
                      }`}
                    >
                      <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-turquoise shadow-sm">
                        <Upload size={22} aria-hidden="true" />
                      </span>

                      <span className="font-serif-title text-xl">
                        {isDragging
                          ? "Drop to add"
                          : "Drop files here, or browse"}
                      </span>

                      <span className="mt-2 max-w-md text-xs leading-5 text-stone">
                        Reference photos, colour ideas, invitations
                        or a PDF.
                      </span>

                      <span className="mt-4 rounded-full border border-fieldline bg-white px-4 py-2 text-xs font-semibold text-turquoise">
                        Browse files
                      </span>

                      <input
                        id="inspiration-files"
                        type="file"
                        multiple
                        accept="image/*,.pdf"
                        onChange={handleFileUpload}
                        className="sr-only"
                        data-testid="field-files"
                      />
                    </label>

                    {files.length > 0 && (
                      <div
                        className="mt-3 flex flex-wrap gap-2"
                        aria-live="polite"
                      >
                        {files.map((file) => (
                          <span
                            key={file}
                            className="pop-in max-w-full truncate rounded-full border border-fieldline bg-paper px-3 py-1.5 text-xs"
                          >
                            {file}
                          </span>
                        ))}
                      </div>
                    )}
                  </section>

                  <section
                    id="step-contact"
                    aria-labelledby="step-contact-title"
                    className="scroll-mt-[calc(var(--header-h)+6rem)]"
                  >
                    <StepHeading
                      eyebrow="Step 05 · Contact details"
                      headingId="step-contact-title"
                      title="How can we reach you?"
                    />

                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="field-label">
                          Full name *
                        </label>

                        <input
                          id="name"
                          type="text"
                          required
                          autoComplete="name"
                          value={name}
                          onChange={(event) =>
                            setName(event.target.value)
                          }
                          placeholder="Your name"
                          className="field"
                          data-testid="field-name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="field-label">
                          Email *
                        </label>

                        <input
                          id="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={email}
                          onChange={(event) =>
                            setEmail(event.target.value)
                          }
                          placeholder="you@example.com"
                          className="field"
                          data-testid="field-email"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="field-label">
                          Phone / WhatsApp *
                        </label>

                        <input
                          id="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          value={phone}
                          onChange={(event) =>
                            setPhone(event.target.value)
                          }
                          placeholder="Your contact number"
                          className="field"
                          data-testid="field-phone"
                        />
                      </div>

                      <div>
                        <label htmlFor="city" className="field-label">
                          City / area
                        </label>

                        <input
                          id="city"
                          type="text"
                          autoComplete="address-level2"
                          value={city}
                          onChange={(event) =>
                            setCity(event.target.value)
                          }
                          placeholder="Your city"
                          className="field"
                          data-testid="field-city"
                        />
                      </div>
                    </div>

                    <p className="mt-4 text-xs text-stone">
                      Fields marked * are required.
                    </p>
                  </section>

                  <div className="border border-turquoise/25 bg-turquoise/[0.05] p-5">
                    <div className="flex items-start gap-3">
                      <ShieldCheck
                        size={22}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-turquoise"
                      />

                      <div>
                        <h3 className="font-serif-title text-lg text-darkteal">
                          Quote first. Payment later.
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-stone">
                          Submitting a future live request will not
                          create a paid order. The quotation is
                          reviewed first, and payment comes only
                          after acceptance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 border-t border-sandline pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-testid="custom-submit"
                      className="btn-primary group w-full disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
                    >
                      {isSubmitting
                        ? "Preparing preview…"
                        : "Preview Request"}

                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                    <span className="text-xs text-stone">
                      Preview only — no request is sent yet
                    </span>
                  </div>
                </form>
              </>
            )}
          </section>

          <aside className="lg:col-span-4 lg:self-stretch">
            <div className="studio-sticky">
              <section
                className="border border-sandline bg-paper p-6"
                aria-label="Your request summary"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="eyebrow text-gold">Your request</p>

                  <p className="font-serif-title text-sm italic text-turquoise">
                    Just created for you!
                  </p>
                </div>

                <dl className="mt-4 divide-y divide-sandline border-y border-sandline text-sm">
                  {summaryRows.map(([term, value]) => (
                    <div
                      key={term}
                      className="flex items-start justify-between gap-4 py-2.5"
                    >
                      <dt className="shrink-0 text-stone">{term}</dt>

                      <dd className="text-right font-semibold">
                        {value}
                      </dd>
                    </div>
                  ))}

                  <div className="flex items-start justify-between gap-4 py-2.5">
                    <dt className="text-stone">Pricing</dt>

                    <dd className="font-semibold text-turquoise">
                      Personal quote
                    </dd>
                  </div>
                </dl>
              </section>
            </div>
          </aside>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section className="border border-sandline bg-white p-6">
            <p className="eyebrow text-gold">CRAM approach</p>

            <h2 className="mt-3 font-serif-title text-2xl">
              Personal before transactional.
            </h2>

            <p className="mt-3 text-sm leading-7 text-stone">
              Custom requests can vary in size, details and
              personalisation. The form gathers the information
              needed before a final price is confirmed.
            </p>
          </section>

          <section className="on-dark bg-darkteal p-6 text-ivory">
            <Sparkles
              size={22}
              aria-hidden="true"
              className="text-gold"
            />

            <h2 className="mt-4 font-serif-title text-2xl">
              Have an unusual idea?
            </h2>

            <p className="mt-3 text-sm leading-7 text-ivory/75">
              Choose “Something Custom” and describe what you
              have in mind. The details can then be reviewed
              before a quotation is prepared.
            </p>
          </section>
        </div>

        <section className="mx-auto mt-20 max-w-3xl md:mt-28">
          <Reveal className="text-center">
            <p className="eyebrow text-turquoise">
              Before you submit
            </p>

            <h2 className="mt-3 font-serif-title text-[clamp(1.9rem,1.4rem+2vw,2.75rem)] leading-[1.08] tracking-[-0.01em]">
              Frequently asked questions
            </h2>
          </Reveal>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <article
                  key={faq.question}
                  className={`overflow-hidden border bg-white transition-colors duration-300 ${
                    isOpen ? "border-turquoise/40" : "border-sandline"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      data-testid={`faq-${index}`}
                      className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-serif-title text-lg transition-colors duration-300 hover:bg-paper"
                    >
                      {faq.question}

                      <ChevronDown
                        size={19}
                        aria-hidden="true"
                        className={`shrink-0 text-turquoise transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    className="disclosure"
                    data-open={isOpen}
                  >
                    <div inert={!isOpen}>
                      <p className="border-t border-parchment px-5 py-4 text-sm leading-7 text-stone">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

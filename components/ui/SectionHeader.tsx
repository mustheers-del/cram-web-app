type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={
        centered
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      <p className="cram-label text-[var(--cram-turquoise)]">{eyebrow}</p>

      <h2 className="mt-5 cram-editorial text-[2.8rem] leading-[0.95] md:text-[4.4rem]">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-base leading-8 text-[var(--cram-stone)] ${
            centered ? "mx-auto max-w-2xl" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* Animated confirmation mark. The ring and tick draw themselves in once. */
export default function SuccessMark({ size = 72 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="text-turquoise"
    >
      <circle
        cx="32"
        cy="32"
        r="27"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="draw-circle"
        transform="rotate(-90 32 32)"
      />
      <path
        d="M21 33.5 28.5 41 43.5 25"
        stroke="#D9A23B"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="draw-check"
      />
    </svg>
  );
}
